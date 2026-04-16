import React, { useEffect, useState, useRef } from "react";
import {
  FileText,
  Search,
  HelpCircle,
  Send,
  ShieldAlert,
  Lock,
  Menu,
  X,
  Info,
  CheckCircle2,
} from "lucide-react";

// Logo em /public
const ventureLogo = import.meta.env.BASE_URL + "logo-venture.png";

import {
  ensureAnonAuth,
  uploadFile,
  createOrReplaceReport,
  getReportByProtocol,
  subscribeReports,
  updateReport,
  addAdminNote,
} from "./firebase";

/* ==================== Config & Consts ==================== */
const POLICY_VERSION = "1.0";
const POLICY_UPDATED = "09/10/2025";
const CONSENT_KEY = "consent_ok";
const ADMIN_PASS = "Venture@4266";

/* ==================== Helpers async robustos ==================== */
function withTimeout(promise, ms, label = "operação") {
  return Promise.race([
    promise,
    new Promise((_, rej) =>
      setTimeout(() => rej(new Error(`Timeout ao tentar ${label} (${ms}ms)`)), ms)
    ),
  ]);
}

// Faz upload sequencial com timeout por arquivo e retorna [{name,size,type,url,path}]
async function uploadAllFiles(protocolo, files, putFn, perFileTimeoutMs = 25000) {
  const uploaded = [];
  for (const f of files) {
    const safeName = `${Date.now()}-${f.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const path = `reports/${protocolo}/${safeName}`;
    const url = await withTimeout(putFn(path, f), perFileTimeoutMs, `enviar ${f.name}`);
    uploaded.push({ name: f.name, size: f.size, type: f.type, url, path });
  }
  return uploaded;
}

/* ==================== Helpers visuais ==================== */
const Field = ({ label, required, hint, children }) => (
  <label
    className="grid gap-1"
    style={{ gridTemplateRows: "minmax(20px,auto) minmax(16px,auto) auto" }}
  >
    <span className="text-sm font-medium leading-5">
      {label} {required && <span className="text-rose-600">*</span>}
    </span>
    <div className={`text-xs leading-4 ${hint ? "text-slate-500" : "opacity-0"}`}>
      {hint || "\u00A0"}
    </div>
    {children}
  </label>
);

const SelectBase = ({ className = "", children, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={
        "w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] " +
        "appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600 " +
        className
      }
    >
      {children}
    </select>
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
    </svg>
  </div>
);

const inputClass =
  "w-full h-12 rounded-lg border px-3 py-0 text-[15px] leading-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-600";

const btnPrimary =
  "w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed";
const btnOutline =
  "w-full md:w-auto px-4 py-3 rounded-lg border hover:bg-slate-50";

const Card = ({ className, children }) => (
  <div className={`rounded-xl border p-5 md:p-6 bg-white shadow ${className || ""}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="space-y-1">
    <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold">
      <Icon className="h-5 w-5 text-emerald-600" />
      {title}
    </h2>
    <p className="text-sm text-slate-500">{subtitle}</p>
  </div>
);

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-lg font-bold">{value}</div>
    <div className="text-xs text-slate-500">{label}</div>
  </div>
);

/* ==================== NAV ==================== */
const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  return (
    <nav className="mb-4 md:mb-6">
      <div className="flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2">
          <img src={ventureLogo} alt="Venture" className="h-7 w-auto object-contain" />
          <span className="text-base font-semibold tracking-tight">Venture</span>
        </a>
        <div className="hidden md:flex gap-4">
          <a href="#/" className="text-sm text-emerald-700 hover:underline">Home</a>
          <a href="#/status" className="text-sm text-emerald-700 hover:underline">Acompanhar</a>
          <a href="#/faq" className="text-sm text-emerald-700 hover:underline">FAQ</a>
          <a href="#/termos" className="text-sm text-emerald-700 hover:underline">Política de Uso</a>
          <a href="#/admin" className="text-sm text-emerald-700 hover:underline">Admin</a>
        </div>
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="mt-3 grid gap-2 md:hidden">
          <a href="#/" className="px-3 py-2 rounded-lg border">Home</a>
          <a href="#/status" className="px-3 py-2 rounded-lg border">Acompanhar</a>
          <a href="#/faq" className="px-3 py-2 rounded-lg border">FAQ</a>
          <a href="#/termos" className="px-3 py-2 rounded-lg border">Política de Uso</a>
          <a href="#/admin" className="px-3 py-2 rounded-lg border">Admin</a>
        </div>
      )}
    </nav>
  );
};

/* ==================== Dados & Utils ==================== */
const UNIDADES = ["AGG", "SEC", "ECL", "CLP", "TAP", "CGG", "EXJ", "KIZ", "SEB", "DAP"];

const CATEGORIAS = {
  "Fraude": [
    "Fraude",
    "Roubo",
    "Furto",
    "Gastos irregulares"
  ],
  "Adulteração": [
    "Adulteração de informação",
    "Adulteração de documentos"
  ],
  "Assédio": [
    "Assédio moral",
    "Assédio sexual",
    "Discriminação",
    "Maus tratos"
  ],
  "Mau desempenho": [
    "Mau comportamento",
    "Abuso de poder",
    "Favoritismo"
  ],
  "Corrupção": [
    "Corrupção",
    "Acordos irregulares"
  ],
  "Mau uso de bens": [
    "Descuido de bens",
    "Uso indevido de recursos"
  ],
  "Roubo de informação": [
    "Roubo de informação interna",
    "Vazamento de dados"
  ],
  "Melhoria de processos": [
    "Melhoria de processos"
  ],
  "Relato livre": [
    "Outro"
  ]
};

const CATEGORIA_DESCRICOES = {
  "Fraude": "Fraude, Roubo, Furto e Gastos irregulares",
  "Adulteração": "Adulteração de informação e documentos",
  "Assédio": "Assédio, discriminação e maus tratos",
  "Mau desempenho": "Mau comportamento, Abuso de Poder e Favoritismo",
  "Corrupção": "Corrupção e Acordos Irregulares",
  "Mau uso de bens": "Descuido de bens e serviços",
  "Roubo de informação": "Roubo de informação interna",
  "Melhoria de processos": "Melhoria de Processos",
  "Relato livre": "Descreva os fatos de forma detalhada"
};

const genProtocolo = () => Math.random().toString(36).substring(2, 10).toUpperCase();
const AvisosSeguranca = () => (
  <div className="text-xs text-slate-500">
    ⚠️ Protótipo: dados operacionais na nuvem (Firestore/Storage). Ajuste regras antes de produção.
  </div>
);

const CategoriaCard = ({ titulo, descricao, ativo, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left rounded-xl border p-5 min-h-[160px] transition shadow-sm hover:shadow ${
      ativo
        ? "bg-emerald-600 text-white border-emerald-700"
        : "bg-white text-slate-800 hover:border-emerald-300"
    }`}
  >
    <div className="font-bold text-lg mb-4">{titulo}</div>
    <div className={`text-sm leading-7 ${ativo ? "text-white/95" : "text-slate-600"}`}>
      {descricao}
    </div>
  </button>
);

/* ==================== HOME ==================== */
function Home() {
  const nextHref = sessionStorage.getItem(CONSENT_KEY) === "1" ? "#/report" : "#/termos";
  return (
    <section id="home" className="space-y-4 md:space-y-6">
      <SectionTitle
        icon={ShieldAlert}
        title="Bem-vindo à Linha Ética"
        subtitle="Canal independente para denúncias de má conduta, riscos e violações."
      />
      <div className="grid md:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><FileText /></div>
            <div>
              <h3 className="font-semibold">Registrar denúncia</h3>
              <p className="text-sm text-slate-600">Envie uma denúncia anônima ou identificada. Gere um protocolo para acompanhar.</p>
              <a href={nextHref} className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">
                Iniciar <Send size={14} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><Search /></div>
            <div>
              <h3 className="font-semibold">Acompanhar status</h3>
              <p className="text-sm text-slate-600">Use seu protocolo para ver andamento e interagir com o time responsável.</p>
              <a href="#/status" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">
                Acompanhar <Search size={14} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><HelpCircle /></div>
            <div>
              <h3 className="font-semibold">FAQ / Política</h3>
              <p className="text-sm text-slate-600">Entenda como protegemos sua identidade e tratamos seus dados (LGPD).</p>
              <a href="#/faq" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">
                Ver perguntas <HelpCircle size={14} />
              </a>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Unidades" value="10" />
          <Stat label="Tempo médio de abertura" value="2 min" />
          <Stat label="Protocolo gerado" value="Automático" />
          <Stat label="Custo" value="Hospedagem estática" />
        </div>
      </Card>
      <div className="text-xs text-slate-500">
        Área restrita: <a href="#/admin" className="underline inline-flex items-center gap-1">Painel <Lock size={12} /></a>
      </div>
    </section>
  );
}

/* ==================== POLÍTICA DE USO ==================== */
function Termos() {
  const [agree, setAgree] = useState(false);

  const continuar = () => {
    if (!agree) return;
    sessionStorage.setItem(CONSENT_KEY, "1");
    window.location.hash = "#/report";
  };

  return (
    <section className="space-y-4 md:space-y-6">
      <SectionTitle
        icon={Info}
        title="Política de Uso da Linha Ética"
        subtitle={`Versão ${POLICY_VERSION} • Atualizado em ${POLICY_UPDATED}`}
      />
      <Card className="space-y-4">
        <div className="text-sm text-slate-700 space-y-3 max-h-[55vh] overflow-auto pr-1">
          <p><strong>Objetivo.</strong> Canal para que colaboradores e terceiros relatem, de boa-fé, suspeitas de irregularidades ou violações.</p>
          <p><strong>Anonimato.</strong> Você pode denunciar de forma anônima ou identificada.</p>
          <p><strong>LGPD.</strong> Tratamento apenas do necessário, com base legal adequada e acesso restrito aos autorizados.</p>
          <p><strong>Escopo do protótipo.</strong> Denúncias salvas no Firestore; anexos no Storage.</p>
          <p><strong>Concordância.</strong> Ao prosseguir, você declara que leu e concorda com esta Política.</p>
        </div>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="text-sm">Li e concordo com os termos e a Política de Uso.</span>
        </label>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            className={agree ? btnPrimary : `${btnPrimary} cursor-not-allowed`}
            disabled={!agree}
            onClick={continuar}
          >
            <span className="inline-flex items-center gap-2">
              Concordo e continuar <CheckCircle2 size={16} />
            </span>
          </button>
          <a href="#/" className={btnOutline}>Cancelar e voltar</a>
        </div>
      </Card>

      <AvisosSeguranca />
    </section>
  );
}

/* ==================== REPORT ==================== */
function Report() {
  const [step, setStep] = useState(1);

  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");

  const [denunciado, setDenunciado] = useState({
    nome: "",
    cargo: "",
    sexo: "",
  });

  const [dataUnica, setDataUnica] = useState("");
  const [periodicidade, setPeriodicidade] = useState("único");
  const [plantao, setPlantao] = useState("");

  const [onde, setOnde] = useState("");
  const [descricao, setDescricao] = useState("");

  const [valorFinanceiro, setValorFinanceiro] = useState("");
  const [foiReportado, setFoiReportado] = useState("nao");
  const [paraQuem, setParaQuem] = useState("");

  const [files, setFiles] = useState([]);

  const [anonimo, setAnonimo] = useState(true);
  const [contato, setContato] = useState({ nome: "", email: "", telefone: "" });
  const [prefer, setPrefer] = useState("email");

  const [emailAcompanhamento, setEmailAcompanhamento] = useState("");
  const [successData, setSuccessData] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  /* ==================== VALIDAÇÕES ==================== */

  const canNext1 = !!unidade && !!categoria && !!subcategoria;
  const canNext2 =
    descricao.trim().length >= 100 && !!onde && !!dataUnica;

  const canSubmit = canNext1 && canNext2;

  /* ==================== HELPERS ==================== */

  const copyProtocol = async () => {
    await navigator.clipboard.writeText(successData.protocolo);
    alert("Protocolo copiado.");
  };

  const openMailTo = () => {
    const subject = encodeURIComponent("Protocolo da denúncia - Venture");
    const body = encodeURIComponent(
      `Protocolo: ${successData.protocolo}\n\nGuarde este número.`
    );
    window.location.href = `mailto:${successData.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setStep(1);
    setCategoria("");
    setSubcategoria("");
    setDenunciado({ nome: "", cargo: "", sexo: "" });
    setDescricao("");
    setOnde("");
    setFiles([]);
    setSuccessData(null);
  };

  /* ==================== SUBMIT ==================== */

  const onSubmit = async () => {
    if (!canSubmit) return;

    setSubmitting(true);

    try {
      await ensureAnonAuth();

      const protocolo = genProtocolo();

      let anexosSubidos = [];

      if (files.length) {
        anexosSubidos = await uploadAllFiles(protocolo, files, uploadFile);
      }

      const data = {
        protocolo,
        unidade,
        categoria,
        subcategoria,
        denunciado,
        perguntas: {
          periodo: { data: dataUnica },
          periodicidade,
          plantao,
          onde,
          valorFinanceiro,
          foiReportado,
          paraQuem,
        },
        descricao,
        anonimo,
        contato: anonimo ? null : contato,
        emailAcompanhamento: emailAcompanhamento || null,
        anexos: anexosSubidos,
        status: "Recebido",
        createdAt: new Date().toISOString(),
      };

      await createOrReplaceReport(protocolo, data);

      setSuccessData({
        protocolo,
        email: emailAcompanhamento,
      });
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar denúncia.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ==================== TELA FINAL ==================== */

  if (successData) {
    return (
      <Card className="space-y-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />

        <h2 className="text-xl font-bold">Denúncia registrada</h2>

        <div className="bg-slate-100 p-4 rounded-lg">
          <div className="text-xs">PROTOCOLO</div>
          <div className="text-2xl font-mono font-bold text-emerald-700">
            {successData.protocolo}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={copyProtocol} className={btnPrimary}>
            Copiar protocolo
          </button>

          {successData.email && (
            <button onClick={openMailTo} className={btnOutline}>
              Enviar para e-mail
            </button>
          )}

          <button onClick={resetForm} className={btnOutline}>
            Nova denúncia
          </button>
        </div>
      </Card>
    );
  }

  /* ==================== FORM ==================== */

  return (
    <Card className="space-y-4">
      {step === 1 && (
        <>
          <Field label="Unidade">
            <SelectBase value={unidade} onChange={(e) => setUnidade(e.target.value)}>
              {UNIDADES.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </SelectBase>
          </Field>

          <Field label="Categoria">
            <SelectBase value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Conduta">Conduta</option>
              <option value="Fraude">Fraude</option>
              <option value="Segurança">Segurança</option>
            </SelectBase>
          </Field>

          <Field label="Subcategoria">
            <input
              className={inputClass}
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
            />
          </Field>

          <Field label="Nome do denunciado">
            <input
              className={inputClass}
              value={denunciado.nome}
              onChange={(e) =>
                setDenunciado({ ...denunciado, nome: e.target.value })
              }
            />
          </Field>

          <button onClick={() => setStep(2)} className={btnPrimary}>
            Próxima
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <Field label="Data">
            <input
              type="date"
              className={inputClass}
              value={dataUnica}
              onChange={(e) => setDataUnica(e.target.value)}
            />
          </Field>

          <Field label="Plantão">
            <SelectBase value={plantao} onChange={(e) => setPlantao(e.target.value)}>
              <option>Diurno</option>
              <option>Noturno</option>
              <option>Madrugada</option>
            </SelectBase>
          </Field>

          <Field label="Onde">
            <input
              className={inputClass}
              value={onde}
              onChange={(e) => setOnde(e.target.value)}
            />
          </Field>

          <Field label="Descrição">
            <textarea
              className="w-full border p-2 rounded"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Field>

          <button onClick={() => setStep(3)} className={btnPrimary}>
            Próxima
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <Field label="Anexos">
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files))}
            />
          </Field>

          <Field label="E-mail (opcional)">
            <input
              type="email"
              className={inputClass}
              value={emailAcompanhamento}
              onChange={(e) => setEmailAcompanhamento(e.target.value)}
            />
          </Field>

          <button onClick={onSubmit} className={btnPrimary}>
            Enviar denúncia
          </button>
        </>
      )}
    </Card>
  );
}

/* ==================== STATUS ==================== */
function Status() {
  const [proto, setProto] = useState("");

  const onCheck = async () => {
    if (!proto.trim()) return;
    const res = await getReportByProtocol(proto.trim());
    if (!res) {
      alert("Protocolo não encontrado.");
      return;
    }
    const status = res.status || "-";
    const ult = (res.notes || []).slice(-1)[0];
    alert(
      `Status: ${status}` +
        (ult ? `\nÚltima atualização: ${ult.text || ""}` : "")
    );
  };

  return (
    <section className="space-y-4 md:space-y-6">
      <Card className="space-y-3 md:space-y-4">
        <h3 className="text-lg font-semibold">Acompanhar denúncia</h3>
        <Field label="Protocolo" hint="Digite o código recebido ao enviar a denúncia">
          <input className={inputClass} value={proto} onChange={(e) => setProto(e.target.value)} />
        </Field>
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <button onClick={onCheck} className={btnPrimary}>Consultar</button>
          <a href="#/" className={btnOutline}>Voltar para Home</a>
        </div>
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

/* ==================== FAQ ==================== */
function FAQ() {
  return (
    <section className="space-y-4 md:space-y-6">
      <SectionTitle icon={HelpCircle} title="FAQ / Política" subtitle="Como lidamos com seus dados e sua identidade." />
      <Card className="space-y-3 md:space-y-4">
        <div>
          <div className="font-semibold">Posso denunciar de forma anônima?</div>
          <div className="text-sm text-slate-600">Sim. Você pode optar pelo anonimato. Seus dados não serão coletados, e o protocolo permite acompanhar sem se identificar.</div>
        </div>
        <div>
          <div className="font-semibold">Quem terá acesso às informações?</div>
          <div className="text-sm text-slate-600">Apenas o time responsável pela apuração. Informações são tratadas com confidencialidade e de acordo com a LGPD.</div>
        </div>
        <div>
          <div className="font-semibold">Que tipos de casos posso reportar?</div>
          <div className="text-sm text-slate-600">Assédio, fraude, conflito de interesses, e quaisquer violações de políticas internas ou leis.</div>
        </div>
        <div>
          <div className="font-semibold">Como acompanho o status?</div>
          <div className="text-sm text-slate-600">Use o protocolo gerado ao final do envio, na página “Acompanhar”.</div>
        </div>
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

/* ==================== ADMIN (com Firestore + filtros + export + dashboard) ==================== */
function AdminPanel() {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [lista, setLista] = useState([]);
  const [sel, setSel] = useState(null);

  const [selected, setSelected] = useState(new Set());
  const allSelected = selected.size > 0 && selected.size === lista.length;
  const anySelected = selected.size > 0;

  const [newCount, setNewCount] = useState(0);
  const [newIds, setNewIds] = useState(new Set());
  const [initialLoaded, setInitialLoaded] = useState(false);

  const detailRef = useRef(null);

  const tsToMs = (ts) => {
    if (!ts) return 0;
    try {
      if (ts?.toDate) ts = ts.toDate();
      if (typeof ts === "string" || typeof ts === "number") ts = new Date(ts);
      return ts.getTime?.() || 0;
    } catch {
      return 0;
    }
  };

  const playNotificationSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.35);
    } catch (e) {
      console.warn("Não foi possível tocar som de notificação:", e);
    }
  };

  useEffect(() => {
    const unsub = subscribeReports((arr) => {
      const sorted = [...arr].sort((a, b) => {
        const aMs = tsToMs(a.createdAt) || tsToMs(a.updatedAt);
        const bMs = tsToMs(b.createdAt) || tsToMs(b.updatedAt);
        return bMs - aMs;
      });

      setLista((prevLista) => {
        if (!initialLoaded) {
          setInitialLoaded(true);
          return sorted;
        }

        const prevIds = new Set(prevLista.map((x) => x.id));
        const incomingNewIds = sorted
          .filter((x) => !prevIds.has(x.id))
          .map((x) => x.id);

        if (incomingNewIds.length > 0) {
          setNewIds((prev) => new Set([...prev, ...incomingNewIds]));
          setNewCount((prev) => prev + incomingNewIds.length);
          playNotificationSound();
        }

        return sorted;
      });

      setSelected((prev) => new Set([...prev].filter((id) => sorted.find((x) => x.id === id))));
    });

    return () => unsub && unsub();
  }, [initialLoaded]);

  useEffect(() => {
    if (sel && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [sel]);

  const clearNewAlerts = () => {
    setNewCount(0);
    setNewIds(new Set());
  };

  const openDetail = (c) => {
    setSel(c);
    setNewIds((prev) => {
      const next = new Set(prev);
      next.delete(c.id);
      return next;
    });
  };

  const filtroTexto = (c) => {
    if (!q.trim()) return true;
    const s = q.toLowerCase();
    return (
      c.id?.toLowerCase().includes(s) ||
      c.protocolo?.toLowerCase?.().includes(s) ||
      c.unidade?.toLowerCase?.().includes(s) ||
      c.categoria?.toLowerCase?.().includes(s) ||
      c.subcategoria?.toLowerCase?.().includes(s) ||
      c.perguntas?.onde?.toLowerCase?.().includes(s) ||
      c.descricao?.toLowerCase?.().includes(s)
    );
  };

  const filtroStatus = (c) => {
    if (statusFilter === "todos") return true;
    const st = (c.status || "").toLowerCase();
    return st === statusFilter.toLowerCase();
  };

  const filtered = lista.filter((c) => filtroTexto(c) && filtroStatus(c));

  const [novoStatus, setNovoStatus] = useState("Recebido");
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    if (sel) {
      setNovoStatus(sel.status || "Recebido");
      setResposta("");
    }
  }, [sel]);

  const salvarStatus = async () => {
    if (!sel) return;
    await updateReport(sel.id, { status: novoStatus, updatedAt: new Date().toISOString() });
    alert("Status atualizado.");
  };

  const enviarResposta = async () => {
    if (!sel || !resposta.trim()) return;
    await addAdminNote(sel.id, {
      at: new Date().toISOString(),
      text: resposta.trim(),
      by: "Admin",
    });
    setResposta("");
    alert("Resposta adicionada ao histórico.");
  };

  async function handleOpenAttachment(f) {
    try {
      let url = (f && typeof f.url === "string" ? f.url : "") || "";
      const isHttp = /^https?:\/\//i.test(url);

      if (!isHttp) {
        if (f?.path) {
          const { getDownloadUrlByPath } = await import("./firebase");
          url = await getDownloadUrlByPath(f.path);
        } else {
          alert("Não foi possível localizar o arquivo (sem URL ou path).");
          return;
        }
      }
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Erro ao abrir anexo:", err);
      alert("Não foi possível abrir o anexo. Verifique as regras do Storage e tente novamente.");
    }
  }

  const toggleOne = (id) => {
    setSelected((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };

  const toggleAll = () => {
    if (allSelected) setSelected(new Set());
    else setSelected(new Set(lista.map((x) => x.id)));
  };

  const onDeleteSelected = async () => {
    if (!anySelected) return;
    if (!confirm(`Tem certeza que deseja excluir ${selected.size} denúncia(s)? Essa ação não pode ser desfeita.`)) return;
    const ids = [...selected];
    const { deleteReports } = await import("./firebase");
    await deleteReports(ids);
    setSelected(new Set());
    setSel(null);
    alert("Denúncia(s) excluída(s).");
  };

  const onDeleteOne = async (id) => {
    if (!confirm("Excluir esta denúncia? Essa ação não pode ser desfeita.")) return;
    const { deleteReport } = await import("./firebase");
    await deleteReport(id);
    setSel(null);
    setSelected((prev) => {
      const s = new Set(prev);
      s.delete(id);
      return s;
    });
    alert("Denúncia excluída.");
  };

  const fmtDate = (ts) => {
    if (!ts) return "-";
    try {
      if (ts?.toDate) ts = ts.toDate();
      if (typeof ts === "string") ts = new Date(ts);
      const d = ts;
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch {
      return "-";
    }
  };

  const countBy = (arr, keyFn) =>
    arr.reduce((acc, x) => {
      const k = keyFn(x) || "-";
      acc[k] = (acc[k] || 0) + 1;
      return acc;
    }, {});

  const total = filtered.length;
  const porStatus = countBy(filtered, (x) => (x.status || "Sem status"));
  const porCategoria = countBy(filtered, (x) => x.categoria);
  const porUnidade = countBy(filtered, (x) => x.unidade);
  const porPlantao = countBy(filtered, (x) => x.perguntas?.plantao);

  const maxVal = Math.max(
    1,
    ...Object.values(porStatus),
    ...Object.values(porCategoria),
    ...Object.values(porUnidade),
    ...Object.values(porPlantao)
  );

  const BarList = ({ title, data }) => (
    <div className="rounded-xl border p-4 bg-white shadow space-y-2">
      <div className="font-medium">{title}</div>
      <div className="space-y-2">
        {Object.entries(data).sort((a,b)=>b[1]-a[1]).map(([k, v]) => (
          <div key={k}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-600">{k}</span>
              <span className="text-slate-500">{v}</span>
            </div>
            <div className="h-2 bg-slate-100 rounded">
              <div
                className="h-2 bg-emerald-600 rounded"
                style={{ width: `${(v / maxVal) * 100}%` }}
              />
            </div>
          </div>
        ))}
        {Object.keys(data).length === 0 && (
          <div className="text-xs text-slate-500">Sem dados no filtro atual.</div>
        )}
      </div>
    </div>
  );

  function toCSV(rows) {
    const header = [
      "protocolo",
      "createdAt",
      "updatedAt",
      "unidade",
      "categoria",
      "subcategoria",
      "denunciado.nome",
      "denunciado.cargo",
      "denunciado.sexo",
      "onde",
      "quando",
      "plantao",
      "periodicidade",
      "impactoFinanceiro",
      "reportado",
      "paraQuem",
      "anonimo",
      "contato.nome",
      "contato.email",
      "contato.telefone",
      "contato.prefer",
      "status",
      "descricao",
      "anexos(qtd)"
    ];
    const esc = (v) => {
      if (v === null || v === undefined) return "";
      const s = String(v).replace(/"/g, '""');
      return `"${s}"`;
    };
    const lines = [header.join(",")];

    rows.forEach((c) => {
      const line = [
        c.id || "",
        fmtDate(c.createdAt),
        fmtDate(c.updatedAt),
        c.unidade || "",
        c.categoria || "",
        c.subcategoria || "",
        c.denunciado?.nome || "",
        c.denunciado?.cargo || "",
        c.denunciado?.sexo || "",
        c.perguntas?.onde || "",
        c.perguntas?.periodo?.data || "",
        c.perguntas?.plantao || "",
        c.perguntas?.periodicidade || "",
        c.perguntas?.valorFinanceiro || "",
        c.perguntas?.foiReportado || "",
        c.perguntas?.paraQuem || "",
        c.anonimo ? "Sim" : "Não",
        c.contato?.nome || "",
        c.contato?.email || "",
        c.contato?.telefone || "",
        c.contato?.prefer || "",
        c.status || "",
        c.descricao || "",
        Array.isArray(c.anexos) ? c.anexos.length : 0,
      ].map(esc);
      lines.push(line.join(","));
    });
    return lines.join("\r\n");
  }

  function downloadFile(name, mime, content) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  const exportCSVFiltered = () => {
    const csv = toCSV(filtered);
    downloadFile(`denuncias_filtrado_${Date.now()}.csv`, "text/csv;charset=utf-8;", csv);
  };

  const exportCSVSelected = () => {
    if (!anySelected) {
      alert("Selecione pelo menos uma denúncia para exportar.");
      return;
    }
    const rows = filtered.filter((c) => selected.has(c.id));
    const csv = toCSV(rows);
    downloadFile(`denuncias_selecionadas_${Date.now()}.csv`, "text/csv;charset=utf-8;", csv);
  };

  const exportPDFFiltered = () => {
    const rows = filtered;
    const htmlRows = rows
      .map(
        (c) => `
        <tr>
          <td>${c.id || ""}</td>
          <td>${fmtDate(c.createdAt)}</td>
          <td>${c.unidade || ""}</td>
          <td>${c.categoria || ""}</td>
          <td>${c.subcategoria || ""}</td>
          <td>${(c.perguntas?.onde || "").replace(/</g,"&lt;")}</td>
          <td>${c.status || ""}</td>
        </tr>`
      )
      .join("");

    const win = window.open("", "_blank");
    win.document.write(`
      <html>
      <head>
        <meta charset="utf-8" />
        <title>Denúncias (filtrado)</title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding:16px; }
          h1 { font-size: 18px; margin: 0 0 12px; }
          table { width:100%; border-collapse: collapse; font-size:12px; }
          th, td { border:1px solid #ddd; padding:6px 8px; text-align:left; }
          th { background:#f5f7fa; }
        </style>
      </head>
      <body>
        <h1>Denúncias — filtrado (${rows.length})</h1>
        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Data</th>
              <th>Unidade</th>
              <th>Categoria</th>
              <th>Detalhamento</th>
              <th>Onde</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${htmlRows}</tbody>
        </table>
        <script>window.print();</script>
      </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <section className="space-y-4 md:space-y-6">
      <Card className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h3 className="text-lg font-semibold">Painel (Firestore)</h3>
          <div className="text-xs text-slate-500">
            Registros em tempo real • Ordenado por data (recente → antigo)
          </div>
        </div>

        {newCount > 0 && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="text-sm font-medium text-emerald-800">
              🔔 {newCount} nova(s) denúncia(s) recebida(s) nesta sessão
            </div>
            <button
              type="button"
              onClick={clearNewAlerts}
              className="px-3 py-2 rounded-lg border border-emerald-400 text-emerald-800 hover:bg-emerald-100"
            >
              Marcar como visualizadas
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-12 gap-2">
          <div className="md:col-span-5">
            <input
              className="w-full h-12 rounded-lg border px-3 py-0 text-[15px] leading-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="Buscar por protocolo, unidade, categoria, descrição…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="md:col-span-3">
            <div className="relative">
              <select
                className="w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                title="Filtrar por status"
              >
                <option value="todos">Todos os status</option>
                <option value="Recebido">Recebido</option>
                <option value="Em análise">Em análise</option>
                <option value="Em contato">Em contato</option>
                <option value="Concluído">Concluído</option>
              </select>
              <svg aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-2">
            <a href="#/" className="px-4 py-3 rounded-lg border hover:bg-slate-50">Home</a>
            <button
              className={`px-4 py-3 rounded-lg border hover:bg-slate-50 ${anySelected ? "" : "opacity-50 cursor-not-allowed"}`}
              disabled={!anySelected}
              onClick={onDeleteSelected}
              title="Excluir selecionados"
            >
              Excluir selecionados
            </button>
            <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={exportCSVFiltered}>
              Exportar CSV (filtro)
            </button>
            <button
              className={`px-4 py-3 rounded-lg border hover:bg-slate-50 ${anySelected ? "" : "opacity-50 cursor-not-allowed"}`}
              disabled={!anySelected}
              onClick={exportCSVSelected}
            >
              CSV (selecionados)
            </button>
            <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={exportPDFFiltered}>
              PDF (imprimir)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">Total (filtro atual)</div>
            <div className="text-2xl font-bold">{total}</div>
          </div>
          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">Com anexos</div>
            <div className="text-2xl font-bold">
              {filtered.filter((x) => (Array.isArray(x.anexos) ? x.anexos.length > 0 : false)).length}
            </div>
          </div>
          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">Identificadas</div>
            <div className="text-2xl font-bold">
              {filtered.filter((x) => !x.anonimo).length}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-3">
          <BarList title="Por status" data={porStatus} />
          <BarList title="Por categoria" data={porCategoria} />
          <BarList title="Por unidade" data={porUnidade} />
          <BarList title="Por plantão" data={porPlantao} />
        </div>

        {sel && (
          <div ref={detailRef} className="rounded-lg border p-3 bg-slate-50 overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">Protocolo</div>
                <div className="font-mono font-semibold">{sel.id}</div>
                <div className="text-xs text-slate-500 mt-1">
                  Criado em: {fmtDate(sel.createdAt)} {sel.updatedAt ? `• Atualizado: ${fmtDate(sel.updatedAt)}` : ""}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => setSel(null)}>
                  fechar
                </button>
                <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => onDeleteOne(sel.id)}>
                  excluir
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mt-2">
              <div>
                <div className="text-xs text-slate-500">Unidade</div>
                <div>{sel.unidade}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Categoria</div>
                <div>{sel.categoria}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Detalhamento</div>
                <div>{sel.subcategoria || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Onde</div>
                <div>{sel.perguntas?.onde || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Quando</div>
                <div>{sel.perguntas?.periodo?.data || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Plantão</div>
                <div>{sel.perguntas?.plantao || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Recorrência</div>
                <div>{sel.perguntas?.periodicidade || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Impacto financeiro</div>
                <div>{sel.perguntas?.valorFinanceiro || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Reportado internamente</div>
                <div>
                  {sel.perguntas?.foiReportado === "sim"
                    ? `Sim (${sel.perguntas?.paraQuem || "—"})`
                    : "Não"}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Anonimato</div>
                <div>{sel.anonimo ? "Sim" : "Não"}</div>
              </div>

              {(sel.denunciado?.nome || sel.denunciado?.cargo || sel.denunciado?.sexo) && (
                <div className="md:col-span-2">
                  <div className="text-xs text-slate-500">Dados do denunciado</div>
                  <div className="text-sm">
                    {sel.denunciado?.nome ? <div><strong>Nome:</strong> {sel.denunciado.nome}</div> : null}
                    {sel.denunciado?.cargo ? <div><strong>Cargo:</strong> {sel.denunciado.cargo}</div> : null}
                    {sel.denunciado?.sexo ? <div><strong>Sexo:</strong> {sel.denunciado.sexo}</div> : null}
                  </div>
                </div>
              )}

              {!sel.anonimo && sel.contato && (
                <div className="md:col-span-2">
                  <div className="text-xs text-slate-500">Contato do denunciante</div>
                  <div className="text-sm">
                    {sel.contato.nome ? <div><strong>Nome:</strong> {sel.contato.nome}</div> : null}
                    {sel.contato.email ? <div><strong>Email:</strong> {sel.contato.email}</div> : null}
                    {sel.contato.telefone ? <div><strong>Telefone:</strong> {sel.contato.telefone}</div> : null}
                    {sel.contato.prefer ? <div><strong>Preferência:</strong> {sel.contato.prefer}</div> : null}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3">
              <div className="text-xs text-slate-500">Descrição</div>
              <div
                className="whitespace-pre-wrap max-w-full"
                style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              >
                {sel.descricao}
              </div>
            </div>

            {Array.isArray(sel.anexos) && (
              <div className="mt-3">
                <div className="text-xs text-slate-500">Anexos</div>
                {sel.anexos.length === 0 ? (
                  <div>-</div>
                ) : (
                  <ul className="list-disc pl-5">
                    {sel.anexos.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenAttachment(f)}
                          className="text-emerald-700 underline hover:no-underline"
                          title="Abrir anexo"
                        >
                          {f.name || "Arquivo"}
                        </button>
                        <span className="text-xs text-slate-500">
                          {typeof f.size === "number" ? `(${Math.round(f.size / 1024)} KB)` : ""}
                          {f.type ? ` — ${f.type}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="rounded-xl border p-5 md:p-6 bg-white shadow space-y-2">
                <div className="font-medium">Alterar status</div>
                <div className="relative">
                  <select
                    className="w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    value={novoStatus}
                    onChange={(e) => setNovoStatus(e.target.value)}
                  >
                    <option>Recebido</option>
                    <option>Em análise</option>
                    <option>Em contato</option>
                    <option>Concluído</option>
                  </select>
                </div>
                <button onClick={salvarStatus} className="w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">Salvar status</button>
              </div>

              <div className="rounded-xl border p-5 md:p-6 bg-white shadow space-y-2">
                <div className="font-medium">Adicionar resposta / comentário</div>
                <textarea
                  className="w-full rounded-lg border p-3 min-h-[100px]"
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                  placeholder="Mensagem para histórico (visível no acompanhamento)"
                />
                <button onClick={enviarResposta} className="w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">Salvar resposta</button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:hidden gap-3">
          {filtered.length === 0 && (
            <div className="text-center text-slate-500 text-sm py-4 border rounded-lg">
              Sem registros.
            </div>
          )}
          {filtered.map((c) => (
            <div
              key={c.id}
              className={`rounded-lg border p-3 bg-white space-y-1 ${newIds.has(c.id) ? "bg-emerald-50" : ""}`}
            >
              <div className={`flex items-start justify-between gap-2 ${newIds.has(c.id) ? "rounded-lg p-2 bg-emerald-50" : ""}`}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.has(c.id)}
                    onChange={() => toggleOne(c.id)}
                  />
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{c.id}</span>
                    {newIds.has(c.id) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        Nova
                      </span>
                    )}
                  </div>
                </label>
                <div className="text-xs text-slate-500 text-right">
                  {fmtDate(c.createdAt)}
                  <div>{c.status || "-"}</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="font-medium">{c.unidade}</span> • {c.categoria}
              </div>
              <div className="text-xs text-slate-600">
                {c.subcategoria || "-"} • {c.perguntas?.onde || "-"} • Anexos: {c.anexos?.length || 0}
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  className="px-4 py-3 rounded-lg border hover:bg-slate-50"
                  onClick={() => openDetail(c)}
                >
                  Detalhes
                </button>
                <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => onDeleteOne(c.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-auto rounded-lg border hidden md:block">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="p-2 border-b w-10">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    aria-label="Selecionar todos"
                  />
                </th>
                <th className="p-2 border-b">Protocolo</th>
                <th className="p-2 border-b">Data/Hora</th>
                <th className="p-2 border-b">Unidade</th>
                <th className="p-2 border-b">Categoria</th>
                <th className="p-2 border-b">Detalhamento</th>
                <th className="p-2 border-b">Onde</th>
                <th className="p-2 border-b">Anon.</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Anexos</th>
                <th className="p-2 border-b w-28">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={11} className="p-3 text-center text-slate-500">
                    Sem registros.
                  </td>
                </tr>
              )}
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className={`hover:bg-slate-50 ${newIds.has(c.id) ? "bg-emerald-50" : ""}`}
                >
                  <td className="p-2 border-b">
                    <input
                      type="checkbox"
                      checked={selected.has(c.id)}
                      onChange={() => toggleOne(c.id)}
                      aria-label={`Selecionar ${c.id}`}
                    />
                  </td>
                  <td className="p-2 border-b font-mono">
                    <div className="flex items-center gap-2">
                      <span>{c.id}</span>
                      {newIds.has(c.id) && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-sans">
                          Nova
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-2 border-b whitespace-nowrap">{fmtDate(c.createdAt)}</td>
                  <td className="p-2 border-b">{c.unidade}</td>
                  <td className="p-2 border-b">{c.categoria}</td>
                  <td className="p-2 border-b">{c.subcategoria || "-"}</td>
                  <td className="p-2 border-b">{c.perguntas?.onde || "-"}</td>
                  <td className="p-2 border-b">{c.anonimo ? "Sim" : "Não"}</td>
                  <td className="p-2 border-b">{c.status || "-"}</td>
                  <td className="p-2 border-b">{c.anexos?.length || 0}</td>
                  <td className="p-2 border-b">
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-3 rounded-lg border hover:bg-slate-50"
                        onClick={() => openDetail(c)}
                      >
                        Detalhes
                      </button>
                      <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => onDeleteOne(c.id)}>Excluir</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

/* ==================== ADMIN protegido ==================== */
function AdminProtected() {
  const [ok, setOk] = useState(sessionStorage.getItem("admin_ok") === "1");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASS) {
      sessionStorage.setItem("admin_ok", "1");
      setOk(true);
      setErr("");
    } else {
      setErr("Senha incorreta.");
    }
  };

  if (ok) return <AdminPanel />;

  return (
    <section className="space-y-4 md:space-y-6">
      <SectionTitle icon={Lock} title="Acesso restrito" subtitle="Informe a senha para acessar o painel." />
      <Card className="space-y-3 max-w-md">
        <form onSubmit={submit} className="space-y-3">
          <Field label="Senha" hint="Contato: compliance/ética">
            <input type="password" className={inputClass} value={pwd} onChange={(e)=>setPwd(e.target.value)} />
          </Field>
          {err && <div className="text-xs text-rose-600">{err}</div>}
          <div className="flex flex-col sm:flex-row gap-2">
            <button className={btnPrimary}>Entrar</button>
            <a href="#/" className={btnOutline}>Cancelar</a>
          </div>
        </form>
      </Card>
    </section>
  );
}

/* ==================== Router ==================== */
function AppRouter() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-3 py-4 md:p-6">
      <Nav />
      {route.startsWith("#/report") ? (
        <Report />
      ) : route.startsWith("#/status") ? (
        <Status />
      ) : route.startsWith("#/faq") ? (
        <FAQ />
      ) : route.startsWith("#/admin") ? (
        <AdminProtected />
      ) : route.startsWith("#/termos") ? (
        <Termos />
      ) : (
        <Home />
      )}
    </main>
  );
}

export default AppRouter;

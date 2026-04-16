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
const POLICY_VERSION = "1.1";
const POLICY_UPDATED = "16/04/2026";
const CONSENT_KEY = "consent_ok";
const ADMIN_PASS = "Venture@4266!";

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
    sexo: ""
  });

  const [dataUnica, setDataUnica] = useState("");
  const [periodicidade, setPeriodicidade] = useState("único");
  const [plantao, setPlantao] = useState("");
  const [riscoImediato, setRiscoImediato] = useState("");
  const [descricaoRisco, setDescricaoRisco] = useState("");
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

  useEffect(() => {
    if (sessionStorage.getItem(CONSENT_KEY) !== "1") {
      window.location.hash = "#/termos";
    }
  }, []);

  const isValidISODate = (s) =>
    /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(new Date(s).getTime());

  const isFuture = (s) => {
    if (!isValidISODate(s)) return false;
    const d = new Date(s);
    const today = new Date();
    d.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return d > today;
  };

  const dateError = !dataUnica
    ? "Informe a data do ocorrido."
    : !isValidISODate(dataUnica)
    ? "Data inválida."
    : isFuture(dataUnica)
    ? "A data não pode estar no futuro."
    : "";

  const canNext1 = !!unidade && !!categoria && !!subcategoria;

  const canNext2 =
    descricao.trim().length >= 100 &&
    !!onde &&
    !dateError &&
    !!plantao &&
    !!riscoImediato &&
    (riscoImediato === "Sim, risco imediato" ? descricaoRisco.trim().length >= 10 : true);

  const canSubmit = canNext1 && canNext2;

  const payloadHash = () => {
    const payload = {
      unidade,
      categoria,
      subcategoria,
      denunciado,
      dataUnica,
      periodicidade,
      plantao,
      riscoImediato,
      descricaoRisco,
      onde,
      descricao: descricao.trim(),
      valorFinanceiro,
      foiReportado,
      paraQuem,
      anonimo,
      contato,
      prefer,
      emailAcompanhamento,
      files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
    };
    const s = JSON.stringify(payload);
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
    return (h >>> 0).toString(36);
  };

  const copyProtocol = async () => {
    if (!successData?.protocolo) return;
    try {
      await navigator.clipboard.writeText(successData.protocolo);
      alert("Protocolo copiado.");
    } catch {
      alert("Não foi possível copiar automaticamente.");
    }
  };

  const openMailTo = () => {
    if (!successData?.email) return;

    const subject = encodeURIComponent("Protocolo da sua denúncia - Venture");
    const body = encodeURIComponent(
      `Sua denúncia foi registrada com sucesso.\n\n` +
      `Protocolo: ${successData.protocolo}\n\n` +
      `Guarde este número para acompanhamento.`
    );

    window.location.href = `mailto:${successData.email}?subject=${subject}&body=${body}`;
  };

  const resetFormAfterSuccess = () => {
    setStep(1);
    setUnidade(UNIDADES[0]);
    setCategoria("");
    setSubcategoria("");
    setDenunciado({ nome: "", cargo: "", sexo: "" });
    setDataUnica("");
    setPeriodicidade("único");
    setPlantao("");
    setRiscoImediato("");
    setDescricaoRisco("");
    setOnde("");
    setDescricao("");
    setValorFinanceiro("");
    setFoiReportado("nao");
    setParaQuem("");
    setFiles([]);
    setAnonimo(true);
    setContato({ nome: "", email: "", telefone: "" });
    setPrefer("email");
    setEmailAcompanhamento("");
    setSuccessData(null);
  };

  const onSubmit = async () => {
    if (!canSubmit) {
      alert("Preencha os campos obrigatórios.");
      return;
    }
    if (submitting) return;

    setSubmitting(true);

    try {
      const key = payloadHash();
      const last = sessionStorage.getItem("last_submit_hash");
      if (last && last === key) {
        alert("Esta denúncia já foi enviada. Evite cliques repetidos.");
        return;
      }

      sessionStorage.setItem("last_submit_hash", key);

      try {
        await withTimeout(ensureAnonAuth(), 8000, "iniciar sessão anônima");
      } catch (e) {
        console.error("[ensureAnonAuth] erro:", e);
        alert("Falha ao iniciar sessão anônima. Verifique sua conexão e tente novamente.");
        sessionStorage.removeItem("last_submit_hash");
        return;
      }

      const protocolo = genProtocolo();

      let anexosSubidos = [];
      if (files.length) {
        try {
          const ok = files.filter((f) => f.size <= 8 * 1024 * 1024);
          if (ok.length !== files.length) {
            alert("Alguns arquivos foram ignorados por exceder 8MB.");
          }
          anexosSubidos = await uploadAllFiles(protocolo, ok, uploadFile, 25000);
        } catch (err) {
          console.error("[upload] erro:", err);
          alert("Não foi possível enviar os anexos. Você pode tentar novamente ou enviar sem anexos.");
          anexosSubidos = [];
        }
      }

      const data = {
        protocolo,
        unidade,
        categoria,
        subcategoria,
        denunciado,
        perguntas: {
          periodo: { tipo: "unico", data: dataUnica },
          periodicidade,
          plantao,
          riscoImediato,
          descricaoRisco: descricaoRisco.trim() || null,
          onde,
          valorFinanceiro,
          foiReportado,
          paraQuem,
        },
        descricao: descricao.trim(),
        anonimo,
        contato: anonimo ? null : { ...contato, prefer },
        emailAcompanhamento: emailAcompanhamento.trim() || null,
        anexos: anexosSubidos,
        status: "Recebido",
        _idempotency: key,
        createdAt: new Date().toISOString(),
      };

      try {
        await withTimeout(
          createOrReplaceReport(protocolo, data),
          8000,
          "salvar denúncia no Firestore"
        );
      } catch (err) {
        console.error("[firestore] erro:", err);
        alert("Não foi possível salvar sua denúncia agora. Tente novamente em instantes.");
        sessionStorage.removeItem("last_submit_hash");
        return;
      }

      setSuccessData({
        protocolo,
        email: emailAcompanhamento.trim() || "",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const StepChip = ({ n }) => {
    const active = step === n;
    return (
      <div
        className={
          active
            ? "px-2 py-1 rounded-full border bg-emerald-600 text-white border-emerald-700"
            : "px-2 py-1 rounded-full border bg-white"
        }
      >
        {n}
      </div>
    );
  };

  return (
    <section className="space-y-4 md:space-y-6">
      <SectionTitle
        icon={FileText}
        title="Registrar denúncia"
        subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *."
      />

      {successData ? (
        <Card className="space-y-5">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Obrigado pela sua denúncia</h3>
            <p className="text-sm text-slate-600">
              Sua manifestação foi registrada com sucesso.
            </p>
          </div>

          <div className="rounded-xl border bg-slate-50 p-5 text-center">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
              Protocolo
            </div>
            <div className="font-mono text-2xl font-bold text-emerald-700">
              {successData.protocolo}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Guarde este número para acompanhar o andamento da denúncia.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-center">
            <button onClick={copyProtocol} className={btnPrimary}>
              Copiar protocolo
            </button>

            {successData.email ? (
              <button onClick={openMailTo} className={btnOutline}>
                Enviar para meu e-mail
              </button>
            ) : null}

            <a href="#/status" className={btnOutline}>
              Acompanhar denúncia
            </a>

            <button onClick={resetFormAfterSuccess} className={btnOutline}>
              Nova denúncia
            </button>
          </div>
        </Card>
      ) : (
        <Card className={`space-y-4 ${submitting ? "pointer-events-none opacity-70 relative" : ""}`}>
          {submitting && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="bg-black/40 rounded-md px-4 py-2 text-white">Enviando…</div>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs">
            <span className="hidden md:inline text-slate-500">Etapas:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <StepChip key={n} n={n} />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4 items-start">
                <Field label="Unidade *">
                  <SelectBase value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                    {UNIDADES.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </SelectBase>
                </Field>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">
                  Motivo da denúncia <span className="text-rose-600">*</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {Object.keys(CATEGORIAS).map((cat) => (
                    <CategoriaCard
                      key={cat}
                      titulo={cat}
                      descricao={CATEGORIA_DESCRICOES[cat]}
                      ativo={categoria === cat}
                      onClick={() => {
                        setCategoria(cat);
                        setSubcategoria("");
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 items-start">
                <Field label="Detalhamento *" hint="Selecione o assunto específico">
                  <SelectBase
                    value={subcategoria}
                    onChange={(e) => setSubcategoria(e.target.value)}
                    disabled={!categoria}
                  >
                    <option value="">Selecione...</option>
                    {categoria &&
                      CATEGORIAS[categoria].map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                  </SelectBase>
                </Field>
              </div>

              <Card className="space-y-4">
                <div className="font-semibold">Dados do denunciado (se souber)</div>
                <div className="grid md:grid-cols-3 gap-4">
                  <Field label="Nome">
                    <input
                      className={inputClass}
                      value={denunciado.nome}
                      onChange={(e) =>
                        setDenunciado({ ...denunciado, nome: e.target.value })
                      }
                    />
                  </Field>

                  <Field label="Cargo">
                    <input
                      className={inputClass}
                      value={denunciado.cargo}
                      onChange={(e) =>
                        setDenunciado({ ...denunciado, cargo: e.target.value })
                      }
                    />
                  </Field>

                  <Field label="Sexo">
                    <SelectBase
                      value={denunciado.sexo}
                      onChange={(e) =>
                        setDenunciado({ ...denunciado, sexo: e.target.value })
                      }
                    >
                      <option value="">Selecione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                    </SelectBase>
                  </Field>
                </div>
              </Card>

              <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
                <a href="#/" className={btnOutline}>Home</a>
                <button disabled={!canNext1 || submitting} onClick={() => setStep(2)} className={btnPrimary}>
                  Próxima
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4">
                  <Field label="Quando aconteceu? *" hint="Selecione a data do ocorrido">
                    <input
                      type="date"
                      className={inputClass}
                      value={dataUnica}
                      onChange={(e) => setDataUnica(e.target.value)}
                    />
                    {dateError && <div className="text-xs text-rose-600 mt-1">{dateError}</div>}
                  </Field>
                </div>
                <div className="md:col-span-4">
                  <Field label="Recorrência" hint=" ">
                    <SelectBase value={periodicidade} onChange={(e) => setPeriodicidade(e.target.value)}>
                      <option value="único">Evento único</option>
                      <option value="recorrente">Recorrente</option>
                      <option value="contínuo">Contínuo</option>
                    </SelectBase>
                  </Field>
                </div>
                <div className="md:col-span-4">
                  <Field label="Plantão *" hint="Período do ocorrido">
                    <SelectBase value={plantao} onChange={(e) => setPlantao(e.target.value)}>
                      <option value="">Selecione</option>
                      <option value="Diurno">Diurno</option>
                      <option value="Noturno">Noturno</option>
                      <option value="Madrugada">Madrugada</option>
                    </SelectBase>
                  </Field>
                </div>

                <div className="md:col-span-12">
                  <Field label="Existe risco imediato relacionado a esta denúncia? *" hint="Avalie se há ameaça atual à integridade física, segurança ou operação">
                    <SelectBase value={riscoImediato} onChange={(e) => setRiscoImediato(e.target.value)}>
                      <option value="">Selecione</option>
                      <option value="Não há risco imediato">Não há risco imediato</option>
                      <option value="Pode haver risco">Pode haver risco</option>
                      <option value="Sim, risco imediato">Sim, risco imediato</option>
                    </SelectBase>
                  </Field>
                </div>

                {riscoImediato === "Sim, risco imediato" && (
                  <div className="md:col-span-12">
                    <Field
                      label="Descreva o risco imediato *"
                      hint="Explique por que a situação exige atenção urgente"
                    >
                      <textarea
                        className="w-full rounded-lg border p-3 min-h-[100px]"
                        value={descricaoRisco}
                        onChange={(e) => setDescricaoRisco(e.target.value)}
                        placeholder="Ex.: ameaça direta, risco de agressão, risco à integridade de colaboradores, clientes ou operação"
                      />
                      <div className="text-xs mt-1 text-slate-500">
                        {descricaoRisco.trim().length} / 10
                      </div>
                    </Field>
                  </div>
                )}

                <div className="md:col-span-12">
                  <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    ⚠️ Em caso de risco imediato à integridade física ou segurança, procure imediatamente um responsável local ou serviço de emergência. Este canal não substitui atendimento emergencial.
                  </div>
                </div>

                <div className="md:col-span-12">
                  <Field label="Onde ocorreu? *" hint="Local/área/setor/cidade">
                    <input
                      className={inputClass}
                      placeholder="Ex.: Loja KIZ - estoque"
                      value={onde}
                      onChange={(e) => setOnde(e.target.value)}
                    />
                  </Field>
                </div>
              </div>

              <Field
                label="Descreva detalhadamente a denúncia *"
                hint="O que aconteceu? Quem estava envolvido? Há evidências?"
              >
                <textarea
                  className="w-full rounded-lg border p-3 min-h-[160px]"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Conte os fatos com o máximo de detalhes possíveis…"
                />
                <div
                  className={
                    descricao.trim().length < 100
                      ? "text-xs mt-1 text-rose-600"
                      : "text-xs mt-1 text-slate-500"
                  }
                >
                  {descricao.trim().length} / 100
                </div>
              </Field>

              <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
                <button onClick={() => setStep(1)} className={btnOutline}>Voltar</button>
                <button disabled={!canNext2 || submitting} onClick={() => setStep(3)} className={btnPrimary}>
                  Próxima
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-6">
                  <Field label="Houve impacto financeiro?" hint="Se sim, estimativa do valor">
                    <input
                      className={inputClass}
                      placeholder="Ex.: ~R$ 5.000"
                      value={valorFinanceiro}
                      onChange={(e) => setValorFinanceiro(e.target.value)}
                    />
                  </Field>
                </div>
                <div className="md:col-span-6">
                  <Field label="Você já reportou isso internamente?" hint=" ">
                    <SelectBase value={foiReportado} onChange={(e) => setFoiReportado(e.target.value)}>
                      <option value="nao">Não</option>
                      <option value="sim">Sim</option>
                    </SelectBase>
                  </Field>
                </div>
                {foiReportado === "sim" && (
                  <div className="md:col-span-12">
                    <Field label="Para quem? (opcional)" hint="Departamento, nome ou canal">
                      <input className={inputClass} value={paraQuem} onChange={(e) => setParaQuem(e.target.value)} />
                    </Field>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
                <button onClick={() => setStep(2)} className={btnOutline}>Voltar</button>
                <button onClick={() => setStep(4)} className={btnPrimary}>Próxima</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <Field label="Anexos (opcional)" hint="Imagens/PDF até 8MB cada. Remova metadados sensíveis antes de enviar.">
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const list = Array.from(e.target.files || []);
                    const ok = list.filter((f) => f.size <= 8 * 1024 * 1024);
                    const rejeitados = list.length - ok.length;
                    if (rejeitados > 0) alert(`Alguns arquivos foram ignorados por exceder 8MB (${rejeitados}).`);
                    setFiles(ok);
                  }}
                />
                {!!files.length && (
                  <ul className="text-sm text-slate-600 list-disc pl-5 mt-2">
                    {files.map((f, i) => (
                      <li key={i}>
                        {f.name} ({Math.round(f.size / 1024)} KB)
                      </li>
                    ))}
                  </ul>
                )}
              </Field>
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
                <button onClick={() => setStep(3)} className={btnOutline}>Voltar</button>
                <button onClick={() => setStep(5)} className={btnPrimary}>Próxima</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <Field label="Anonimato" hint=" ">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={anonimo} onChange={(e) => setAnonimo(e.target.checked)} />
                  <span className="text-sm">Quero permanecer anônimo</span>
                </label>
              </Field>

              <Field
                label="E-mail para receber o protocolo (opcional)"
                hint="Se desejar, informe um e-mail apenas para guardar o protocolo e facilitar contato futuro."
              >
                <input
                  type="email"
                  className={inputClass}
                  value={emailAcompanhamento}
                  onChange={(e) => setEmailAcompanhamento(e.target.value)}
                  placeholder="exemplo@email.com"
                />
              </Field>

              {!anonimo && (
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-4">
                    <Field label="Nome" hint=" ">
                      <input className={inputClass} value={contato.nome} onChange={(e) => setContato({ ...contato, nome: e.target.value })} />
                    </Field>
                  </div>
                  <div className="md:col-span-4">
                    <Field label="Email" hint=" ">
                      <input type="email" className={inputClass} value={contato.email} onChange={(e) => setContato({ ...contato, email: e.target.value })} />
                    </Field>
                  </div>
                  <div className="md:col-span-4">
                    <Field label="Telefone" hint=" ">
                      <input className={inputClass} value={contato.telefone} onChange={(e) => setContato({ ...contato, telefone: e.target.value })} />
                    </Field>
                  </div>
                  <div className="md:col-span-4">
                    <Field label="Preferência de contato" hint=" ">
                      <SelectBase value={prefer} onChange={(e) => setPrefer(e.target.value)}>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                      </SelectBase>
                    </Field>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
                <button onClick={() => setStep(4)} className={btnOutline} disabled={submitting}>Voltar</button>
                <button onClick={onSubmit} disabled={!canSubmit || submitting} className={btnPrimary}>
                  {submitting ? "Enviando…" : "Enviar denúncia"}
                </button>
              </div>
            </div>
          )}
        </Card>
      )}

      <AvisosSeguranca />
    </section>
  );
}

/* ==================== STATUS ==================== */
function Status() {
  const formatDate = (dt) => {
  if (!dt) return "-";

  try {
    if (dt?.toDate) {
      return dt.toDate().toLocaleString("pt-BR");
    }

    if (typeof dt === "string") {
      return new Date(dt).toLocaleString("pt-BR");
    }

    if (dt?.seconds) {
      return new Date(dt.seconds * 1000).toLocaleString("pt-BR");
    }

    return "-";
  } catch {
    return "-";
  }
};
  const [proto, setProto] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consultar = async () => {
    if (!proto.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await getReportByProtocol(proto.trim());

      if (!res) {
        setError("Protocolo não encontrado.");
        return;
      }

      setData(res);
    } catch (e) {
      console.error(e);
      setError("Erro ao consultar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const statusColor = {
    "Recebido": "bg-blue-100 text-blue-700",
    "Em análise": "bg-yellow-100 text-yellow-700",
    "Em contato": "bg-orange-100 text-orange-700",
    "Concluído": "bg-emerald-100 text-emerald-700"
  };

  const etapas = [
    { key: "Recebido", label: "Denúncia recebida" },
    { key: "Em análise", label: "Em análise" },
    { key: "Em contato", label: "Em tratativa" },
    { key: "Concluído", label: "Concluído" }
  ];

  const currentIndex = etapas.findIndex(e => e.key === data?.status);

  return (
    <section className="space-y-4 md:space-y-6">
      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Acompanhar denúncia</h3>

        <Field label="Protocolo" hint="Digite o código recebido ao enviar a denúncia">
          <input
            className={inputClass}
            value={proto}
            onChange={(e) => setProto(e.target.value)}
          />
        </Field>

        <div className="flex gap-2">
          <button onClick={consultar} className={btnPrimary}>
            {loading ? "Consultando..." : "Consultar"}
          </button>
          <a href="#/" className={btnOutline}>Voltar</a>
        </div>

        {error && (
          <div className="text-sm text-rose-600">{error}</div>
        )}
      </Card>

      {/* RESULTADO */}
      {data && (
        <Card className="space-y-6">

          {/* HEADER */}
          <div className="text-center space-y-2">
            <div className="text-sm text-slate-500">Protocolo</div>
            <div className="font-mono text-xl font-bold text-emerald-700">
              {data.protocolo}
            </div>

            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor[data.status]}`}>
              {data.status}
            </div>

            <div className="text-xs text-slate-500">
  Criado em: {formatDate(data.createdAt)}
</div>
          </div>

          {/* LINHA DO TEMPO */}
          <div className="space-y-3">
            <div className="font-semibold">Andamento</div>

            <div className="flex flex-col gap-3">
              {etapas.map((etapa, i) => {
                const ativo = i <= currentIndex;

                return (
                  <div key={etapa.key} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${ativo ? "bg-emerald-600" : "bg-slate-300"}`} />
                    <div className={ativo ? "text-slate-800 font-medium" : "text-slate-400"}>
                      {etapa.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ÚLTIMA ATUALIZAÇÃO */}
          {data.notes?.length > 0 && (
            <div className="space-y-2">
              <div className="font-semibold">Última atualização</div>
              <div className="text-sm text-slate-600 border rounded-lg p-3 bg-slate-50">
                {data.notes[data.notes.length - 1].text}
              </div>
            </div>
          )}

          {/* MENSAGEM DE TRANQUILIZAÇÃO */}
          <div className="space-y-2">
            <div className="font-semibold">O que acontece agora?</div>

            <div className="text-sm text-slate-600 space-y-2">
              <p>
                Sua denúncia foi registrada com sucesso e está sendo tratada com total confidencialidade.
              </p>

              <p>
                O processo pode envolver etapas como triagem inicial, análise detalhada e coleta de informações adicionais.
              </p>

              <p>
                O tempo de apuração pode variar conforme a complexidade do caso, garantindo uma avaliação justa e responsável.
              </p>
            </div>
          </div>

          {/* PRAZOS (SEM PROMETER) */}
          <div className="space-y-2">
            <div className="font-semibold">Prazos estimados</div>

            <div className="text-sm text-slate-600 space-y-1">
              <div>• Confirmação do recebimento: imediata</div>
              <div>• Triagem inicial: até 10 dias úteis</div>
              <div>• Atualização de andamento: até 20 dias úteis</div>
              <div>• Conclusão: varia conforme o caso</div>
            </div>
          </div>

          {/* ORIENTAÇÃO */}
          <div className="space-y-2">
            <div className="font-semibold">Orientações importantes</div>

            <div className="text-sm text-slate-600 space-y-1">
              <div>• Guarde seu protocolo para acompanhamento</div>
              <div>• Consulte esta página periodicamente</div>
              <div>• Evite compartilhar detalhes da denúncia</div>
              <div>• Em caso de risco imediato, procure um responsável local</div>
            </div>
          </div>

        </Card>
      )}

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
  const [newCount, setNewCount] = useState(0);
  const [newIds, setNewIds] = useState(new Set());
  const [initialLoaded, setInitialLoaded] = useState(false);

  const [novoStatus, setNovoStatus] = useState("Recebido");
  const [resposta, setResposta] = useState("");

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

  useEffect(() => {
    if (sel) {
      setNovoStatus(sel.status || "Recebido");
      setResposta("");
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
      c.denunciado?.nome?.toLowerCase?.().includes(s) ||
      c.denunciado?.cargo?.toLowerCase?.().includes(s) ||
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

  const allSelected = selected.size > 0 && selected.size === filtered.length;
  const anySelected = selected.size > 0;

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
      alert("Não foi possível abrir o anexo.");
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
    else setSelected(new Set(filtered.map((x) => x.id)));
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

  const countBy = (arr, keyFn) =>
    arr.reduce((acc, x) => {
      const k = keyFn(x) || "-";
      acc[k] = (acc[k] || 0) + 1;
      return acc;
    }, {});

  const calcularScoreRisco = (c) => {
    let score = 1;

    if (c.perguntas?.riscoImediato === "Sim, risco imediato") score += 5;
    else if (c.perguntas?.riscoImediato === "Pode haver risco") score += 2;

    if (["Assédio", "Fraude", "Corrupção"].includes(c.categoria)) score += 3;

    if (c.perguntas?.periodicidade === "recorrente") score += 2;
    if (c.perguntas?.periodicidade === "contínuo") score += 3;

    return score;
  };

  const faixaRisco = (score) => {
    if (score >= 12) return { label: "Alto", bg: "bg-red-100", text: "text-red-700", border: "border-red-200" };
    if (score >= 6) return { label: "Médio", bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200" };
    return { label: "Baixo", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" };
  };

  const total = filtered.length;
  const anonimas = filtered.filter((x) => x.anonimo).length;
  const riscoImediatoQtd = filtered.filter((x) => x.perguntas?.riscoImediato === "Sim, risco imediato").length;
  const comAnexo = filtered.filter((x) => Array.isArray(x.anexos) && x.anexos.length > 0).length;

  const porStatus = countBy(filtered, (x) => x.status || "Sem status");
  const porCategoria = countBy(filtered, (x) => x.categoria);
  const porUnidade = countBy(filtered, (x) => x.unidade);
  const porPlantao = countBy(filtered, (x) => x.perguntas?.plantao);

  const scoreTotalGeral = filtered.reduce((sum, c) => sum + calcularScoreRisco(c), 0);
  const scoreMedioGeral = total > 0 ? (scoreTotalGeral / total) : 0;

  const riscoPorUnidade = {};
  const statsPorUnidade = {};

  filtered.forEach((c) => {
    const unidade = c.unidade || "N/A";
    const score = calcularScoreRisco(c);

    if (!riscoPorUnidade[unidade]) riscoPorUnidade[unidade] = 0;
    riscoPorUnidade[unidade] += score;

    if (!statsPorUnidade[unidade]) {
      statsPorUnidade[unidade] = {
        denuncias: 0,
        scoreTotal: 0,
        riscoImediato: 0,
      };
    }

    statsPorUnidade[unidade].denuncias += 1;
    statsPorUnidade[unidade].scoreTotal += score;
    if (c.perguntas?.riscoImediato === "Sim, risco imediato") {
      statsPorUnidade[unidade].riscoImediato += 1;
    }
  });

  const resumoUnidades = Object.entries(statsPorUnidade)
    .map(([unidade, v]) => {
      const scoreMedio = v.denuncias > 0 ? v.scoreTotal / v.denuncias : 0;
      return {
        unidade,
        denuncias: v.denuncias,
        scoreTotal: v.scoreTotal,
        scoreMedio,
        riscoImediato: v.riscoImediato,
        faixa: faixaRisco(scoreMedio),
      };
    })
    .sort((a, b) => b.scoreTotal - a.scoreTotal);

  const denunciadosMap = {};
  filtered.forEach((c) => {
    const nome = c.denunciado?.nome?.trim();
    if (!nome) return;

    const chave = `${nome}|||${c.unidade || "N/A"}`;
    if (!denunciadosMap[chave]) {
      denunciadosMap[chave] = {
        nome,
        unidade: c.unidade || "N/A",
        cargo: c.denunciado?.cargo || "",
        qtd: 0,
        scoreTotal: 0,
      };
    }
    denunciadosMap[chave].qtd += 1;
    denunciadosMap[chave].scoreTotal += calcularScoreRisco(c);
  });

  const maioresDenunciados = Object.values(denunciadosMap)
    .sort((a, b) => {
      if (b.qtd !== a.qtd) return b.qtd - a.qtd;
      return b.scoreTotal - a.scoreTotal;
    })
    .slice(0, 10);

  const maxVal = Math.max(
    1,
    ...Object.values(porStatus),
    ...Object.values(porCategoria),
    ...Object.values(porUnidade),
    ...Object.values(porPlantao),
    ...Object.values(riscoPorUnidade)
  );

  const BarList = ({ title, data }) => (
    <div className="rounded-xl border p-4 bg-white shadow space-y-2">
      <div className="font-medium">{title}</div>
      <div className="space-y-2">
        {Object.entries(data).sort((a, b) => b[1] - a[1]).map(([k, v]) => (
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

  function downloadFile(name, mime, content) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  const exportBaseDetalhada = () => {
    const header = [
      "Protocolo",
      "Data",
      "Unidade",
      "Categoria",
      "Subcategoria",
      "Denunciado",
      "Cargo do denunciado",
      "Plantão",
      "Risco Imediato",
      "Descrição do Risco",
      "Status",
      "Score de Risco",
      "Anonima",
      "Descrição"
    ];

    const rows = filtered.map((c) => [
      c.protocolo || c.id,
      fmtDate(c.createdAt),
      c.unidade || "",
      c.categoria || "",
      c.subcategoria || "",
      c.denunciado?.nome || "",
      c.denunciado?.cargo || "",
      c.perguntas?.plantao || "",
      c.perguntas?.riscoImediato || "",
      c.perguntas?.descricaoRisco || "",
      c.status || "",
      calcularScoreRisco(c),
      c.anonimo ? "Sim" : "Não",
      (c.descricao || "").replace(/\n/g, " ")
    ]);

    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");

    downloadFile(`base_denuncias_${Date.now()}.csv`, "text/csv;charset=utf-8;", csv);
  };

  const exportResumoExecutivo = () => {
    const header = [
      "Unidade",
      "Total de Denuncias",
      "Score Total",
      "Score Medio",
      "Nivel de Risco",
      "Qtd Risco Imediato",
      "% Risco Imediato"
    ];

    const rows = resumoUnidades.map((r) => [
      r.unidade,
      r.denuncias,
      r.scoreTotal,
      r.scoreMedio.toFixed(2),
      r.faixa.label,
      r.riscoImediato,
      r.denuncias > 0 ? `${Math.round((r.riscoImediato / r.denuncias) * 100)}%` : "0%"
    ]);

    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");

    downloadFile(`resumo_executivo_${Date.now()}.csv`, "text/csv;charset=utf-8;", csv);
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
          <div className="md:col-span-4">
            <input
              className="w-full h-12 rounded-lg border px-3 py-0 text-[15px] leading-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="Buscar por protocolo, unidade, categoria, denunciado..."
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
              >
                <option value="todos">Todos os status</option>
                <option value="Recebido">Recebido</option>
                <option value="Em análise">Em análise</option>
                <option value="Em contato">Em contato</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-wrap gap-2">
            <a href="#/" className="px-4 py-3 rounded-lg border hover:bg-slate-50">Home</a>
            <button
              className={`px-4 py-3 rounded-lg border hover:bg-slate-50 ${anySelected ? "" : "opacity-50 cursor-not-allowed"}`}
              disabled={!anySelected}
              onClick={onDeleteSelected}
            >
              Excluir selecionados
            </button>
            <button
              className="px-4 py-3 rounded-lg border hover:bg-slate-50"
              onClick={exportBaseDetalhada}
            >
              Excel Base
            </button>
            <button
              className="px-4 py-3 rounded-lg border hover:bg-slate-50"
              onClick={exportResumoExecutivo}
            >
              Excel Executivo
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-3">
          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">Total de denúncias</div>
            <div className="text-2xl font-bold">{total}</div>
          </div>

          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">% risco imediato</div>
            <div className="text-2xl font-bold">
              {total > 0 ? `${Math.round((riscoImediatoQtd / total) * 100)}%` : "0%"}
            </div>
          </div>

          <div className="rounded-xl border p-4 bg-white shadow">
            <div className="text-xs text-slate-500">% anônimas</div>
            <div className="text-2xl font-bold">
              {total > 0 ? `${Math.round((anonimas / total) * 100)}%` : "0%"}
            </div>
          </div>

          <div className={`rounded-xl border p-4 shadow ${faixaRisco(scoreMedioGeral).bg} ${faixaRisco(scoreMedioGeral).border}`}>
            <div className="text-xs text-slate-500">Score médio geral</div>
            <div className={`text-2xl font-bold ${faixaRisco(scoreMedioGeral).text}`}>
              {scoreMedioGeral.toFixed(2)}
            </div>
            <div className={`text-sm font-medium ${faixaRisco(scoreMedioGeral).text}`}>
              {faixaRisco(scoreMedioGeral).label} risco
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-3">
          <BarList title="Por status" data={porStatus} />
          <BarList title="Por categoria" data={porCategoria} />
          <BarList title="Por unidade" data={porUnidade} />
          <BarList title="Por plantão" data={porPlantao} />
          <BarList title="Score total por unidade" data={riscoPorUnidade} />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-xl border p-4 bg-white shadow space-y-3">
            <div className="font-medium">Semáforo de risco por unidade</div>
            <div className="space-y-2">
              {resumoUnidades.length === 0 && (
                <div className="text-xs text-slate-500">Sem dados no filtro atual.</div>
              )}
              {resumoUnidades.map((r) => (
                <div key={r.unidade} className={`rounded-lg border p-3 flex items-center justify-between ${r.faixa.bg} ${r.faixa.border}`}>
                  <div>
                    <div className="font-semibold">{r.unidade}</div>
                    <div className="text-xs text-slate-600">
                      {r.denuncias} denúncia(s) • Score total {r.scoreTotal} • Média {r.scoreMedio.toFixed(2)}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${r.faixa.text} bg-white/70`}>
                    {r.faixa.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border p-4 bg-white shadow space-y-3">
            <div className="font-medium">Maiores denunciados por restaurante</div>
            <div className="space-y-2">
              {maioresDenunciados.length === 0 && (
                <div className="text-xs text-slate-500">Sem denunciados identificados no filtro atual.</div>
              )}
              {maioresDenunciados.map((d, idx) => (
                <div key={`${d.nome}-${d.unidade}-${idx}`} className="rounded-lg border p-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{d.nome}</div>
                    <div className="text-xs text-slate-600">
                      {d.unidade}{d.cargo ? ` • ${d.cargo}` : ""} • {d.qtd} denúncia(s)
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{d.scoreTotal}</div>
                    <div className="text-xs text-slate-500">score</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

            {sel.perguntas?.riscoImediato === "Sim, risco imediato" && (
              <div className="inline-flex mt-3 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                Risco imediato
              </div>
            )}

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
                <div className="text-xs text-slate-500">Risco imediato</div>
                <div>{sel.perguntas?.riscoImediato || "-"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Score de risco</div>
                <div>{calcularScoreRisco(sel)}</div>
              </div>

              {sel.perguntas?.descricaoRisco && (
                <div className="md:col-span-2">
                  <div className="text-xs text-slate-500">Descrição do risco imediato</div>
                  <div className="whitespace-pre-wrap">{sel.perguntas.descricaoRisco}</div>
                </div>
              )}

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

              {sel.emailAcompanhamento && (
                <div className="md:col-span-2">
                  <div className="text-xs text-slate-500">E-mail para acompanhamento</div>
                  <div>{sel.emailAcompanhamento}</div>
                </div>
              )}
            </div>

            <div className="mt-3">
              <div className="text-xs text-slate-500">Descrição</div>
              <div className="whitespace-pre-wrap">{sel.descricao}</div>
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
                <button onClick={salvarStatus} className="w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">
                  Salvar status
                </button>
              </div>

              <div className="rounded-xl border p-5 md:p-6 bg-white shadow space-y-2">
                <div className="font-medium">Adicionar resposta / comentário</div>
                <textarea
                  className="w-full rounded-lg border p-3 min-h-[100px]"
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                  placeholder="Mensagem para histórico"
                />
                <button onClick={enviarResposta} className="w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">
                  Salvar resposta
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-auto rounded-lg border hidden md:block">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="p-2 border-b w-10">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} />
                </th>
                <th className="p-2 border-b">Protocolo</th>
                <th className="p-2 border-b">Data/Hora</th>
                <th className="p-2 border-b">Unidade</th>
                <th className="p-2 border-b">Categoria</th>
                <th className="p-2 border-b">Detalhamento</th>
                <th className="p-2 border-b">Denunciado</th>
                <th className="p-2 border-b">Risco</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={10} className="p-3 text-center text-slate-500">
                    Sem registros.
                  </td>
                </tr>
              )}
              {filtered.map((c) => (
                <tr key={c.id} className={`hover:bg-slate-50 ${newIds.has(c.id) ? "bg-emerald-50" : ""}`}>
                  <td className="p-2 border-b">
                    <input type="checkbox" checked={selected.has(c.id)} onChange={() => toggleOne(c.id)} />
                  </td>
                  <td className="p-2 border-b font-mono">
                    <div className="flex items-center gap-2">
                      <span>{c.id}</span>
                      {newIds.has(c.id) && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          Nova
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-2 border-b whitespace-nowrap">{fmtDate(c.createdAt)}</td>
                  <td className="p-2 border-b">{c.unidade}</td>
                  <td className="p-2 border-b">{c.categoria}</td>
                  <td className="p-2 border-b">{c.subcategoria || "-"}</td>
                  <td className="p-2 border-b">{c.denunciado?.nome || "-"}</td>
                  <td className="p-2 border-b">{c.perguntas?.riscoImediato || "-"}</td>
                  <td className="p-2 border-b">{c.status || "-"}</td>
                  <td className="p-2 border-b">
                    <div className="flex gap-2">
                      <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => openDetail(c)}>
                        Detalhes
                      </button>
                      <button className="px-4 py-3 rounded-lg border hover:bg-slate-50" onClick={() => onDeleteOne(c.id)}>
                        Excluir
                      </button>
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

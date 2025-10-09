import React, { useEffect, useState } from "react";
import {
  FileText,
  Search,
  HelpCircle,
  Send,
  ShieldAlert,
  Lock,
  Menu,
  X,
} from "lucide-react";
import ventureLogo from "./logo-venture.jpeg";

/* ==================== Helpers visuais (com alinhamento) ==================== */
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
    {/* seta */}
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

/* ==================== NAV responsivo ==================== */
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
          <a href="#/report" className="text-sm text-emerald-700 hover:underline">Registrar denúncia</a>
          <a href="#/status" className="text-sm text-emerald-700 hover:underline">Acompanhar</a>
          <a href="#/faq" className="text-sm text-emerald-700 hover:underline">FAQ</a>
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
          <a href="#/report" className="px-3 py-2 rounded-lg border">Registrar denúncia</a>
          <a href="#/status" className="px-3 py-2 rounded-lg border">Acompanhar</a>
          <a href="#/faq" className="px-3 py-2 rounded-lg border">FAQ</a>
        </div>
      )}
    </nav>
  );
};

/* ==================== Dados mock ==================== */
const UNIDADES = ["AGG", "SEC", "ECL", "CLP", "TAP", "CGG", "EXJ", "KIZ", "SEB", "DAP"];
const CATEGORIAS = ["Assédio", "Fraude", "Conflito de Interesses", "Outro"];
const loadCasos = () => JSON.parse(localStorage.getItem("casos") || "[]");
const saveCasos = (casos) => localStorage.setItem("casos", JSON.stringify(casos));
const genProtocolo = () => Math.random().toString(36).substring(2, 10).toUpperCase();
const AvisosSeguranca = () => (
  <div className="text-xs text-slate-500">
    ⚠️ Protótipo: os dados ficam no navegador local. Para produção, use backend seguro.
  </div>
);

/* ==================== HOME ==================== */
function Home() {
  return (
    <section id="home" className="space-y-4 md:space-y-6">
      <SectionTitle
        icon={ShieldAlert}
        title="Bem-vindo à Linha Ética"
        subtitle="Canal independente para relatos de má conduta, riscos e violações."
      />
      <div className="grid md:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><FileText /></div>
            <div>
              <h3 className="font-semibold">Registrar denúncia</h3>
              <p className="text-sm text-slate-600">Envie um relato anônimo ou identificado. Gere um protocolo para acompanhar.</p>
              <a href="#/report" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">
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

/* ==================== REPORT ==================== */
function Report() {
  const [step, setStep] = useState(1);
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [dataUnica, setDataUnica] = useState("");
  const [periodicidade, setPeriodicidade] = useState("único");
  const [onde, setOnde] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valorFinanceiro, setValorFinanceiro] = useState("");
  const [foiReportado, setFoiReportado] = useState("nao");
  const [paraQuem, setParaQuem] = useState("");
  const [files, setFiles] = useState([]);
  const [anonimo, setAnonimo] = useState(true);
  const [contato, setContato] = useState({ nome: "", email: "", telefone: "" });
  const [prefer, setPrefer] = useState("email");

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

  const canNext1 = !!unidade && !!categoria;
  const canNext2 = descricao.trim().length >= 100 && !!onde && !dateError;
  const canSubmit = canNext1 && canNext2;

  const onSubmit = () => {
    if (!canSubmit) {
      alert("Preencha os campos obrigatórios (data válida, onde e descrição ≥ 100).");
      return;
    }
    const casos = loadCasos();
    const protocolo = genProtocolo();
    const novo = {
      protocolo,
      createdAt: new Date().toISOString(),
      unidade,
      categoria,
      perguntas: {
        periodo: { tipo: "unico", data: dataUnica },
        periodicidade,
        onde,
        valorFinanceiro,
        foiReportado,
        paraQuem,
      },
      descricao: descricao.trim(),
      anonimo,
      contato: anonimo ? null : { ...contato, prefer },
      anexos: files,
      status: "Recebido",
    };
    saveCasos([novo, ...casos]);
    window.location.hash = `#/status?proto=${protocolo}`;
    alert(`Denúncia registrada. Protocolo: ${protocolo}`);
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
      <Card className="space-y-4">
        {/* Stepper */}
        <div className="flex items-center gap-2 text-xs">
          <span className="hidden md:inline text-slate-500">Etapas:</span>
          {[1, 2, 3, 4, 5].map((n) => (
            <StepChip key={n} n={n} />
          ))}
        </div>

        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <Field label="Unidade *">
                <SelectBase value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                  {UNIDADES.map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </SelectBase>
              </Field>
              <Field label="Categoria *">
                <SelectBase value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  {CATEGORIAS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </SelectBase>
              </Field>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between">
              <a href="#/" className={btnOutline}>Home</a>
              <button disabled={!canNext1} onClick={() => setStep(2)} className={btnPrimary}>
                Próxima
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 2 */}
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
              label="Descreva detalhadamente o ocorrido *"
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
              <button disabled={!canNext2} onClick={() => setStep(3)} className={btnPrimary}>
                Próxima
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
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

        {/* ETAPA 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <Field label="Anexos (opcional)" hint="Imagens/PDF até 8MB cada. Remova metadados sensíveis antes de enviar.">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const list = Array.from(e.target.files || []).map((f) => ({
                    name: f.name,
                    size: f.size,
                    type: f.type,
                  }));
                  setFiles(list);
                }}
              />
              {!!files.length && (
                <ul className="text-sm text-slate-600 list-disc pl-5 mt-2">
                  {files.map((f, i) => (
                    <li key={i}>
                      {f.name} ({Math.round((f.size || 0) / 1024)} KB){f.type ? ` — ${f.type}` : ""}
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

        {/* ETAPA 5 */}
        {step === 5 && (
          <div className="space-y-4">
            <Field label="Anonimato" hint=" ">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={anonimo} onChange={(e) => setAnonimo(e.target.checked)} />
                <span className="text-sm">Quero permanecer anônimo</span>
              </label>
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
              <button onClick={() => setStep(4)} className={btnOutline}>Voltar</button>
              <button onClick={onSubmit} disabled={!canSubmit} className={btnPrimary}>
                Enviar denúncia
              </button>
            </div>
          </div>
        )}
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

/* ==================== STATUS ==================== */
function Status() {
  const [proto, setProto] = useState("");
  const onCheck = () => {
    const casos = loadCasos();
    const achou = casos.find((c) => c.protocolo === proto.trim());
    alert(achou ? `Status: ${achou.status}` : "Protocolo não encontrado.");
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

/* ==================== ADMIN protegido + mobile ==================== */
const ADMIN_PASS = "venture2025";

function AdminPanel() {
  const [q, setQ] = useState("");
  const [casos, setCasos] = useState(loadCasos());
  const [sel, setSel] = useState(null);

  useEffect(() => {
    const onFocus = () => setCasos(loadCasos());
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const filtra = (c) => {
    if (!q.trim()) return true;
    const s = q.toLowerCase();
    return (
      c.protocolo?.toLowerCase().includes(s) ||
      c.unidade?.toLowerCase().includes(s) ||
      c.categoria?.toLowerCase().includes(s) ||
      c.descricao?.toLowerCase().includes(s)
    );
  };

  const exportCsv = () => {
    const rows = [
      ["protocolo","createdAt","unidade","categoria","onde","data","periodicidade","impactoFinanceiro","foiReportado","paraQuem","anonimo","contato","status","descricao","qtdAnexos"]
    ];
    for (const c of casos.filter(filtra)) {
      rows.push([
        c.protocolo,
        c.createdAt,
        c.unidade,
        c.categoria,
        c.perguntas?.onde || "",
        c.perguntas?.periodo?.data || "",
        c.perguntas?.periodicidade || "",
        c.perguntas?.valorFinanceiro || "",
        c.perguntas?.foiReportado || "",
        c.perguntas?.paraQuem || "",
        c.anonimo ? "sim" : "não",
        c.anonimo ? "" : JSON.stringify(c.contato || {}),
        c.status || "",
        (c.descricao || "").replace(/\n/g, " "),
        (c.anexos?.length || 0),
      ]);
    }
    const csv = rows.map(r => r.map(v => `"${String(v || "").replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "denuncias.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const limparTudo = () => {
    if (!confirm("Apagar todos os registros locais?")) return;
    localStorage.removeItem("casos");
    setCasos([]);
    setSel(null);
  };

  const lista = casos.filter(filtra);

  return (
    <section className="space-y-4 md:space-y-6">
      <Card className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h3 className="text-lg font-semibold">Painel (local)</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={exportCsv} className={btnOutline}>Exportar CSV</button>
            <button onClick={limparTudo} className={`${btnOutline} text-rose-600`}>Limpar tudo</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            className={inputClass}
            placeholder="Buscar por protocolo, unidade, categoria, descrição…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <a href="#/" className={btnOutline}>Home</a>
        </div>

        {/* Lista mobile como cards */}
        <div className="grid md:hidden gap-3">
          {lista.length === 0 && (
            <div className="text-center text-slate-500 text-sm py-4 border rounded-lg">
              Sem registros.
            </div>
          )}
          {lista.map((c, i) => (
            <div
              key={i}
              className="rounded-lg border p-3 bg-white"
              onClick={() => setSel(c)}
            >
              <div className="flex justify-between gap-2">
                <div className="font-mono text-sm">{c.protocolo}</div>
                <div className="text-xs text-slate-500">
                  {new Date(c.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="text-sm mt-1">
                <span className="font-medium">{c.unidade}</span> • {c.categoria}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {c.perguntas?.onde || "-"} • Anexos: {c.anexos?.length || 0} • {c.anonimo ? "Anônimo" : "Identificado"}
              </div>
              <div className="text-xs mt-1">Status: {c.status || "-"}</div>
            </div>
          ))}
        </div>

        {/* Tabela desktop */}
        <div className="overflow-auto rounded-lg border hidden md:block">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="p-2 border-b">Protocolo</th>
                <th className="p-2 border-b">Data</th>
                <th className="p-2 border-b">Unidade</th>
                <th className="p-2 border-b">Categoria</th>
                <th className="p-2 border-b">Onde</th>
                <th className="p-2 border-b">Anon.</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Anexos</th>
              </tr>
            </thead>
            <tbody>
              {lista.length === 0 && (
                <tr><td colSpan={8} className="p-3 text-center text-slate-500">Sem registros.</td></tr>
              )}
              {lista.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSel(c)}>
                  <td className="p-2 border-b font-mono">{c.protocolo}</td>
                  <td className="p-2 border-b">{new Date(c.createdAt).toLocaleString()}</td>
                  <td className="p-2 border-b">{c.unidade}</td>
                  <td className="p-2 border-b">{c.categoria}</td>
                  <td className="p-2 border-b">{c.perguntas?.onde || "-"}</td>
                  <td className="p-2 border-b">{c.anonimo ? "Sim" : "Não"}</td>
                  <td className="p-2 border-b">{c.status || "-"}</td>
                  <td className="p-2 border-b">{c.anexos?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sel && (
          <div className="rounded-lg border p-3 bg-slate-50">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">Protocolo</div>
                <div className="font-mono font-semibold">{sel.protocolo}</div>
              </div>
              <button className="text-sm underline" onClick={()=>setSel(null)}>fechar</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mt-2">
              <div><div className="text-xs text-slate-500">Unidade</div><div>{sel.unidade}</div></div>
              <div><div className="text-xs text-slate-500">Categoria</div><div>{sel.categoria}</div></div>
              <div><div className="text-xs text-slate-500">Onde</div><div>{sel.perguntas?.onde || "-"}</div></div>
              <div><div className="text-xs text-slate-500">Quando</div><div>{sel.perguntas?.periodo?.data || "-"}</div></div>
              <div><div className="text-xs text-slate-500">Recorrência</div><div>{sel.perguntas?.periodicidade || "-"}</div></div>
              <div><div className="text-xs text-slate-500">Impacto financeiro</div><div>{sel.perguntas?.valorFinanceiro || "-"}</div></div>
              <div><div className="text-xs text-slate-500">Reportado internamente</div><div>{sel.perguntas?.foiReportado === "sim" ? `Sim (${sel.perguntas?.paraQuem || "—"})` : "Não"}</div></div>
              <div><div className="text-xs text-slate-500">Anonimato</div><div>{sel.anonimo ? "Sim" : "Não"}</div></div>
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
                      <li key={i}>
                        {f.name}
                        {typeof f.size === "number" ? ` (${Math.round(f.size / 1024)} KB)` : ""}
                        {f.type ? ` — ${f.type}` : ""}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="text-xs text-slate-500 mt-1">
                  Obs.: Em protótipo, apenas nome/tamanho/tipo são armazenados (não o arquivo).
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

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
        <div className="text-xs text-slate-500">Dica: altere a constante <code>ADMIN_PASS</code> no código.</div>
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
      ) : (
        <Home />
      )}
    </main>
  );
}

export default AppRouter;

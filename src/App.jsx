import React, { useEffect, useState } from "react";
import { FileText, Search, HelpCircle, Send, ShieldAlert } from "lucide-react";

/* =========================================================
   Helpers visuais
   ========================================================= */
const Field = ({ label, required, hint, children }) => (
  <label
    className="grid gap-1"
    style={{
      gridTemplateRows: "minmax(40px,auto) minmax(18px,auto) auto",
    }}
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
        "w-full h-10 rounded-lg border pl-3 pr-8 py-0 leading-[38px] pt-px align-middle appearance-none " +
        "focus:outline-none focus:ring-2 focus:ring-emerald-600 " +
        className
      }
    >
      {children}
    </select>
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
    </svg>
  </div>
);

const inputClass =
  "w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-[38px] pt-px";

const Card = ({ className, children }) => (
  <div className={`rounded-xl border p-6 bg-white shadow ${className || ""}`}>{children}</div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="space-y-1">
    <h2 className="flex items-center gap-2 text-xl font-bold">
      <Icon className="h-5 w-5 text-emerald-600" />
      {title}
    </h2>
    <p className="text-sm text-slate-500">{subtitle}</p>
  </div>
);

const Nav = () => (
  <nav className="flex gap-3 mb-4">
    <a href="#/" className="text-sm text-emerald-700 hover:underline">Home</a>
    <a href="#/report" className="text-sm text-emerald-700 hover:underline">Registrar denúncia</a>
    <a href="#/status" className="text-sm text-emerald-700 hover:underline">Acompanhar</a>
  </nav>
);

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-lg font-bold">{value}</div>
    <div className="text-xs text-slate-500">{label}</div>
  </div>
);

/* =========================================================
   Dados/mocks
   ========================================================= */
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

/* =========================================================
   Home (como no arquivo que você mandou)
   ========================================================= */
function Home() {
  return (
    <section id="home" className="space-y-6">
      <SectionTitle
        icon={ShieldAlert}
        title="Bem-vindo à Linha Ética"
        subtitle="Canal independente para relatos de má conduta, riscos e violações."
      />

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><FileText /></div>
            <div>
              <h3 className="font-semibold">Registrar denúncia</h3>
              <p className="text-sm text-slate-600">
                Envie um relato anônimo ou identificado. Gere um protocolo para acompanhar.
              </p>
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
              <p className="text-sm text-slate-600">
                Use seu protocolo para ver andamento e interagir com o time responsável.
              </p>
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
              <p className="text-sm text-slate-600">
                Entenda como protegemos sua identidade e tratamos seus dados (LGPD).
              </p>
              <a href="#faq" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">
                Ver perguntas <HelpCircle size={14} />
              </a>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="grid md:grid-cols-4 gap-4">
          <Stat label="Unidades" value="10" />
          <Stat label="Tempo médio de abertura" value="2 min" />
          <Stat label="Protocolo gerado" value="Automático" />
          <Stat label="Custo" value="Hospedagem estática" />
        </div>
      </Card>
    </section>
  );
}

/* =========================================================
   Report (5 etapas) — Data única obrigatória
   ========================================================= */
function Report() {
  const [step, setStep] = useState(1);
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);

  const [dataUnica, setDataUnica] = useState(""); // yyyy-mm-dd
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

  // Validação de data (não aceita futuro)
  const isValidISODate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(new Date(s).getTime());
  const isFuture = (s) => {
    if (!isValidISODate(s)) return false;
    const d = new Date(s);
    const today = new Date();
    d.setHours(0,0,0,0); today.setHours(0,0,0,0);
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
        paraQuem
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
      <div className={active ? "px-2 py-1 rounded-full border bg-emerald-600 text-white border-emerald-700" : "px-2 py-1 rounded-full border bg-white"}>
        Etapa {n}
      </div>
    );
  };

  return (
    <section className="space-y-6">
      <SectionTitle
        icon={FileText}
        title="Registrar denúncia"
        subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *."
      />
      <Card className="space-y-5">
        <div className="flex items-center gap-2 text-xs">
          {[1, 2, 3, 4, 5].map((n) => <StepChip key={n} n={n} />)}
        </div>

        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <Field label="Unidade *">
                <SelectBase value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                  {UNIDADES.map((u) => <option key={u}>{u}</option>)}
                </SelectBase>
              </Field>
              <Field label="Categoria *">
                <SelectBase value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  {CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
                </SelectBase>
              </Field>
            </div>
            <div className="flex justify-between">
              <a href="#/" className="px-3 py-2 rounded-lg border">Home</a>
              <button
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className={canNext1 ? "px-4 py-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700" : "px-4 py-2 rounded-lg text-white bg-slate-300 cursor-not-allowed"}
              >
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
                <Field label="Quando aconteceu? *">
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
                <Field label="Recorrência">
                  <SelectBase value={periodicidade} onChange={(e) => setPeriodicidade(e.target.value)}>
                    <option value="único">Evento único</option>
                    <option value="recorrente">Recorrente</option>
                    <option value="contínuo">Contínuo</option>
                  </SelectBase>
                </Field>
              </div>
              <div className="md:col-span-4">
                <Field label="Onde ocorreu? *">
                  <input
                    className={inputClass}
                    placeholder="Ex.: Loja KIZ - estoque"
                    value={onde}
                    onChange={(e) => setOnde(e.target.value)}
                  />
                </Field>
              </div>
            </div>
            <Field label="Descreva detalhadamente o ocorrido *">
              <textarea
                className="w-full rounded-lg border p-3 min-h-[180px]"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Conte os fatos com o máximo de detalhes possíveis…"
              />
              <div className={descricao.trim().length < 100 ? "text-xs mt-1 text-rose-600" : "text-xs mt-1 text-slate-500"}>
                {descricao.trim().length} / 100
              </div>
            </Field>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button
                disabled={!canNext2}
                onClick={() => setStep(3)}
                className={canNext2 ? "px-4 py-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700" : "px-4 py-2 rounded-lg text-white bg-slate-300 cursor-not-allowed"}
              >
                Próxima
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-6">
                <Field label="Houve impacto financeiro?">
                  <input
                    className={inputClass}
                    placeholder="Ex.: ~R$ 5.000"
                    value={valorFinanceiro}
                    onChange={(e) => setValorFinanceiro(e.target.value)}
                  />
                </Field>
              </div>
              <div className="md:col-span-6">
                <Field label="Você já reportou isso internamente?">
                  <SelectBase value={foiReportado} onChange={(e) => setFoiReportado(e.target.value)}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                  </SelectBase>
                </Field>
              </div>
              {foiReportado === "sim" && (
                <div className="md:col-span-12">
                  <Field label="Para quem? (opcional)">
                    <input
                      className={inputClass}
                      value={paraQuem}
                      onChange={(e) => setParaQuem(e.target.value)}
                    />
                  </Field>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button onClick={() => setStep(4)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Próxima</button>
            </div>
          </div>
        )}

        {/* ETAPA 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <Field label="Anexos (opcional)">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const list = Array.from(e.target.files || []).map((f) => ({
                    name: f.name,
                    size: f.size,
                  }));
                  setFiles(list);
                }}
              />
              {!!files.length &&

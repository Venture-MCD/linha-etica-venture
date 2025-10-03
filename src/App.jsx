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

// Select alinhado com input (Chrome-safe)
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

// Inputs com a mesma altura/baseline
const inputClass =
  "w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-[38px] pt-px";

// Card básico
const Card = ({ className, children }) => (
  <div className={`rounded-xl border p-6 bg-white shadow ${className || ""}`}>{children}</div>
);

// Título de seção
const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="space-y-1">
    <h2 className="flex items-center gap-2 text-xl font-bold">
      <Icon className="h-5 w-5 text-emerald-600" />
      {title}
    </h2>
    <p className="text-sm text-slate-500">{subtitle}</p>
  </div>
);

// NAV com logo + nome (mostra em todas as rotas)
const Nav = () => (
  <nav className="flex items-center justify-between mb-6">
    <a href="#/" className="flex items-center gap-2">
      {/* SE usar "Logo Venture.jpeg", troque src abaixo para "/Logo%20Venture.jpeg" */}
      <img src="/Logo%20Venture.jpeg" alt="Venture" className="h-7 w-auto object-contain" />
      <span className="text-base font-semibold tracking-tight">Venture</span>
    </a>
    <div className="flex gap-4">
      <a href="#/" className="text-sm text-emerald-700 hover:underline">Home</a>
      <a href="#/report" className="text-sm text-emerald-700 hover:underline">Registrar denúncia</a>
      <a href="#/status" className="text-sm text-emerald-700 hover:underline">Acompanhar</a>
    </div>
  </nav>
);

// Estatísticas simples
const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-lg font-bold">{value}</div>
    <div className="text-xs text-slate-500">{label}</div>
  </div>
);

/* =========================================================
   Dados/mocks (trocar por backend real depois)
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
   HOME — igual à sua + cabeçalho de marca
   ========================================================= */
function Home() {
  return (
    <section id="home" className="space-y-6">
      {/* Cabeçalho compacto de marca dentro da Home */}
      <div className="flex items-center gap-2">
        {/* SE usar "Logo Venture.jpeg", troque src abaixo para "/Logo%20Venture.jpeg" */}
        <img src="//Logo%20Venture.jpeg" alt="Venture" className="h-8 w-auto object-contain" />
        <h1 className="text-xl font-bold">Venture</h1>
      </div>

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
   REPORT — 5 etapas (data única obrigatória, sem futuro)
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

  // validação de data (não aceita futuro)
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
        {/* Stepper */}
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

            <Field label="Descreva detalhadamente o ocorrido *" hint="O que aconteceu? Quem estava envolvido? Há evidências?">
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
            <Field label="Anexos (opcional)" hint="Imagens/PDF até 8MB cada. Remova metadados sensíveis antes de enviar.">
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
              {!!files.length && (
                <ul className="text-sm text-slate-600 list-disc pl-5 mt-2">
                  {files.map((f, i) => (
                    <li key={i}>
                      {f.name} ({Math.round((f.size || 0) / 1024)} KB)
                    </li>
                  ))}
                </ul>
              )}
            </Field>

            <div className="flex justify-between">
              <button onClick={() => setStep(3)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button onClick={() => setStep(5)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Próxima</button>
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

            <div className="flex justify-between">
              <button onClick={() => setStep(4)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button
                onClick={onSubmit}
                disabled={!canSubmit}
                className={canSubmit ? "px-4 py-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700" : "px-4 py-2 rounded-lg text-white bg-slate-300 cursor-not-allowed"}
              >
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

/* =========================================================
   STATUS — consulta simples por protocolo
   ========================================================= */
function Status() {
  const [proto, setProto] = useState("");
  const onCheck = () => {
    const casos = loadCasos();
    const achou = casos.find((c) => c.protocolo === proto.trim());
    alert(achou ? `Status: ${achou.status}` : "Protocolo não encontrado.");
  };
  return (
    <section className="space-y-6">
      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Acompanhar denúncia</h3>
        <Field label="Protocolo" hint="Digite o código recebido ao enviar a denúncia">
          <input className={inputClass} value={proto} onChange={(e) => setProto(e.target.value)} />
        </Field>
        <div className="flex gap-3">
          <button onClick={onCheck} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Consultar</button>
          <a href="#/" className="px-4 py-2 rounded-lg border">Voltar para Home</a>
        </div>
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

/* =========================================================
   Router por hash
   ========================================================= */
function AppRouter() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-4 md:p-6">
      <Nav />
      {route.startsWith("#/report") ? <Report /> : route.startsWith("#/status") ? <Status /> : <Home />}
    </main>
  );
}

export default AppRouter;

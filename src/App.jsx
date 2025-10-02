import React, { useState } from "react";
import { FileText } from "lucide-react";

// =========================================
// Helpers
// =========================================

// Componente auxiliar para campos de formulário
const Field = ({ label, required, hint, children }) => (
  <label className="block space-y-1.5">
    <span className="text-sm font-medium">
      {label} {required && <span className="text-rose-600">*</span>}
    </span>
    {/* reserva de altura para alinhar campos */}
    <div className={`text-xs ${hint ? "text-slate-500" : "opacity-0"} min-h-[18px]`}>
      {hint || "\u00A0"}
    </div>
    {children}
  </label>
);

// Select com altura fixa, line-height estável e seta custom
const SelectBase = ({ className = "", children, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={
        "w-full h-10 rounded-lg border pl-3 pr-8 py-0 align-middle leading-none appearance-none " +
        "focus:outline-none focus:ring-2 focus:ring-emerald-600 " +
        className
      }
    >
      {children}
    </select>
    {/* chevron */}
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

// Mock do Card e SectionTitle (ajuste para o seu projeto)
const Card = ({ className, children }) => (
  <div className={`rounded-xl border p-6 bg-white shadow ${className || ""}`}>
    {children}
  </div>
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

// =========================================
// Mock helpers (troque pelos reais)
// =========================================
const UNIDADES = ["AGG", "SEC", "ECL", "CLP", "TAP", "CGG", "EXJ", "KIZ", "SEB", "DAP"];
const CATEGORIAS = ["Assédio", "Fraude", "Conflito de Interesses", "Outro"];

const loadCasos = () => JSON.parse(localStorage.getItem("casos") || "[]");
const saveCasos = (casos) => localStorage.setItem("casos", JSON.stringify(casos));
const genProtocolo = () => Math.random().toString(36).substring(2, 10).toUpperCase();

const AvisosSeguranca = () => (
  <div className="text-xs text-slate-500">
    ⚠️ Seus dados são armazenados localmente neste protótipo.
  </div>
);

// =========================================
// Report
// =========================================
function Report() {
  const [step, setStep] = useState(1);
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);

  const [quando, setQuando] = useState("");
  const [periodicidade, setPeriodicidade] = useState("único");
  const [onde, setOnde] = useState("");
  const [descricao, setDescricao] = useState("");

  const [envolvidos, setEnvolvidos] = useState([{ nome: "", cargo: "", relacao: "" }]);
  const [testemunhas, setTestemunhas] = useState([{ nome: "", contato: "" }]);

  const [valorFinanceiro, setValorFinanceiro] = useState("");
  const [foiReportado, setFoiReportado] = useState("nao");
  const [paraQuem, setParaQuem] = useState("");

  const [files, setFiles] = useState([]);
  const [anonimo, setAnonimo] = useState(true);
  const [contato, setContato] = useState({ nome: "", email: "", telefone: "" });
  const [prefer, setPrefer] = useState("email");

  const canNext1 = !!unidade && !!categoria;
  const canNext2 = descricao.trim().length >= 100 && !!onde && !!quando;
  const canSubmit = canNext1 && canNext2;

  const addRow = (setList, emptyObj) => setList(prev => [...prev, { ...emptyObj }]);
  const delRow = (setList, idx) => setList(prev => prev.filter((_, i) => i !== idx));

  const onSubmit = () => {
    if (!canSubmit) {
      alert("Preencha as perguntas obrigatórias antes de enviar (descrição mínima de 100 caracteres).");
      return;
    }
    const casos = loadCasos();
    const protocolo = genProtocolo();
    const novo = {
      protocolo,
      createdAt: new Date().toISOString(),
      unidade,
      categoria,
      perguntas: { quando, periodicidade, onde, valorFinanceiro, foiReportado, paraQuem },
      descricao: descricao.trim(),
      anonimo,
      contato: anonimo ? null : { ...contato, prefer },
      anexos: files,
      status: "Recebido",
    };
    saveCasos([novo, ...casos]);
    window.location.hash = `#status?proto=${protocolo}`;
    alert(`Denúncia registrada. Protocolo: ${protocolo}`);
  };

  const StepChip = ({ n }) => {
    const active = step === n;
    const cls = active
      ? "px-2 py-1 rounded-full border bg-emerald-600 text-white border-emerald-700"
      : "px-2 py-1 rounded-full border bg-white";
    return <div className={cls}>Etapa {n}</div>;
  };

  return (
    <section id="report" className="space-y-6">
      <SectionTitle
        icon={FileText}
        title="Registrar denúncia"
        subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *."
      />

      <Card className="space-y-5">
        {/* passos */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            {[1, 2, 3, 4, 5].map(n => <StepChip key={n} n={n} />)}
          </div>
          <div className="text-xs text-slate-500">Descrição mínima: 100 caracteres</div>
        </div>

        {/* Etapa 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <Field label="Unidade *" hint=" ">
                <SelectBase value={unidade} onChange={e => setUnidade(e.target.value)}>
                  {UNIDADES.map(u => <option key={u}>{u}</option>)}
                </SelectBase>
              </Field>
              <Field label="Categoria *" hint=" ">
                <SelectBase value={categoria} onChange={e => setCategoria(e.target.value)}>
                  {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
                </SelectBase>
              </Field>
            </div>
            <div className="flex justify-end">
              <button
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className={canNext1 ? "px-4 py-2 rounded-lg text-white bg-emerald-600" : "px-4 py-2 rounded-lg text-white bg-slate-300"}
              >
                Próxima
              </button>
            </div>
          </div>
        )}

        {/* Etapa 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4">
                <Field label="Quando aconteceu? *" hint="Data aproximada ou período">
                  <input className="w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-none"
                    value={quando} onChange={e => setQuando(e.target.value)} />
                </Field>
              </div>
              <div className="md:col-span-4">
                <Field label="Recorrência" hint=" ">
                  <SelectBase value={periodicidade} onChange={e => setPeriodicidade(e.target.value)}>
                    <option value="único">Evento único</option>
                    <option value="recorrente">Recorrente</option>
                    <option value="contínuo">Contínuo</option>
                  </SelectBase>
                </Field>
              </div>
              <div className="md:col-span-4">
                <Field label="Onde ocorreu? *" hint="Local/área/setor/cidade">
                  <input className="w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-none"
                    value={onde} onChange={e => setOnde(e.target.value)} />
                </Field>
              </div>
            </div>
            <Field label="Descreva detalhadamente o ocorrido *" hint="O que aconteceu? Quem estava envolvido? Há evidências?">
              <textarea className="w-full rounded-lg border p-3 min-h-[180px]" value={descricao} onChange={e => setDescricao(e.target.value)} />
              <div className={descricao.length < 100 ? "text-xs mt-1 text-rose-600" : "text-xs mt-1 text-slate-500"}>
                {descricao.length} / 100
              </div>
            </Field>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button disabled={!canNext2} onClick={() => setStep(3)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Próxima</button>
            </div>
          </div>
        )}

        {/* Etapa 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-6">
                <Field label="Houve impacto financeiro?" hint="Se sim, estimativa do valor">
                  <input className="w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-none"
                    value={valorFinanceiro} onChange={e => setValorFinanceiro(e.target.value)} />
                </Field>
              </div>
              <div className="md:col-span-6">
                <Field label="Você já reportou isso internamente?" hint=" ">
                  <SelectBase value={foiReportado} onChange={e => setFoiReportado(e.target.value)}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                  </SelectBase>
                </Field>
              </div>
              {foiReportado === "sim" && (
                <div className="md:col-span-12">
                  <Field label="Para quem? (opcional)" hint="Departamento, nome ou canal">
                    <input className="w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-none"
                      value={paraQuem} onChange={e => setParaQuem(e.target.value)} />
                  </Field>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button onClick={() => setStep(4)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Próxima</button>
            </div>
          </div>
        )}

        {/* Etapas 4 e 5 seguem... */}
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

export default Report;

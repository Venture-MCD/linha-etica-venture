import React, { useState } from "react";
import { FileText } from "lucide-react";

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

// Select corrigido p/ Chrome
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

// Inputs também padronizados (use essa classe sempre)
const inputClass =
  "w-full h-10 rounded-lg border pl-3 pr-3 py-0 leading-[38px] pt-px";

/* Card + título */
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

/* Mock FilePicker */
const FilePicker = ({ files, setFiles }) => {
  const onChange = (e) => {
    const list = Array.from(e.target.files || []).map((f) => ({ name: f.name, size: f.size }));
    setFiles(list);
  };
  return (
    <div className="space-y-2">
      <input type="file" multiple onChange={onChange} />
      {!!files?.length && (
        <ul className="text-sm text-slate-600 list-disc pl-5">
          {files.map((f, i) => (
            <li key={i}>
              {f.name} ({Math.round((f.size || 0) / 1024)} KB)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* Dados */
const UNIDADES = ["AGG", "SEC", "ECL", "CLP", "TAP", "CGG", "EXJ", "KIZ", "SEB", "DAP"];
const CATEGORIAS = ["Assédio", "Fraude", "Conflito de Interesses", "Outro"];

const loadCasos = () => JSON.parse(localStorage.getItem("casos") || "[]");
const saveCasos = (casos) => localStorage.setItem("casos", JSON.stringify(casos));
const genProtocolo = () => Math.random().toString(36).substring(2, 10).toUpperCase();

const AvisosSeguranca = () => (
  <div className="text-xs text-slate-500">
    ⚠️ Este protótipo armazena dados no navegador local. Para produção, integre um backend seguro.
  </div>
);

/* =========================================================
   Form principal
   ========================================================= */
function Report() {
  const [step, setStep] = useState(1);
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [quando, setQuando] = useState("");
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

  const canNext1 = !!unidade && !!categoria;
  const canNext2 = descricao.trim().length >= 100 && !!onde && !!quando;
  const canSubmit = canNext1 && canNext2;

  const onSubmit = () => {
    if (!canSubmit) {
      alert("Preencha os campos obrigatórios antes de enviar.");
      return;
    }
    const casos = loadCasos();
    const protocolo = genProtocolo();
    saveCasos([{ protocolo, unidade, categoria, quando, periodicidade, onde, descricao }, ...casos]);
    alert(`Denúncia registrada. Protocolo: ${protocolo}`);
  };

  return (
    <section className="space-y-6">
      <SectionTitle
        icon={FileText}
        title="Registrar denúncia"
        subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *."
      />
      <Card className="space-y-5">
        {step === 1 && (
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <Field label="Unidade *" hint=" ">
              <SelectBase value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                {UNIDADES.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </SelectBase>
            </Field>
            <Field label="Categoria *" hint=" ">
              <SelectBase value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                {CATEGORIAS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </SelectBase>
            </Field>
            <button
              onClick={() => setStep(2)}
              disabled={!canNext1}
              className="col-span-2 px-4 py-2 rounded-lg bg-emerald-600 text-white mt-4"
            >
              Próxima
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4">
                <Field label="Quando aconteceu? *" hint="Data aproximada ou período">
                  <input
                    className={inputClass}
                    placeholder="Ex.: 15/09/2025 ou Ago-Out/2025"
                    value={quando}
                    onChange={(e) => setQuando(e.target.value)}
                  />
                </Field>
              </div>
              <div className="md:col-span-4">
                <Field label="Recorrência" hint=" ">
                  <SelectBase
                    value={periodicidade}
                    onChange={(e) => setPeriodicidade(e.target.value)}
                  >
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
                className="w-full rounded-lg border p-3 min-h-[180px]"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Field>
            <button
              onClick={() => setStep(3)}
              disabled={!canNext2}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
            >
              Próxima
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <Field label="Houve impacto financeiro?" hint="Se sim, estimativa do valor">
              <input
                className={inputClass}
                placeholder="Ex.: ~R$ 5.000"
                value={valorFinanceiro}
                onChange={(e) => setValorFinanceiro(e.target.value)}
              />
            </Field>
            <Field label="Você já reportou isso internamente?" hint=" ">
              <SelectBase
                value={foiReportado}
                onChange={(e) => setFoiReportado(e.target.value)}
              >
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </SelectBase>
            </Field>
            <button
              onClick={() => setStep(4)}
              className="col-span-2 px-4 py-2 rounded-lg bg-emerald-600 text-white mt-4"
            >
              Próxima
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <Field
              label="Anexos (opcional)"
              hint="Imagens/PDF até 8MB cada. Remova metadados sensíveis."
            >
              <FilePicker files={files} setFiles={setFiles} />
            </Field>
            <button
              onClick={() => setStep(5)}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
            >
              Próxima
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <Field label="Anonimato" hint=" ">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={anonimo}
                  onChange={(e) => setAnonimo(e.target.checked)}
                />
                <span className="text-sm">Quero permanecer anônimo</span>
              </label>
            </Field>
            {!anonimo && (
              <div className="grid md:grid-cols-2 gap-4 items-start">
                <Field label="Nome" hint=" ">
                  <input
                    className={inputClass}
                    value={contato.nome}
                    onChange={(e) => setContato({ ...contato, nome: e.target.value })}
                  />
                </Field>
                <Field label="Email" hint=" ">
                  <input
                    type="email"
                    className={inputClass}
                    value={contato.email}
                    onChange={(e) => setContato({ ...contato, email: e.target.value })}
                  />
                </Field>
                <Field label="Telefone" hint=" ">
                  <input
                    className={inputClass}
                    value={contato.telefone}
                    onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
                  />
                </Field>
                <Field label="Preferência de contato" hint=" ">
                  <SelectBase
                    value={prefer}
                    onChange={(e) => setPrefer(e.target.value)}
                  >
                    <option value="email">Email</option>
                    <option value="telefone">Telefone</option>
                  </SelectBase>
                </Field>
              </div>
            )}
            <button
              onClick={onSubmit}
              disabled={!canSubmit}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
            >
              Enviar denúncia
            </button>
          </div>
        )}
      </Card>
      <AvisosSeguranca />
    </section>
  );
}

export default function App() {
  return (
    <main className="max-w-5xl mx-auto p-4 md:p-6">
      <Report />
    </main>
  );
}

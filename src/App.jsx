// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ShieldAlert,
  FileText,
  Search,
  HelpCircle,
  Send,
  AlertTriangle,
  Upload,
  LogIn,
  Lock,
  ArrowLeft,
} from "lucide-react";

import {
  ensureAnonAuth,
  uploadFileResumable,
  createOrReplaceReport,
  getReportByProtocol,
  subscribeReports,
  updateReport,
  addAdminNote,
  subscribeAdminNotes,
  getRuntimeFirebaseInfo,
} from "./firebase";

/* ----------------------------------------------
   Constantes e helpers
---------------------------------------------- */

const ADMIN_PASS = "Venture@4266";
const COMPANY = "Venture";
const UNIDADES = ["AGG", "SEC", "ECL", "CLP", "TAP", "CGG", "EXJ", "KIZ", "SEB", "DAP"];

- const base = import.meta.env.BASE_URL || "/";
- const logoUrl = new URL("logo-venture.png", base).href;
+ const BASE = import.meta.env.BASE_URL || "/";
+ const logoUrl = `${BASE}logo-venture.png`;

const withTimeout = (promise, ms, label = "operação") =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout (${label}) após ${ms}ms`)), ms)
    ),
  ]);

const genProtocolo = () =>
  Math.random().toString(36).slice(2, 4).toUpperCase() +
  Math.random().toString(36).slice(2, 4).toUpperCase() +
  Math.floor(Math.random() * 9) +
  Math.random().toString(36).slice(2, 3).toUpperCase();

const hash = (str) =>
  [...new TextEncoder().encode(str)].reduce((acc, b) => ((acc << 5) - acc + b) | 0, 0) + "";

/* ----------------------------------------------
   UI primitives
---------------------------------------------- */

const Container = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-4 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-4">
    <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
      {Icon && <Icon className="text-emerald-600" />}
      {title}
    </h1>
    {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
  </div>
);

const Field = ({ label, hint, children }) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    {hint && <div className="text-xs text-slate-500">{hint}</div>}
    {children}
  </div>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const link = (hash, label) => (
    <a
      href={hash}
      className="px-3 py-2 rounded hover:bg-emerald-50 text-sm"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <div className="flex items-center justify-between">
      <a href="#/">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Venture" className="h-6 w-auto" />
          <span className="font-semibold">{COMPANY}</span>
        </div>
      </a>
      <div className="hidden md:flex items-center gap-1">
        {link("#/", "Home")}
        {link("#/report", "Registrar denúncia")}
        {link("#/status", "Acompanhar")}
        {link("#/faq", "FAQ")}
        {link("#/terms", "Política de Uso")}
        {link("#/admin", "Admin")}
      </div>
      <button
        className="md:hidden p-2 rounded hover:bg-slate-100"
        onClick={() => setOpen((s) => !s)}
        aria-label="menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-4 top-16 bg-white border rounded-xl shadow-lg p-2 flex flex-col">
          {link("#/", "Home")}
          {link("#/report", "Registrar denúncia")}
          {link("#/status", "Acompanhar")}
          {link("#/faq", "FAQ")}
          {link("#/terms", "Política de Uso")}
          {link("#/admin", "Admin")}
        </div>
      )}
    </div>
  );
};

/* ----------------------------------------------
   Páginas (Home, Termos, Report, Status, FAQ, Admin)
---------------------------------------------- */

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
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <FileText />
            </div>
            <div>
              <h3 className="font-semibold">Registrar denúncia</h3>
              <p className="text-sm text-slate-600">
                Envie um relato anônimo ou identificado. Gere um protocolo para acompanhar.
              </p>
              <a
                href="#/report"
                className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline"
              >
                Iniciar <Send size={14} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <Search />
            </div>
            <div>
              <h3 className="font-semibold">Acompanhar status</h3>
              <p className="text-sm text-slate-600">
                Use seu protocolo para ver andamento e interagir com o time responsável.
              </p>
              <a
                href="#/status"
                className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline"
              >
                Acompanhar <Search size={14} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <HelpCircle />
            </div>
            <div>
              <h3 className="font-semibold">FAQ / Política</h3>
              <p className="text-sm text-slate-600">
                Entenda como protegemos sua identidade e tratamos seus dados (LGPD).
              </p>
              <a
                href="#/faq"
                className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline"
              >
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

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

function Terms() {
  return (
    <section className="space-y-4">
      <SectionTitle icon={AlertTriangle} title="Política de Uso" />
      <Card>
        <p className="text-sm leading-relaxed text-slate-700">
          Ao utilizar este canal, você concorda em fornecer informações verdadeiras e agir de boa-fé.
          Sua identidade pode permanecer anônima, se desejar. Os dados são tratados conforme a LGPD e
          usados exclusivamente para investigação interna. Conteúdos de boa-fé são protegidos.
        </p>
      </Card>
    </section>
  );
}

/* ----------------------------------------------
   Report (com gate de termos/aceite e 5 etapas)
---------------------------------------------- */

function Report() {
  const [step, setStep] = useState(0); // 0 = política/termos, depois 1..5
  const [aceitou, setAceitou] = useState(false);

  // Etapa 1
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState("Assédio");

  // Etapa 2
  const [dataUnica, setDataUnica] = useState("");
  const [onde, setOnde] = useState("");
  const [descricao, setDescricao] = useState("");

  // Etapa 3
  const [envolvidos, setEnvolvidos] = useState([{ nome: "", cargo: "", relacao: "" }]);
  const [testemunhas, setTestemunhas] = useState([{ nome: "", contato: "" }]);
  const [valorFinanceiro, setValorFinanceiro] = useState("");
  const [foiReportado, setFoiReportado] = useState("Não");

  // Etapa 4 (anexos)
  const [files, setFiles] = useState([]);

  // Etapa 5 (anônimo/contato)
  const [anonimo, setAnonimo] = useState(true);
  const [contato, setContato] = useState({ nome: "", email: "", telefone: "" });
  const [prefer, setPrefer] = useState("email");

  const [submitting, setSubmitting] = useState(false);

  const canStep2 = dataUnica && onde.trim().length > 1 && descricao.trim().length >= 100;
  const canSubmit = canStep2;
  const periodicidade = "unico";

  const payloadHash = () =>
    hash(
      JSON.stringify({
        unidade,
        categoria,
        dataUnica,
        onde,
        descricao,
        envolvidos,
        testemunhas,
        valorFinanceiro,
        foiReportado,
        anonimo,
        contato,
        files: files?.map((f) => [f.name, f.size, f.type]),
      })
    );

  const onFile = (e) => {
    const arr = [...(e.target.files || [])];
    setFiles(arr);
  };

  const go = (n) => setStep((s) => Math.max(0, Math.min(5, n)));

  // SUBMIT
  const onSubmit = async () => {
    if (!canSubmit) {
      alert("Preencha os campos obrigatórios da Etapa 2 (data, onde e descrição ≥ 100).");
      return;
    }
    if (submitting) return;

    const key = payloadHash();
    const last = sessionStorage.getItem("last_submit_hash");
    if (last && last === key) {
      alert("Esta denúncia já foi enviada. Evite cliques repetidos.");
      return;
    }

    try {
      setSubmitting(true);
      sessionStorage.setItem("last_submit_hash", key);

      try {
        await withTimeout(ensureAnonAuth(), 15000, "autenticação anônima");
      } catch (e) {
        console.error("Auth error", e);
        sessionStorage.removeItem("last_submit_hash");
        alert("Falha na autenticação anônima do Firebase. Habilite 'Anonymous' no Authentication.");
        return;
      }

      const protocolo = genProtocolo();
      let anexosSubidos = [];

      if (files && files.length) {
        try {
          const uploaded = [];
          for (const f of files) {
            if (f.size > 20 * 1024 * 1024) {
              alert(`O arquivo ${f.name} excede 20 MB. Reduza ou envie outro.`);
              continue;
            }
            const safeName = `${Date.now()}-${f.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
            const path = `reports/${protocolo}/${safeName}`;
            const url = await uploadFileResumable(path, f);
            uploaded.push({ name: f.name, size: f.size, type: f.type, url, path });
          }
          anexosSubidos = uploaded;
        } catch (err) {
          console.error("Upload error", err);
          alert("Não foi possível enviar os anexos. Você pode tentar novamente ou enviar sem anexos.");
          anexosSubidos = [];
        }
      }

      const data = {
        protocolo,
        unidade,
        categoria,
        perguntas: {
          periodo: { tipo: "unico", data: dataUnica },
          periodicidade,
          onde,
          valorFinanceiro,
          foiReportado,
        },
        envolvidos,
        testemunhas,
        descricao: descricao.trim(),
        anonimo,
        contato: anonimo ? null : { ...contato, prefer },
        anexos: anexosSubidos,
        status: "Recebido",
        _idempotency: key,
      };

      try {
        await withTimeout(createOrReplaceReport(protocolo, data), 15000, "salvar denúncia no Firestore");
      } catch (err) {
        console.error("Firestore error", err);
        sessionStorage.removeItem("last_submit_hash");
        alert("Falha ao salvar a denúncia no Firestore. Verifique se o Firestore está criado e regras permitem 'auth != null'.");
        return;
      }

      window.location.hash = `#/status?proto=${protocolo}`;
      alert(`Denúncia registrada. Protocolo: ${protocolo}`);
    } catch (err) {
      console.error("Erro geral no envio", err);
      sessionStorage.removeItem("last_submit_hash");
      alert(`Falha no envio: ${err.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  // Gate de termos (layout antigo)
  if (step === 0) {
    return (
      <section className="space-y-4">
        <SectionTitle icon={AlertTriangle} title="Política de Uso" />
        <Card className="space-y-3">
          <p className="text-sm text-slate-700">
            Antes de registrar a denúncia, leia e aceite nossa Política de Uso. Seus dados são
            tratados conforme a LGPD; você pode permanecer anônimo.
          </p>
          <div className="flex items-center gap-2">
            <input id="ok" type="checkbox" className="h-4 w-4" onChange={(e) => setAceitou(e.target.checked)} />
            <label htmlFor="ok" className="text-sm">
              Declaro que li e concordo com a{" "}
              <a href="#/terms" className="text-emerald-700 underline">
                Política de Uso
              </a>
              .
            </label>
          </div>
          <div className="flex gap-2">
            <a href="#/" className="px-3 py-2 rounded border flex items-center gap-1">
              <ArrowLeft size={16} /> Voltar
            </a>
            <button
              className="px-4 py-2 rounded bg-emerald-600 text-white disabled:opacity-50"
              disabled={!aceitou}
              onClick={() => setStep(1)}
            >
              Prosseguir
            </button>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <SectionTitle
        icon={FileText}
        title="Registrar denúncia"
        subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *."
      />

      {/* Navegador de etapas (1..5) */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-full text-sm border ${step === n ? "bg-emerald-600 text-white" : "bg-white"}`}
            onClick={() => go(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <Card className="space-y-4">
        {step === 1 && (
          <>
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Unidade *">
                <select
                  className="w-full rounded-lg border p-2 h-10"
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                >
                  {UNIDADES.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Categoria *">
                <select
                  className="w-full rounded-lg border p-2 h-10"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  {["Assédio", "Fraude", "Segurança", "Conflito de interesse", "Outros"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <div className="hidden md:block" />
            </div>
            <div className="flex gap-2">
              <a href="#/" className="px-3 py-2 rounded border flex items-center gap-1">
                <ArrowLeft size={16} /> Voltar
              </a>
              <button className="px-4 py-2 rounded bg-emerald-600 text-white" onClick={() => go(2)}>
                Próxima
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <Field label="Quando aconteceu? *" hint="Data aproximada ou período">
                <input
                  type="date"
                  className="w-full rounded-lg border p-2 h-10"
                  value={dataUnica}
                  onChange={(e) => setDataUnica(e.target.value)}
                />
              </Field>
              <Field label="Onde ocorreu? *" hint="Local/área/setor/cidade">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Ex.: Loja KIZ - estoque"
                  value={onde}
                  onChange={(e) => setOnde(e.target.value)}
                />
              </Field>
              <div className="md:col-span-1" />
            </div>

            <Field
              label="Descreva detalhadamente o ocorrido *"
              hint="O que aconteceu? Quem estava envolvido? Há evidências?"
            >
              <textarea
                className="w-full rounded-lg border p-3 min-h-[180px]"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Conte os fatos com o máximo de detalhes possíveis…"
              />
              <div className={`text-xs mt-1 ${descricao.length < 100 ? "text-rose-600" : "text-slate-500"}`}>
                {descricao.length} / 100
              </div>
            </Field>

            <div className="flex gap-2">
              <button className="px-3 py-2 rounded border flex items-center gap-1" onClick={() => go(1)}>
                <ArrowLeft size={16} /> Voltar
              </button>
              <button
                className="px-4 py-2 rounded bg-emerald-600 text-white disabled:opacity-50"
                onClick={() => go(3)}
                disabled={!canStep2}
              >
                Próxima
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Quem esteve envolvido? (opcional)">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Nome"
                  value={envolvidos[0].nome}
                  onChange={(e) =>
                    setEnvolvidos((prev) => [{ ...prev[0], nome: e.target.value }])
                  }
                />
              </Field>
              <Field label="Cargo/Setor (opcional)">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Cargo/Setor"
                  value={envolvidos[0].cargo}
                  onChange={(e) =>
                    setEnvolvidos((prev) => [{ ...prev[0], cargo: e.target.value }])
                  }
                />
              </Field>
              <Field label="Relação com o fato (opcional)">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Relação"
                  value={envolvidos[0].relacao}
                  onChange={(e) =>
                    setEnvolvidos((prev) => [{ ...prev[0], relacao: e.target.value }])
                  }
                />
              </Field>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Testemunha (opcional)">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Nome"
                  value={testemunhas[0].nome}
                  onChange={(e) =>
                    setTestemunhas((prev) => [{ ...prev[0], nome: e.target.value }])
                  }
                />
              </Field>
              <Field label="Contato (opcional)">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="E-mail ou telefone"
                  value={testemunhas[0].contato}
                  onChange={(e) =>
                    setTestemunhas((prev) => [{ ...prev[0], contato: e.target.value }])
                  }
                />
              </Field>
              <Field label="Houve impacto financeiro? (opcional)" hint="Se sim, estimativa do valor">
                <input
                  className="w-full rounded-lg border p-2 h-10"
                  placeholder="Ex.: ~R$ 5.000"
                  value={valorFinanceiro}
                  onChange={(e) => setValorFinanceiro(e.target.value)}
                />
              </Field>
            </div>

            <Field label="Você já reportou isso internamente?">
              <select
                className="w-full rounded-lg border p-2 h-10 max-w-[280px]"
                value={foiReportado}
                onChange={(e) => setFoiReportado(e.target.value)}
              >
                <option>Não</option>
                <option>Sim</option>
              </select>
            </Field>

            <div className="flex gap-2">
              <button className="px-3 py-2 rounded border flex items-center gap-1" onClick={() => go(2)}>
                <ArrowLeft size={16} /> Voltar
              </button>
              <button className="px-4 py-2 rounded bg-emerald-600 text-white" onClick={() => go(4)}>
                Próxima
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <Field label="Anexos (opcional)">
              <label className="inline-flex items-center gap-2 px-3 py-2 rounded border cursor-pointer">
                <Upload size={16} />
                Selecionar arquivos
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={onFile}
                  accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.mp4,.mov,.avi,.xlsx,.xls,.doc,.docx,.ppt,.pptx"
                />
              </label>
              {files?.length > 0 && (
                <ul className="text-sm mt-2 list-disc pl-5">
                  {files.map((f, i) => (
                    <li key={i}>
                      {f.name} — {Math.round(f.size / 1024)} KB
                    </li>
                  ))}
                </ul>
              )}
            </Field>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded border flex items-center gap-1" onClick={() => go(3)}>
                <ArrowLeft size={16} /> Voltar
              </button>
              <button className="px-4 py-2 rounded bg-emerald-600 text-white" onClick={() => go(5)}>
                Próxima
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <Field label="Anonimato">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={anonimo}
                  onChange={(e) => setAnonimo(e.target.checked)}
                />
                Quero permanecer anônimo
              </label>
            </Field>

            {!anonimo && (
              <div className="grid md:grid-cols-3 gap-4">
                <Field label="Nome">
                  <input
                    className="w-full rounded-lg border p-2 h-10"
                    value={contato.nome}
                    onChange={(e) => setContato({ ...contato, nome: e.target.value })}
                  />
                </Field>
                <Field label="E-mail">
                  <input
                    className="w-full rounded-lg border p-2 h-10"
                    value={contato.email}
                    onChange={(e) => setContato({ ...contato, email: e.target.value })}
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    className="w-full rounded-lg border p-2 h-10"
                    value={contato.telefone}
                    onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
                  />
                </Field>
                <Field label="Preferência de contato">
                  <select
                    className="w-full rounded-lg border p-2 h-10"
                    value={prefer}
                    onChange={(e) => setPrefer(e.target.value)}
                  >
                    <option value="email">E-mail</option>
                    <option value="telefone">Telefone</option>
                  </select>
                </Field>
              </div>
            )}

            <div className="flex gap-2">
              <button className="px-3 py-2 rounded border flex items-center gap-1" onClick={() => go(4)}>
                <ArrowLeft size={16} /> Voltar
              </button>
              <button
                className="px-4 py-2 rounded bg-emerald-600 text-white disabled:opacity-50"
                disabled={!canSubmit || submitting}
                onClick={onSubmit}
              >
                {submitting ? "Enviando..." : "Enviar denúncia"}
              </button>
            </div>

            <p className="text-xs text-slate-500">
              ⚠ Protótipo: dados na nuvem (Firestore/Storage). Ajuste regras antes de produção.
            </p>
          </>
        )}
      </Card>
    </section>
  );
}

/* ----------------------------------------------
   Status (Acompanhar)
---------------------------------------------- */

function Status() {
  const [proto, setProto] = useState(() => {
    const u = new URL(window.location.href);
    return u.hash.includes("?proto=") ? u.hash.split("?proto=")[1] : "";
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscar = async () => {
    if (!proto) return;
    try {
      setLoading(true);
      const r = await getReportByProtocol(proto.trim());
      setData(r);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (proto) buscar();
  }, []);

  return (
    <section className="space-y-4">
      <SectionTitle icon={Search} title="Acompanhar" />
      <Card className="space-y-3">
        <div className="flex gap-2 items-center">
          <input
            className="rounded-lg border p-2 w-64"
            placeholder="Digite o protocolo"
            value={proto}
            onChange={(e) => setProto(e.target.value.toUpperCase())}
          />
          <button className="px-4 py-2 bg-emerald-600 text-white rounded" onClick={buscar}>
            Buscar
          </button>
        </div>
        {loading && <p className="text-sm text-slate-500">Carregando…</p>}
        {data ? (
          <div className="space-y-2">
            <div className="text-sm">Protocolo: <b>{data.protocolo}</b></div>
            <div className="text-sm">Status: <b>{data.status}</b></div>
            {data.anexos?.length > 0 && (
              <div className="text-sm">
                Anexos:
                <ul className="list-disc pl-5">
                  {data.anexos.map((a, i) => (
                    <li key={i}>
                      <a className="text-emerald-700 underline" href={a.url} target="_blank" rel="noreferrer">
                        {a.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-slate-500">Informe o protocolo para consultar.</p>
        )}
      </Card>
    </section>
  );
}

/* ----------------------------------------------
   FAQ
---------------------------------------------- */

function FAQ() {
  return (
    <section className="space-y-4">
      <SectionTitle icon={HelpCircle} title="FAQ" />
      <Card className="space-y-2 text-sm text-slate-700">
        <p><b>Posso denunciar anonimamente?</b> Sim. Você escolhe manter anonimato na Etapa 5.</p>
        <p><b>Como acompanho?</b> Use o protocolo gerado ao final do envio.</p>
        <p><b>Meus dados estão seguros?</b> Sim, seguimos boas práticas e LGPD; em produção as regras serão restritas.</p>
      </Card>
    </section>
  );
}

/* ----------------------------------------------
   Admin (senha Venture@4266)
---------------------------------------------- */

function Admin() {
  const [authed, setAuthed] = useState(false);
  const [senha, setSenha] = useState("");
  const [itens, setItens] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [selecionado, setSelecionado] = useState(null);
  const [nota, setNota] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!authed) return;
    const unsub = subscribeReports((list) => setItens(list));
    return () => unsub && unsub();
  }, [authed]);

  useEffect(() => {
    if (!selecionado) return;
    const unsub = subscribeAdminNotes(selecionado.protocolo, setNotes);
    return () => unsub && unsub();
  }, [selecionado]);

  const entrar = () => {
    if (senha === ADMIN_PASS) setAuthed(true);
    else alert("Senha incorreta.");
  };

  if (!authed) {
    return (
      <section className="space-y-4">
        <SectionTitle icon={Lock} title="Área restrita" />
        <Card className="max-w-md space-y-3">
          <p className="text-sm text-slate-600">Informe a senha para acessar o painel administrativo.</p>
          <input
            className="w-full rounded-lg border p-2"
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="px-4 py-2 bg-emerald-600 text-white rounded" onClick={entrar}>
            Entrar
          </button>
        </Card>
      </section>
    );
  }

  const lista = useMemo(() => {
    const q = filtro.trim().toLowerCase();
    if (!q) return itens;
    return itens.filter((r) =>
      JSON.stringify(r)?.toLowerCase().includes(q)
    );
  }, [itens, filtro]);

  const salvarStatus = async (protocolo, status) => {
    await updateReport(protocolo, { status });
    alert("Status atualizado.");
  };

  const enviarNota = async () => {
    if (!nota.trim() || !selecionado) return;
    await addAdminNote(selecionado.protocolo, "Admin", nota.trim());
    setNota("");
  };

  return (
    <section className="space-y-4">
      <SectionTitle icon={LogIn} title="Painel (admin)" />
      <Card className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            className="rounded-lg border p-2 flex-1"
            placeholder="Buscar por protocolo, unidade, categoria, descrição…"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <a href="#/" className="px-3 py-2 rounded border">Home</a>
        </div>

        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Protocolo</th>
                <th className="p-2">Data</th>
                <th className="p-2">Unidade</th>
                <th className="p-2">Categoria</th>
                <th className="p-2">Status</th>
                <th className="p-2">Anexos</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((r) => (
                <tr
                  key={r.protocolo}
                  className="border-b hover:bg-slate-50 cursor-pointer"
                  onClick={() => setSelecionado(r)}
                >
                  <td className="p-2 font-mono">{r.protocolo}</td>
                  <td className="p-2">{r.createdAt?.toDate?.().toLocaleString?.() || "-"}</td>
                  <td className="p-2">{r.unidade}</td>
                  <td className="p-2">{r.categoria}</td>
                  <td className="p-2">{r.status}</td>
                  <td className="p-2">{r.anexos?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selecionado && (
          <div className="border rounded-xl p-3 space-y-2">
            <div className="flex justify-between">
              <div className="font-semibold">Protocolo {selecionado.protocolo}</div>
              <button className="text-sm underline" onClick={() => setSelecionado(null)}>
                fechar
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-slate-500">Categoria</div>
                <div>{selecionado.categoria}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Unidade</div>
                <div>{selecionado.unidade}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Quando</div>
                <div>{selecionado?.perguntas?.periodo?.data || "-"}</div>
              </div>
              <div className="md:col-span-3">
                <div className="text-xs text-slate-500">Descrição</div>
                <div className="whitespace-pre-wrap break-words">{selecionado.descricao}</div>
              </div>
              {selecionado.anexos?.length > 0 && (
                <div className="md:col-span-3">
                  <div className="text-xs text-slate-500">Anexos</div>
                  <ul className="list-disc pl-5">
                    {selecionado.anexos.map((a, i) => (
                      <li key={i}>
                        <a className="text-emerald-700 underline" href={a.url} target="_blank" rel="noreferrer">
                          {a.name}
                        </a>{" "}
                        — {a.type} ({Math.round(a.size / 1024)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                className="rounded-lg border p-2 h-10"
                value={selecionado.status}
                onChange={(e) => salvarStatus(selecionado.protocolo, e.target.value)}
              >
                {["Recebido", "Em análise", "Em contato", "Concluído"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <span className="text-xs text-slate-500">Alterar status</span>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Respostas / Histórico</div>
              <ul className="text-sm space-y-1">
                {notes.map((n) => (
                  <li key={n.id}>
                    <b>{n.author}:</b> {n.message}{" "}
                    <span className="text-xs text-slate-500">
                      {n.createdAt?.toDate?.().toLocaleString?.() || ""}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <input
                  className="rounded-lg border p-2 flex-1"
                  placeholder="Adicionar resposta/andamento…"
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                />
                <button className="px-3 py-2 bg-emerald-600 text-white rounded" onClick={enviarNota}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>

      <div className="text-xs text-slate-500">
        Debug: {JSON.stringify(getRuntimeFirebaseInfo())}
      </div>
    </section>
  );
}

/* ----------------------------------------------
   Roteador por hash
---------------------------------------------- */

function RouterView() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let page = null;
  if (route.startsWith("#/report")) page = <Report />;
  else if (route.startsWith("#/status")) page = <Status />;
  else if (route.startsWith("#/faq")) page = <FAQ />;
  else if (route.startsWith("#/terms")) page = <Terms />;
  else if (route.startsWith("#/admin")) page = <Admin />;
  else page = <Home />;

  return page;
}

/* ----------------------------------------------
   App
---------------------------------------------- */

export default function App() {
  return (
    <Container>
      <NavBar />
      <div className="mt-6">
        <RouterView />
      </div>
    </Container>
  );
}

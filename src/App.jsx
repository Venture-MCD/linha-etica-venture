
import React, { useEffect, useMemo, useState } from "react";
import { ShieldAlert, FileText, Send, Search, HelpCircle, Lock, Upload, AlertTriangle, Building2, FileCheck2 } from "lucide-react";

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
const genProtocolo = () => {
  const d = new Date();
  const stamp = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${stamp}-${rand}`;
};
const fmtDateTime = (iso) => new Date(iso).toLocaleString();

const UNIDADES = ["AGG","SEC","ECL","CLP","TAP","CGG","EXJ","KIZ","SEB","DAP"];

const CATEGORIAS = [
  "Assédio (moral/sexual)",
  "Fraude / Corrupção / Suborno",
  "Conflito de Interesses",
  "Discriminação (raça, gênero, LGBTQIA+)",
  "Segurança do Trabalho / do Alimento",
  "Desvio de recursos / Furto",
  "Privacidade / LGPD",
  "Outros",
];

const STORE = "linha_etica_casos_v2";
const loadCasos = () => { try { return JSON.parse(localStorage.getItem(STORE) || "[]"); } catch { return []; } };
const saveCasos = (arr) => localStorage.setItem(STORE, JSON.stringify(arr));

const Header = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
      <img src="logo-venture.jpg" alt="Venture" className="h-10 w-auto rounded" />
      <div>
        <h1 className="text-lg font-semibold leading-tight">Venture — Linha Ética</h1>
        <p className="text-xs text-slate-500 -mt-0.5">Canal confidencial e anônimo para denúncias</p>
      </div>
      <nav className="ml-auto flex gap-4 text-sm">
        <a href="#home" className="hover:text-emerald-700">Início</a>
        <a href="#report" className="hover:text-emerald-700">Registrar denúncia</a>
        <a href="#status" className="hover:text-emerald-700">Acompanhar</a>
        <a href="#faq" className="hover:text-emerald-700">FAQ</a>
        <a href="#politica" className="hover:text-emerald-700">Política</a>
        <a href="#painel" className="hover:text-emerald-700">Painel (demo)</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t py-6 mt-16">
    <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Venture. Todos os direitos reservados.</p>
      <p>Este canal respeita a LGPD. Dados tratados com base em legítimo interesse e segurança.</p>
    </div>
  </footer>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-3">
    <div className="rounded-2xl bg-emerald-50 text-emerald-700 p-2 mt-1"><Icon /></div>
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border p-5 ${className}`}>{children}</div>
);

const Field = ({ label, required, hint, children }) => (
  <label className="block space-y-1.5">
    <span className="text-sm font-medium">
      {label} {required && <span className="text-rose-600">*</span>}
    </span>
    {hint && <div className="text-xs text-slate-500">{hint}</div>}
    {children}
  </label>
);

const FilePicker = ({ files, setFiles }) => {
  const onPick = async (e) => {
    const arr = [...(files || [])];
    const list = Array.from(e.target.files || []);
    for (const f of list) {
      if (f.size > 8 * 1024 * 1024) { alert(`Arquivo muito grande: ${f.name}`); continue; }
      const dataUrl = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(f);
      });
      arr.push({ name: f.name, size: f.size, type: f.type, dataUrl });
    }
    setFiles(arr); e.target.value = "";
  };
  const remove = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i));
  return (
    <div className="space-y-2">
      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border bg-slate-50 hover:bg-slate-100 cursor-pointer">
        <Upload size={16} />
        <span className="text-sm">Anexar arquivos (máx. 8MB cada)</span>
        <input type="file" multiple className="hidden" onChange={onPick} />
      </label>
      {!!files?.length && (
        <ul className="text-sm space-y-1">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <FileCheck2 size={16} className="text-emerald-600" />
              <span className="truncate">{f.name}</span>
              <button onClick={() => remove(i)} className="ml-auto text-xs text-slate-500 hover:text-rose-600">remover</button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-slate-500">Dica: remova metadados sensíveis antes de anexar. Em produção, implemente limpeza automática.</p>
    </div>
  );
};

function Home() {
  return (
    <section id="home" className="space-y-6">
      <SectionTitle icon={ShieldAlert} title="Bem-vindo à Linha Ética" subtitle="Canal independente para relatos de má conduta, riscos e violações." />
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><FileText /></div>
            <div>
              <h3 className="font-semibold">Registrar denúncia</h3>
              <p className="text-sm text-slate-600">Envie um relato anônimo ou identificado. Gere um protocolo para acompanhar.</p>
              <a href="#report" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">Iniciar <Send size={14} /></a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><Search /></div>
            <div>
              <h3 className="font-semibold">Acompanhar status</h3>
              <p className="text-sm text-slate-600">Use seu protocolo para ver andamento e interagir com o time responsável.</p>
              <a href="#status" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">Acompanhar <Search size={14} /></a>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700"><HelpCircle /></div>
            <div>
              <h3 className="font-semibold">FAQ / Política</h3>
              <p className="text-sm text-slate-600">Entenda como protegemos sua identidade e tratamos seus dados (LGPD).</p>
              <a href="#faq" className="inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline">Ver perguntas <HelpCircle size={14} /></a>
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
  <div className="p-4 rounded-xl bg-slate-100 border text-center">
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-xs text-slate-500 mt-1">{label}</div>
  </div>
);

function Report() {
  const [step, setStep] = useState(1);
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);

  // Perguntas detalhadas
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

  const addRow = (listSetter, emptyObj) => listSetter(prev => [...prev, { ...emptyObj }]);
  const delRow = (listSetter, idx) => listSetter(prev => prev.filter((_, i)=> i!==idx));

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
      perguntas: {
        quando,
        periodicidade,
        onde,
        envolvidos: envolvidos.filter(e=>e.nome||e.cargo||e.relacao),
        testemunhas: testemunhas.filter(t=>t.nome||t.contato),
        valorFinanceiro,
        foiReportado,
        paraQuem: foiReportado==='sim'? paraQuem : "",
      },
      descricao: descricao.trim(),
      anonimo,
      contato: anonimo ? null : { ...contato, prefer },
      anexos: files,
      status: "Recebido",
      historico: [{ at: new Date().toISOString(), by: "sistema", texto: "Denúncia registrada" }],
    };
    saveCasos([novo, ...casos]);
    window.location.hash = `#status?proto=${protocolo}`;
    alert(`Denúncia registrada. Protocolo: ${protocolo}`);
  };

  const Stepper = () => (
    <div className="flex items-center gap-2 text-xs">
      {[1,2,3,4,5].map(n => (
        <div key={n} className={`px-2 py-1 rounded-full border ${step===n?'bg-emerald-600 text-white border-emerald-700':'bg-white'}`}>Etapa {n}</div>
      ))}
    </div>
  );

  return (
    <section id="report" className="space-y-6">
      <SectionTitle icon={FileText} title="Registrar denúncia" subtitle="Responda às perguntas abaixo. Campos essenciais marcados com *." />
      <Card className="space-y-5">
        <div className="flex items-center justify-between">
          <Stepper />
          <div className="text-xs text-slate-500">Descrição mínima: 100 caracteres</div>
        </div>

        {step===1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Unidade *">
                <select className="w-full rounded-lg border p-2" value={unidade} onChange={(e)=>setUnidade(e.target.value)}>
                  {UNIDADES.map(u => <option key={u}>{u}</option>)}
                </select>
              </Field>
              <Field label="Categoria *">
                <select className="w-full rounded-lg border p-2" value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                  {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <div className="flex items-center justify-end">
              <button disabled={!canNext1} onClick={()=>setStep(2)} className={`px-4 py-2 rounded-lg text-white ${canNext1?'bg-emerald-600 hover:bg-emerald-700':'bg-slate-300 cursor-not-allowed'}`}>Próxima</button>
            </div>
          </div>
        )}

        {step===2 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Quando aconteceu? *" hint="Data aproximada ou período">
                <input className="w-full rounded-lg border p-2" placeholder="Ex.: 15/09/2025 ou Ago-Out/2025" value={quando} onChange={(e)=>setQuando(e.target.value)} />
              </Field>
              <Field label="Recorrência">
                <select className="w-full rounded-lg border p-2" value={periodicidade} onChange={(e)=>setPeriodicidade(e.target.value)}>
                  <option value="único">Evento único</option>
                  <option value="recorrente">Recorrente</option>
                  <option value="contínuo">Contínuo</option>
                </select>
              </Field>
              <Field label="Onde ocorreu? *" hint="Local/área/setor/cidade">
                <input className="w-full rounded-lg border p-2" placeholder="Ex.: Loja KIZ - estoque" value={onde} onChange={(e)=>setOnde(e.target.value)} />
              </Field>
            </div>
            <Field label="Descreva detalhadamente o ocorrido *" hint="O que aconteceu? Quem estava envolvido? Há evidências?">
              <textarea className="w-full rounded-lg border p-3 min-h-[180px]" value={descricao} onChange={(e)=>setDescricao(e.target.value)} placeholder="Conte os fatos com o máximo de detalhes possíveis…" />
              <div className={`text-xs mt-1 ${descricao.length<100?'text-rose-600':'text-slate-500'}`}>{descricao.length} / 100</div>
            </Field>
            <div className="flex items-center justify-between">
              <button onClick={()=>setStep(1)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button disabled={!canNext2} onClick={()=>setStep(3)} className={`px-4 py-2 rounded-lg text-white ${canNext2?'bg-emerald-600 hover:bg-emerald-700':'bg-slate-300 cursor-not-allowed'}`}>Próxima</button>
            </div>
          </div>
        )}

        {step===3 && (
          <div className="space-y-5">
            <div>
  <h4 className="font-medium mb-2">Quem esteve envolvido?</h4>
  <div className="space-y-3">
    {envolvidos.map((e, i)=>(
      <div key={i} className="grid md:grid-cols-12 gap-3 items-start">
        <input
          className="w-full col-span-12 md:col-span-4 rounded-lg border p-2"
          placeholder="Nome (opcional)"
          value={e.nome}
          onChange={(ev)=>setEnvolvidos(prev=>prev.map((x,idx)=> idx===i? {...x, nome: ev.target.value}:x))}
        />
        <input
          className="w-full col-span-12 md:col-span-4 rounded-lg border p-2"
          placeholder="Cargo/Setor (opcional)"
          value={e.cargo}
          onChange={(ev)=>setEnvolvidos(prev=>prev.map((x,idx)=> idx===i? {...x, cargo: ev.target.value}:x))}
        />
        <input
          className="w-full col-span-12 md:col-span-4 rounded-lg border p-2"
          placeholder="Relação com o fato (opcional)"
          value={e.relacao}
          onChange={(ev)=>setEnvolvidos(prev=>prev.map((x,idx)=> idx===i? {...x, relacao: ev.target.value}:x))}
        />
        <div className="col-span-12 flex gap-2">
          <button onClick={()=>addRow(setEnvolvidos, {nome:'', cargo:'', relacao:''})} className="text-xs px-2 py-1 rounded border">+ adicionar envolvido</button>
          {envolvidos.length>1 && <button onClick={()=>delRow(setEnvolvidos, i)} className="text-xs px-2 py-1 rounded border">remover</button>}
        </div>
      </div>
    ))}
  </div>
</div>

            <div>
  <h4 className="font-medium mb-2">Testemunhas (se houver)</h4>
  <div className="space-y-3">
    {testemunhas.map((t, i)=>(
      <div key={i} className="grid md:grid-cols-12 gap-3 items-start">
        <input
          className="w-full col-span-12 md:col-span-6 rounded-lg border p-2"
          placeholder="Nome (opcional)"
          value={t.nome}
          onChange={(ev)=>setTestemunhas(prev=>prev.map((x,idx)=> idx===i? {...x, nome: ev.target.value}:x))}
        />
        <input
          className="w-full col-span-12 md:col-span-6 rounded-lg border p-2"
          placeholder="Contato (opcional)"
          value={t.contato}
          onChange={(ev)=>setTestemunhas(prev=>prev.map((x,idx)=> idx===i? {...x, contato: ev.target.value}:x))}
        />
        <div className="col-span-12 flex gap-2">
          <button onClick={()=>addRow(setTestemunhas, {nome:'', contato:''})} className="text-xs px-2 py-1 rounded border">+ adicionar testemunha</button>
          {testemunhas.length>1 && <button onClick={()=>delRow(setTestemunhas, i)} className="text-xs px-2 py-1 rounded border">remover</button>}
        </div>
      </div>
    ))}
  </div>
</div>

            <div className="grid md:grid-cols-12 gap-4">
  <Field label="Houve impacto financeiro?" hint="Se sim, estimativa do valor">
    <input className="w-full rounded-lg border p-2" placeholder="Ex.: ~R$ 5.000" value={valorFinanceiro} onChange={(e)=>setValorFinanceiro(e.target.value)} />
  </Field>
  <Field label="Você já reportou isso internamente?">
    <select className="w-full rounded-lg border p-2" value={foiReportado} onChange={(e)=>setFoiReportado(e.target.value)}>
      <option value="nao">Não</option>
      <option value="sim">Sim</option>
    </select>
  </Field>
  <div className={`md:col-span-12 ${foiReportado==='sim' ? '' : 'hidden'}`}>
    <Field label="Para quem? (opcional)">
      <input className="w-full rounded-lg border p-2" value={paraQuem} onChange={(e)=>setParaQuem(e.target.value)} />
    </Field>
  </div>
</div>
        )}

        {step===4 && (
          <div className="space-y-4">
            <Field label="Anexos (opcional)" hint="Imagens/PDF até 8MB cada. Remova metadados sensíveis antes de enviar.">
              <FilePicker files={files} setFiles={setFiles} />
            </Field>
            <div className="flex items-center justify-between">
              <button onClick={()=>setStep(3)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button onClick={()=>setStep(5)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Próxima</button>
            </div>
          </div>
        )}

        {step===5 && (
          <div className="space-y-4">
            <Field label="Anonimato">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={anonimo} onChange={(e)=>setAnonimo(e.target.checked)} />
                <span className="text-sm">Quero permanecer anônimo</span>
              </label>
            </Field>
            {!anonimo && (
              <div className="grid md:grid-cols-3 gap-4">
                <Field label="Nome">
                  <input className="w-full rounded-lg border p-2" value={contato.nome} onChange={(e)=>setContato({...contato, nome:e.target.value})} />
                </Field>
                <Field label="Email">
                  <input type="email" className="w-full rounded-lg border p-2" value={contato.email} onChange={(e)=>setContato({...contato, email:e.target.value})} />
                </Field>
                <Field label="Telefone">
                  <input className="w-full rounded-lg border p-2" value={contato.telefone} onChange={(e)=>setContato({...contato, telefone:e.target.value})} />
                </Field>
                <Field label="Preferência de contato">
                  <select className="w-full rounded-lg border p-2" value={prefer} onChange={(e)=>setPrefer(e.target.value)}>
                    <option value="email">Email</option>
                    <option value="telefone">Telefone</option>
                  </select>
                </Field>
              </div>
            )}
            <div className="flex items-center justify-between">
              <button onClick={()=>setStep(4)} className="px-3 py-2 rounded-lg border">Voltar</button>
              <button onClick={onSubmit} disabled={!canSubmit} className={`px-4 py-2 rounded-lg text-white ${canSubmit? 'bg-emerald-600 hover:bg-emerald-700':'bg-slate-300 cursor-not-allowed'}`}>Enviar denúncia</button>
            </div>
          </div>
        )}
      </Card>

      <AvisosSeguranca />
    </section>
  );
}
const AvisosSeguranca = () => (
  <Card className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-xl bg-amber-50 text-amber-700"><AlertTriangle /></div>
      <div>
        <h3 className="font-semibold">Dicas de segurança e privacidade</h3>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">
          <li>Evite usar redes corporativas ou dispositivos da empresa ao registrar uma denúncia.</li>
          <li>Remova metadados de fotos/documentos antes de anexar. No sistema final, implemente limpeza automática.</li>
          <li>Guarde seu protocolo em local seguro. Ele é a chave para acompanhar seu caso.</li>
          <li>Em caso de risco iminente, procure os canais de emergência da empresa ou autoridades.</li>
        </ul>
      </div>
    </div>
  </Card>
);

function Track() {
  const [query, setQuery] = useState("");
  const [caso, setCaso] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const parts = (window.location.hash || '').split('?');
    if (parts[0] === '#status' && parts[1]) {
      const p = new URLSearchParams(parts[1]).get('proto');
      if (p) setQuery(p);
    }
  }, []);

  const buscar = () => {
    const hit = loadCasos().find(c => c.protocolo === query.trim());
    setCaso(hit || null);
    if (!hit) alert("Protocolo não encontrado neste dispositivo (protótipo usa armazenamento local).");
  };

  const enviarMensagem = () => {
    if (!msg.trim()) return;
    const casos = loadCasos();
    const idx = casos.findIndex(c => c.protocolo === caso.protocolo);
    if (idx === -1) return;
    casos[idx].historico.push({ at: new Date().toISOString(), by: "denunciante", texto: msg.trim() });
    saveCasos(casos);
    setCaso(casos[idx]);
    setMsg("");
  };

  return (
    <section id="status" className="space-y-6">
      <SectionTitle icon={Search} title="Acompanhar denúncia" subtitle="Informe seu protocolo para consultar o andamento." />
      <Card>
        <div className="flex flex-col md:flex-row gap-3">
          <input className="flex-1 rounded-lg border p-2" placeholder="Ex.: 20251002-154501-ABC123" value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button onClick={buscar} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Buscar</button>
        </div>
      </Card>

      {caso && (
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border">Protocolo {caso.protocolo}</div>
            <div className="text-xs text-slate-500">Criado em {fmtDateTime(caso.createdAt)}</div>
            <div className="ml-auto"><StatusBadge status={caso.status} /></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Info label="Unidade" value={caso.unidade} icon={<Building2 size={14} />} />
            <Info label="Categoria" value={caso.categoria} icon={<FileText size={14} />} />
            <Info label="Anonimato" value={caso.anonimo ? "Anônimo" : "Identificado"} icon={<Lock size={14} />} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Descrição</h4>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{caso.descricao}</p>
          </div>
          {!!caso?.anexos?.length && (
            <div>
              <h4 className="text-sm font-medium mb-2">Anexos</h4>
              <ul className="text-sm space-y-1">
                {caso.anexos.map((a, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FileCheck2 size={16} className="text-emerald-600" />
                    <a href={a.dataUrl} download={a.name} className="underline">{a.name}</a>
                    <span className="text-xs text-slate-400">({(a.size/1024).toFixed(0)} KB)</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium mb-2">Histórico</h4>
            <ul className="space-y-2">
              {caso.historico.map((h, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-xs text-slate-500 mt-0.5 w-44 shrink-0">{fmtDateTime(h.at)} — {h.by}</span>
                  <span className="text-slate-700">{h.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-3 items-start">
            <textarea className="w-full rounded-lg border p-3 min-h-[80px]" placeholder="Enviar mensagem/atualização ao time…" value={msg} onChange={(e)=>setMsg(e.target.value)} />
            <button onClick={enviarMensagem} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Enviar</button>
          </div>
        </Card>
      )}
    </section>
  );
}

const Info = ({ label, value, icon }) => (
  <div className="p-3 rounded-xl bg-slate-100 border">
    <div className="text-[11px] text-slate-500 flex items-center gap-2">{icon}{label}</div>
    <div className="text-sm mt-1">{value}</div>
  </div>
);

const StatusBadge = ({ status }) => {
  const map = {
    "Recebido": "bg-slate-100 text-slate-700 border-slate-200",
    "Em análise": "bg-amber-50 text-amber-700 border-amber-200",
    "Encaminhado": "bg-blue-50 text-blue-700 border-blue-200",
    "Concluído": "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${map[status] || 'bg-slate-100 text-slate-700'}`}>{status}</span>
  );
};

function FAQ() {
  return (
    <section id="faq" className="space-y-6">
      <SectionTitle icon={HelpCircle} title="Perguntas frequentes" />
      <Card className="space-y-4 text-sm">
        <Item q="Posso denunciar de forma anônima?" a="Sim. Basta manter marcada a opção 'Quero permanecer anônimo' no formulário." />
        <Item q="Como acompanho minha denúncia?" a="Ao finalizar, você receberá um código de protocolo. Guarde-o para consultar o andamento na seção 'Acompanhar'." />
        <Item q="Quais dados são coletados?" a="Apenas os dados preenchidos por você. No protótipo, tudo fica salvo apenas no seu dispositivo (localStorage). Em produção, os dados serão armazenados com criptografia e acesso restrito." />
        <Item q="Posso anexar evidências?" a="Sim, em formatos comuns (imagens/PDF). Recomenda-se remover metadados sensíveis antes do envio." />
        <Item q="O que acontece após o envio?" a="O time responsável irá analisar, classificar e, se necessário, solicitar informações adicionais por meio do próprio canal." />
      </Card>
    </section>
  );
}

const Item = ({ q, a }) => (
  <div>
    <div className="font-medium">{q}</div>
    <div className="text-slate-600 mt-1">{a}</div>
  </div>
);

function Politica() {
  return (
    <section id="politica" className="space-y-6">
      <SectionTitle icon={Lock} title="Política do Canal e Privacidade (LGPD)" />
      <Card className="text-sm space-y-3 text-slate-700">
        <p>
          Este canal tem por objetivo receber relatos de boa-fé sobre irregularidades, condutas antiéticas ou riscos à integridade da empresa e de seus colaboradores.
          O uso é voluntário e pode ser anônimo. Relatos de má-fé podem ser apurados disciplinarmente e/ou nas esferas legais cabíveis.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Base legal: legítimo interesse e cumprimento de obrigação legal/regulatória.</li>
          <li>Dados tratados: informações fornecidas pelo denunciante e metadados técnicos mínimos (em produção, com anonimização sempre que possível).</li>
          <li>Retenção: somente pelo tempo necessário à apuração e conforme exigências legais.</li>
          <li>Segurança: controles de acesso, criptografia e registros de auditoria no ambiente produtivo.</li>
          <li>Direitos do titular: quando identificável, respeitados os limites para não prejudicar investigações.</li>
        </ul>
        <p>Em caso de dúvidas, utilize o canal de contato institucional da empresa.</p>
      </Card>
    </section>
  );
}

function PainelDemo() {
  const [casos, setCasos] = useState(loadCasos());
  const [filtro, setFiltro] = useState("");
  const [status, setStatus] = useState("");

  const refresh = () => setCasos(loadCasos());

  const filtrados = useMemo(() => {
    return casos.filter(c =>
      (!filtro || c.protocolo.includes(filtro) || c.descricao.toLowerCase().includes(filtro.toLowerCase())) &&
      (!status || c.status === status)
    );
  }, [casos, filtro, status]);

  const mudarStatus = (p, novo) => {
    const arr = loadCasos();
    const idx = arr.findIndex(c => c.protocolo === p);
    if (idx === -1) return;
    arr[idx].status = novo;
    arr[idx].historico.push({ at: new Date().toISOString(), by: "admin", texto: `Status alterado para '${novo}'`});
    saveCasos(arr);
    setCasos(arr);
  };

  const limparTudo = () => {
    if (!confirm("Apagar todos os casos deste dispositivo?")) return;
    saveCasos([]); setCasos([]);
  };

  return (
    <section id="painel" className="space-y-6">
      <SectionTitle icon={ShieldAlert} title="Painel (DEMO local)" subtitle="Apenas para validar o fluxo. Em produção, use autenticação e banco seguro." />
      <Card className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <input className="flex-1 rounded-lg border p-2" placeholder="Filtrar por texto ou protocolo" value={filtro} onChange={(e)=>setFiltro(e.target.value)} />
          <select className="rounded-lg border p-2" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="">Todos status</option>
            {['Recebido','Em análise','Encaminhado','Concluído'].map(s => <option key={s}>{s}</option>)}
          </select>
          <button onClick={refresh} className="px-3 py-2 rounded-lg border">Atualizar</button>
          <button onClick={limparTudo} className="px-3 py-2 rounded-lg border text-rose-700">Limpar tudo (local)</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2 pr-4">Protocolo</th>
                <th className="py-2 pr-4">Criado</th>
                <th className="py-2 pr-4">Unidade</th>
                <th className="py-2 pr-4">Categoria</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map(c => (
                <tr key={c.protocolo} className="border-t">
                  <td className="py-2 pr-4 font-mono text-xs">{c.protocolo}</td>
                  <td className="py-2 pr-4">{fmtDateTime(c.createdAt)}</td>
                  <td className="py-2 pr-4">{c.unidade}</td>
                  <td className="py-2 pr-4">{c.categoria}</td>
                  <td className="py-2 pr-4"><StatusBadge status={c.status} /></td>
                  <td className="py-2 pr-4 space-x-2">
                    {['Recebido','Em análise','Encaminhado','Concluído'].map(s => (
                      <button key={s} onClick={()=>mudarStatus(c.protocolo, s)} className="text-xs px-2 py-1 rounded border hover:bg-slate-50">{s}</button>
                    ))}
                  </td>
                </tr>
              ))}
              {!filtrados.length && (
                <tr><td colSpan={6} className="py-6 text-center text-slate-500">Nenhum caso ainda.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="text-xs text-slate-500 space-y-1">
        <div>⚠️ Este painel é apenas para testar localmente. No ambiente produtivo, implemente:</div>
        <ul className="list-disc pl-5 space-y-1">
          <li>API segura (JWT/OAuth), RBAC e trilhas de auditoria;</li>
          <li>Criptografia em trânsito (HTTPS) e em repouso (KMS/at-rest);</li>
          <li>Sanitização de arquivos e remoção de metadados em anexos;</li>
          <li>Rotina de retenção e descarte, e logs imutáveis;</li>
          <li>Fluxos de comunicação com denunciante via caixa segura no próprio portal.</li>
        </ul>
      </Card>
    </section>
  );
}

const Page = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800">
    <Header />
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">{children}</main>
    <Footer />
  </div>
);

export default function App() {
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash || '#home' : '#home');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <Page>
      {hash === '#home' && <Home />}
      {hash === '#report' && <Report />}
      {hash === '#status' && <Track />}
      {hash === '#faq' && <FAQ />}
      {hash === '#politica' && <Politica />}
      {hash === '#painel' && <PainelDemo />}
    </Page>
  );
}

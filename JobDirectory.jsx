// Job directory — primary R&S screen
const SAMPLE_JOBS = [
  { id: "j1", title: "Engenheiro Front-end", dept: "Tecnologia", location: "São Paulo · Híbrido", contract: "CLT", level: "Sênior", status: "Ativa", candidates: 128, days: 12, ownerColor: "#003CFD", owner: "Renata Silva" },
  { id: "j2", title: "Analista de RH", dept: "Pessoas", location: "Remoto", contract: "PJ", level: "Pleno", status: "Ativa", candidates: 42, days: 5, ownerColor: "#7D35F8", owner: "André Rocha" },
  { id: "j3", title: "Designer Sênior", dept: "Produto", location: "Rio de Janeiro · Híbrido", contract: "CLT", level: "Sênior", status: "Em rascunho", candidates: 0, days: 0, ownerColor: "#288636", owner: "Lucas Pinto" },
  { id: "j4", title: "Gerente de Engenharia", dept: "Tecnologia", location: "Remoto", contract: "CLT", level: "Especialista", status: "Ativa", candidates: 36, days: 21, ownerColor: "#CC4F28", owner: "Marina Vieira" },
  { id: "j5", title: "Estagiário de Marketing", dept: "Marketing", location: "São Paulo · Presencial", contract: "Estágio", level: "Júnior", status: "Pausada", candidates: 215, days: 30, ownerColor: "#0D79BC", owner: "João Carvalho" },
  { id: "j6", title: "Customer Success", dept: "Customer", location: "Remoto", contract: "CLT", level: "Pleno", status: "Ativa", candidates: 67, days: 8, ownerColor: "#E4851C", owner: "Paula Tavares" },
];

function StatusChip({ status }) {
  const map = {
    "Ativa": { variant: "soft", color: "success" },
    "Em rascunho": { variant: "filled", color: "default" },
    "Pausada": { variant: "soft", color: "warning" },
    "Encerrada": { variant: "soft", color: "error" },
  };
  const cfg = map[status] || map["Ativa"];
  return <Chip variant={cfg.variant} color={cfg.color}>{status}</Chip>;
}

function JobDirectory({ onOpenJob, onLogout, user }) {
  const [active, setActive] = useState("vagas");
  const [tab, setTab] = useState("all");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(null);

  const filtered = SAMPLE_JOBS.filter(j => {
    if (tab === "active" && j.status !== "Ativa") return false;
    if (tab === "drafts" && j.status !== "Em rascunho") return false;
    if (tab === "paused" && j.status !== "Pausada") return false;
    if (query && !j.title.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <AppBar
        product="Recrutamento & Seleção"
        crumbs={["R&S", "Vagas"]}
        user={user}
      />
      <div className="eco-page">
        <Sidebar
          active={active}
          onSelect={(id) => id === "logout" ? onLogout() : setActive(id)}
          items={[
            { id: "home", icon: "home", label: "Início" },
            { id: "vagas", icon: "work", label: "Vagas", badge: 6 },
            { id: "candidatos", icon: "groups", label: "Candidatos" },
            { id: "talentos", icon: "stars", label: "Banco de talentos" },
            { id: "rel", icon: "bar_chart", label: "Relatórios" },
            { id: "config", icon: "settings", label: "Configurações" },
            { id: "logout", icon: "logout", label: "Sair" },
          ]}
        />
        <main className="eco-main">
          <div className="eco-page-head">
            <div>
              <h1 className="eco-page-title">Vagas</h1>
              <div className="eco-page-sub">{filtered.length} vagas · sincronizado há 2 minutos</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="outlined" startIcon="filter_list">Filtrar</Button>
              <Button variant="contained" startIcon="add">Criar vaga</Button>
            </div>
          </div>

          <Tabs
            active={tab}
            onChange={setTab}
            items={[
              { id: "all", label: "Todas (6)" },
              { id: "active", label: "Ativas (4)" },
              { id: "drafts", label: "Rascunhos (1)" },
              { id: "paused", label: "Pausadas (1)" },
              { id: "closed", label: "Encerradas" },
            ]}
          />

          <div className="job-toolbar">
            <TextField
              startIcon="search"
              placeholder="Pesquisar por título, departamento ou responsável"
              value={query}
              onChange={setQuery}
              fullWidth
              style={{ flex: 1 }}
            />
            <Chip variant="outlined">Departamento: Todos</Chip>
            <Chip variant="outlined">Local: Todos</Chip>
            <Chip variant="outlined">Nível: Todos</Chip>
          </div>

          <div className="job-grid">
            {filtered.map(j => (
              <Card key={j.id} padding={20} elevation={1} style={{ cursor: "pointer" }}>
                <div className="job-card-head">
                  <div>
                    <div className="job-card-title" onClick={() => onOpenJob(j)}>{j.title}</div>
                    <div className="job-card-sub">{j.dept} · {j.location}</div>
                  </div>
                  <StatusChip status={j.status} />
                </div>
                <div className="job-card-meta">
                  <Chip variant="filled">{j.contract}</Chip>
                  <Chip variant="filled">{j.level}</Chip>
                </div>
                <div className="job-card-foot">
                  <div className="job-card-owner">
                    <Avatar name={j.owner} color={j.ownerColor} size={28} />
                    <span>{j.owner}</span>
                  </div>
                  <div className="job-card-stat">
                    <Icon name="people_alt" size={18} style={{ color: "var(--eco-text-tertiary)" }} />
                    <strong>{j.candidates}</strong>
                    <span style={{ color: "var(--eco-text-tertiary)" }}>candidatos</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

window.JobDirectory = JobDirectory;

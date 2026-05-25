// Job detail — candidate pipeline view

const PIPELINE = [
  { id: "applied", label: "Candidatura", count: 128 },
  { id: "screen", label: "Triagem", count: 64 },
  { id: "test", label: "Teste técnico", count: 28 },
  { id: "interview", label: "Entrevista", count: 12 },
  { id: "offer", label: "Proposta", count: 3 },
  { id: "hired", label: "Contratado", count: 1 },
];

const CANDIDATES = [
  { name: "Renata Silva", role: "Eng. Front-end", color: "#003CFD", score: 92, stage: "Entrevista", days: 2, tags: ["React", "TypeScript", "Inglês"] },
  { name: "André Rocha", role: "Eng. Full-stack", color: "#7D35F8", score: 88, stage: "Teste técnico", days: 4, tags: ["Node.js", "AWS"] },
  { name: "Lucas Pinto", role: "Eng. Front-end", color: "#288636", score: 81, stage: "Triagem", days: 1, tags: ["Vue", "CSS"] },
  { name: "Marina Vieira", role: "Eng. Mobile", color: "#CC4F28", score: 79, stage: "Entrevista", days: 3, tags: ["React Native"] },
  { name: "João Carvalho", role: "Eng. Front-end", color: "#0D79BC", score: 74, stage: "Triagem", days: 6, tags: ["Angular"] },
];

function JobDetail({ job, onBack, user }) {
  const [tab, setTab] = useState("candidates");

  return (
    <>
      <AppBar
        product="Recrutamento & Seleção"
        crumbs={["R&S", "Vagas", job.title]}
        user={user}
      />
      <div className="eco-page">
        <Sidebar
          active="vagas"
          items={[
            { id: "home", icon: "home", label: "Início" },
            { id: "vagas", icon: "work", label: "Vagas", badge: 6 },
            { id: "candidatos", icon: "groups", label: "Candidatos" },
            { id: "talentos", icon: "stars", label: "Banco de talentos" },
            { id: "rel", icon: "bar_chart", label: "Relatórios" },
            { id: "config", icon: "settings", label: "Configurações" },
          ]}
        />
        <main className="eco-main">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow_back" size={20} />
            <span>Voltar para vagas</span>
          </button>

          <div className="eco-page-head">
            <div>
              <h1 className="eco-page-title">{job.title}</h1>
              <div className="eco-page-sub">{job.dept} · {job.location} · publicada há {job.days} dias</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="outlined" startIcon="share">Compartilhar</Button>
              <Button variant="outlined" startIcon="edit">Editar vaga</Button>
              <Button variant="contained" startIcon="person_add">Convidar candidato</Button>
            </div>
          </div>

          <div className="pipeline">
            {PIPELINE.map((p, i) => (
              <React.Fragment key={p.id}>
                <div className="pipeline-stage">
                  <div className="pipeline-count">{p.count}</div>
                  <div className="pipeline-label">{p.label}</div>
                </div>
                {i < PIPELINE.length - 1 && <div className="pipeline-arrow"><Icon name="chevron_right" size={20} /></div>}
              </React.Fragment>
            ))}
          </div>

          <Tabs
            active={tab}
            onChange={setTab}
            items={[
              { id: "candidates", label: "Candidatos" },
              { id: "details", label: "Detalhes da vaga" },
              { id: "steps", label: "Etapas" },
              { id: "reports", label: "Relatórios" },
            ]}
          />

          <div className="candidate-toolbar">
            <TextField startIcon="search" placeholder="Pesquisar pelo nome ou e-mail do candidato" fullWidth style={{ flex: 1 }} />
            <Button variant="outlined" startIcon="filter_list">Filtros</Button>
            <Button variant="outlined" startIcon="download">Exportar</Button>
          </div>

          <table className="eco-table">
            <thead>
              <tr>
                <th style={{width:32}}><Checkbox /></th>
                <th>Candidato</th>
                <th>Etapa</th>
                <th>Score</th>
                <th>Habilidades</th>
                <th style={{textAlign:"right"}}>Atualizado</th>
                <th style={{width:32}}></th>
              </tr>
            </thead>
            <tbody>
              {CANDIDATES.map((c, i) => (
                <tr key={i} className="row-hover">
                  <td><Checkbox /></td>
                  <td>
                    <div className="eco-cell-user">
                      <Avatar name={c.name} color={c.color} size={36} />
                      <div>
                        <div style={{ fontWeight: 600 }}>{c.name}</div>
                        <div className="eco-cell-sub">{c.role}</div>
                      </div>
                    </div>
                  </td>
                  <td><Chip variant="soft" color="info">{c.stage}</Chip></td>
                  <td>
                    <div className="score">
                      <div className="score-bar"><div className="score-fill" style={{ width: c.score + "%" }} /></div>
                      <span>{c.score}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {c.tags.map(t => <Chip key={t} variant="outlined">{t}</Chip>)}
                    </div>
                  </td>
                  <td style={{ textAlign: "right", color: "var(--eco-text-secondary)" }}>há {c.days}d</td>
                  <td><button className="eco-icon-btn sm"><Icon name="more_vert" size={20} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

window.JobDetail = JobDetail;

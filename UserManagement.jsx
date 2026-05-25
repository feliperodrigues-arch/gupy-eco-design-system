// User management screen — mirrors /Screens/User-management

const USERS = [
  { name: "Renata Silva", email: "renata@gupy.io", role: "Administrador", team: "Tecnologia", color: "#003CFD", last: "agora", active: true },
  { name: "André Rocha", email: "andre@gupy.io", role: "Recrutador", team: "Pessoas", color: "#7D35F8", last: "há 2h", active: true },
  { name: "Lucas Pinto", email: "lucas@gupy.io", role: "Recrutador", team: "Produto", color: "#288636", last: "há 1d", active: true },
  { name: "Marina Vieira", email: "marina@gupy.io", role: "Gestor", team: "Tecnologia", color: "#CC4F28", last: "há 3d", active: true },
  { name: "João Carvalho", email: "joao@gupy.io", role: "Visualizador", team: "Marketing", color: "#0D79BC", last: "há 7d", active: false },
];

function UserManagement({ user }) {
  const [active, setActive] = useState("usuarios");
  return (
    <>
      <AppBar product="Configurações" crumbs={["Configurações", "Usuários"]} user={user} />
      <div className="eco-page">
        <Sidebar
          active={active}
          onSelect={setActive}
          items={[
            { id: "perfil", icon: "person", label: "Perfil" },
            { id: "empresa", icon: "business", label: "Empresa" },
            { id: "usuarios", icon: "groups", label: "Usuários", badge: 5 },
            { id: "permissoes", icon: "shield", label: "Permissões" },
            { id: "integracoes", icon: "extension", label: "Integrações" },
            { id: "billing", icon: "credit_card", label: "Faturamento" },
          ]}
        />
        <main className="eco-main">
          <div className="eco-page-head">
            <div>
              <h1 className="eco-page-title">Usuários</h1>
              <div className="eco-page-sub">Gerencie quem tem acesso ao Gupy R&amp;S</div>
            </div>
            <Button variant="contained" startIcon="person_add">Convidar usuário</Button>
          </div>

          <Alert severity="info" title="Você atingiu 5 de 10 licenças do seu plano">
            Adicione mais licenças em <a href="#" onClick={(e)=>e.preventDefault()}>Faturamento</a>.
          </Alert>

          <div className="user-toolbar">
            <TextField startIcon="search" placeholder="Pesquise pelo nome ou e-mail" fullWidth style={{ flex: 1 }} />
            <Chip variant="outlined">Perfil: Todos</Chip>
            <Chip variant="outlined">Time: Todos</Chip>
            <Switch on={true}>Mostrar inativos</Switch>
          </div>

          <table className="eco-table">
            <thead>
              <tr>
                <th style={{width:32}}><Checkbox /></th>
                <th>Usuário</th>
                <th>Perfil</th>
                <th>Time</th>
                <th>Último acesso</th>
                <th>Status</th>
                <th style={{width:32}}></th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u, i) => (
                <tr key={i} className="row-hover">
                  <td><Checkbox /></td>
                  <td>
                    <div className="eco-cell-user">
                      <Avatar name={u.name} color={u.color} size={36} />
                      <div>
                        <div style={{ fontWeight: 600 }}>{u.name}</div>
                        <div className="eco-cell-sub">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{u.role}</td>
                  <td>{u.team}</td>
                  <td style={{ color: "var(--eco-text-secondary)" }}>{u.last}</td>
                  <td>{u.active
                    ? <Chip variant="soft" color="success">Ativo</Chip>
                    : <Chip variant="filled">Inativo</Chip>}</td>
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

window.UserManagement = UserManagement;

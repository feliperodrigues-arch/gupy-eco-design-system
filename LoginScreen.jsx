// Login + signup screen for Gupy R&S
// Mirrors /Screens/Log-in from the Eco Figma library

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("ana.silva@gupy.io");
  const [password, setPassword] = useState("••••••••••");
  const [terms, setTerms] = useState(true);

  return (
    <div className="login-shell">
      <div className="login-bg" />
      <div className="login-card">
        <div className="login-header">
          <img src="../../assets/gupy-logo-cobalt.png" alt="Gupy" className="login-logo" />
          <h1>Acesse sua conta</h1>
          <p>Gerencie vagas, candidatos e processos seletivos.</p>
        </div>
        <div className="login-form">
          <TextField label="E-mail" value={email} onChange={setEmail} fullWidth helper="Use o e-mail corporativo" />
          <TextField label="Senha" value={password} onChange={setPassword} type="password" fullWidth endIcon="visibility" />
          <Checkbox checked={terms} onChange={setTerms}>Aceito os <a href="#" onClick={(e)=>e.preventDefault()}>Termos de Uso</a></Checkbox>
          <Button variant="contained" size="lg" fullWidth onClick={onLogin} disabled={!terms}>Entrar</Button>
          <div className="login-links">
            <a href="#" onClick={(e)=>e.preventDefault()}>Criar conta</a>
            <span className="dot" />
            <a href="#" onClick={(e)=>e.preventDefault()}>Esqueci minha senha</a>
          </div>
        </div>
        <div className="login-footer">
          <span>© 2026 Gupy · </span>
          <a href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidade</a>
        </div>
      </div>
    </div>
  );
}

window.LoginScreen = LoginScreen;

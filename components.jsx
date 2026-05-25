// Reusable Eco components for the Gupy R&S UI kit
// Babel/React via globals; all visuals follow Eco tokens in colors_and_type.css

const { useState } = React;

// ─────────── Icon
function Icon({ name, size, filled, color, style }) {
  return <span className={"mat-icon" + (filled ? " filled" : "")}
    style={{ fontSize: size || 24, color, ...style }}>{name}</span>;
}

// ─────────── Button (pill)
function Button({ children, variant = "contained", color = "primary", size = "md", startIcon, endIcon, onClick, disabled, fullWidth, style }) {
  const cls = `eco-btn eco-btn-${variant} eco-btn-${color} eco-btn-${size}` + (disabled ? " is-disabled" : "") + (fullWidth ? " full" : "");
  return (
    <button className={cls} onClick={onClick} disabled={disabled} style={style}>
      {startIcon && <Icon name={startIcon} size={size === "sm" ? 16 : 18} />}
      <span>{children}</span>
      {endIcon && <Icon name={endIcon} size={size === "sm" ? 16 : 18} />}
    </button>
  );
}

// ─────────── TextField
function TextField({ label, value, onChange, type = "text", placeholder, startIcon, endIcon, error, helper, fullWidth, style }) {
  return (
    <label className={"eco-tf" + (error ? " has-error" : "") + (fullWidth ? " full" : "")} style={style}>
      {label && <span className="eco-tf-label">{label}</span>}
      <span className="eco-tf-wrap">
        {startIcon && <Icon name={startIcon} size={20} style={{ color: "var(--eco-text-tertiary)", marginLeft: 12 }} />}
        <input
          className="eco-tf-input"
          type={type}
          value={value || ""}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {endIcon && <Icon name={endIcon} size={20} style={{ color: "var(--eco-text-tertiary)", marginRight: 12 }} />}
      </span>
      {helper && <span className={"eco-tf-helper" + (error ? " err" : "")}>{helper}</span>}
    </label>
  );
}

// ─────────── Checkbox
function Checkbox({ checked, onChange, children, indeterminate }) {
  const state = indeterminate ? "indet" : checked ? "checked" : "";
  return (
    <label className="eco-cb" onClick={() => onChange && onChange(!checked)}>
      <span className={"eco-cb-box " + state}>
        {checked && !indeterminate && <Icon name="check" size={14} />}
      </span>
      {children && <span>{children}</span>}
    </label>
  );
}

// ─────────── Switch
function Switch({ on, onChange, children }) {
  return (
    <label className="eco-sw">
      <span className={"eco-sw-track" + (on ? " on" : "")} onClick={() => onChange && onChange(!on)}>
        <span className="eco-sw-knob" />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
}

// ─────────── Avatar
function Avatar({ name, size = 36, color = "#003CFD", square, src }) {
  const initials = name ? name.split(" ").filter(Boolean).slice(0, 2).map(s => s[0]).join("").toUpperCase() : "";
  return (
    <span className={"eco-av" + (square ? " sq" : "")}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38), background: src ? `center/cover url(${src})` : color }}>
      {!src && initials}
    </span>
  );
}

// ─────────── Chip
function Chip({ children, variant = "outlined", color = "default", onDelete }) {
  return (
    <span className={`eco-chip eco-chip-${variant} eco-chip-${color}`}>
      {children}
      {onDelete && <span className="eco-chip-x" onClick={onDelete}>×</span>}
    </span>
  );
}

// ─────────── Card
function Card({ children, style, padding = 16, elevation = 1 }) {
  return <div className={"eco-card eco-elev-" + elevation} style={{ padding, ...style }}>{children}</div>;
}

// ─────────── AppBar
function AppBar({ product = "Recrutamento & Seleção", crumbs = [], user, onSearch }) {
  return (
    <div className="eco-appbar">
      <a className="eco-appbar-logo" href="#" onClick={(e) => e.preventDefault()}>
        <img src="../../assets/gupy-logo-navy.png" alt="Gupy" />
      </a>
      <span className="eco-appbar-divider" />
      <div className="eco-appbar-product">{product}</div>
      {crumbs.length > 0 && <>
        <span className="eco-appbar-divider" />
        <div className="eco-crumbs">
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Icon name="chevron_right" size={18} style={{ color: "var(--eco-text-tertiary)" }} />}
              <span className={i === crumbs.length - 1 ? "now" : ""}>{c}</span>
            </React.Fragment>
          ))}
        </div>
      </>}
      <div className="eco-appbar-spacer" />
      <button className="eco-icon-btn" onClick={onSearch}><Icon name="search" size={22} /></button>
      <button className="eco-icon-btn"><Icon name="notifications" size={22} /></button>
      <button className="eco-icon-btn"><Icon name="help" size={22} /></button>
      {user && <Avatar name={user.name} color={user.color || "#003CFD"} size={36} />}
    </div>
  );
}

// ─────────── Sidebar (Drawer)
function Sidebar({ items, active, onSelect }) {
  return (
    <nav className="eco-side">
      {items.map(it => (
        <button key={it.id}
          className={"eco-side-item" + (active === it.id ? " active" : "")}
          onClick={() => onSelect && onSelect(it.id)}>
          <Icon name={it.icon} size={22} filled={active === it.id} />
          <span>{it.label}</span>
          {it.badge != null && <span className="eco-side-badge">{it.badge}</span>}
        </button>
      ))}
    </nav>
  );
}

// ─────────── Tabs
function Tabs({ items, active, onChange }) {
  return (
    <div className="eco-tabs">
      {items.map(t => (
        <button key={t.id}
          className={"eco-tab" + (active === t.id ? " active" : "")}
          onClick={() => onChange && onChange(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

// ─────────── Alert
function Alert({ severity = "info", title, children, onClose }) {
  const icons = { success: "check_circle", info: "info", warning: "warning", error: "error" };
  return (
    <div className={"eco-alert eco-alert-" + severity}>
      <Icon name={icons[severity]} size={22} filled className="ico" />
      <div className="eco-alert-body">
        {title && <div className="eco-alert-title">{title}</div>}
        <div>{children}</div>
      </div>
      {onClose && <button className="eco-icon-btn sm" onClick={onClose}><Icon name="close" size={18} /></button>}
    </div>
  );
}

// expose to global
Object.assign(window, { Icon, Button, TextField, Checkbox, Switch, Avatar, Chip, Card, AppBar, Sidebar, Tabs, Alert });

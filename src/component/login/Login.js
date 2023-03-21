import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import dataLogin from "./dataLogin.js";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = dataLogin.find((user) => user.username === username);

    if (!user) {
      setError("Username không tồn tại");
    } else if (user.password !== password) {
      setError("Pass không đúng");
    } else {
      setError("");
      console.log("Đăng nhập thành công");
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
      <div className="logo">
        <img src="/logo-company (1).png" alt="Logo Company"/>
      </div>
      <div className="formUsername">
          <PersonIcon className="icon"/>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="formPassword">
          <LockIcon className="icon"/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Button type="submit" className="btn btn-primary">Login</Button>

      {error && <p className="error">{error}</p>}
      </Form>
    </div>
    <footer className="menu-container">
          <nav>
            <ul>
              <li><a href="/guide">Guideline</a></li>
              <li><a href="/prb">Priceboard</a></li>
              <li><a href="/analytic">Market Analytic</a></li>
              <li><a href="/ibonds">IBonds</a></li>
              <li><a href="/account">Account manage</a></li>
              <li><a href="/appstore">App store</a></li>
              <li><a href="/chplay">CH Play</a></li>
            </ul>
          </nav>
    </footer>
    </div>
  );
};

export default Login;

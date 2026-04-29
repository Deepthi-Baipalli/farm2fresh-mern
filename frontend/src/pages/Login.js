import React, { useState } from "react";
import { loginUser } from "../api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await loginUser(form);
    localStorage.setItem("token", res.token);
    alert("Login successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

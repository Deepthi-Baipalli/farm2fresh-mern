import React, { useState } from "react";
import { registerUser } from "../api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    await registerUser(form);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;

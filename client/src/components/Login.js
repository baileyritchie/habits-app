
import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from '../context/Auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password
      }

      await axios.post("http://localhost:5000/api/users/login",loginData);
      await getLoggedIn();
      console.log("user logged in");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

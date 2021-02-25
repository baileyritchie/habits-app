import axios from 'axios';
import React, { useContext } from 'react'
import AuthContext from '../context/Auth';

export default function Logout() {
  const {getLoggedIn} = useContext(AuthContext);
  async function logout(e) {
    e.preventDefault();
    try {
      await axios.get("http://localhost:5000/api/users/logout");
      await getLoggedIn();
      console.log("user logged out");
    } catch (err) {
      console.log(err.message);
    } 
  }
  return (
    <div>
      <button onClick={logout}>
        Log Out
      </button>
    </div>
  )
}

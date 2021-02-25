import {AuthContextProvider} from './context/Auth';
import axios from "axios";
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

axios.defaults.withCredentials = true;
function App() {
  return (
    <AuthContextProvider>
      <h1> Main App Page </h1>
      <Login/>
      <Register/>
      <Logout/>
    </AuthContextProvider>

  );
}

export default App;

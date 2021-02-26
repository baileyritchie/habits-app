import {AuthContextProvider} from './context/Auth';
import axios from "axios";
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Habits from './components/Habits';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

axios.defaults.withCredentials = true;
function App() {
  return (
    <AuthContextProvider>
      <h1> Main App Page </h1>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Habits/>
          </Route>
        </Switch>
      </Router>
      <Logout></Logout>
    </AuthContextProvider>

  );
}

export default App;

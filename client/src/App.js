import {AuthContextProvider} from './context/Auth';
import axios from "axios";
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import HabitForm from './components/HabitForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EditHabitForm from './components/EditHabitForm';
import HabitGroups from './components/HabitGroups';
import CreateHabitGroupForm from './components/CreateHabitGroupForm';

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
          <Route path="/habits/:habitId/edit">
            <EditHabitForm/>
          </Route>
          <Route path="/habitgroups/create">
            <CreateHabitGroupForm/>
          </Route>
          <Route path="/habitgroups/:habitGroupId/create">
            <HabitForm/>
          </Route>
          
          <Route path="/">
            <HabitGroups/>
          </Route>
    
        </Switch>
      </Router>
      <Logout></Logout>
    </AuthContextProvider>

  );
}

export default App;

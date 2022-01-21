import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import AuthorizationComponent from './components/AuthorizationComponent/AuthorizationComponent';
import RegistrationComponent from './components/RegistrationComponent/RegistrationComponent';

function App() {
  return (
    <div>
    <Switch>
      <Route path="/authorization">
        <AuthorizationComponent />   
      </Route>
      <Route path="/registration">
        <RegistrationComponent />
      </Route>
      <Redirect from="/" to="/authorization" />
    </Switch>
    </div>
  );
}

export default App;

import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationComponent from "./components/AuthorizationComponent/AuthorizationComponent";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import "./App.css";

const HospitalComponent = () => {
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

export default HospitalComponent;

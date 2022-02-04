import { Switch, Route, Redirect } from "react-router-dom";
import AuthorizationComponent from "./components/AuthorizationComponent/AuthorizationComponent";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import MainComponent from "./components/MainComponent/MainComponent";
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
        <Route path="/main"
          render={() =>
            localStorage.getItem("token") ? (
              <MainComponent />
            ) : (
              <Redirect to="/authorization" />
            )
          }
        ></Route>
        <Redirect to="/authorization" />
      </Switch>
    </div>
  );
}

export default HospitalComponent;

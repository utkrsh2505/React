import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Services } from "../pages/Services";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Services">
        <Services />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
    </div>
  );
}
export { AllRoutes };

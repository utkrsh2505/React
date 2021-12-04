import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { User } from "../pages/User";
function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
    </div>
  );
}
export { AllRoutes };

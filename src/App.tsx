import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/rooms/new">
              <NewRoom />
            </Route>
            <Route path="/rooms/:id">
              <Room />
            </Route>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

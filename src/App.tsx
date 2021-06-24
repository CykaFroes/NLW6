import { Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rooms/new">
            <NewRoom />
          </Route>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

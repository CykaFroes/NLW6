import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rooms/new">
          <NewRoom />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;

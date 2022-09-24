import {Route, Routes} from "react-router-dom";
import {pages} from "../../engine/config/routers";
import Layout from "./Layout";
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import {history} from "../../engine/init/store";

function App() {
  return (
          <Router history={history}>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      {pages.map((route) => (
                          <Route
                              element={route.element}
                              path={route.link}
                              key={route.link}
                          />
                      ))}
                  </Route>
              </Routes>
          </Router>
  );
}

export default App;

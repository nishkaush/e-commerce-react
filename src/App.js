import React from "react";
import "./App.css";
import { routes } from "./router/routes";
import Header from "./components/header/header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
// import ListOfGifs from "./components/ListOfGifs";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Detail from "./Pages/Detail";
import { Route } from "wouter";

// Si utilizamos Link, nos crea enlaces que funcionan con el history.push para no
// refrescar la pagina entera
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;

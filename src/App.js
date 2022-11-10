import React from "react";

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="book">
          <h1 className="dictionary">Dictionary</h1>
        </header>
        <section>
          <Dictionary />
        </section>
        <footer>
          <a
            href="https://github.com/AndreiaIsa/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced
          </a>
          by Andreia Gonçalves
        </footer>
      </div>
    </div>
  );
}

export default App;

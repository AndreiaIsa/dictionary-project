import React from "react";

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="book">
          <h1 className="dictionary">English Dictionary</h1>
        </header>
        <section>
          <Dictionary />
        </section>
        <footer>
          <p>
            <a
              href="https://github.com/AndreiaIsa/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Open sourced</strong>
            </a>
            {""} by Andreia Gonçalves
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

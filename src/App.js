import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="book">
        <h1 className="dictionary">Dictionary</h1>
      </header>
      <section className="definition">searchDefinitions</section>
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
  );
}

export default App;

import React, { useState } from "react";

import { DisplayContent, SearchBar } from "./components";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("react");

  const handleSearchChange = (key) => {
    setSearchTerm(key);
  };

  return (
    <div>
      <SearchBar initSearch={searchTerm} onSearchChange={handleSearchChange} />

      <div className="jumbotron">
        <DisplayContent search={searchTerm}></DisplayContent>

        <hr className="my-4"></hr>
        <a href="https://www.linkedin.com/in/matt1931/">
          <h5 className="float-right">by Matt Lash</h5>
        </a>
      </div>
    </div>
  );
}

export default App;

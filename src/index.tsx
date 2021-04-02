import * as React from "react";
import { render } from "react-dom";
import Search from "./search";
import Table from "./table";

import "./styles.css";

const App = () => {
  const [search, setSearch] = React.useState("");

  const launchSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <div className="searchbar">
        <Search
          placeholder="Cherche ce que tu veux"
          onSubmit={(v) => launchSearch(v)}
        />
      </div>
      <div className="result">
        <Table param={search}></Table>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

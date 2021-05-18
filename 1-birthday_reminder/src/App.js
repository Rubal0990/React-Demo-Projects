import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        <List people={people} />
        {/* <button onClick={() => setpeople([id])}>clear Last</button> */}
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;

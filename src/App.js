import React from "react";
import "./styles/style.css";
import data from "./helper/data";
import Picture from "./components/picture";

function App() {
  console.log(data);

  return (
    <div>
      <Picture data={data} />
    </div>
  );
}

export default App;

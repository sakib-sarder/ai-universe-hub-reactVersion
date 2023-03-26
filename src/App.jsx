import {useState} from "react";
import "./App.css";
import Button from "./component/button/Button";
import Card from "./component/card/Card";
import Cards from "./component/card/Cards";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Button>Sort by Date</Button>
      <Cards></Cards>
    </div>
  );
}

export default App;

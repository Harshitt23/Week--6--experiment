import React, {Fragment} from "react"
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("My name is harshit");

  console.log("APP RENDERED!");

  function updateTitle() {
      setTitle("My name is " + Math.random());
  }

  return (
      <>
          <button onClick={updateTitle}>Update the title</button>
          <Header title={title} />
          <Header title="harshit lol" />
      </>
  );
}

function Header({ title }) {
  console.log("HEADER RENDERED:", title);

  return <div>{title}</div>;
}


export default App

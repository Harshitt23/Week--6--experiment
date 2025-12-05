import React from "react";

function App() {
  return (
    <div>
      <Header title="Welcome to React!" />
      <Header title="This is the second header" />
    </div>
  );
}

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
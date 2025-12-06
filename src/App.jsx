// import React, {Fragment} from "react"
// import { useState } from "react"

// function App() {
//   const [title, setTitle] = useState("My name is harshit");

//   console.log("APP RENDERED!");

//   function updateTitle() {
//       setTitle("only this text will re-render => My name is " + Math.random());
//   }

//   return (
//       <>
//           <button onClick={updateTitle}>Update the title</button>
//           <Header title={title} />
//           <Header title="this text we have to make non re-render" />
//       </>
//   );
// }

// //normal method ~ re renders child too 
// /* 
//       function Header({ title }) {
//         console.log("HEADER RENDERED:", title);       

//         return <div>{title}</div>;
//       }   
// */  


// //                   or (just comment out any of these)


// //Memo method ~ doen't re-render child

//       const Header = React.memo(function Header({ title }) {
//               console.log("HEADER RENDERED:", title);           
//               return <div>{title}</div>;
//             });


// export default App ;
  




//-------------------------TODO assignment in this video at timestamp ~ 56:18--------------------------
import React from "react";
import { Fragment } from "react";
import { useState } from "react";

let counter = 3;        //ye id:_ ko aage bdhate rhega, jb hum naya add todo krte rhenge

function App() {
  const[todos,setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "go to class",
    description: "go to class today"
  }])


function addTodo() {
  setTodos([...todos, {
    id: counter++,
    title: "go to class"+ Math.random(),
    description: "go to class today"+ Math.random()
  }])

}
      return (
        <div>
          <button onClick={addTodo}>Add a todo</button>
          {todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />)}
        </div>
      )
      
}

function Todo({ id, title, description }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid white" }}>
      <h1>{id}</h1>
      <h3>{title}</h3>
      <h2>{description}</h2>
    </div>
  );
}

export default App;
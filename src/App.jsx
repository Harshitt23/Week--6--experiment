// //-----------------------------------------Re render ~ (video starts)---------------------------------
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
  




// //-------------------------TODO assignment in this video at timestamp ~ 56:18--------------------------
// import React from "react";
// import { Fragment } from "react";
// import { useState } from "react";

// let counter = 3;        //ye id:_ ko aage bdhate rhega, jb hum naya add todo krte rhenge

// function App() {
//   const[todos,setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to gym today"
//   },{
//     id: 2,
//     title: "go to class",
//     description: "go to class today"
//   }])


// function addTodo() {
//   setTodos([...todos, {
//     id: counter++,
//     title: "go to class"+ Math.random(),
//     description: "go to class today"+ Math.random()
//   }])

// }
//       return (
//         <div>
//           <button onClick={addTodo}>Add a todo</button>
//           {todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />)}
//         </div>
//       )
      
// }

// function Todo({ id, title, description }) {
//   return (
//     <div style={{ margin: "10px", padding: "10px", border: "1px solid white" }}>
//       <h1>{id}</h1>
//       <h3>{title}</h3>
//       <h2>{description}</h2>
//     </div>
//   );
// }

// export default App;




// //-------------------------Card wrapper at timestamp ~ 1hour:10min--------------------------
// import React from "react";

// function App() {
//   return (
//     <div>
//       <Card>
//         <h1>Hello Harshit</h1>
//         <p>This content is inside a Wrapper Component.</p>
//       </Card>

//       <Card>
//         <h2>Another Card</h2>
//         <p>Wrapper components help reuse layout easily.</p>
//       </Card>
//     </div>
//   );
// }

// //Wrapper Component (uses children)
// function Card({ children }) {                   
//   return (
//     <div style={{
//       padding: "35px",
//       margin: "12px",
//       border: "1px solid black",
//       borderRadius: "20px"
//     }}>
//       {children}
//     </div>
//   );
// }

// export default App;



// //----------------------------------------------USeEffect------------------------------------------
// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetch("http://localhost:3001/todos")
//         .then(res => res.json())
//         .then(data => {
//           setTodos(data || []);
//         })
//         .catch(() => {
//           // handle fetch error silently for now
//         });
//     }, 2000); // polls every 2 sec

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Todos:</h1>
//       {todos.map(todo => (
//         <Todo
//           key={todo.id}
//           id={todo.id}
//           title={todo.title}
//           description={todo.description}
//         />
//       ))}
//     </div>
//   );
// }

// // Todo component accepts title and description and renders them
// function Todo({ id, title, description }) {
//   return (
//     <div style={{ margin: "10px", padding: "10px", border: "2px solid #ccc" }}>
//       <h4>{id}</h4>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;

// //we have created our own server to fetch the data in this todo ~ see the url ( we have made it ourself )
// //u can check how we did it in projects notes 
// //also db.json., we created it to make server



//----------------------------------------------UseMemo------------------------------------------



//----------------------------------------------UseCallBack------------------------------------------

import React from "react";

//----------------------------------------------UseRef------------------------------------------



//----------------------------------------------CustomHooks------------------------------------------



//----------------------------------------------PropDrilling------------------------------------------    

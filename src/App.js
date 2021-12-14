import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [entry, setEntry] = useState("");
  const [todolist, setTodolist] = useState([
    { name: "faire les courses", done: false },
    { name: "faires exercices react", done: true },
  ]);

  const refreshF=()=>{
    setRefresh(!refresh);
  }

  const bSupprimer=(e,index)=>{
    e.stopPropagation();
    todolist.splice(index,1);
    refreshF();
  }
  
  const toggleClass=(item)=>{
    item.done=!item.done;
    refreshF();
  }

  return (
    <div className="App">
      <span>TODOLIST</span>
      <hr></hr>
      <span>SEARCH </span><input value={search} type="text" placeholder="rechercher" onChange={(e)=>{setSearch(e.target.value)}}></input>
      {todolist.map((item,index)=>{
        if (search.length!==0) {
          let pattern=new RegExp(search,"gi");
          if (item.name.match(pattern)) {
            return (<div key={index} className={item.done?"itemLineThrough":"item"} onClick={()=>toggleClass(item)}>
              <button className="mybutton" onClick={(e)=>bSupprimer(e,index)}>❌</button> {item.name}</div>);
          }
        } else return (<div key={index} className={item.done?"itemLineThrough":"item"} onClick={()=>toggleClass(item)}>
          <button className="mybutton" onClick={(e)=>{bSupprimer(e,index);}}>❌</button> {item.name}</div>);
      })}

      <input value={entry} type="text" placeholder="entrez un nouvel item" onChange={(event)=>{setEntry(event.target.value);}}/>
      <button onClick={()=>{todolist.push({ name: entry, done: false });setEntry("");}}>Ajouter le nouvel item</button>
    </div>
  );
}

export default App;

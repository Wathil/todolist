import "./App.css";
import { useState } from "react";
import { Ligne } from "./Ligne";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState({pattern:"", flags:"gi"});
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

  const myFilter=(item)=>{
    if (item.name.match(new RegExp(search.pattern, search.flags))) return true;
    return false;
  }

  const myMap=(item,index)=>{
    return <Ligne index={index} item={item} bSupprimer={bSupprimer} toggleClass={toggleClass}/>
  }

  return (
    <div className="App">
      <span>TODOLIST</span>
      <hr></hr>
      <span>SEARCH </span><input value={search.pattern} type="text" placeholder="rechercher" onChange={(e)=>{search.pattern=e.target.value;refreshF();}}></input>
      
      {todolist.filter(myFilter).map(myMap)}
      
      <input value={entry} type="text" placeholder="entrez un nouvel item" onChange={(event)=>{setEntry(event.target.value);}}/>
      <button onClick={()=>{todolist.push({ name: entry, done: false });setEntry("");}}>Ajouter le nouvel item</button>
    </div>
  );
}

export default App;

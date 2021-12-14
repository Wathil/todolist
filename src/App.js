import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [entry, setEntry] = useState("");
  const [todolist, setTodolist] = useState([
    { name: "faire les courses", done: false },
    { name: "faires exercices react", done: false },
  ]);

  const bSupprimer = (item) => {
      const todolistCopy = [...todolist];
      let i=0;
      for(let e of todolistCopy) {
        if (e===item) {
          console.log("trouvé="+e.name);
          break;
        }
        i++;
      }
      todolistCopy.splice(i, 1);
      setTodolist(todolistCopy);
    }

  return (
    <div className="App">
      <span>TODOLIST TITRE</span>
      {todolist.map((item) => {
        return <div className="item"><button
        onClick={() => bSupprimer(item)}
        >Supprimer</button> {item.name}</div>;
      })
      }

      <input
        value={entry}
        type="text"
        placeholder="entrez un nouvel item"
        onChange={(event) => {
          setEntry(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // faire une copie du tableau state
          const todolistCopy = [...todolist];
          todolistCopy.push({ name: entry, done: false });
          setTodolist(todolistCopy);
          setEntry("");
        }}
      >
        Ajouter le nouvel item
      </button>
    </div>
  );
}

export default App;

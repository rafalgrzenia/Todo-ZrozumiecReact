import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  console.log("🚀 ~ App ~ inputValue:", inputValue);
  const [todos, setTodos] = useState([]);
  console.log("🚀 ~ App ~ todos:", todos);
  // const [deleteButton, setDeleteButton] = useState();

  console.log(todos); 
  console.log(todos);  
  
  

  /* 
  TODO: 

[X]1. Input na wpisanie to do i przycisk dodaj lub +
[]2. Wyświetlenie To do z guzikami Zrobione lub Usuń(zrobione przekreślone)
[X]3. H1 Do zrobienia, h2 Ilość zadań
  
  */

  return (
    <main className="grid place-content-start gap-4 p-4">
      {/* <h1>Do zrobienia</h1>
      <h2>X zadań</h2> */}
      <div>
        <ul>
          {todos.map((todo) => (
            <div className="flex gap-4">
              <li>{todo.name}</li>
              <button className="border">delete</button>
            </div>
          ))}
        </ul>
      </div>
      <label htmlFor="text"></label>
      <input
        className="border"
        type="text"
        name="text"
        id="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, name: inputValue }]);
          setInputValue("");
          console.log("Dupa");
          
        }}
        className="border"
      >
        Add Todo
      </button>
    </main>
  );
}

import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function handleDoneTodo(id) {
    const doneTodo = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          done: !el.done,
        };
      } else {
        return el;
      }
    });

    setTodos(doneTodo);
  }

  function clearTodos() {
    setTodos([]);
  }

  let taskcount;

  switch (todos.length) {
    case 0:
      taskcount = " zadań";
      break;
    case 1:
      taskcount = " zadanie";
      break;

    case 2:
      taskcount = " zadania";
  }

  return (
    <main className="grid place-content-start gap-8 p-4">
      <h1 className="text-5xl">Do zrobienia</h1>
      <h2 className="text-2xl">
        {todos.length}
        {taskcount}
      </h2>
      <div>
        <ul>
          {todos.map((t) => (
            <div key={t.id} className="flex gap-4">
              <li className={`${t.done ? "line-through" : ""}`}>{t.name}</li>
              <button onClick={() => handleDoneTodo(t.id)} className="border">
                Done
              </button>
              {t.deleted === false ? (
                <button
                  onClick={() => handleDeleteTodo(t.id)}
                  className="border"
                >
                  delete
                </button>
              ) : undefined}
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
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="flex">
        <button
          onClick={() => {
            if (todo.length === 0) return;
            setTodos([
              ...todos,
              {
                id: todos.length + 1,
                name: todo,
                deleted: false,
                done: false,
              },
            ]);
            setTodo("");
          }}
          className="border"
        >
          Add Todo
        </button>
        <button onClick={clearTodos} className="border">
          Clear Todos
        </button>
      </div>
    </main>
  );
}

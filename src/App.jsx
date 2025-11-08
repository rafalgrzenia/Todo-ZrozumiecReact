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

  return (
    <main className="grid place-content-start gap-8 p-4">
      <h1 className="text-5xl">Do zrobienia</h1>
      <h2 className="text-2xl">2 zadania</h2>
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
      <button
        onClick={() => {
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
    </main>
  );
}

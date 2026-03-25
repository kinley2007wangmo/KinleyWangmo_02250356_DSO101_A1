import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    const newTask = { id: Date.now(), text };

    await fetch(`${API}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => deleteTask(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
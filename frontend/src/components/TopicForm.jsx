import { useState } from "react";

export default function TopicForm({ onCreate }) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    if (!title) return;
    onCreate(title);
    setTitle("");
  }

  return (
    <div className="topic-form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Novo tópico"
      />

      <button
        className="topic-add-button"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </div>
  );
}

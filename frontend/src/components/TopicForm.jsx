import {useState} from 'react';

export default function TopicForm({ onCreate }) {
    const [title, setTitle] = useState("");

    function handleSubmit() {
        if (!title) return;
        onCreate(title);
        setTitle("");
    }

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="novo tópico"
            />
            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    );
}
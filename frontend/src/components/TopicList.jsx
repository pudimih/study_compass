export default function TopicList({ topics, onStatusChange }) {
  const columns = {
    NOT_STUDIED: "❌ Não estudado",
    IN_PROGRESS: "⚠️ Em progresso",
    MASTERED: "✅ Dominado"
  };

  return (
    <div className="kanban">
      {Object.entries(columns).map(([status, title]) => (
        <div className="column" key={status}>
          <h3>{title}</h3>

          {topics
            .filter(t => t.status === status)
            .map(topic => (
              <div className="topic" key={topic.id}>
                <strong>{topic.title}</strong>
                <small>{topic.subject_name}</small>
                <small>Prioridade: {topic.priority}</small>

                <div>
                  <button onClick={() => onStatusChange(topic.id, "NOT_STUDIED")}>❌</button>
                  <button onClick={() => onStatusChange(topic.id, "IN_PROGRESS")}>⚠️</button>
                  <button onClick={() => onStatusChange(topic.id, "MASTERED")}>✅</button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

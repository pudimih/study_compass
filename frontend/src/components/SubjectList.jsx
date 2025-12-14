export default function SubjectList({ subjects, onSelect, selectedSubject }) {
  if (!subjects.length) {
    return <p>Nenhuma matéria cadastrada</p>;
  }

  return (
    <div className="subject-list">
      {subjects.map(subject => (
        <button
          key={subject.id}
          className={`subject-button ${
            selectedSubject?.id === subject.id ? "active" : ""
          }`}
          onClick={() => {
            console.log("CLIQUEI NA MATÉRIA", subject);
            onSelect(subject);
          }}
        >
          {subject.name}
        </button>
      ))}
    </div>
  );
}

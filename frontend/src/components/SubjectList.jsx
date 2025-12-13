export default function SubjectList({ subjects }) {
  if (!subjects.length) {
    return <p>Nenhuma matéria cadastrada</p>;
  }

  return (
    <ul>
      {subjects.map(subject => (
        <li key={subject.id}>{subject.name}</li>
      ))}
    </ul>
  );
}

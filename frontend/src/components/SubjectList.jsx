export default function SubjectList({ subjects, onSelect }) {
  if (!subjects.length) {
    return <p>Nenhuma matéria cadastrada</p>;
  }

  return (
    <ul>
      {subjects.map(subject => (
        <li key={subject.id}>
         <button
  onClick={() => {
    console.log("CLIQUEI NA MATÉRIA", subject);
    onSelect(subject);
  }}
>
  {subject.name}
</button>

          </li>
      ))}
    </ul>
  );
}

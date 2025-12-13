import { useEffect, useState } from "react";
import {
  getSubjects,
  createSubject,
  getStudyNow
} from "../api/api";
import SubjectList from "../components/SubjectList";

export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [studyNow, setStudyNow] = useState([]);

  useEffect(() => {
    loadSubjects();
    loadStudyNow();
  }, []);

  async function loadSubjects() {
    const data = await getSubjects();
    setSubjects(data);
  }

  async function loadStudyNow() {
    const data = await getStudyNow();
    setStudyNow(data);
  }

  async function handleCreateSubject() {
    if (!newSubject) return;
    await createSubject(newSubject);
    setNewSubject("");
    loadSubjects();
  }

  return (
    <div>
      <h1>Study Compass</h1>

      <h2>Matérias</h2>
      <input
        value={newSubject}
        onChange={e => setNewSubject(e.target.value)}
        placeholder="Nova matéria"
      />
      <button onClick={handleCreateSubject}>Adicionar</button>

      <SubjectList subjects={subjects} />

      <h2>Estude agora</h2>
      <ul>
        {studyNow.map(topic => (
          <li key={topic.id}>
            {topic.title} (prioridade {topic.priority})
          </li>
        ))}
      </ul>
    </div>
  );
}

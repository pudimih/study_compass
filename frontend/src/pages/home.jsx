import { useEffect, useState } from "react";
import {
  getSubjects,
  getAllTopics,
  createSubject,
  createTopic,
  updateTopic,
  getStudyNow
} from "../api/api";

import SubjectList from "../components/SubjectList";
import TopicList from "../components/TopicList";
import TopicForm from "../components/TopicForm";

export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [newSubject, setNewSubject] = useState("");
  const [studyNow, setStudyNow] = useState([]);


  useEffect(() => {
    loadSubjects();
    loadTopics();
    loadStudyNow();
  }, []);

  async function loadSubjects() {
    const data = await getSubjects();
    setSubjects(data);
  }

  async function loadTopics() {
    const data = await getAllTopics();
    setTopics(data);
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

  async function handleCreateTopic(title) {
    if (!selectedSubject) {
      alert("Selecione uma matéria");
      return;
    }

    await createTopic(title, selectedSubject.id);
    loadTopics();
  }

  async function handleStatusChange(id, status) {
    await updateTopic(id, status);
    loadTopics();
  }

  return (
    <div className="container">
      <h1>Study Compass 📚</h1>

      <h2>Matérias</h2>

      <div className="add-subject">
        <input
          value={newSubject}
          onChange={e => setNewSubject(e.target.value)}
          placeholder="Nova matéria"
        />
        <button onClick={handleCreateSubject}>Adicionar</button>
      </div>

      <SubjectList
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSelect={setSelectedSubject}
      />

      <h2>🔥 Study Now</h2>

{studyNow.length === 0 ? (
  <p>Nenhum tópico urgente no momento 🎉</p>
) : (
  <ul>
    {studyNow.map(topic => (
      <li key={topic.id}>
        <strong>{topic.title}</strong> — 📘 {topic.subject_name}
        (prioridade {topic.priority})
      </li>
    ))}
  </ul>
)}


      <h2>
        {selectedSubject
          ? `Criar tópico em: ${selectedSubject.name}`
          : "Selecione uma matéria para criar tópico"}
      </h2>

      <TopicForm
        onCreate={handleCreateTopic}
        disabled={!selectedSubject}
      />

      <TopicList
        topics={topics}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

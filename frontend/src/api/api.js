const API_URL = "http://localhost:5000";

export async function getSubjects() {
  const res = await fetch(`${API_URL}/subjects`);
  return res.json();
}

export async function createSubject(name) {
  const res = await fetch(`${API_URL}/subjects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  return res.json();
}

export async function getTopics(subjectId) {
  const res = await fetch(`${API_URL}/topics?subject_id=${subjectId}`);
  return res.json();
}

export async function createTopic(title, subjectId) {
  const res = await fetch(`${API_URL}/topics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, subject_id: subjectId })
  });
  return res.json();
}

export async function updateTopic(id, status) {
  const res = await fetch(`${API_URL}/topics/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  return res.json();
}

export async function getStudyNow() {
  const res = await fetch(`${API_URL}/study-now`);
  return res.json();
}

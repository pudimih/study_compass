# Study Compass

## 1. Tema do Projeto

O **Study Compass** é um MVP de organização de estudos desenvolvido para a prova de estágio **Desenvolvimento API + Client**.

A aplicação permite:
- cadastrar matérias
- cadastrar tópicos de estudo associados a cada matéria
- acompanhar o progresso dos tópicos por status
- identificar automaticamente quais tópicos devem ser priorizados para estudo através da funcionalidade **Estudar agora**
O objetivo principal é oferecer uma visão clara e prática do que deve ser estudado no momento.

---

## 2. Arquitetura da Aplicação
A aplicação foi dividida em **dois projetos distintos**, conforme solicitado no edital:
 
 backend → API REST em Python (Flask)
 frontend → Aplicação Frontend em React


- Comunicação via **API REST**
- Respostas em **JSON**
- Banco de dados relacional

---

## 3. Banco de Dados e Modelagem

O banco de dados possui relacionamento **Um para Muitos (1:N)**:

- **Subject (Matéria)** → **Topic (Tópicos)**

Cada tópico pertence a uma única matéria.

Banco utilizado:
- SQLite

---

## 4. Backend (API)

### Tecnologias
- Python
- Flask
- SQLAlchemy
- SQLite

### Funcionalidades
- CRUD completo de matérias e tópicos
- Uso correto dos métodos HTTP (GET, POST, PUT, DELETE)
- Retorno adequado de status HTTP

### Endpoints

- - GET /subjects
- - POST /subjects
- - DELETE /subjects/{id}
    
- - GET /topics
- - POST /topics
- - PUT /topics/{id}
- - DELETE /topics/{id}

- - GET /study-now


A lógica de priorização (**Estudar agora**) é processada no backend.

---

## 5. Frontend

### Tecnologias
- React
- Vite
- JavaScript
- CSS puro

### Funcionalidades
- Integração completa com a API
- Visualização dos tópicos em formato Kanban
- Atualização dinâmica de status
- Destaque para tópicos prioritários

---

## 6. Funcionalidade Diferencial — Study Now

A funcionalidade **Study Now** identifica automaticamente os tópicos prioritários de estudo com base no status:

- NOT_STUDIED → alta prioridade
- IN_PROGRESS → média prioridade
- MASTERED → baixa prioridade

---

## 7. Como Rodar o Projeto

### Backend

```bash
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate    # Linux/Mac

pip install -r requirements.txt
python main.py

```
Backend disponível em:
```bash
http://localhost:5000
```

Frontend
```bash
npm install
npm run dev
```

Frontend disponível em:
```bash
http://localhost:5173
```

### 8. Imagens da Aplicação
![Home](./images/Captura%20de%20tela%202025-12-14%20145349.png)

![Home](./images/Captura%20de%20tela%202025-12-14%20145507.png)

![Home](./images/Captura%20de%20tela%202025-12-14%20145518.png)

![Home](./images/Captura%20de%20tela%202025-12-14%20145548.png)

### 9. Como Usar a Aplicação
- Primeiro, você cadastra a Matéria (ex: Matemática, História).
- Em seguida, dentro de cada matéria, você cadastra os Assuntos ou tópicos específicos (ex: "Funções Quadráticas", "Segunda Guerra Mundial").
- Ao ser criado, cada assunto é automaticamente posicionado na coluna "Não Estudado".
- 
Os assuntos e tópicos a serem estudados são organizados em um quadro Kanban, com colunas que representam o seu progresso em cada matéria.
As colunas (estados) são:
- Não Estudado
- Em Progresso
- Dominado

Cada card possui um ícone que indica seu estado atual. Ao clicar no ícone dentro do card, o assunto é movido automaticamente para a coluna correspondente no Kanban.
Exemplo:
Se um assunto está na coluna "Não Estudado" e você clica no ícone "Em Progresso" dentro dele, esse card será movido automaticamente para a coluna "Em Progresso".
Dessa forma, você gerencia visualmente seu avanço apenas clicando no ícone de estado de cada tópico.


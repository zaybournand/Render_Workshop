# 📝 Quiz App (Python + React)

A simple full-stack quiz app with a Python (Flask) backend and React frontend.  
Tracks quiz score and fetches questions from the backend. Ready for deployment on Render.

## Features

- Multiple-choice quiz questions
- Tracks user score

## Local Setup

### Backend

```bash
cd backend
pip3 install --user -r requirements.txt
python3 app.py
Runs on http://localhost:5000
API endpoint: /api/questions
```

### Frontend

```bash
cd frontend
npm install
npm start
Runs on http://localhost:3000
Fetches quiz questions from backend
```

## Deployment on Render

### Backend

- Push backend/ to GitHub

- Create Web Service on Render

- Pick your project from github

- Pick region closest

- Root Directory: backend

- Build Command: pip install -r requirements.txt

- Start Command: python app.py

- Render sets the PORT environment variable automatically

### Frontend

- Push frontend/ to GitHub

- Create Static Site on Render

- Pick your project from github

- Pick region closest

- Root Directory: frontend

- Build Command: npm install && npm run build

- Publish Directory: build

- **Environment Variables (Frontend on Render)**
  - **Key:** `REACT_APP_API_URL`
  - **Value:** `<your-backend-render-link>/api/questions`  
    Example: `https://backend-55tp.onrender.com/api/questions`

## Notes

- No database required - questions are stored in memory

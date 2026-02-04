from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow React frontend to call backend

# Simple in-memory quiz questions
questions = [
    {"id": 1, "question": "What is 14 + 2 * 2 ?", "options": ["14", "18", "32"], "answer": "18"},
    {"id": 2, "question": "What is the capital of Nigeria?", "options": ["Abuja", "Cairo", "Rabat"], "answer": "Abuja"},
    {"id": 3, "question": "Which language is this app using?", "options": ["Python", "Java", "C++"], "answer": "Python"},
]

@app.route("/api/questions")
def get_questions():
    return jsonify(questions)

@app.route("/")
def home():
    return "Quiz backend is running! Go to /api/questions for the quiz data."


# Port binding for Render
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

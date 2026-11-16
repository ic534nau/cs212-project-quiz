
const quizForm = document.getElementById("quiz-form");
const resultsSection = document.getElementById("results");
const scoreDisplay = document.getElementById("score");

const questionBankFile = "questions.json";

// Load questions from the JSON file
async function loadQuestionBank() {
    try {
        const response = await fetch(questionBankFile);

        if (!response.ok) {
            throw new Error("Unable to load question bank");
        }

        const questions = await response.json();

        console.log("Question bank loaded:", questions);

        return questions;
    }
    catch (error) {
        console.error("Error loading questions:", error);
        return [];
    }
}

// Initialize bank
loadQuestionBank();


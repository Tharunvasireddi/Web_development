document.addEventListener("DOMContentLoaded",()=>{
    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "Berlin", "Rome", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "Mars",
        },
        {
          question: "What is the largest mammal in the world?",
          choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          answer: "Blue Whale",
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          choices: [
            "William Shakespeare",
            "Mark Twain",
            "Charles Dickens",
            "Jane Austen",
          ],
          answer: "William Shakespeare",
        },
        {
          question: "What is the boiling point of water at sea level?",
          choices: ["90°C", "100°C", "110°C", "120°C"],
          answer: "100°C",
        },
        {
          question: "What is the smallest prime number?",
          choices: ["1", "2", "3", "5"],
          answer: "2",
        },
        {
          question: "What is the chemical symbol for gold?",
          choices: ["Au", "Ag", "Pb", "Fe"],
          answer: "Au",
        },
        {
          question: "Who painted the Mona Lisa?",
          choices: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet",
          ],
          answer: "Leonardo da Vinci",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          choices: ["Gold", "Iron", "Diamond", "Platinum"],
          answer: "Diamond",
        },
        {
          question: "What is the largest planet in our solar system?",
          choices: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Jupiter",
        },
        {
          question: "What is the main ingredient in guacamole?",
          choices: ["Tomato", "Onion", "Avocado", "Pepper"],
          answer: "Avocado",
        },
        {
          question: "What is the capital of Japan?",
          choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
          answer: "Tokyo",
        },
        {
          question: "What is the square root of 64?",
          choices: ["6", "7", "8", "9"],
          answer: "8",
        },
        {
          question: "Who developed the theory of relativity?",
          choices: [
            "Isaac Newton",
            "Albert Einstein",
            "Galileo Galilei",
            "Nikola Tesla",
          ],
          answer: "Albert Einstein",
        },
        {
          question: "What is the largest ocean on Earth?",
          choices: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
          ],
          answer: "Pacific Ocean",
        },
      ];
      let quizContainer=document.getElementById("quiz-container")
      let questionContainer=document.getElementById("question-container")
      let questionText=document.getElementById("question-text")
      let choiceList=document.getElementById("choices-list")
      let nextBtn=document.getElementById("next-btn")
      let resultContainer=document.getElementById("result-container")
      let score=document.getElementById("score")
      let restartBtn=document.getElementById("restart-btn")
      let startBtn=document.getElementById("start-btn")
      let marks=0
      let questionIndex=0
      startBtn.addEventListener("click",start)
      function start(){
        startBtn.classList.add('hidden')
        marks=0
        questionIndex=0
        renderQuestions()
      }
      function renderQuestions(){
        questionContainer.classList.remove('hidden')
        nextBtn.classList.add('hidden')
       const {question,choices}=questions[questionIndex]
       questionText.textContent=question
        choices.forEach((choice)=>{
            let =document.createElement("li")
            li.textContent=choice
            li.classList.add("bg-gray-700",
        "text-white",
        "font-medium",  
        "text-lg",
        "py-3",
        "px-4",
        "rounded-md",
        "w-full",
        "text-center",
        "hover:bg-blue-500",
        "hover:scale-105",
        "cursor-pointer",
        "transition-all")
        choiceList.appendChild(li)
        })
      }
})
const questions = [
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
            answer: "William Shakespeare",
            feedback: "Excellent! Shakespeare was indeed the playwright of 'Hamlet'."
        },
        {
            question: "What is the capital of Japan?",
            choices: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            answer: "Tokyo",
            feedback: "Awesome! Tokyo is the correct answer."
        },
        {
            question: "H2O is the chemical formula for what?",
            choices: ["Oxygen", "Hydrogen", "Gold", "Water"],
            answer: "Water",
            feedback: "Well done! H2O stands for water."
        },
        {
            question: "What is the largest planet in our Solar System?",
            choices: ["Earth", "Jupiter", "Mars", "Saturn"],
            answer: "Jupiter",
            feedback: "Great! Jupiter is indeed the largest."
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: "Leonardo da Vinci",
            feedback: "Correct! The Mona Lisa was painted by Leonardo da Vinci."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            choices: ["Gold", "Iron", "Diamond", "Quartz"],
            answer: "Diamond",
            feedback: "Right! Diamond is the hardest natural substance."
        },
        {
            question: "What is the capital of Australia?",
            choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra",
            feedback: "Exactly! Canberra is the capital."
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Jupiter", "Saturn", "Venus"],
            answer: "Mars",
            feedback: "Correct! Mars is known as the Red Planet."
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            feedback: "Right! The Pacific Ocean is the largest."
        },
        {
            question: "Who discovered penicillin?",
            choices: ["Marie Curie", "Alexander Fleming", "Albert Einstein", "Isaac Newton"],
            answer: "Alexander Fleming",
            feedback: "Well done! Alexander Fleming discovered penicillin."
        },
        {
            question: "In what year did the Titanic sink?",
            choices: ["1912", "1910", "1915", "1905"],
            answer: "1912",
            feedback: "Correct! The Titanic sank in 1912."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Gold", "Oxygen", "Silver", "Osmium"],
            answer: "Oxygen",
            feedback: "Right! 'O' stands for Oxygen."
        },
        {
            question: "Who invented the telephone?",
            choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            answer: "Alexander Graham Bell",
            feedback: "Exactly! Alexander Graham Bell invented the telephone."
        },
        {
            question: "Which planet is closest to the sun?",
            choices: ["Earth", "Mercury", "Venus", "Mars"],
            answer: "Mercury",
            feedback: "Well done! Mercury is closest to the sun."
        },
        {
            question: "What is the smallest country in the world?",
            choices: ["Monaco", "Nauru", "Vatican City", "Malta"],
            answer: "Vatican City",
            feedback: "Correct! Vatican City is the smallest country in the world."
        },
        {
            question: "Which of these cities is not in Europe?",
            choices: ["Barcelona", "Moscow", "Istanbul", "Cairo"],
            answer: "Cairo",
            feedback: "Right! Cairo is in Egypt, Africa."
        },
        {
            question: "What is the longest river in the world?",
            choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile",
            feedback: "Correct! The Nile is generally considered the longest."
        },
        {
            question: "How many hearts does an octopus have?",
            choices: ["One", "Two", "Three", "Four"],
            answer: "Three",
            feedback: "That's right! An octopus has three hearts."
        },
        {
            question: "What is the capital city of Spain?",
            choices: ["Barcelona", "Madrid", "Seville", "Valencia"],
            answer: "Madrid",
            feedback: "Correct! The capital of Spain is Madrid."
        },
        {
            question: "Who painted the 'Starry Night'?",
            choices: ["Vincent Van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
            answer: "Vincent Van Gogh",
            feedback: "Well done! 'Starry Night' was painted by Vincent Van Gogh."
        },
        {
            question: "What is the largest desert in the world?",
            choices: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            answer: "Antarctic",
            feedback: "Correct! The Antarctic is the largest desert in the world."
        },
        {
            question: "What is the main ingredient in guacamole?",
            choices: ["Tomato", "Pepper", "Avocado", "Onion"],
            answer: "Avocado",
            feedback: "Right! Avocado is the main ingredient in guacamole."
        },
        {
            question: "Which of these countries is landlocked?",
            choices: ["Chad", "Nigeria", "Algeria", "Libya"],
            answer: "Chad",
            feedback: "Correct! Chad is landlocked."
        },
        {
            question: "What is the capital of Canada?",
            choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            answer: "Ottawa",
            feedback: "Exactly! Ottawa is the capital of Canada."
        },
        {
            question: "In computing, what does 'CPU' stand for?",
            choices: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Unit"],
            answer: "Central Processing Unit",
            feedback: "Correct! CPU stands for Central Processing Unit."
        },
        {
            question: "What does WWW stand for in a website browser?",
            choices: ["World War Web", "World Wide Web", "Western Washington World", "Wide Width Web"],
            answer: "World Wide Web",
            feedback: "Correct! WWW stands for World Wide Web."
        },
        {
            question: "How many continents are there?",
            choices: ["5", "6", "7", "8"],
            answer: "7",
            feedback: "Right! There are 7 continents."
        },
        {
            question: "What is the smallest prime number?",
            choices: ["0", "1", "2", "3"],
            answer: "2",
            feedback: "Exactly! 2 is the smallest prime number."
        },
        {
            question: "What is the name of the longest river in Africa?",
            choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            answer: "Nile",
            feedback: "Correct! The Nile is the longest river in Africa."
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            choices: ["China", "Australia", "Japan", "South Korea"],
            answer: "Japan",
            feedback: "Right! Japan is known as the Land of the Rising Sun."
        },
        {
            question: "Who is known as the father of Geometry?",
            choices: ["Pythagoras", "Euclid", "Archimedes", "Aristotle"],
            answer: "Euclid",
            feedback: "Correct! Euclid is known as the father of Geometry."
        },
        {
            question: "What is the main ingredient in a Margherita Pizza?",
            choices: ["Pepperoni", "Mushrooms", "Tomatoes", "Bacon"],
            answer: "Tomatoes",
            feedback: "Exactly! Tomatoes are the main ingredient in a Margherita Pizza."
        },
        {
            question: "Which gas is most abundant in the Earth's atmosphere?",
            choices: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
            answer: "Nitrogen",
            feedback: "Correct! Nitrogen is the most abundant gas in the Earth's atmosphere."
        },
        {
            question: "In which city is the famous Golden Gate Bridge located?",
            choices: ["Los Angeles", "San Diego", "San Francisco", "Seattle"],
            answer: "San Francisco",
            feedback: "Right! The Golden Gate Bridge is located in San Francisco."
        },
        {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Ge", "Ga"],
            answer: "Au",
            feedback: "Correct! Au is the chemical symbol for gold."
        },
        {
            question: "Who is the author of the Harry Potter series?",
            choices: ["J.K. Rowling", "Stephen King", "J.R.R. Tolkien", "George R.R. Martin"],
            answer: "J.K. Rowling",
            feedback: "Exactly! J.K. Rowling is the author of the Harry Potter series."
        },
        {
            question: "What is the capital of Brazil?",
            choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            answer: "Brasília",
            feedback: "Correct! Brasília is the capital of Brazil."
        },
        {
            question: "What year did the first man walk on the moon?",
            choices: ["1965", "1969", "1971", "1975"],
            answer: "1969",
            feedback: "Right! The first moon landing was in 1969."
        },
        {
            question: "Who painted the Sistine Chapel ceiling?",
            choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            answer: "Michelangelo",
            feedback: "Correct! Michelangelo painted the Sistine Chapel ceiling."
        },
        {
            question: "Which ocean is the Bermuda Triangle located in?",
            choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: "Atlantic Ocean",
            feedback: "Right! The Bermuda Triangle is located in the Atlantic Ocean."
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["African Elephant", "Blue Whale", "Giraffe", "White Rhino"],
            answer: "Blue Whale",
            feedback: "Correct! The Blue Whale is the largest mammal."
        },
        {
            question: "Which planet is known as the Evening Star?",
            choices: ["Mars", "Jupiter", "Venus", "Mercury"],
            answer: "Venus",
            feedback: "Correct! Venus is the Evening Star"
        }
        
        
        // Add more questions up to 50 as desired
    ];
    
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showScore();
        return;
    }
    
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.textContent = ''; // Clear feedback text
    choicesEl.innerHTML = ''; // Clear previous choices

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = function() { selectAnswer(choice, currentQuestion.feedback); };
        li.appendChild(button);
        choicesEl.appendChild(li);
    });
}

function selectAnswer(choice, feedback) {
    if (choice === questions[currentQuestionIndex].answer) {
        score++;
        document.getElementById('feedback').textContent = feedback; // Show feedback for correct answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2><button onclick="restartQuiz()">Restart Quiz</button>`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

document.getElementById('next').addEventListener('click', displayQuestion);
document.getElementById('restart').addEventListener('click', restartQuiz);

displayQuestion();

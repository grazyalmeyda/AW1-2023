
    const questions = document.querySelectorAll('.question');
    let currentQuestionIndex = 0;

    function showQuestion(index) {
        questions[currentQuestionIndex].style.display = 'none';
        currentQuestionIndex = index;
        questions[currentQuestionIndex].style.display = 'block';
    }

    function checkAnswer(questionIndex) {
        const question = questions[questionIndex];
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        let correctAnswer = false;

        radioButtons.forEach(radioButton => {
            if (radioButton.checked && radioButton.getAttribute('data-correct-answer') === 'true') {
                correctAnswer = true;
            }
        });

        if (correctAnswer) {
            alert('Resposta correta. ');
            showNextQuestion();
        } else {
            alert('Resposta incorreta. Tente novamente.');
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            showQuestion(currentQuestionIndex + 1);
        } else {
            alert('Você concluiu o quiz.');
        }
    }

    const submitButtons = document.querySelectorAll('.submit-button');
    submitButtons.forEach((submitButton, index) => {
        submitButton.addEventListener('click', () => {
            checkAnswer(currentQuestionIndex);
        });
    });

    // Mostrar a primeira pergunta inicialmente
    showQuestion(currentQuestionIndex);

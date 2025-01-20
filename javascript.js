const answers = {
    q1: "A",
    q2: "B",
    q3: "A",
    q4: "B",
    q5: "B",
    q6: "A",
    q7: "A",
    q8: "B",
    q9: "A"
    // Add remaining answers here
  };
  
  function submitQuiz() {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
  
    for (const [question, correctAnswer] of Object.entries(answers)) {
      const userAnswer = form[question].value;
      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}!`;
    resultDiv.style.color = score > totalQuestions / 2 ? "green" : "red";
  }
  
  function showMenu() {
    document.getElementById("navLinks").classList.add("active");
  }
  
  function hideMenu() {
    document.getElementById("navLinks").classList.remove("active");
  }
  

 
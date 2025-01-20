const answers = {
  q1: "A",
  q2: "B",
  q3: "A",
  q4: "B",
  q5: "B",
  q6: "A",
  q7: "C",
  q8: "A",
  q9: "A",
  q10: "A",
  q11: "C",
  q12: "B",
  q13: "B"
};

function submitQuiz() {
  const form = document.getElementById("quiz-form");
  let score = 0;
  const totalQuestions = Object.keys(answers).length;

  // Loop through the answers and calculate the score
  for (let question in answers) {
    const selectedOption = form.elements[question]?.value;
    if (selectedOption === answers[question]) {
      score++;
    }
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  const percentage = (score / totalQuestions) * 100;

  // Construct the result message
  resultDiv.innerHTML = `
    <h3>Your Score: ${score}/${totalQuestions}</h3>
    <p>You got ${percentage.toFixed(2)}% correct.</p>
  `;

 
  // Ensure the result is visible
  resultDiv.style.fontWeight = "bold";
  resultDiv.style.fontSize = "1.2em";
  resultDiv.style.textAlign = "center";
}

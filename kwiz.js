// const quizForm = document.getElementById('quiz-form');
// const resultDiv = document.getElementById('result');
// const correctAnswers = ['a', 'a'];
// const incorrectAnswers = ['b', 'b'];

// quizForm.addEventListener('submit', e => {
//   e.preventDefault();
  
//   let score = 0;
//   const userAnswers = [quizForm.q1.value,quizForm.q2.value];
//   userAnswers.forEach((answer, index) => {
//     if (answer === correctAnswers[index]) {
//       score += 1;
//     }
//     if (answer === incorrectAnswers[index]){
//       score +=4;
//     }
//   });
//  if (score <= 2){
//   // resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
//   resultDiv.innerHTML = `It worked`;
//  }
//  if (score >= 5){
//   resultDiv.innerHTML = `Worked again`;
//  }
// });

// { <script>
// const quizForm = document.getElementById('quiz-form');
// const resultDiv = document.getElementById('result');
// // const correctAnswers = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
// // const incorrectAnswers = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
// // const incorrecterAnswers = ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'];
// // const bestestAnswers = ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'];
// // const correctAnswers = ['a'];
// // const incorrectAnswers = ['b'];
// // const incorrecterAnswers = ['c'];
// // const bestestAnswers = ['d'];
// const correctAnswers = ['a', 'a', 'a', 'a', 'a', 'a', 'a'];
// const incorrectAnswers = ['b', 'b', 'b', 'b', 'b', 'b', 'b'];
// const incorrecterAnswers = ['c', 'c', 'c', 'c', 'c', 'c', 'c'];
// const bestestAnswers = ['d', 'd', 'd', 'd', 'd', 'd', 'd'];

// quizForm.addEventListener('submit', e => {
//   e.preventDefault();
  
//   let score = 0;
//   const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value,quizForm.q4.value,quizForm.q5.value,quizForm.q6.value,quizForm.q7.value];
//   userAnswers.forEach((answer, index) => {
//     if (answer == correctAnswers[index]) {
//       score += 1;
//     }
//     else if (answer == incorrectAnswers[index]){
//       score += 2;
//     }
//     else if (answer == incorrecterAnswers[index]) {
//       score += 3;
//     }
//     else if (answer == bestestAnswers[index]){
//       score += 4;
//     }
//   });
//  if (score =0){
//   // resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
//   resultDiv.innerHTML = `A Answers ` + score;
//  }
//  else if (score <=5){
//   resultDiv.innerHTML = `B Answers ` + score;
//  }
//  else if (score >=5 && score >=7){
//   // resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
//   resultDiv.innerHTML = `C Answers `+ score;
//  }
//  else if (score >=9){
//   resultDiv.innerHTML = `D Answers ` + score;
//  }
// });
// </script> }
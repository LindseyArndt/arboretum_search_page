function mostlyA() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "You are a Pagoda Dogwood! Your healing nature and kind personality make you a favorite among friends, and your versatility allows you to enjoy a bunch of different activites. Check out the Search page to find out more information about your tree!";
   }
}

function mostlyB() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "You are a Merrill Magnolia! Like this tree, you have a bold personality that demands attention from observers. However, there are times when you need a little TLC - don't forget to moniter how you're doing and practive self care. Check out the Tree Search page to find out more information about your tree!";
  }
}

function mostlyC() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "You are a Sugar Maple! You are passionate and are fierce, and your friends and family know that your loyalty and support does not come without a somewhat prickly personality. However, they know you have their backCheck out the Tree Search page to find out more information about your tree!";
  }
}

function mostlyD() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "You are a Red Pine! You are hardy and dependable. You are known for having the best ideas, and you are also great at delegating tasks. Check out the Tree Search page to find out more information about your tree!";
  }
}

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
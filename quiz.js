document.getElementById("submit-quiz").addEventListener("click", function() { //calculate on button submit
  const ids = ["q1", "q2", "q3"];
  const answers = ["December 25th", "Eggnog", "St. Nicholas"]; //answers and document ids
  var correct = 0;
  for (let i = 0; i < 3; i++) {
    var id = ids[i];
    var ans = answers[i];
    var e = document.getElementById(id);
    var text = e.options[e.selectedIndex].text;
    if (text == ans) {
      correct += 1; //check answer
    }
  }
  document.getElementById("score").innerHTML = correct + " out of 3 correct"; //set #correct answers
});
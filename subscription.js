let filterCoffeeMap = new Map([
  ['light', 0],
  ['medium', 0],
  ['dark', 0]
]);

let espressoCoffeeMap = new Map([
  ['single', 0],
  ['blend', 0],
  ['dark', 0]
]);

function updateResults() {

  //document.getElementById('resultImg').src='https://aosacoffee.com/wp-content/uploads/2020/05/coffee-bag-e1588614153280.jpg';
  //document.getElementById('resultCoffee').innerHTML = roast;
  //document.getElementById('resultFreq').innerHTML = frequency;
  //document.getElementById('resultGrind').innerHTML = grind;
}

function answer1(input, choice) {
	path = input;
  var next = document.getElementById("question2");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  if(showResults === true){
    updateResults();
  }

  switch(choice) {
    case 1:
      document.getElementById("option1").style.textDecoration = "underline";
      document.getElementById("option2").style.textDecoration = "none";
      document.getElementById("option3").style.textDecoration = "none";
      break;
    case 2:
      document.getElementById("option1").style.textDecoration = "none";
      document.getElementById("option2").style.textDecoration = "underline";
      document.getElementById("option3").style.textDecoration = "none";
      break;
    case 3:
      document.getElementById("option1").style.textDecoration = "none";
      document.getElementById("option2").style.textDecoration = "none";
      document.getElementById("option3").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

function answer2(input, choice) {
	home = input;
  var next = document.getElementById("question3");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  if(showResults === true){
    updateResults();
  }

  switch(choice) {
    case 4:
      // loops? this-> ? nahh
      document.getElementById("option4").style.textDecoration = "underline";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "none";
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "none";
      break;
    case 5:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "underline";
      document.getElementById("option6").style.textDecoration = "none";
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "none";
      break;
    case 6:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "none";
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "none";
      break;
    case 7:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "underline";
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "none";
      break;
    case 8:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "none";
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

function answer3(input, choice) {
	home = input;
  var next = document.getElementById("result");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  if(showResults === true){
    updateResults();
  }

  switch(choice) {
    case 4:
      // loops? this-> ? nahh
      document.getElementById("option9").style.textDecoration = "underline";
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "none";
      document.getElementById("option13").style.textDecoration = "none";
      break;
    case 5:
      document.getElementById("option9").style.textDecoration = "none";
      document.getElementById("option10").style.textDecoration = "underline";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "none";
      document.getElementById("option13").style.textDecoration = "none";
      break;
    case 6:
      document.getElementById("option9").style.textDecoration = "none";
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "none";
      document.getElementById("option13").style.textDecoration = "none";
      break;
    case 7:
      document.getElementById("option9").style.textDecoration = "none";
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "underline";
      document.getElementById("option12").style.textDecoration = "none";
      document.getElementById("option13").style.textDecoration = "none";
      break;
    case 8:
      document.getElementById("option9").style.textDecoration = "none";
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "none";
      document.getElementById("option13").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

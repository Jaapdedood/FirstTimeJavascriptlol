var poison;
var home;
var path;
var frequency;
var grind;
var roast;
var showResults;

function updateResults() {
  switch(poison){
    case 'pour':
      if(home === 'espresso'){
        if(path === 'exciting'){
          roast = 'Light';
        }
        else {
          roast = 'Medium';
        }
      }
      else {
        if(path === 'tried') {
          roast = 'Medium';
        }
        else {
          roast = 'Light';
        }
      }
      break;
    case 'drip':
      if(home === 'pour'){
        if(path === 'exciting'){
          roast = 'Light';
        }
        else {
          roast = 'Medium';
        }
      }
      else {
        if(path === 'tried'){
          roast = 'Dark';
        }
        else {
          roast = 'Medium';
        }
      }
      break;
    case 'latte':
      if(home === 'espresso'){
        if(path === 'tried'){
          roast = 'Dark';
        }
        else {
          roast = 'Medium';
        }
      }
      else{
        if(path === 'exciting'){
          roast = 'Medium';
        }
        else {
          roast = 'Dark';
        }
      }
      break;
  }

  document.getElementById('resultImg').src='https://aosacoffee.com/wp-content/uploads/2020/05/coffee-bag-e1588614153280.jpg';
  document.getElementById('resultCoffee').innerHTML = roast;
  document.getElementById('resultFreq').innerHTML = frequency;
  document.getElementById('resultGrind').innerHTML = grind;
}

function answer1(input) {
	var next;
  poison = input;
	if(input === 'pour') {
    next = document.getElementById("pourChoices");
    if (next.style.display === "none") {
      next.style.display = "block";
    }
    document.getElementById("dripChoices").style.display = "none";
    document.getElementById("latteChoices").style.display = "none";

    document.getElementById("option1").style.textDecoration = "underline";
    document.getElementById("option2").style.textDecoration = "none";
    document.getElementById("option3").style.textDecoration = "none";
  } 
  else if(input === 'drip') {
    var next = document.getElementById("dripChoices");
    if (next.style.display === "none") {
      next.style.display = "block";
    }
    document.getElementById("pourChoices").style.display = "none";
    document.getElementById("latteChoices").style.display = "none";

    document.getElementById("option1").style.textDecoration = "none";
    document.getElementById("option2").style.textDecoration = "underline";
    document.getElementById("option3").style.textDecoration = "none";
  }
  else if(input === 'latte') {
    var next = document.getElementById("latteChoices");
    if (next.style.display === "none") {
      next.style.display = "block";
    }
    document.getElementById("dripChoices").style.display = "none";
    document.getElementById("pourChoices").style.display = "none";

    document.getElementById("option1").style.textDecoration = "none";
    document.getElementById("option2").style.textDecoration = "none";
    document.getElementById("option3").style.textDecoration = "underline";
  }
  else{
  	alert("please refresh the page");
  }
 
  if(showResults === true){
    updateResults();
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
      document.getElementById("option4").style.textDecoration = "underline";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "none";
      break;
    case 5:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "underline";
      document.getElementById("option6").style.textDecoration = "none";
      break;
    case 6:
      document.getElementById("option4").style.textDecoration = "none";
      document.getElementById("option5").style.textDecoration = "none";
      document.getElementById("option6").style.textDecoration = "underline";
      break;
    case 7:
      document.getElementById("option7").style.textDecoration = "underline";
      document.getElementById("option8").style.textDecoration = "none";
      document.getElementById("option9").style.textDecoration = "none";
      break;
    case 8:
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "underline";
      document.getElementById("option9").style.textDecoration = "none";
      break;
    case 9:
      document.getElementById("option7").style.textDecoration = "none";
      document.getElementById("option8").style.textDecoration = "none";
      document.getElementById("option9").style.textDecoration = "underline";
      break;
    case 10:
      document.getElementById("option10").style.textDecoration = "underline";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "none";
      break;
    case 11:
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "underline";
      document.getElementById("option12").style.textDecoration = "none";
      break;
    case 12:
      document.getElementById("option10").style.textDecoration = "none";
      document.getElementById("option11").style.textDecoration = "none";
      document.getElementById("option12").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

function answer3(input, choice) {
	path = input;
  var next = document.getElementById("question4");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  if(showResults === true){
    updateResults();
  }

  switch(choice) {
    case 13:
      document.getElementById("option13").style.textDecoration = "underline";
      document.getElementById("option14").style.textDecoration = "none";
      document.getElementById("option15").style.textDecoration = "none";
      break;
    case 14:
      document.getElementById("option13").style.textDecoration = "none";
      document.getElementById("option14").style.textDecoration = "underline";
      document.getElementById("option15").style.textDecoration = "none";
      break;
    case 15:
      document.getElementById("option13").style.textDecoration = "none";
      document.getElementById("option14").style.textDecoration = "none";
      document.getElementById("option15").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

function answer4(input, choice) {
	frequency = input;
  var next = document.getElementById("question5");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  if(showResults === true){
    updateResults();
  }

  switch(choice) {
    case 16:
      document.getElementById("option16").style.textDecoration = "underline";
      document.getElementById("option17").style.textDecoration = "none";
      document.getElementById("option18").style.textDecoration = "none";
      break;
    case 17:
      document.getElementById("option16").style.textDecoration = "none";
      document.getElementById("option17").style.textDecoration = "underline";
      document.getElementById("option18").style.textDecoration = "none";
      break;
    case 18:
      document.getElementById("option16").style.textDecoration = "none";
      document.getElementById("option17").style.textDecoration = "none";
      document.getElementById("option18").style.textDecoration = "underline";
      break;
  }
	
	next.scrollIntoView({behavior: "smooth"});
}

function showResult(input, choice) {
	grind = input;
  var next = document.getElementById("result");
  if (next.style.display === "none") {
    next.style.display = "block";
  }
  showResults = true;

  switch(choice){
    case 19:
      document.getElementById("option19").style.textDecoration = "underline";
      document.getElementById("option20").style.textDecoration = "none";
      document.getElementById("option21").style.textDecoration = "none";
      break;
    case 20:
      document.getElementById("option19").style.textDecoration = "none";
      document.getElementById("option20").style.textDecoration = "underline";
      document.getElementById("option21").style.textDecoration = "none";
      break;
    case 21:
      document.getElementById("option19").style.textDecoration = "none";
      document.getElementById("option20").style.textDecoration = "none";
      document.getElementById("option21").style.textDecoration = "underline";
      break;
  }
  updateResults();
	next.scrollIntoView({behavior: "smooth"});
}
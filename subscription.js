var poison;
var home;
var path;
var frequency;
var grind;
var showResults;

function answer1(input) {
  poison = input;
	if(input === 'pour') {
    var x = document.getElementById("pourChoices");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    document.getElementById("dripChoices").style.display = "none";
    document.getElementById("latteChoices").style.display = "none";
  } 
  else if(input === 'drip') {
    var x = document.getElementById("dripChoices");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    document.getElementById("pourChoices").style.display = "none";
    document.getElementById("latteChoices").style.display = "none";
  }
  else if(input === 'latte') {
    var x = document.getElementById("latteChoices");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    document.getElementById("dripChoices").style.display = "none";
    document.getElementById("pourChoices").style.display = "none";
  }
  else{
  	alert("please refresh the page")
  }
  
  if(showResults === true){
    document.getElementById("variables").innerHTML = poison + home + path + frequency + grind;
  }
}

function answer2(input) {
	home = input;
  var x = document.getElementById("question3");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if(showResults === true){
    document.getElementById("variables").innerHTML = poison + home + path + frequency + grind;
  }
}

function answer3(input) {
	path = input;
  var x = document.getElementById("question4");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if(showResults === true){
    document.getElementById("variables").innerHTML = poison + home + path + frequency + grind;
  }
}

function answer4(input) {
	frequency = input;
  var x = document.getElementById("question5");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if(showResults === true){
    document.getElementById("variables").innerHTML = poison + home + path + frequency + grind;
  }
}

function showResult(input) {
	grind = input;
  var x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  showResults = true;
  document.getElementById("variables").innerHTML = poison + home + path + frequency + grind;
}
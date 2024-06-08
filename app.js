const headerOne = document.getElementById("h1-container-three");
const contOneBoxOne = document.getElementById("container-one-box-one");
const contOneBoxTwo = document.getElementById("container-one-box-two");
const contTwoDiv = document.getElementById("container-two-div");
const results = document.getElementById("h1-container-three");


//Test
headerOne.addEventListener("click", function(){
    headerOne.style.fontSize = "100px";}
)


//Review Practice of Parameters
function changeColor(a) {
  contOneBoxOne.addEventListener("click", function() {
    contOneBoxOne.style.backgroundColor = (a);
    contOneBoxTwo.style.backgroundColor = (a);
     
  })
}
//Function Changes the colors based on which container is clicked.
 function chooseColor() {
  contOneBoxOne.addEventListener("click", function() {
    contOneBoxOne.style.backgroundColor = "red";    
    contOneBoxTwo.style.backgroundColor = "black";

  })
    contOneBoxTwo.addEventListener("click", function() {
    contOneBoxOne.style.backgroundColor = "black";    
    contOneBoxTwo.style.backgroundColor = "red";
   
 })
   contTwoDiv.addEventListener("click", function() {
   contOneBoxOne.style.backgroundColor = "white";    
   contOneBoxTwo.style.backgroundColor = "white";
  })
}
                                 
chooseColor();

//Case Switch Practice
function caseSwitch(myChoice){
  switch(myChoice) {
    case "a":
      headerOne.innerHTML = "Pass";
      contOneBoxOne.style.color = "black";
      contOneBoxTwo.style.color = "red";
      results.style.color = "red";
      break;
    case "b":
      headerOne.innerHTML = "Fail";
      contOneBoxOne.style.color = "red";
      contOneBoxTwo.style.color = "black";
      results.style.color = "black";
      break;     
    case "c":
      headerOne.innerHTML = "Restart";
      contOneBoxOne.style.color = "rgb(0, 159, 170)";
      contOneBoxTwo.style.color = "rgb(0, 159, 170)";
      results.style.color = "rgb(0, 159, 170)";
      break;     
  }
}

function caseSwitchFunction(){
contOneBoxOne.addEventListener('click', function(){
  caseSwitch("a")
})
contOneBoxTwo.addEventListener('click', function(){
  caseSwitch("b")
})
contTwoDiv.addEventListener('click', function(){
  caseSwitch("c")
})
}

caseSwitchFunction();

//Basic Loops
function loopPractice() {

  let loopCount = 3;

  while(loopCount > 0) {
    console.log("Loopcount is now: " + loopCount);
    loopCount -= 1;
  }

  console.log("End of Loop")
}

//Event that begins loop
contTwoDiv.addEventListener('click', function(){
  loopPractice();
})

//Arrays

let colors = ["Red", "Black"];
let possibleOutcomes = [colors, "No Colors"];

contOneBoxOne.onclick = function() {
    console.log(possibleOutcomes[0][0]);
}
contOneBoxTwo.onclick = function() {
  console.log(possibleOutcomes[0][1]);
}
contTwoDiv.onclick = function() {
  console.log(possibleOutcomes[1]);
}


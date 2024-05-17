const headerOne = document.getElementById("h1-container-one");
const contOneBoxOne = document.getElementById("container-one-box-one");
const contOneBoxTwo = document.getElementById("container-one-box-two");
const contTwoDiv = document.getElementById("container-two-div");


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
      break;
    case "b":
      headerOne.innerHTML = "Fail";
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
}

caseSwitchFunction();

//Basic Loops
function loopPractice() {

  let loopCount = 5;

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

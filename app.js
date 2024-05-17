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

//initialize
var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var iValue;

//make all the cards show their default on load
function redo(){
  iTrigger.value = "";
  document.querySelector('.currentPx').innerHTML = "14px";
  fonText.forEach(fontCard => {
    fontCard.style.fontSize = "14px";
    fontCard.innerHTML = fontCard.getAttribute("data-defaulttext");
  });
}

//start default on load
redo();

//change font card to input value and then revert to default if no value
iTrigger.oninput = function() {
  iValue = document.querySelector('#iTrigger').value
  fonText.forEach(fontCard => {
    fontCard.innerHTML = iValue;
    if(fontCard.innerHTML == ""){
      fontCard.innerHTML = fontCard.getAttribute("data-defaulttext");
    }
  });
}

//PIXEL MENU SHOW/HIDE + HOVER COLOR
//initialize variables
var pxMenu = document.querySelector(".pxMenu");
var pxOptContainer = document.querySelector("#pxOptContainer");
var pxP = document.querySelectorAll(".pxP"); 
var body = document.querySelector('body');

//disable created class for pixel options
pxP.forEach(element => {
  element.classList.remove("color");
});

//listen mouse on and mouse off of the pixel button
pxMenu.addEventListener("mouseover", toggleA1);
pxOptContainer.addEventListener("mouseout", toggleA2);

//show / hide the pixel option menu
function toggleA1(){
  pxOptContainer.style.display = "flex";
  body.style.overflow = "hidden";
}
function toggleA2(){
  pxOptContainer.style.display = "none";
  body.style.overflow = "hidden scroll";
}

//listen for mouse on / off for color pixel options
pxP.forEach(element => {
  element.addEventListener("mouseover", toggleB1);
});
pxP.forEach(element => {
  element.addEventListener("mouseout", toggleB2);
});

//color on mouse on / mouse out color off for pixel options
function toggleB1(){
  this.classList.toggle("color");
}
function toggleB2(){
  this.classList.toggle("color");
}

//change pixel size of text when pixel option clicked
pxP.forEach(element => {
  element.addEventListener("click", toggleTextSize);
});

function toggleTextSize(element){
  function changeFontSize(target){
    fonText.forEach(e => {
      e.style.fontSize = target;
    });
  }
  function changeButtonText(target){
    document.querySelector('.currentPx').innerHTML = target;
  }
  var target = element.explicitOriginalTarget.innerHTML;
  switch (target) {
    case "16px": 
    changeFontSize(target);
    changeButtonText(target);
    break;
    case "18px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "20px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "22px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "24px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "26px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "28px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "30px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "32px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
    case "34px": 
      changeFontSize(target);
      changeButtonText(target);
    break;
  }
}

//reset the page when redo button clicked
document.querySelector('.redo').onclick = () => {redo()};

//light dark toggle class
//initialize
var ldToggle = document.querySelector('.ldToggle');

ldToggle.addEventListener('click', toggleLD);

function toggleLD(){
  body.classList.toggle('light');
  document.querySelector('.topNav').classList.toggle('light');
}


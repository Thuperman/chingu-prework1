//Made my Jason P. Warner --inspired by google.

//make mobile version of javascript i.e. no hover

var sFonts = document.querySelector('.searchFonts');
var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var defaultT = fonText[0].getAttribute("data-defaulttext"); 
var sFonts = document.querySelector('.searchFonts');
var fonType = document.querySelectorAll('.fType');
var mainGrid = document.querySelector('.mainGrid');
var tilesList = document.querySelectorAll('.listIt');
var body = document.querySelector('body');
var iValue;

window.addEventListener('resize', defaultTileWidth);

function defaultTileWidth(){
  var width = this.innerWidth;
  tilesList.forEach(element => {
    if(width > 790){
    element.style.width = '300px';
    } else if(width < 790){
      element.style.width = '';
    }
  });
}


function redo(){
  sFonts.value = "";
  iTrigger.value = "";
  mainGrid.style.display = "grid";
  document.querySelector('.currentPx').innerHTML = "14px";
  fonText.forEach(fontCard => {
    fontCard.style.fontSize = "14px";
    fontCard.innerHTML = fontCard.getAttribute("data-defaulttext");
  });
  defaultTileWidth();
  searchFonts();
}
//start default on load
redo();

//reset the page when redo button clicked
document.querySelector('.redo').onclick = function(){
  document.querySelector('.mainGrid').classList.toggle('mgList');
  redo();
}


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

//pixel menu show/hide
//initialize variables
var pxMenuContainer = document.querySelector('.pxMenuContainer');
var pxMenu = document.querySelector(".pxMenu");
var pxOptContainer = document.querySelector("#pxOptContainer");
var pxP = document.querySelectorAll(".pxP"); 


//disable created class for pixel options
pxP.forEach(element => {
  element.classList.remove("color");
});

//listen mouse on and mouse off of the pixel button

pxMenuContainer.addEventListener("mouseover", toggleA1);
pxOptContainer.addEventListener("mouseout", toggleA2);

//show / hide the pixel option menu
function toggleA1(){
  pxOptContainer.style.display = "inline-block";
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
//listen for click on pixel options 
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


//light dark toggle class
// search fonts 
sFonts.addEventListener("keyup", searchFonts);
function searchFonts(){
  var targetContent = this.value;
  document.querySelectorAll('.tile').forEach(element => {
    element.style.display = "block";
    element.style.overflow = "wrap";

  });
  fonType.forEach((e) => {
    var re = new RegExp(targetContent, "gi");
    if((e.innerHTML.match(re)) == null){
      var tileIndex = e.getAttribute("data-tileIndex");
      var getTileIndex = document.querySelector("." + tileIndex);
      getTileIndex.style.display = "none";
    }
  });
}

//initialize
var ldToggle = document.querySelector('.ldToggle');

ldToggle.addEventListener('click', toggleLD);

function toggleLD(){
  body.classList.toggle('light');
  document.querySelector('.topNav').classList.toggle('light');
}




var listB = document.querySelector('.list');
listB.addEventListener('click', toggleList);
function toggleList(){
  document.querySelector('.mainGrid').classList.toggle('mgList');
  document.querySelectorAll('.tile').forEach(element => {
    if(element.style.width == "300px"){
      element.style.width = "100%"
    } else if(element.style.width == "100%") {
      element.style.width = "300px";
    }
  });
}



// //change font layout when list button clicked
// var listB = document.querySelector('.list');
// listB.addEventListener('click', toggleList);
// function toggleList(){
//   var counter = 0;
//   if(counter == 0){
//     console.log("changing to block");
//     mainGrid.style.display = "block";
//     counter++;
//     return;
//   } else if(counter == 1){
//     console.log("changing to grid");
//     mainGrid.style.display = "grid";
//     counter--;
//     return;
//   }
//   // document.querySelectorAll('.tile').forEach(element => {
//   //   if(counter == 0){
//   //   element.style.width = "100%";
//   //   console.log("width to 100");
//   //   return;
//   //   } else if(counter == 1){
//   //     console.log("width to 300");
//   //     element.style.width = "300px";
//   //     return;
//   //   }
//   // });
// }



//make all the cards show their default on load
// function defaultTileWidth(){
//   tilesList.forEach(element => {
//     element.style.width = '300px';
//   });
// }


// if((e.innerHTML.includes(targetContent)) !== true)











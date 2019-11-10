//Made my Jason P. Warner --inspired by google.

//make mobile version of javascript i.e. no hover
var sFonts = document.querySelector('.searchFonts');
var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var sFonts = document.querySelector('.searchFonts');
var fonType = document.querySelectorAll('.fType');
var mainGrid = document.querySelector('.mainGrid');
var tilesList = document.querySelectorAll('.listIt');
var pxMenuContainer = document.querySelector('.pxMenuContainer');
var pxMenu = document.querySelector(".pxMenu");
var pxOptContainer = document.querySelector("#pxOptContainer");
var pxP = document.querySelectorAll(".pxP"); 
var body = document.querySelector('body');
var tCounter = 0;
var iValue;

window.addEventListener('resize', defaultTileWidth);
var smallScreen;
var width;
function defaultTileWidth(){
  width = this.innerWidth;
  tilesList.forEach(element => {
    if(width > 790){
    element.style.width = '300px';
    smallScreen = false;
    
    } else if(width < 790){
      element.style.width = '';
      smallScreen = true;
    }
  });
  listen();
}

function redo(){
  sFonts.value = "";
  iTrigger.value = "";
  mainGrid.style.display = "grid";
  document.querySelector('.currentPx').innerHTML = "22px";
  fonText.forEach(fontCard => {
    fontCard.style.fontSize = "22px";
    fontCard.innerHTML = fontCard.getAttribute("data-defaulttext");
  });
  defaultTileWidth();
  searchFonts();
}
//start default on load
redo();

//reset the page when redo button clicked
document.querySelector('.redo').onclick = function(){
  redo();
  if(tCounter == 1){
    togglerz();
    toggleLDcolor();
    tCounter = 0;
  }
  if(smallScreen == false){
    tileView();
  }
}

function wideView(){
  mainGrid.style.display = "block";
  document.querySelectorAll('.tile').forEach(element => {
    element.style.width = "100%";
    element.style.marginBottom = "5%";
  });
}
function tileView(){
  mainGrid.style.display = "grid";
  document.querySelectorAll('.tile').forEach(element => {
    element.style.width = "300px";
  });
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
//disable created class for pixel options
pxP.forEach(element => {
  element.classList.remove("color");
});

  function listen(){
  if(smallScreen == false){
      //listen mouse on and mouse off of the pixel button
      pxMenuContainer.addEventListener("mouseover", toggleA1);
      pxOptContainer.addEventListener("mouseout", toggleA2);
      //listen for mouse on / off for color pixel options
      pxP.forEach(element => {
        element.addEventListener("mouseover", toggleB1);
      });
      pxP.forEach(element => {
        element.addEventListener("mouseout", toggleB2);
      });
    } else if(smallScreen == true){
      //remove the hover event listeners on mobile
      pxMenuContainer.removeEventListener("mouseover", toggleA1);
      pxOptContainer.removeEventListener("mouseout", toggleA2);
      pxP.forEach(element => {
        element.removeEventListener("mouseover", toggleB1);
      });
      pxP.forEach(element => {
        element.removeEventListener("mouseout", toggleB2);
      });
      //add click event listeners for mobile
      pxMenu.addEventListener("click", toggleA1);
      pxOptContainer.addEventListener("click", toggleA2);
  }
}
//show / hide the pixel option menu
function toggleA1(){
  pxOptContainer.style.display = "inline-block";
  body.style.overflow = "hidden";
}
function toggleA2(){
  pxOptContainer.style.display = "none";
  body.style.overflow = "hidden scroll";
}
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
 
//toggle list view
var listB = document.querySelector('#list');
listB.addEventListener('click', toggleList);
var lCounter = 0;
function toggleList(){
   // document.querySelector('.mainGrid').classList.toggle('mgList');

  if(lCounter == 0){
    wideView();
    lCounter++;
    return
  } else if(lCounter == 1){
    tileView();
    lCounter--;
  }
}

//light dark toggle class
function toggleLDcolor(){
  counter = 0;
  var sun = document.querySelector('.sunBttn');
  var moon = document.querySelector('.moonBttn');
  if(counter == 0){
    sun.classList.toggle('hide');
    moon.classList.toggle('show');
    counter++;
    return
  } else if(couner == 1) {
    moon.classList.toggle('show');
    sun.classList.toggle('hide');
    counter--;
    return
  }
}

function togglerz(){
  body.classList.toggle('dark');
  document.querySelector('.topNav').classList.toggle('dark');
  document.querySelector('.logoBox').classList.toggle('dark');
  document.querySelector('.logo').classList.toggle('dark');
  document.querySelectorAll('.a').forEach(element => {
    element.classList.toggle('dark');
  });
  document.querySelector('.manipBar').classList.toggle('dark');
  document.querySelectorAll('input').forEach(element => {
    element.classList.toggle('dark');
  });
  // document.querySelector('.iTrigger').classList.toggle('dark');
  document.querySelector('.currentPx').classList.toggle('dark');
  document.querySelector('.fa-caret-down').classList.toggle('dark');
  document.querySelector('.fa-sun').classList.toggle('dark');
  document.querySelector('.fa-moon').classList.toggle('dark');
  document.querySelector('.fa-th-list').classList.toggle('dark');
  document.querySelector('.fa-redo-alt').classList.toggle('dark');
  document.querySelector('.pxMenu').classList.toggle('dark');
  document.querySelector('.pageContainer').classList.toggle('dark');
  document.querySelector('.footer').classList.toggle('dark');
  document.querySelectorAll('.tile').forEach(element => {
    element.classList.toggle('dark');
  });
  document.querySelectorAll('.p').forEach(element => {
    element.classList.toggle('dark');
  });
  document.querySelectorAll('.tileRow1').forEach(element => {
    element.classList.toggle('dark');
  });
  document.querySelectorAll('.tileRow2').forEach(element => {
    element.classList.toggle('dark');
  });

}

var ldToggle = document.querySelector('.ldToggle');
var dark = false;
ldToggle.addEventListener('click', toggleLD);
function toggleLD(){
  togglerz();
  toggleLDcolor();
  if(tCounter == 0){
    tCounter++;
    return tCounter;
  } else if(tCounter == 1){
    tCounter++;
    if(tCounter == 2) {
      tCounter = 0;
    }
  }
} 











//Made my Jason P. Warner --inspired by google.

var sFonts = document.querySelector('.searchFonts');
var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var defaultT = fonText[0].getAttribute("data-defaulttext"); 
var tilesList = document.querySelectorAll('.listIt');
var sFonts = document.querySelector('.searchFonts');
var fonType = document.querySelectorAll('.fType');
var iValue;

//make all the cards show their default on load
function defaultTileWidth(){
  tilesList.forEach(element => {
    element.style.width = '300px';
  });
}
function redo(){
  sFonts.value = "";
  iTrigger.value = "";
  document.querySelector('.currentPx').innerHTML = "14px";
  defaultTileWidth();
  fonText.forEach(fontCard => {
    fontCard.style.fontSize = "14px";
    fontCard.innerHTML = fontCard.getAttribute("data-defaulttext");
  });
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
var body = document.querySelector('body');

//disable created class for pixel options
pxP.forEach(element => {
  element.classList.remove("color");
});

//listen mouse on and mouse off of the pixel button
pxMenuContainer.addEventListener("mouseover", toggleA1);
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
    element.style.display = "inline-block";
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




//change font layout when list button clicked
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


// if((e.innerHTML.includes(targetContent)) !== true)


// case "18px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "18px";
    // });
    // break;
    // case "20px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "20px";
    // });
    // break;
    // case "22px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "22px";
    // });
    // break;
    // case "24px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "24px";
    // });
    // break;
    // case "26px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "26px";
    // });
    // break;
    // case "28px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "28px";
    // });
    // break;
    // case "30px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "30px";
    // });
    // break;
    // case "32px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "32px";
    // });
    // break;
    // case "34px": 
    // fonText.forEach(e => {
    //   e.style.fontSize = "34px";
    // });
    // break;


// if(target == "16px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "16px";
//   });
// } else if(target == "18px"){
//   console.log("18px selected")
//   fonText.forEach(e => {
//     console.log("18px for each")
//     e.style.fontSize = "18px";
//   });
// }
// else if(target == "20px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "20px";
//   });
// } else if(target == "22px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "22px";
//   });
// } else if(target == "24px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "24px";
//   });
// } else if(target == "26px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "26px";
//   });
// } else if(target == "28px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "28px";
//   });
// } else if(target == "30px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "30px";
//   });
// } else if(target == "32px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "32px";
//   });
// } else if(target == "34px"){
//   fonText.forEach(e => {
//     e.style.fontSize = "34px";
//   });
// }









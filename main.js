//change font text on input + revert to default on empty
var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var defaultT = fonText[0].getAttribute("data-defaulttext"); 
var iValue;

//make all the cards show their default on load
function redo(){
  iTrigger.value = "";
  fonText.forEach(fontCard => {
    fontCard.style.fontSize = "14px";
    fontCard.innerHTML = defaultT;
  });
}
//start defaul on load
redo();
//reset the page when redo button clicked
  document.querySelector('.redo').onclick = function(){redo()};
//change font card to input value and then revert to default if no value
iTrigger.oninput = function() {
  iValue = document.querySelector('#iTrigger').value
  fonText.forEach(fontCard => {
    fontCard.innerHTML = iValue;
    if(fontCard.innerHTML == ""){
      fontCard.innerHTML = defaultT;
    }
  });
}
//pixel menu show/hide + hover color
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
function changeFontSize(target){
  fonText.forEach(e => {
    e.style.fontSize = target;
  });
  }
  function changeButtonText(target){
    document.querySelector('.currentPx').innerHTML = target;
  }
function toggleTextSize(element){
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
var sFonts = document.querySelector('.searchFonts');
var fonType = document.querySelectorAll('.fType');
sFonts.addEventListener("keyup", searchFonts);

function searchFonts(){

  document.querySelectorAll('.tile').forEach(element => {
    element.style.display = "block";
  });

  var targetContent = this.value;
  fonType.forEach((e) => {
    if((e.innerHTML.includes(targetContent)) !== true){
      var tileIndex = e.getAttribute("data-tileIndex");
      var getTileIndex = document.querySelector("." + tileIndex);
      getTileIndex.style.display = "none";
    }
  });
}








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








//initialize
// var px16 = document.querySelectorAll(".px16");
// var px18 = document.querySelectorAll(".px18");
// var px20 = document.querySelectorAll(".px20");
// var px22 = document.querySelectorAll(".px22");
// var px24 = document.querySelectorAll(".px24");
// var px26 = document.querySelectorAll(".px26");
// var px28 = document.querySelectorAll(".px28");
// var px30 = document.querySelectorAll(".px30");
// var px32 = document.querySelectorAll(".px32");
// var px34 = document.querySelectorAll(".px34");


// var allPxSizes = {px16, px18, px20, px22, px24, px26, px28, px30, px32, px34};
// var apsObject = Object.keys(allPxSizes);

// console.log(apsObject);
// apsObject.forEach(test);

// function test(element, index){
//   element.addEventListener()
//   console.log(index);
// }


//listen for click on pixel options

// apsObject.forEach(element) {
//   console.log("i  " + i);
//   console.log("this " + this);
//   console.log("element " + element);
// });

// function changePxSize(){
//   console.log("firing changePxSize function" + this);
// }


// .addEventListener("mouseover", test);
// function test(){
//   alert("dude it works");
// }

// Object.keys(allPxSizes).forEach(element => {
//   console.log(element);
// });


//listen for click for pixel options
// pxP.forEach(element => {
//   element.addEventListener("mousedown", toggleC1);
// });
// //on click change pixel size of all font card text
// function toggleC1(){

// }


// document.querySelector(".pxMenu").addEventListener("mouseover", toggleA1);
// document.querySelector("#pxOptContainer").addEventListener("mouseout", toggleA2);

// function toggleA1(){
//   document.querySelector("#pxOptContainer").style.display = "flex";
// }

// function toggleA2(){
//   document.querySelector("#pxOptContainer").style.display = "none";
// }


//capture the keys pressed
  //create an object of keycodes that will s
//add them into a variable/array?
//update the tile per key pressed


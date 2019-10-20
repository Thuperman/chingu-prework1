var iTrigger = document.querySelector("#iTrigger");
var fonText = document.querySelectorAll(".fonText");
var defaultT = fonText[0].getAttribute("data-defaulttext"); 
var iValue;

fonText.forEach(fontCard => {
  fontCard.innerHTML = defaultT;
});

iTrigger.oninput = function() {
  iValue = document.querySelector('#iTrigger').value
  fonText.forEach(fontCard => {
    fontCard.innerHTML = iValue;
    if(fontCard.innerHTML == ""){
      fontCard.innerHTML = defaultT;
    }
  });
}

// iTrigger.addEventListener("keyup", function() {
//   iValue = document.querySelector('#iTrigger').value

//   fonText.forEach(fontCard => {
//     fontCard.innerHTML = iValue;
//   });

// });








//capture the keys pressed
  //create an object of keycodes that will s
//add them into a variable/array?
//update the tile per key pressed


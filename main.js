var finished = false;
var tString = [];
var iTrigger0 = document.querySelector(".iTrigger0");
var fonText = document.querySelector(".fonText");
iTrigger0.addEventListener("keydown", function(e) {
  console.log("hello" + e.keyCode);
  // fonText.innerHTML = "wooo hooooo it worked";
  if(e.keyCode == 65){
    tString.push('a');
  } else if(e.keyCode == 66){
    tString.push('b');
  } else if(e.keyCode == 67){
    tString.push('c');
  } else if(e.keyCode == 68){
    tString.push('d');
  } else if(e.keyCode == 8) {
    tString.pop();
  }
  fonText.innerHTML = tString.join('');
});
if(tString.length < 1){
  console.log("empty tString");
  fonText.innerHTML = "swagmedownbro"
}
// if(finished == true){
//   console.log(tString.join(''));
//   console.log("this is supposed to happen after typing");
//   console.log(finished);
//   finished = false;
//   tString = [];
// }


//capture the keys pressed
  //create an object of keycodes that will s
//add them into a variable/array?
//update the tile per key pressed


// switch (e.keyCode) {
//   case 65: 
//     console.log('a is initiated');
//     tString.push('a')
//     break;
//   case 66:
//     console.log('b is initiated');
//     tString.push('b');
//   case 67:
//     console.log('true is initiated');
//     finished == true;
// default:
//   console.log('didnt work'); 
//   return;
// }
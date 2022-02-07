let output = document.getElementById('output')
let box = document.getElementById('box')

let number = 0
let xpos = 0


function paint() { // have to recursively call it again to infite loop
  // first the condition to stop the loop
  number++;
  output.textContent = number;

  if (number < 300) {
    requestAnimationFrame(paint); // dosnt have to call window.requestAnimationFrame, the function auto calls window
  }
  
}

function move(timeItTook) {

  if (timeItTook) {
    let diff = timeItTook - number;
    console.log(`frame, ${diff}`)
    number = timeItTook;
  }
  xpos = xpos + 5;
  box.style.transform = `translateX(${xpos}px)`;
  // lets do a calculation of the window width
  let ww = document.body.clientWidth;


  if (xpos < ww) {
    requestAnimationFrame(move);
  }
}

 // window.requestAnimationFrame(paint) // this function will run one time only

window.requestAnimationFrame(move) // this function will run one time only
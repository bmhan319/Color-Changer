const COLORBOX = document.querySelector('.color-box');
const BUTTON = document.querySelector('.button');
const NEWCOLOR = document.querySelector('.new-color');


function changeColor() {
  let rValue = Math.floor(Math.random(0,1) * 256);
  let gValue = Math.floor(Math.random(0,1) * 256);
  let bValue = Math.floor(Math.random(0,1) * 256);
  let randomColor = "background-color:RGB(" + rValue + "," + gValue + "," + bValue + ")";

  COLORBOX.setAttribute('style', randomColor);
  NEWCOLOR.innerHTML="The color value is: RGB(" + rValue + "," + gValue + "," + bValue + ")";
}


BUTTON.addEventListener('click', changeColor);
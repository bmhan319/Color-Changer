const COLORBOX = document.querySelector('.color-box');
const BUTTON = document.querySelector('.button');
const NEWRGBCOLOR = document.querySelector('.new-rgb-color');
const NEWHEXCOLOR = document.querySelector('.new-hex-color');
const TEXT = document.querySelector('.text');


function changeColor() {
  //Generates Random RGB Values
  let rValue = Math.floor(Math.random(0,1) * 256);
  let gValue = Math.floor(Math.random(0,1) * 256);
  let bValue = Math.floor(Math.random(0,1) * 256);
  
  //Changes Color in Box
  let randomColor = "background-color:RGB(" + rValue + "," + gValue + "," + bValue + ")";
  COLORBOX.setAttribute('style', randomColor);
  
  //Displays RGB Text Values for each color
  NEWRGBCOLOR.innerHTML="The RGB value is: RGB(" + rValue + "," + gValue + "," + bValue + ")";
  
  //Converts RGB to HEX and Displays HEX Values for each color
  let hexValue = (rgbToHex(rValue, gValue, bValue)).toUpperCase();
  NEWHEXCOLOR.innerHTML="The HEX value is: " + hexValue;
  
  //Change Text Color Depending on BG Color Value
  if ( (rValue >= 200 && gValue >= 200) ||
       (rValue >= 200 && bValue >= 200) ||
       (gValue >= 200 && bValue >= 200)  ) {
    console.log("hi");
    TEXT.setAttribute('class', 'reverse');
    NEWRGBCOLOR.setAttribute('class', 'reverse');
    NEWHEXCOLOR.setAttribute('class', 'reverse');
  
  } else {
    TEXT.setAttribute('class', 'text');
    NEWRGBCOLOR.setAttribute('class', 'text');
    NEWHEXCOLOR.setAttribute('class', 'text');
  }
};



//Converts RGB to HEX Values
//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}




BUTTON.addEventListener('click', changeColor);
var numberOfcircles = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var circles = document.querySelectorAll('.circle');
var modeButtons = document.querySelectorAll('.mode');
var messageDisplay = document.querySelector('#message');
var colorDisplay = document.getElementById('colorDisplay');

init();

function init(){
  // mode buttons event listeners
  setModeButtons();
  setUpCircles();
  reset();
};

function setModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numberOfcircles = 3: numberOfcircles = 6;
      reset();
    });
  }
}

function setUpCircles(){
  for (var i = 0; i < circles.length; i++) {
    // adds click event listener
    circles[i].addEventListener('click', function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again';
      } else{
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset(){
  h1.style.backgroundColor = '#6686ba';
  resetButton.textContent = 'New Colors';
  // generate all new Colors
  colors = generateRandomColors(numberOfcircles);
  // pick a new random color from array
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  // change colors of circles
  for (var i = 0; i < circles.length; i++) {
    if(colors[i]){
      circles[i].style.display = 'block';
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = 'none';
    }
  };
}

resetButton.addEventListener('click', function(){
  reset();
});

function changeColors(color){
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  };
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(n){
  var array = [];
  for (var i = 0; i < n; i++) {
    // get random color and push into array
    array.push(randomColor());
  };
  return array;
};

function randomColor(){
  // pick a 'red', 'green', 'blue' from 0 to 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb('+ r + ', ' + g + ', ' + b +')';
};

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy-btn');
var hardBtn = document.querySelector('#hard-btn');

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  };
});

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
});

resetButton.addEventListener('click', function(){
  h1.style.backgroundColor = '#232323';
  resetButton.textContent = 'New Colors';
  // generate all new Colors
  colors = generateRandomColors(numberOfSquares);
  // pick a new random color from array
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  };
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // adds initila color to suqares
  squares[i].style.backgroundColor = colors[i];
  // adds click event listener
  squares[i].addEventListener('click', function(){
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
};


function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
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

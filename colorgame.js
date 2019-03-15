var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');

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

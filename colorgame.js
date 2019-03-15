var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 255)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
];
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = colors[1];

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // adds initila color to suqares
  squares[i].style.backgroundColor = colors[i];
  // adds click event listener
  squares[i].addEventListener('click', function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      alert('This is the right color !')
    } else{
      this.style.backgroundColor = '#232323';
    }
  });
};

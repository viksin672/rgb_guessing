var numin = 6;
var colors = generateRandomColors(numin);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("eBtn");

var hardButton = document.getElementById("hBtn");


easyButton.addEventListener("click",function(){

	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");

    numin = 3;
	colors = generateRandomColors(numin);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	}
});


hardButton.addEventListener("click",function(){
	
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	
    numin = 6;
	colors = generateRandomColors(numin);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click",function(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numin);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = steelblue;
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
    
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
    	messageDisplay.textContent = "Correct!!";
    	changeColors(clickedColor);
    	h1.style.backgroundColor = clickedColor;
    	resetButton.textContent = "play again!!";
     }else{
     	this.style.backgroundColor = "#232323";
     	messageDisplay.textContent = "try again!!";
     }

	});
}

function changeColors(color){

	for (var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = color;

	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
   var arr = []

   for(var i=0; i< num; i++){
   	arr.push(randomColor())

   }
   return arr;	
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", "+ g + ", " + b + ")";
}
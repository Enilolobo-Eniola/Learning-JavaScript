// var body  = document.querySelector("body");
// console.log(body);
// console.log(body.length);
// var shit = document.getElementsByTagName("li");
// console.log(shit);
// console.log(shit.length);

// var newItem = document.getElementById("newItem");
// var addBtn = document.getElementById("addBtn");
// var list1 = document.querySelector("ul");
// var errorString = "Ensure the field isn't empty";

// function addToList()
// {
// 	if (newItem.value.length > 0 )
//  	{
//  		var li = document.createElement("li");
//  		li.appendChild(document.createTextNode(newItem.value));
//  		list1.appendChild(li);
//  		newItem.value="";
//  	}
//  	else
//  	{
//  		var errorMessage = document.querySelector("label");
//  		errorMessage.innerHTML = errorString;
//  	}
// }
//  addBtn.addEventListener("click",addToList)

// var string  = "sdvsd+dvsdvs+sdvsd";
// var nw = string.split("+");
// console.log(nw);




var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");
var plusButton = document.getElementById("plusbutton");
var cancel = document.getElementById("cancelBtn");
console.log(buttons);

function addToDisplay(value)
{
	display.value = display.value+value;
}

// Displaying values on the display

buttons[0].addEventListener("click",function()
	{
		addToDisplay(buttons[0].innerHTML);
	}
	);
buttons[1].addEventListener("click",function()
	{
		addToDisplay(buttons[1].innerHTML);
	}
	);
buttons[2].addEventListener("click",function()
	{
		addToDisplay(buttons[2].innerHTML);
	}
	);
buttons[3].addEventListener("click",function()
	{
		addToDisplay(buttons[3].innerHTML);
	}
	);
buttons[4].addEventListener("click",function()
	{
		addToDisplay(buttons[4].innerHTML);
	}
	);
buttons[5].addEventListener("click",function()
	{
		addToDisplay(buttons[5].innerHTML);
	}
	);
buttons[6].addEventListener("click",function()
	{
		addToDisplay(buttons[6].innerHTML);
	}
	);
buttons[7].addEventListener("click",function()
	{
		addToDisplay(buttons[7].innerHTML);
	}
	);
buttons[8].addEventListener("click",function()
	{
		addToDisplay(buttons[8].innerHTML);
	}
	);
buttons[9].addEventListener("click",function()
	{
		addToDisplay(buttons[9].innerHTML);
	}
	);

// Functionality for cancel button
cancel.addEventListener("click",function()
{
	display.value = "";
}
);

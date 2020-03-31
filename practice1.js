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



// Variable declarations
var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");
var plusButton = document.getElementById("plusbutton");
var cancel = document.getElementById("cancelBtn");
var backspace = document.getElementById("backspaceBtn");

// Function to add to display
function addToDisplay(value)
{
	display.value = display.value+value;
}

// Function for adding symbols to display
function addSymbolToDisplay(symbol)
{
	currDisplay = display.value;
	if (currDisplay[currDisplay.length-1] != " ") //adds whitespace before operator is added to display
	{
		display.value = display.value + " " +symbol+ " ";
	}
	else  //adds just operator if display already ends with a whitespace
	{
		display.value = display.value +symbol+ " ";
	}
}



// Function for All Calculation
function performCalculation()
{
	displayArray = display.value.split(" "); //splits the display string by whitespaces into an array
	var i;
	var count = 1;
	console.log(displayArray);
	while(count <= 4)
	{
		for (i=0;i<displayArray.length;i++) //loops through the displayArray
		{
			if(displayArray[i] === "") //handels(deletes) trailing spaces in display
			{
				displayArray.splice(i,1);
				console.log(displayArray);
			}

			if (
				(!(Number(displayArray[i])) && Number(displayArray[i]).toString() !== '0') && //if the element[i] isn't a number and isn't 0
				(!(Number(displayArray[i+1])) && Number(displayArray[i+1]).toString() !== '0')&& //if the element[i+1] isn't a number and isn't 0
				((displayArray[i] !== 0) && displayArray[i+1] !== 0)
			   ) //ensures operators are followed by only operands
			{
				display.value = "Syntax Error";
				break;									
			}
			else
			{
				if (displayArray[i] === '/' && count === 1) //For division
				{
					var ans = Number(displayArray[i-1]) / Number(displayArray[i+1]);
					if (!Number(ans) && ans !==0) {display.value = "Error";break;}
					else{display.value = ans;}
					displayArray[i-1] = ans;
					displayArray.splice(i,2);
					i=0;
					console.log(displayArray);
				}

				if (displayArray[i] === '*' && count === 2) //For multiplication
				{
					var ans = Number(displayArray[i-1]) * Number(displayArray[i+1]);
					if (!Number(ans) && ans !==0) {display.value = "Error";break;}
					else{display.value = ans;}
					displayArray[i-1] = ans;
					displayArray.splice(i,2);
					i=0;
					console.log(displayArray);
				}

				if (displayArray[i] === '+' && count === 3) //For addition
				{
					var ans = Number(displayArray[i-1]) + Number(displayArray[i+1]);
					if (!Number(ans) && ans !==0) {display.value = "Error";break;}
					else{display.value = ans;}
					displayArray[i-1] = ans;
					displayArray.splice(i,2);
					i=0;
					console.log(displayArray);
				}

				if (displayArray[i] === '-' && count === 4) //For subtraction
				{
					var ans = Number(displayArray[i-1]) - Number(displayArray[i+1]);
					if (!Number(ans) && ans !==0) {display.value = "Error";break;}
					else{display.value = ans;}
					displayArray[i-1] = ans;
					displayArray.splice(i,2);
					i=0;
					console.log(displayArray);
				}
			}
		}
		count++;
	}
}



// Displaying values on the display

buttons[0].addEventListener("click",function()
	{
		addToDisplay("-");
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
		addSymbolToDisplay(buttons[4].innerHTML);
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
		addSymbolToDisplay(buttons[8].innerHTML);
	}
	);
buttons[9].addEventListener("click",function()
	{
		addToDisplay(buttons[9].innerHTML);
	}
	);
buttons[10].addEventListener("click",function()
	{
		addToDisplay(buttons[10].innerHTML);
	}
	);
buttons[11].addEventListener("click",function()
	{
		addToDisplay(buttons[11].innerHTML);
	}
	);
buttons[12].addEventListener("click",function()
	{
		addSymbolToDisplay(buttons[12].innerHTML);
	}
	);
buttons[13].addEventListener("click",function()
	{
		addToDisplay(buttons[13].innerHTML);
	}
	);
buttons[14].addEventListener("click",function()
	{
		addToDisplay(buttons[14].innerHTML);
	}
	);
plusButton.addEventListener("click",function()
	{
		addSymbolToDisplay(plusButton.innerHTML);
	}
	);

// Functionality for cancel button
cancel.addEventListener("click",function()
{
	display.value = "";
}
);

// Functionality for Backspace buttpn
backspace.addEventListener("click",function()
{
	displayString = display.value;
	newDisplay = displayString.slice(0,displayString.length-1);
	// console.log(newDisplay);
	display.value = newDisplay;
}
);


// Functionality for Equal to Button
buttons[15].addEventListener("click",function()
	{
		performCalculation();
	}
	);



//The block of code for performing the calculation basically has an embedded loop, obviously
//The outer (while) loop takes care of the different BODMAS phases
//which in this case is just DMAS( / , * , + , - )
//then the inner (for) loop takes care of looping through the array
//the conditional statements check if the current
//array element is an operator and which operator it is
//Logic behind Division operator(same for all):
// 1. confirms current array element is /
// 2. confirms count = 1 (1 is strictly for division)
// 3. performs division between elements to the left and right of the operator
// 4. stores the answer in a variable
// 5. replaces element in i-1 with answer
// 6. deletes elements in i and i+1
// 7. initializes i back to zero and runs from 1 again
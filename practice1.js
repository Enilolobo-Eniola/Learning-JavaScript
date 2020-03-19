// var body  = document.querySelector("body");
// console.log(body);
// console.log(body.length);
// var shit = document.getElementsByTagName("li");
// console.log(shit);
// console.log(shit.length);

var newItem = document.getElementById("newItem");
var addBtn = document.getElementById("addBtn");
var list1 = document.querySelector("ul");
var errorString = "Ensure the field isn't empty";

function addToList()
{
	if (newItem.value.length > 0 )
 	{
 		var li = document.createElement("li");
 		li.appendChild(document.createTextNode(newItem.value));
 		list1.appendChild(li);
 		newItem.value="";
 	}
 	else
 	{
 		var errorMessage = document.querySelector("label");
 		errorMessage.innerHTML = errorString;
 	}
}
 addBtn.addEventListener("click",addToList)
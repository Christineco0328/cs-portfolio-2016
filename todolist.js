//Creates variables for todo list
//links javascript for todo list to the html for todolist
var listEntry = document.getElementById("listEntry");
var styleButton = document.getElementById("styleButton");
var submit = document.getElementById("submit");
var clearAll = document.getElementById("clearAll");
var list = document.getElementById("list");

//This add event listener tells the program to listen for when the "submit" button is pressed. 
submit.addEventListener("click", function() {
//Once submit button is pressed, it will take the content of the input and put it in the list div. 
    list.innerHTML += "<li style='color:" + styleButton.value + " ; font-weight:" + styleButton.value + " ; font-style:" + styleButton.value + "'>" + listEntry.value + "</li>";

});

//This add event listener tells the program to listen for when the "clearall" button is pressed. 
clearAll.addEventListener("click", function() {

/*Once the button is pressed, it will delete all content in the div. 
The while statement tells the program to only follow through with the function if there is content within the div--this prevents it from deleting itself.
*/
    while (list.hasChildNodes(true)) {
        list.removeChild(list.firstChild);
    }
});

//This add event listener tells the program to listen for when the div "list" is clicked. 
list.addEventListener("click", function(evt) {
    
//Once the div is clicked once, it will strike through the selected item. The selected item is determined using "evt.target"  
// if statement !== nodelete keeps it from deleting itself
   if (evt.target.dataset.delete !== "nodelete")
    evt.target.style.textDecoration = "line-through";

});

//This add event listener tells the program to listen for when the div "list" is double clicked
list.addEventListener("dblclick", function(evt) {
//Once the div is double clicked, it will delete the selected item, once again determined useing "evt.target"
    if (evt.target.dataset.delete !== "nodelete") {
        var deleteItem = evt.target;
        deleteItem.parentNode.removeChild(deleteItem);
    }
});

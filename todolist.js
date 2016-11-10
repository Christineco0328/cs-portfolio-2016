//Creates variables for todo list
//links javascript for todo list to the html for todolist
var listEntry = document.getElementById("listEntry");
var styleButton = document.getElementById("styleButton");
var submit = document.getElementById("submit");
var clearAll = document.getElementById("clearAll");
var list = document.getElementById("list");

submit.addEventListener("click", function() {

    list.innerHTML += "<li style='color:" + styleButton.value + " ; font-weight:" + styleButton.value + " ; font-style:" + styleButton.value + "'>" + listEntry.value + "</li>";

});

clearAll.addEventListener("click", function() {

    while (list.hasChildNodes(true)) {
        list.removeChild(list.firstChild);
    }
});

list.addEventListener("click", function(evt) {
   if (evt.target.dataset.detele !== "nodelete")
    evt.target.style.textDecoration = "line-through";

});

list.addEventListener("dblclick", function(evt) {
    if (evt.target.dataset.delete !== "nodelete") {
        var deleteItem = evt.target;
        deleteItem.parentNode.removeChild(deleteItem);
    }
});

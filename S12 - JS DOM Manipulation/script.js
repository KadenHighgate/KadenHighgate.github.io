var enterButton = document.getElementById("enter");
var itemInput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
addDeleteBtnEvents();
//Fix this loop//
function addDeleteBtnEvents() {
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function inputLength() {
    return itemInput.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemInput.value));
    addDeleteButtonToListItem(li);
    ul.appendChild(li);
    deleteButtons = document.getElementsByClassName("delete");
    addDeleteBtnEvents();
    itemInput.value = "";
}

function addDeleteButtonToListItem(li) {
    var delButton = document.createElement("button");
    delButton.innerHTML = "delete";
    delButton.classList.add("delete");
    li.appendChild(delButton);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function toggleDone(event) {
    event.target.classList.toggle("done");
}

function deleteItem(event) {
    console.log(event.target.parentNode);
    var liElement = event.target.parentNode;
    event.target.parentNode.parentNode.removeChild(liElement);
}

enterButton.addEventListener("click", addListAfterClick);
itemInput.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);

function newElement() {
    var input = document.getElementById("myInput");
    var base = document.getElementById("myUL");

    var newListElement = document.createElement("li");
    var newTextElement = document.createElement("span");
    var newButtonDeleteElement = document.createElement("Button");
    var newButtonDoneElement = document.createElement("Button");

    newTextElement.innerHTML = input.value;
    newButtonDeleteElement.innerHTML = "Delete";
    newButtonDeleteElement.setAttribute("onclick", "deleteElement(this)");
    newButtonDoneElement.innerHTML = "Done";
    newButtonDoneElement.setAttribute("onclick", "doneElement(this)");
    newListElement.appendChild(newTextElement);
    newListElement.appendChild(newButtonDeleteElement);
    newListElement.appendChild(newButtonDoneElement);
    base.appendChild(newListElement);
}

function deleteElement(e) {
    e.parentNode.remove();
}

function doneElement(e) {
    var text = e.parentNode.childNodes[0];
    if (e.innerHTML == "Done") {
        text.className += " strike";
        e.innerHTML = "Undone";
    } else {
        var classnames = text.className;
        text.className = classnames.replace(" strike", "");
        e.innerHTML = "Done";
    }
}
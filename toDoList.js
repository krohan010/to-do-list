// Get Add Button for adding task..
let addBtn = document.getElementById("add-btn");
    // get output container for storing output or list
    let outputContainer = document.getElementById("output-container");
addBtn.addEventListener("click", function(){
    // get Input from users
    let inputBox = document.getElementById("inputBox");

    // creating the Div Element..
    myDiv = document.createElement("div");
    // Checkbox for making Task Done..
    checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Span tag for holding the tasks..
    span = document.createElement("span");
    span.innerHTML = inputBox.value;
    // creating an button for removing tasks..
    delBtn = document.createElement("button");
    delBtn.setAttribute("class", "minus");
    delBtn.innerHTML = " - ";
    // inserting the child elements...
    myDiv.appendChild(checkbox);
    myDiv.appendChild(span); 
    myDiv.appendChild(delBtn);

    outputContainer.appendChild(myDiv);
    // After creating a list InputBox should be blank..
    inputBox.value = "";
    saveTask();

});

outputContainer.addEventListener("click", function(e){

    // if(e.target.tagName === "INPUT"){
    //     e.target.classList.toggle("check");
    //     saveTask();
    // }
    //Removing Tasks..
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

// create localStorage memory to store the data
function saveTask(){
    localStorage.setItem("tasks", outputContainer.innerHTML);
}

// to get the data from localhost..
function showTask(){
    outputContainer.innerHTML = localStorage.getItem("tasks");
}
showTask();


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (used as a close button)
        li.appendChild(span);
        saveData(); // Save data after adding a task
    }
    inputBox.value = ''; // Clear the input box
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save data after toggling a task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save data after removing a task
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask(); // Initialize the list with saved data

var popupoverlay = document.querySelector(".popupoverlay");
var popupbox = document.querySelector(".popupbox");
var addbutton = document.querySelector(".add-button");

addbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancel = document.getElementById("cancelbook");
cancel.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var bookinput = document.getElementById("bookinput");
var bookauthorinput = document.getElementById("bookauthorinput");
var bookdes = document.getElementById("bookdes");

addbook.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new div with the same structure and classes
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    div.innerHTML = `
        <h2>${bookinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdes.value}</p>
        <button class="delete-button">Delete</button>
    `;
    
    container.appendChild(div);

    // Hide the popup box after adding the book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear the input fields after adding
    bookinput.value = "";
    bookauthorinput.value = "";
    bookdes.value = "";

    // Add functionality to delete the book entry
    div.querySelector(".delete-button").addEventListener("click", function() {
        container.removeChild(div);
    });
});

function sendEmail() {
    let email = document.getElementById("email-input").value;
    let name = document.getElementById('name-input').value;
    let message = document.getElementById('message-input').value;
}

function changeVisibility() {
    console.log("Hello World");
    let navBar = document.querySelector(".responsive-navbar");
    navBar.classList.toggle("visible")
}
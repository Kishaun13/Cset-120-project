let cart = []

function signUp() {
    let email = document.getElementById("email").value;
    console.log(email);
    let pass = document.getElementById("pass").value;
    console.log(pass);
    if (document.getElementById("email").value == "" || document.getElementById("pass").value == "") {
        alert("Please fill the forms");
    } else {
        localStorage.setItem(email, pass);
        alert("Account Created");
        location.replace("login.html");
    }



    localStorage.setItem(email, pass);
}

function login() {
    let email = document.getElementById("email").value;
    let manager = document.getElementById('ManagerPass')
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)) {
        if (pass == localStorage.getItem(email)) {
            location.replace("menu.html");
            alert("Login Successful");
        } else {
            alert("Login Failed");
        }
    } else {
        alert("Login Failed");
    }
}

function staffSignUp() {
    let staffEmail = document.getElementById('staffU').value
    console.log(staffEmail)
    let staffPass = document.getElementById('Staffpass').value
    console.log(staffPass)
    if (document.getElementById("staffU").value == "" || document.getElementById("Staffpass").value == "") {
        alert("Please fill the forms");
    } else {
        localStorage.setItem(staffEmail, staffPass);
        alert("Account Created");
        location.replace("staff-login.html");
    }


    localStorage.setItem(staffEmail, staffPass)
}

function staffLogin() {
    let staffEmail = document.getElementById('staffU').value;
    let staffPass = document.getElementById('Staffpass').value;

    if (localStorage.getItem(staffEmail)) {
        if (staffPass === localStorage.getItem(staffEmail)) {
            location.replace("edit-menu.html")
        } else [
            alert("Login Failed")
        ]
    }
}

const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

function editMenu() {
    let edit = document.getElementById('')

}

function contactAlert() {
    alert("Thank you for contacting us. We will get back to you as soon as possible.");

}
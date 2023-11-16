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
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)) {
        if (pass == localStorage.getItem(email)) {
            location.replace("index.html");
        } else {
            alert("Login Failed");
        }
    } else {
        alert("Login Failed");
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
let cart = []
function signUp(){
    let email = document.getElementById("email").value;
    console.log(email);
    let pass = document.getElementById("pass").value;
    console.log(pass);


    localStorage.setItem(email, pass);

}

function login(){
    let email = document.getElementById("email").value;
    let manager = document.getElementById('ManagerPass')
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)){
        if (pass === localStorage.getItem(email)){
            location.replace("menu.html");
        }
        else{
            alert("Login Failed");
        }
    }
    else{
        alert("Login Failed");
    }
}
function staffSignUp(){
    let staffEmail = document.getElementById('staffU').value
    let staffPass = document.getElementById('Staffpass').value

    localStorage.setItem(staffEmail, staffPass)
}
function staffLogin(){
    let staffEmail = document.getElementById('staffU').value;
    let staffPass = document.getElementById('Staffpass').value;

    if(localStorage.getItem(staffEmail)){
        if(staffPass === localStorage.getItem(staffEmail)){
            location.replace("edit-menu.html")
        }
        else[
            alert("Login Failed")
        ]
    }
}
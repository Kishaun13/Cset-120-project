function signUp(){
    let email = document.getElementById("email").value;
    console.log(email);
    let pass = document.getElementById("pass").value;
    console.log(pass);

    localStorage.setItem(email, pass);
}

function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)){
        if (pass == localStorage.getItem(email)){
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
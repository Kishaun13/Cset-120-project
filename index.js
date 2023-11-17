
function signUp(){
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
            location.replace("index.html");
        } else {
            alert("Login Failed");
        }
    } else {
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
        else{
            alert("Login Failed")
        }
            
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
    let addedItems = document.createElement('div')
    addedItems.classList.add('Menu-row')
    let itemRow = document.getElementsByClassName('Menu-items')
    let itemNames = itemRow.getElementsByClassName('Menu-item-title')
    for(i = 0; i < itemNames.length; i++){
        if(localStorage.getItem == itemNames){
            location.replace("menu.html")
        }
        else{
            alert("Addition failed")
        }
    }
    
}

function contactAlert() {
    alert("Thank you for contacting us. We will get back to you as soon as possible.");

}
let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  displayCartItems();
  updateCartTotal();
}

function addToCart(itemName, itemPrice) {
  if (cart[itemName]) {
    alert(`${itemName} is already in the cart!`);
  } else {
    cart[itemName] = { price: itemPrice, quantity: 1 };
    console.log(cart);
    displayCartItems();
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function displayCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  for (let itemName in cart) {
    const item = cart[itemName];

    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    const cartRowHTML = `
        <div class="cart-item cart-column">
          <span class="cart-item-title">${itemName}</span>
        </div>
        <span class="cart-price cart-column">$${item.price.toFixed(2)}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="${
            item.quantity
          }" data-item-name="${itemName}">
          <button onclick="removeFromCart('${itemName}')" class="btn btn-danger" type="button">REMOVE</button>
        </div>
      `;

    cartRow.innerHTML = cartRowHTML;
    cartItemsContainer.append(cartRow);
  }

  let quantityInputs = document.querySelectorAll(".cart-quantity-input");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      let newQuantity = parseInt(event.target.value);
      let itemName = event.target.getAttribute("data-item-name");
      console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
      updateQuantity(itemName, newQuantity);
    });
  });
}
function removeFromCart(itemName) {
  delete cart[itemName];
  displayCartItems();
  updateCartTotal();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartTotal() {
  let total = 0;
  for (let itemName in cart) {
    total += cart[itemName].price * cart[itemName].quantity;
  }

  document.querySelector(".cart-total-price").innerText =
    "$" + total.toFixed(2);
}

function clearCart() {
  cart = {};
  localStorage.removeItem("cart");
  displayCartItems();
  updateCartTotal();
}

function updateQuantity(itemName, quantity) {
  if (cart[itemName]) {
    cart[itemName].quantity = quantity;
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
let quantityInputs = document.querySelectorAll(".cart-quantity-input");
quantityInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    let newQuantity = parseInt(event.target.value);
    let itemName = event.target.getAttribute("data-item-name");
    console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
    updateQuantity(itemName, newQuantity);
  });
});
function updateQuantity(itemName, quantity) {
  if (cart[itemName]) {
    cart[itemName].quantity = quantity;
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
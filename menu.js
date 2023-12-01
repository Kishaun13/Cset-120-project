let cart = {};
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
    displayCartItems();
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
// function editProduct(event) {
//   event.preventDefault(); // prevent the form from submitting
//   let productName = document.getElementById("product-name").value; // get the product name from the form
//   let newName = document.getElementById("new-name").value; // get the new name from the form
//   let newPrice = parseFloat(document.getElementById("new-price").value); // get the new price from the form
//   changeProductPrice(productName, newPrice); // call the function to change the product price
//   if (cart[productName]) {
//     cart[newName] = cart[productName]; // copy the product object with the new name
//     delete cart[productName]; // delete the old product object
//     localStorage.setItem("cart", JSON.stringify(cart)); // update the local storage
//     alert(`You changed the name of ${productName} to ${newName}!`); // alert the user
//   } else {
//     alert(`${productName} is not in the cart!`); // alert the user
//   }
// }

// function addNewProduct(itemName, itemPrice, itemImage) {
//   if (cart[itemName]) {
//     alert(`${itemName} is already in the cart!`);
//   } else {
//     cart[itemName] = {
//       price: itemPrice,
//       quantity: 1,
//       image: itemImage
//     };
//     console.log(cart);
//     displayCartItems();
//     updateCartTotal();
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`You added ${itemName} to your cart!`);
//   }
// }

function displayCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  for (let itemName in cart) {
    const item = cart[itemName];

    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    const cartRowHTML = `
        <div class="cart-item cart-column">
          <span class="cart-item-title">'${itemName}'</span>
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

function purchaseProducts() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        location.replace("payment.html");
        // document.getElementsByClassName("cart-quantity-input").disabled = true;
    }

}
function clearCart() {
    cart = {};
    localStorage.removeItem("cart");
    displayCartItems();
    updateCartTotal();
}

// window.onload = function() {
//     let name = localStorage.getItem('name');
//     document.querySelector(".displayName").innerHTML = name;
// }

function returnHome() {
    location.replace("index.html");
}
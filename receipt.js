let cart = JSON.parse(localStorage.getItem("cart"));
let receiptDiv = document.getElementById("receipt");

for (let itemName in cart) {
    let item = cart[itemName];
    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
        <h2>${itemName}</h2>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
    `;
    receiptDiv.appendChild(itemDiv);
}

let totalDiv = document.createElement("div");
totalDiv.innerHTML = `<h2>Total: $${localStorage.getItem('totalPrice')}</h2>`;
receiptDiv.appendChild(totalDiv);
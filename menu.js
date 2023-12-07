window.onload = function() {
    document.getElementById('menus').contentEditable = false

}
let cart = {};

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    displayCartItems();
    updateCartTotal();
}


function addToCart(item) {
    var parentElement = item.parentNode;
    var itemName = parentElement.children[0].textContent;
    var itemPrice = parentElement.children[2].textContent;
    if (cart[itemName]) {
        alert(`${itemName} is already in the cart!`);
    } else {
        cart[itemName] = { price: itemPrice, quantity: 1 };
        displayCartItems();
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${itemName} is added to the cart!`);
    }
}

function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";

    for (var itemName in cart) {
        const item = cart[itemName];
        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");
        const cartRowHTML = `
        <div class="cart-item cart-column">
          <span class="cart-item-title">'${itemName}'</span>
        </div>
        <span class="cart-price cart-column">${(item.price)}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" min = 1 value="${
            item.quantity
          }" data-item-name="${itemName}">
          <button onclick="removeFromCart('${itemName}')" class="btn btn-danger">REMOVE</button>
        </div>
      `;
        cartRow.innerHTML = cartRowHTML;
        cartItemsContainer.append(cartRow);
    }
    let quantityInputs = document.querySelectorAll(".cart-quantity-input");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
            let newQuantity = parseInt(event.target.value);
            var itemName = event.target.getAttribute("data-item-name");
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
        price = (cart[itemName].price).substring(1);
        total += parseFloat(price) * cart[itemName].quantity;
    }
    document.querySelector(".cart-total-price").innerText =
        "$" + total.toFixed(2);
    console.log(total)
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
        localStorage.setItem("cart", JSON.stringify(cart));

        alert('Time for Checkout!');

        location.replace("payment.html");
        // alert("Thank you for ordering!");
    }
}
// let quantityInputs = document.querySelectorAll(".cart-quantity-input");
// quantityInputs.forEach((input) => {
//     input.addEventListener("change", (event) => {
//         let newQuantity = parseInt(event.target.value);
//         let itemName = event.target.getAttribute("data-item-name");
//         console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
//         updateQuantity(itemName, newQuantity);
//     });
// });

// function updateQuantity(quantity) {
//     if (cart[itemName]) {
//         cart[itemName].quantity = quantity;
//         updateCartTotal();
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }
// }



//Payment page


window.onload = function() {
    let name = localStorage.getItem('name');
    // document.querySelector(".displayName").innerHTML = name; ////WAS GETTING ERRORS BUT MY CODE STILL WORKS WITHOUT IT?????
};

function openForm1() {
    let inputs = document.querySelectorAll('input.requiredcard')
    for (const input of inputs) {
        input.removeAttribute("required")
    }
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').setAttribute("hidden", "hidden")
    document.getElementById('cash').removeAttribute("hidden")
};

function openForm2() {
    let inputs = document.querySelectorAll('input.requiredcard')
    for (const input of inputs) {
        input.setAttribute("required", '')
    }
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').removeAttribute("hidden")
    document.getElementById('cash').setAttribute("hidden", "hidden")
};


function closeForm1() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else if (document.getElementById('tip2').value == 0) {
        alert("Please select a tip amount.");
    } else {
        document.getElementById('forms').style.display = "none";
        // alert("Thank you for your purchase!")
        window.location.assign("/receipt.html");
    }
}

function closeForm2() {
    document.getElementById('forms').style.display = "none"
        // alert("Thank you for your purchase!")
    window.location.assign("/receipt.html")

    function back() {
        document.getElementById('forms').style.display = "none"
    };

    function checkNumb(event) {
        var asciikey = event.keyCode ? event.keyCode : event.charCode; //: event.which ? event.which
        if (asciikey === 13 || (asciikey >= 48 && asciikey <= 57)) {
            return true;
        } else {
            alert('Error!\nPlease input only numbers in that field!')
            return false;

        }
        //Was going to use this to make the function above to check if input is a number
        // event.preventDefault()
        // const form = event.target.elements
        // const phone = form.phone1.value
        // const credit = form.credCard.value
        // const expMonth = form.month.value
        // const expYear = form.year.value
        // const code = form.cvv.value

    };

    function formCheck() {
        let valid = true;
        if (valid) {
            location.replace("receipt.html")
        }

    }



    //     function generateReceipt() {
    //         let receipt = 'Receipt\n';
    //         receipt += '----------------------\n';
    //         for (let itemName in cart) {
    //             const item = cart[itemName];
    //             receipt += `${itemName}: $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
    //         }
    //         let total = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

    //         // Get the tip value from the input field and parse it as a float
    //         let tipElement = document.getElementById('tip2');
    //         let tip = parseFloat(tipElement.value);

    //         // Check if the tip is a number and greater than or equal to 0
    //         if (!isNaN(tip) && tip >= 0) {
    //             receipt += `Tip: $${tip.toFixed(2)}\n`;
    //             total += tip; // Add the tip to the total
    //         }

    //         receipt += '----------------------\n';
    //         receipt += `Total: $${total.toFixed(2)}\n`; // Display the total including the tip
    //         receipt += '----------------------\n';
    //         receipt += 'Thank you for your purchase!\n';
    //         localStorage.setItem('receipt', receipt);
    //         window.location.href = 'receipt.html';
    //     }


    //     function updateTotalWithTip() {
    //         let totalElement = document.querySelector('.cart-total-price');
    //         let total = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

    //         let tipElement = document.getElementById('tip2');
    //         let tip = parseFloat(tipElement.value);

    //         if (!isNaN(tip) && tip >= 0) {
    //             total += tip;
    //         }

    //         totalElement.textContent = `$${total.toFixed(2)}`;
    //     }
}
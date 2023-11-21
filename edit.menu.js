

var removeItems = document.querySelectorAll('remove-buttons')
console.log(sessionStorage.getItem('Original-Menu'))
console.log(displayItems())
removeItems.forEach(item => {
    item.addEventListener('click', removeItem)
});
function removeFromMenu(itemName) {
    // delete cart[itemName];
    // displayCartItems();
    // updateCartTotal();
    // localStorage.setItem("cart", JSON.stringify(cart));
    var testdiv = document.getElementById('products-container')
    // console.log(testdiv.outerHTML)
  }
  function removeItem(){
     var menuCard = this.parentElement
    menuCard.remove()
  }
function addToMenu(){
    const additemsform = document.querySelector('item')
    const cartRows = document.createElement('div')
    let newProduct = document.getElementsByClassName('')
    
}
  function displayCartItems(){
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
  }
  function displayItems(){
    let sessionMenu = sessionStorage.getItem('Original-Menu')
     var displayMenu = document.getElementById("display-menu")
     console.log(displayMenu)
     displayMenu.innerHTML = sessionMenu

  }
  displayItems()
function saveSession(){
    var testdiv = document.getElementById('products-container').outerHTML
    sessionStorage.setItem('itemName', testdiv)
    console.log(sessionStorage.getItem('itemName'))
}
//   function editMenu(){
//     let menuItems = document.getElementsByClassName('item')
//     let 
//     for(){
        
//     }
//   }

// function editMenu() {
//     let addedItems = document.createElement('div')
//     addedItems.classList.add('Menu-row')
//     let itemRow = document.getElementsByClassName('Menu-items')
//     let itemNames = itemRow.getElementsByClassName('Menu-item-title')
//     for (i = 0; i < itemNames.length; i++) {
//         if (localStorage.getItem == itemNames) {
//             console.log(itemNames)
//         }
//     }
// }


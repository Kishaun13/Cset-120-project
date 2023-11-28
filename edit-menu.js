
var removeItems = document.querySelectorAll('remove-buttons')
console.log(sessionStorage.getItem('Original-Menu'))
console.log(displayItems())
removeItems.forEach(item => {
    item.addEventListener('click', removeItem)
});
function editMenu(){
  document.getElementById('menus').contentEditable = true
}

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
  function displayCartItems(newItems){
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
  function addRemove(){
    
  }
  function displayItems(){
    let sessionMenu = sessionStorage.getItem('Original-Menu')
     var displayMenu = document.getElementById("display-menu")
     console.log(displayMenu)
     displayMenu.innerHTML = sessionMenu
     

  }
  displayItems()
  

 function removeItem(){

 }
function saveSession(){
    var testdiv = document.getElementById('menus').outerHTML
    localStorage.setItem('itemName', testdiv)
    console.log(localStorage.getItem('itemName'))
    
  }


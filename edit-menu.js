window.onload = function() {

  document.getElementById('menus').contentEditable = true

}
let priceChange = document.querySelectorAll('.product-price')
console.log(sessionStorage.getItem('Original-Menu'))
console.log(displayItems())


  function removeSelected(){
    const checkedItems = document.querySelectorAll('.checkedItems')
    checkedItems.forEach(item => {
        
            if(item.checked){
                var card = item.parentElement
                removeItem(card)
            }
           
        }
        )
};
        
function removeItem(divToRemove){
    divToRemove.remove()
  }
  function addNewItems(){
    const menuItemsContainer = document.querySelector("#menus");
    let newTitle = document.getElementById('productName').value
    let newPrice = document.getElementById('product-price').value
    let newImg = document.getElementById('product-img').value
    const newProduct = document.createElement('div')
    const newItem = `
    <div id="products-container" class="items-container">
    <div class = "pasteMenu" class ="item product-item">
    <img id ="productimg" width="200" src="${newImg}" alt="">
    <h3 class="product-title">${newTitle}</h3>
    <div class="products-item-details">
        <p></p>
        <p class="product-price">${newPrice}</p>
        <button onclick="addToCart()" class="btn prime-btn product-btn">Add To Cart</button>
    </div>
    </div>
    </div>`
    
    newProduct.innerHTML = newItem
    menuItemsContainer.appendChild(newProduct)
    
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
  function displayItems(){
    let sessionMenu = sessionStorage.getItem('Original-Menu')
     var displayMenu = document.getElementById("display-menu")
     console.log(displayMenu)
     displayMenu.innerHTML = sessionMenu
     

  }
  displayItems()
  

function saveSession(){
    var testdiv = document.getElementById('menus').outerHTML
    localStorage.setItem('Original-Menu', testdiv)
    document.getElementById('menus').contentEditable = false
    console.log(localStorage.getItem('Original-Menu'))
    // location.replace('menu.html')
  }



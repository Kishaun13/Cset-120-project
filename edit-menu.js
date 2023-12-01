window.onload = function() {

  document.getElementById('menus').contentEditable = true

}
let priceChange = document.querySelectorAll('.product-price')
console.log(sessionStorage.getItem('Original-Menu'))
console.log(displayItems())



stopEdit()
function removeFromMenu(itemName) {
    // delete cart[itemName];
    // displayCartItems();
    // updateCartTotal();
    // localStorage.setItem("cart", JSON.stringify(cart));
    var testdiv = document.getElementById('products-container')
    // console.log(testdiv.outerHTML)
  }
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
    let newTitle = document.getElementById('productName')
    let newPrice = document.getElementById('product-price')
    let newImg = document.getElementById('product-img')

    const newItem = `
    <div id = "pasteMenu" class ="item">
    <img id ="product-img" width="200" src="" alt="">
    <h3 class="product-title">Croque Madame</h3>
    <div class="products-item-details">
        <p>Smoked ham & Swiss with garlic cream sauce baked on country bread & topped with a fried egg. Served with wild field & balsamic on the side. Daily before 11am.</p>
        <p class="product-price">$29</p>
        <button onclick="addToCart('Croque Madame', 29.00)" class="btn prime-btn product-btn">Add To Cart</button>
    </div>`
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



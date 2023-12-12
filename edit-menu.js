window.onload = function() {

    document.getElementById('menus').contentEditable = true

}
let priceChange = document.querySelectorAll('.product-price')



function removeSelected() {
    const checkedItems = document.querySelectorAll('.checkedItems')
    checkedItems.forEach(item => {

        if (item.checked) {
            var card = item.parentElement
            removeItem(card)
        }

    })
};

function removeItem(divToRemove) {
    divToRemove.remove()
  }
  function addBreadItems(){
    const breadItemsContainer = document.querySelector("#bread-container");
    let newBreadTitle = document.getElementById('productName').value
    let newBreadPrice = document.getElementById('product-price').value
    let newBreadImg = document.getElementById('product-img').value
    let newBreadDescrip = document.getElementById('product-desc').value
    const newBreadProduct = document.createElement('div')
    newBreadProduct.classList.add('new-item')
    const newItem = `
    <h1 style="color: rgb(174, 107, 20); text-align: center; font-family: glass antiqua;">New Items</h1>
    <div id="item newItem">
    <img id ="productimg" width="200" src="${newBreadImg}" alt="">
    <div class="products-item-details">
      <h3 class="product-title">${newBreadTitle}</h3>
        <p>${newBreadDescrip}</p>
        <p class="product-price">${newBreadPrice}</p>
        <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
    </div>
    </div>`
    newBreadProduct.innerHTML = newItem
    breadItemsContainer.appendChild(newBreadProduct)
    clearInputs()
}
function addBeverageItems(){
  const menuItemsContainer = document.querySelector("#beverage-container");
  let newTitle = document.getElementById('productName').value
  let newPrice = document.getElementById('product-price').value
  let newImg = document.getElementById('product-img').value
  let newDescrip = document.getElementById('product-desc').value
  const newProduct = document.createElement('div')
  newProduct.classList.add('new-item')
  const newItem = `
  <h1 style="color: rgb(174, 107, 20); text-align: center; font-family: glass antiqua;">New Item</h1>
  <div id="item newItem">
  <img id ="productimg" width="200" src="${newImg}" alt="">
  <div class="products-item-details">
    <h3 class="product-title">${newTitle}</h3>
      <p>${newDescrip}</p>
      <p class="product-price">${newPrice}</p>
      <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
  </div>
  </div>`
  newProduct.innerHTML = newItem
  menuItemsContainer.appendChild(newProduct)
  clearInputs()
}
function clearInputs(){
  let clearAllInputTags = document.querySelectorAll('input');
  clearAllInputTags.forEach(eachInput => eachInput.value = '');
}

function displayItems() {
    let sessionMenu = sessionStorage.getItem('Original-Menu')
    var displayMenu = document.getElementById("display-menu")
    console.log(displayMenu)
    displayMenu.innerHTML = sessionMenu


}
displayItems()


function saveSession() {
    var testdiv = document.getElementById('menus').outerHTML
    localStorage.setItem('Original-Menu', testdiv)
    document.getElementById('menus').contentEditable = false
    console.log(localStorage.getItem('Original-Menu'))
    // location.replace('menu.html')
  }


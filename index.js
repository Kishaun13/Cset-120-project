function signUp() {
    let name = document.getElementById("name").value;
    console.log(name);
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



    localStorage.setItem(email, pass, name);
}

function login() {
    let email = document.getElementById("email").value;
    let manager = document.getElementById('ManagerPass')
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)) {
        if (pass == localStorage.getItem(email)) {
            location.replace("menu.html");
            alert("Login Successful");
        } else {
            alert("Login Failed");
        }
    } else {
        alert("Login Failed");
    }
}
function addNewItems(){
    let newTitle = document.getElementById('productName')
    let newPrice = document.getElementById('product-price')
    let newImg = document.getElementById('product-img')

}
const orgMenu = `
<div id ="menus">
<div class="Breakfast">
<div id="breakfeast-contain">
    <div class="b1  product-item">
        <img class="product-img" width="200" src="https://lamadeleine.com/wp-content/uploads/2019/04/LMD061720_SummerLTODigital_PT004_1rt5.jpg" alt="">
        <h3 class="product-title">Croque Madame</h3>
        <div class="products-item-details">
            <p>Smoked ham & Swiss with garlic cream sauce baked on country bread & topped with a fried egg. Served with wild field & balsamic on the side. Daily before 11am.</p>
            <p class="product-price">$29</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b2  product-item">
        <img class="product-img" width="200" src="https://lamadeleine.com/wp-content/uploads/2019/02/LMD_101518_MenuItemImageResize_196x274_PT0004-Breakfast-CountryFrenchBfast-Bacon.jpg" alt="">
        <h3 class="product-title">Big French Breakfast</h3>
        <div class="products-item-details">
            <p>This Breakfast will make you full for hours. You might even get lunch as well.</p>
            <p class="product-price">$27</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b3  product-item">
        <img class="product-img" width="200" src="images/products/fritters.jpeg" alt="">
        <h3 class="product-title">Fritters</h3>
        <div class="products-item-details">
            <p>fritter, any of various types of fried foods, generally consisting of small pieces of meat, vegetables, fruit, or dough.</p>
            <p class="product-price">$15</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b4  product-item">
        <img class="product-img" width="200" src="images/products/mousse.jpeg" alt="">
        <h3 class="product-title">Mousse</h3>
        <div class="products-item-details">
            <p contenteditable="true> This super moist dark chocolate mousse combines unsweetened natural cocoa powder and dark cocoa powder for an extra rich flavor.</p>
            <p contenteditable="true class="product-price">$35.00</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b5  product-item">
        <img class="product-img" width="200" src="images/products/cheese-cake-2.jpeg" alt="">
        <h3 class="product-title">Vanilla Cheesecake</h3>
        <div class="products-item-details">
            <p> With its outstanding vanilla flavor, pillowy soft crumb, and creamy vanilla buttercream, this is truly the best vanilla cheesecake I've ever had.</p>
            <p class="product-price">$40.00</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b6  product-item">
        <img class="product-img" width="200" src="images/products/donut.jpeg" alt="">
        <h3 class="product-title">Donuts</h3>
        <div class="products-item-details">
            <p>We are not gonna give three donuts, or two Donuts, but only one donut for 10.99 and its topped with freshly picked strawberries.</p>
            <p class="product-price">$10.99</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
    <div class="b7  product-item">
        <img class="product-img" width="200" src="images/products/plum-cake.jpeg" alt="">
        <h3 class="product-title">Plum cake</h3>
        <div class="products-item-details">
            <p>Very good cake to have if you want to eat your feelings away. Taste's especially nice on a rainy day after your mother's funeral.</p>
            <p class="product-price">$25.00</p>
            <button onclick="removeItem()" class="btn prime-btn product-btn">Remove</button>
        </div>
    </div>
</div>
</div><br><br><br><br><br>

<h1 style="color: rgb(174, 107, 20); text-align: center; font-family: glass antiqua;">Ever Changing Menu</h1>
<section id="products">
<div id="products-container" class="items-container">
    <div class="item product-bread">
        <img class="shop-item-image" width="200" src="images/products/bagel.jpeg" alt="" srcset="">
        <div class="shop-item-title">Bagels</div>
        <p>Made fresh on Location: toasted and smothered with homemade creamcheese.</p>
        <div class="shop-item-price">$4.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-bread">
        <img class="shop-item-image" width="200" src="images/products/rye-bread-2.jpeg" alt="" srcset="">
        <div class="shop-item-title">Fresh Rye Bread</div>
        <p>Made fresh on Location. Whole loaf can come sliced upon request.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/affogato-el-cafe.jpeg" alt="">
        <div class="shop-item-title">Affogato el Cafe</div>
        <p>Made by pouring expresso from freshly ground coffe beans over two scoops of vanilla icecream.</p>
        <div class="shop-item-price">$4.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</a>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/beverage.jpeg" alt="">
        <div class="shop-item-title">Frozen Cappuccino</div>
        <p>Double blended with ice and topped with whipped cream and caramel.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/cappuccino.jpeg" alt="" srcset="">
        <div class="shop-item-title">Cappuccino</div>
        <p>Hot shot of expresso with steamed milk and topped with a sweet milk foam.</p>
        <div class="shop-item-price">$9.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/chamomile-tea.jpeg" alt="" srcset="">
        <div class="shop-item-title">Chamomile Tea</div>
        <p>Freshly dried Chamomile flower tea optionally sweetened with sugar or honey.</p>
        <div class="shop-item-price">$5.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/coffee-milk.jpeg" alt="" srcset="">
        <div class="shop-item-title">Black Coffee with fresh cream</div>
        <p>Newly toasted coffee beans grounded and made into a nice hotcup of cofee with fresh cream.</p>
        <div class="shop-item-price">$5.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/french-press.jpeg" alt="">
        <div class="shop-item-title">Black Coffee French Press</div>
        <p>Freshly toasted and ground coffee beans with two-three cups of coffee inside the french press.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-beverage">
        <img class="shop-item-image" width="200" src="images/products/expresso.jpeg" alt="" srcset="">
        <div class="shop-item-title">Expresso Shot</div>
        <p>A single shot of expresso.</p>
        <div class="shop-item-price">$7.49</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>



    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/cream-puff2.jpeg" alt="" srcset="">
        <div class="shop-item-title">Cream-Puff</div>
        <p>A single cream puff with freshly whipped cream and strawberries from the local market.</p>
        <div class="shop-item-price">$5.49</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>

    </div>
    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/apple-strudel.jpeg" alt="" srcset="">
        <div class="shop-item-title">Apple Strudel</div>
        <p>Apple strudel is a traditional Viennese strudel, a popular pastry in Austria, Bavaria, the Czech Republic, Northern Italy, Slovenia, Croatia, and other countries in Europe.</p>
        <div class="shop-item-price">$14.49</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/cup-cakes-2.jpeg" alt="" srcset="">
        <div class="shop-item-title">Cupcake</div>
        <p>A single cupcake waiting to be eaten.</p>
        <div class="shop-item-price">$5.49</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/tart-coco2.jpeg" alt="" srcset="">
        <div class="shop-item-title">Chocolate Tart</div>
        <p>A single Chocolate tart with fresh chocolate cream and candied raspberries.</p>
        <div>$9.99</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/macaroons.jpeg" alt="" srcset="">
        <div class="shop-item-title">Macaroons</div>
        <p>Eight maccaroons with strawberry filling per order.</p>
        <div class="shop-item-price">$34.49</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
    <div class="item product-dessert"><img class="shop-item-image" width="200" src="images/products/meringue.jpeg" alt="" srcset="">
        <div class="shop-item-title">Meringue cookies</div>
        <p>Light and fluffly little crisps that melt away on the tongue. Pack of 24 per order.</p>
        <div class="shop-item-price">$29.99</div>
        <button class="btn" onclick="removeItem()" style="text-decoration: none;">Remove</button>
    </div>
</div>
</section>
</div>`
let firstLogin = false
function staffLogin() {
    
    let staffEmail = document.getElementById('staffU').value;
    let staffPass = document.getElementById('Staffpass').value;

    if (staffEmail === 'Gorlock' && staffPass === 'Quack') {

        sessionStorage.setItem('manager', true)
        alert('You are now in manager mode.')
        if(firstLogin === false){
            sessionStorage.setItem('Original-Menu', orgMenu)
        }
        
        location.replace('edit-menu.html')
    } else {
        alert('Login failed')
    }
}
    





const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    // console.log(top);
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

// function  {
//     let addedItems = document.createElement('div')
//     addedItems.classList.add('Menu-row')
//     let itemRow = document.getElementsByClassName('Menu-items')
//     let itemNames = itemRow.getElementsByClassName('Menu-item-title')
//     for (i = 0; i < itemNames.length; i++) {
//         if (localStorage.getItem == itemNames) {
//             location.replace("menu.html")
//         } else {
//             alert("Addition failed")
//         }
//     }

// }

function contactAlert() {
    alert("Thank you for contacting us. We will get back to you as soon as possible.");

}


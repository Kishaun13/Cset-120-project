function signUp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (email == "" || pass == "") {
        alert("Please fill the forms");
    } else {
        localStorage.setItem('name', name); // Store the name
        localStorage.setItem(email, pass);
        alert("Account Created");
        location.replace("login.html");
    }
}

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)) {
        if (pass == localStorage.getItem(email)) {
            localStorage.setItem('Original-Menu', orgMenu)
            location.replace("menu.html");
            alert("Login Successful");
        } else {
            alert("Login Failed");
        }
    } else {
        alert("Login Failed");
    }
}


const orgMenu = `
<div id ="menus">
<div class="Breakfast">
<div id="breakfeast-contain">
    <div id = "pasteMenu" class="b1 product-item">
        <img id ="product-img" width="200" src="https://lamadeleine.com/wp-content/uploads/2019/04/LMD061720_SummerLTODigital_PT004_1rt5.jpg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Croque Madame</h3>
        <div class="products-item-details">
            <p class="product-desc">Smoked ham & Swiss with garlic cream sauce baked on country bread & topped with a fried egg. Served with wild field & balsamic on the side. Daily before 11am.</p>
            <p class="product-price">$29</p>
            <button onclick="addToCart('Croque Madame', 29.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b2 product-item">
        <img id ="product-img" width="200" src="https://lamadeleine.com/wp-content/uploads/2019/02/LMD_101518_MenuItemImageResize_196x274_PT0004-Breakfast-CountryFrenchBfast-Bacon.jpg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Big French Breakfast</h3>
        <div class="products-item-details">
            <p class="product-desc">This Breakfast will make you full for hours. You might even get lunch as well.</p>
            <p class="product-price">$27</p>
            <button onclick="addToCart('Big French Breakfast', 27.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b3 product-item">
        <img id ="product-img" width="200" src="images/products/fritters.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Fritters</h3>
        <div class="products-item-details">
            <p class="product-desc">fritter, any of various types of fried foods, generally consisting of small pieces of meat, vegetables, fruit, or dough.</p>
            <p class="product-price">$15</p>
            <button onclick="addToCart('Fritters', 15.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b4 product-item">
        <img id ="product-img" width="200" src="images/products/mousse.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Mousse</h3>
        <div class="products-item-details">
            <p class="product-desc"> This super moist dark chocolate mousse combines unsweetened natural cocoa powder and dark cocoa powder for an extra rich flavor.</p>
            <p class="product-price">$35.00</p>
            <button onclick="addToCart('Mousse', 35.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b5 product-item">
        <img id ="product-img" width="200" src="images/products/cheese-cake-2.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Vanilla Cheesecake</h3>
        <div class="products-item-details">
            <p class="product-desc"> With its outstanding vanilla flavor, pillowy soft crumb, and creamy vanilla buttercream, this is truly the best vanilla cheesecake I've ever had.</p>
            <p class="product-price">$40.00</p>
            <button onclick="addToCart('Vanilla Cheesecake', 40.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b6 product-item">
        <img id ="product-img" width="200" src="images/products/donut.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Donuts</h3>
        <div class="products-item-details">
            <p class="product-desc">We are not gonna give three donuts, or two Donuts, but only one donut for 10.99 and its topped with freshly picked strawberries.</p>
            <p class="product-price">$10.99</p>
            <button onclick="addToCart('Donuts', 10.99)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
    <div id = "pasteMenu" class="b7 product-item">
        <img id ="product-img" width="200" src="images/products/plum-cake.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <h3 class="product-title">Plum cake</h3>
        <div class="products-item-details">
            <p class="product-desc">Very good cake to have if you want to eat your feelings away. Taste's especially nice on a rainy day after your mother's funeral.</p>
            <p class="product-price">$25.00</p>
            <button onclick="addToCart('Plum cake', 25.00)" class="btn prime-btn product-btn">Add To Cart</button>
        </div>
    </div>
</div>
</div><br><br><br><br><br>

<h1 style="color: rgb(174, 107, 20); text-align: center; font-family: glass antiqua;">Ever Changing Menu</h1>
<section id="products">
<div id="products-container" class="items-container">
    <div id = "pasteMenu" class="item product-bread">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/bagel.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Bagels</div>
        <p class="product-desc">Made fresh on Location: toasted and smothered with homemade creamcheese.</p>
        <div class="shop-item-price">$4.00</div>
        <button class="btn" onclick="addToCart('Bagels', 4.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-bread">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/rye-bread-2.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Fresh Rye Bread</div>
        <p class="product-desc">Made fresh on Location. Whole loaf can come sliced upon request.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="addToCart('Fresh Rye Bread', 12.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/affogato-el-cafe.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Affogato el Cafe</div>
        <p class="product-desc">Made by pouring expresso from freshly ground coffe beans over two scoops of vanilla icecream.</p>
        <div class="shop-item-price">$4.00</div>
        <button class="btn" onclick="addToCart('Affogato el Cafe', 4.00)" style="text-decoration: none;">Add To Cart</a>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/beverage.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Frozen Cappuccino</div>
        <p class="product-desc">Double blended with ice and topped with whipped cream and caramel.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="addToCart('Frozen Cappuccino', 12.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/cappuccino.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Cappuccino</div>
        <p class="product-desc">Hot shot of expresso with steamed milk and topped with a sweet milk foam.</p>
        <div class="shop-item-price">$9.00</div>
        <button class="btn" onclick="addToCart('Cappuccino', 9.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/chamomile-tea.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Chamomile Tea</div>
        <p class="product-desc">Freshly dried Chamomile flower tea optionally sweetened with sugar or honey.</p>
        <div class="shop-item-price">$5.00</div>
        <button class="btn" onclick="addToCart('Chamomile Tea', 5.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/coffee-milk.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Black Coffee with fresh cream</div>
        <p class="product-desc">Newly toasted coffee beans grounded and made into a nice hotcup of cofee with fresh cream.</p>
        <div class="shop-item-price">$5.00</div>
        <button class="btn" onclick="addToCart('Black Coffee with fresh cream', 5.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/french-press.jpeg" alt="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Black Coffee French Press</div>
        <p class="product-desc">Freshly toasted and ground coffee beans with two-three cups of coffee inside the french press.</p>
        <div class="shop-item-price">$12.00</div>
        <button class="btn" onclick="addToCart('Black Coffee French Press', 12.00)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-beverage">
        <img id ="product-img" class="shop-item-image" width="200" src="images/products/expresso.jpeg" alt="" srcset="">
        <input type="checkbox" id="checkedItem" class = "checkedItems" >
        <div class="shop-item-title">Expresso Shot</div>
        <p class="product-desc">A single shot of expresso.</p>
        <div class="shop-item-price">$7.49</div>
        <button class="btn" onclick="addToCart('Expresso Shot', 7.49)" style="text-decoration: none;">Add To Cart</button>
    </div>



    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/cream-puff2.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">    
    <div class="shop-item-title">Cream-Puff</div>
        <p class="product-desc">A single cream puff with freshly whipped cream and strawberries from the local market.</p>
        <div class="shop-item-price">$5.49</div>
        <button class="btn" onclick="addToCart('Cream-Puff', 5.49)" style="text-decoration: none;">Add To Cart</button>

    </div>
    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/apple-strudel.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">    
    <div class="shop-item-title">Apple Strudel</div>
        <p class="product-desc">Apple strudel is a traditional Viennese strudel, a popular pastry in Austria, Bavaria, the Czech Republic, Northern Italy, Slovenia, Croatia, and other countries in Europe.</p>
        <div class="shop-item-price">$14.49</div>
        <button class="btn" onclick="addToCart('Apple Strudel', 14.49)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/cup-cakes-2.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">    
    <div class="shop-item-title">Cupcake</div>
        <p class="product-desc">A single cupcake waiting to be eaten.</p>
        <div class="shop-item-price">$5.49</div>
        <button class="btn" onclick="addToCart('Cupcake', 5.49)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/tart-coco2.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">      
    <div class="shop-item-title">Chocolate Tart</div>
        <p class="product-desc">A single Chocolate tart with fresh chocolate cream and candied raspberries.</p>
        <div>$9.99</div>
        <button class="btn" onclick="addToCart('Chocolate Tart', 9.99)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/macaroons.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">      
    <div class="shop-item-title">Macaroons</div>
        <p class="product-desc">Eight maccaroons with strawberry filling per order.</p>
        <div class="shop-item-price">$34.49</div>
        <button class="btn" onclick="addToCart('Macaroons', 34.49)" style="text-decoration: none;">Add To Cart</button>
    </div>
    <div id = "pasteMenu" class="item product-dessert">
    <img id ="product-img" class="shop-item-image" width="200" src="images/products/meringue.jpeg" alt="" srcset="">
    <input type="checkbox" id="checkedItem" class = "checkedItems">      
    <div class="shop-item-title">Meringue cookies</div>
        <p class="product-desc">Light and fluffly little crisps that melt away on the tongue. Pack of 24 per order.</p>
        <div class="shop-item-price">$29.99</div>
        <button class="btn" onclick="addToCart('Meringue cookies', 29.99)" style="text-decoration: none;">Add To Cart</button>
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
            localStorage.setItem('Original-Menu', orgMenu)


        }

        location.replace('edit-menu.html')
    } else {
        alert('Login failed')
    }
}

    
function staffLogout(){
    sessionStorage.setItem('manager', true)
    localStorage.setItem('Original-Menu', orgMenu)
    localStorage.clear()
    location.replace('staff-login.html')
    localStorage.setItem('Original-Menu', orgMenu)
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



function contactAlert() {
    alert("Thank you for contacting us. We will get back to you as soon as possible.");

}
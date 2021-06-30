var categories = ["Fruits", "Vegetables", "Herbs", "Detergents", "Baths"];

function categoryParamURL() {
    var queryString = window.location.search;
    //console.log(queryString);
    var paramsURL = new URLSearchParams(queryString);
    //console.log(paramsURL);
    var cat = paramsURL.get('cat');
    //console.log(category);

    display1(categories[cat]);
}

function comeBack() {
    window.location = "index.html";
}

var initProducts = [
    { id: 1, name: "Abricots", price: "2", img: "./img/abricot.jpg", amount: 0, category: categories[0] },
    { id: 2, name: "Bananes", price: "1.50", img: "./img/banane.jpg", amount: 0, category: categories[0] },
    { id: 3, name: "Cerises", price: "4", img: "./img/cerise.jpg", amount: 0, category: categories[0] },
    { id: 4, name: "Dattes", price: "3", img: "./img/datte.jpg", amount: 0, category: categories[0] },
    { id: 5, name: "Fraises", price: "4", img: "./img/fraise.jpg", amount: 0, category: categories[0] },
    { id: 6, name: "Goyaves", price: "2.80", img: "./img/goyave.jpg", amount: 0, category: categories[0] },

    { id: 7, name: "Aubergines", price: "2", img: "./img/aubergine.jpg", amount: 0, category: categories[1] },
    { id: 8, name: "Betteraves", price: "1.50", img: "./img/betterave.jpg", amount: 0, category: categories[1] },
    { id: 9, name: "Courgettes", price: "4", img: "./img/courgette.jpg", amount: 0, category: categories[1] },
    { id: 10, name: "Fenouils", price: "3", img: "./img/fenouil.jpg", amount: 0, category: categories[1] },
    { id: 11, name: "Mais", price: "4", img: "./img/mais.jpg", amount: 0, category: categories[1] },
    { id: 12, name: "Poivrons", price: "2.80", img: "./img/poivron.jpg", amount: 0, category: categories[1] },

    { id: 13, name: "Aneth", price: "2", img: "./img/aneth.jpg", amount: 0, category: categories[2] },
    { id: 14, name: "Basilic", price: "1.50", img: "./img/basilic.jpg", amount: 0, category: categories[2] },
    { id: 15, name: "Blettes", price: "4", img: "./img/blette.jpg", amount: 0, category: categories[2] },
    { id: 16, name: "Endives", price: "3", img: "./img/endive.jpg", amount: 0, category: categories[2] },
    { id: 17, name: "Menthe", price: "4", img: "./img/menthe.jpg", amount: 0, category: categories[2] },
    { id: 18, name: "Persil", price: "2.80", img: "./img/persil.jpg", amount: 0, category: categories[2] },
    { id: 19, name: "Salade verte", price: "1.80", img: "./img/salade.jpg", amount: 0, category: categories[2] },
    { id: 20, name: "Thym", price: "3.80", img: "./img/thym.jpg", amount: 0, category: categories[2] },

    { id: 21, name: "Assouplissant", price: "3.5", img: "./img/assouplissant.jpg", amount: 0, category: categories[3] },
    { id: 22, name: "Balais", price: "7.50", img: "./img/balais.jpg", amount: 0, category: categories[3] },
    { id: 23, name: "Eponges", price: "3", img: "./img/eponge.jpg", amount: 0, category: categories[3] },
    { id: 24, name: "Lessive", price: "5.75", img: "./img/lessive.jpg", amount: 0, category: categories[3] },
    { id: 25, name: "Lingettes nettoyantes", price: "4", img: "./img/lingette.jpg", amount: 0, category: categories[3] },
    { id: 26, name: "Liquide vaisselle", price: "2.80", img: "./img/vaisselle.jpg", amount: 0, category: categories[3] },
    { id: 27, name: "Produit sol", price: "1.80", img: "./img/sol.jpg", amount: 0, category: categories[3] },
    { id: 28, name: "Produit vitre", price: "2", img: "./img/vitre.jpg", amount: 0, category: categories[3] },
    { id: 29, name: "Produit WC", price: "3.50", img: "./img/wc.jpg", amount: 0, category: categories[3] },
    { id: 30, name: "Serpilleres", price: "6", img: "./img/serpillere.jpg", amount: 0, category: categories[3] },

    { id: 31, name: "Brosse à dents", price: "2", img: "./img/brosse.jpg", amount: 0, category: categories[4] },
    { id: 32, name: "Crème mains", price: "1.50", img: "./img/creme.jpg", amount: 0, category: categories[4] },
    { id: 33, name: "Dentifrice", price: "4", img: "./img/dentifrice.jpg", amount: 0, category: categories[4] },
    { id: 34, name: "Gel douche", price: "3", img: "./img/douche.jpg", amount: 0, category: categories[4] },
    { id: 35, name: "Shampoing", price: "4", img: "./img/shampoing.jpg", amount: 0, category: categories[4] }

]

var products = JSON.parse(localStorage.getItem("products")) || initProducts;

var display = document.getElementById('display');
var title = document.getElementById('title');

function display1(cat) {

    title.innerHTML = `Our Seasonal ${cat}`;

    for (let i = 0; i < products.length; i++) {
        if (products[i].category == cat) {
            display.innerHTML += `<div class="card m-2" style="width: 18rem;">
                              <img src=${products[i].img} class="card-img-top" alt="...">
                              <div class="card-body">
                              <h5 class="card-title">${products[i].name} ~~ ${products[i].price}€</h5>
                              <div class="btn-group me-2" role="group" aria-label="First group">
                              <button class="btn btn-outline-danger" onclick="removeItem(${products[i].id - 1})"><strong>-</strong></button>
                              <input type="number" id="amount-${i}" value=${products[i].amount}>
                              <button class="btn btn-outline-success" onclick="addItem(${products[i].id - 1})"><strong>+</strong></button>
                              </div>
                              </div>
                              </div>
                            `
        }
    }

    displayCart();
}

function addItem(i) {
    
    var value = document.getElementById(`amount-${i}`);
    if (products[i].amount < 10) {
        products[i].amount++;
    }
    value.value = products[i].amount;

    //console.log(products[i]);

    localStorage.setItem("products", JSON.stringify(products));

    displayCart();

}

function removeItem(i) {

    var value = document.getElementById(`amount-${i}`);
    if (products[i].amount > 0) {
        products[i].amount--;
    }
    value.value = products[i].amount;

    //console.log(products[i]);

    localStorage.setItem("products", JSON.stringify(products));

    displayCart();

}

var cart = document.getElementById('cart');
var btns = document.getElementById('2btns');

function displayCart() {

    cart.innerHTML = "";
   
    var total;
    var totalCart = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].amount > 0) {
            //console.log(products[i]);

            btns.innerHTML = `  <br>
                                <button type="button" class="btn btn-success" onclick="checkOut()">Check out</button>
                                <button type="button" class="btn btn-danger" onclick="clearAll()">Clear all</button>
                                `

            total = products[i].price * products[i].amount;
            totalCart += total
            cart.innerHTML += ` 
                                <br>
                                <strong>${products[i].name}</strong> - ${products[i].amount}
                                Price: ${total}€     
                                <button type="button" class="btn btn-outline-danger" onclick="deleteItem(${i})">Delete</button>
                                <br>
                                `;
        }
    }

    if (totalCart > 0) {
        cart.innerHTML += `<strong style="color: green;"> Total cart: ${totalCart}€ </strong>`;
    }
}

function deleteItem(item) {
    products[item].amount = 0;
    displayCart();
}

function checkOut() {
   
    alert(" Your order has been registered ! \n My Supermarket thanks you for your purchase. See you soon !");

}

function clearAll() {
    for (let i = 0; i < products.length; i++) {
        products[i].amount = 0;
        //console.log(products[i]);
    }

    localStorage.setItem("products", JSON.stringify(products));

    cart.innerHTML = "";
    display.innerHTML = "";

    var queryString = window.location.search;
    var paramsURL = new URLSearchParams(queryString);
    var cat = paramsURL.get('cat');
    display1(categories[cat]);
}


let home = document.getElementById("home");

let homeBtn = document.getElementById("home-btn");

let clothes = document.getElementById("CLOTHES1");

let aboutbtn = document.getElementById("About-us")

let aboutsecsion = document.querySelector(".about-us")

let clothesViewBtn = document.querySelector("#clothes-view")

let clothesSection = document.querySelector(".clothes")

clothes.addEventListener("click", function() {

    clothesSection.style.display="block"
    home.style.display = "none";
    aboutsecsion.style.display="none";

});

homeBtn.addEventListener("click", function() {

    home.style.display = "block";
    aboutsecsion.style.display="none";
    clothesSection.style.display="none";

});

aboutbtn.addEventListener("click",function(){
    aboutsecsion.style.display="block"
    home.style.display="none"
    clothesSection.style.display="none"
})
clothesViewBtn.addEventListener("click",function(){
     home.style.display = "none";
    aboutsecsion.style.display="none";
    clothesSection.style.display="block"
})

// =================bar===================//

let icon = document.querySelector(".bar1")

let menu = document.querySelector(".menu-bar")

let close = document.querySelector(".close-btn")

icon.onclick = function(){

    menu.style.display = "block"
}
close.onclick = function(){

    menu.style.display = "none"
}
document.addEventListener("click", function(e){
    // لو المنيو مش مفتوحة مفيش حاجة تتعمل
    if (menu.style.display !== "block") return

    // لو الضغطة جوه المنيو أو على أيقونة الهامبورجر، سيبها
    if (menu.contains(e.target) || icon.contains(e.target)) return

    menu.style.display = "none"
})

// =================bar===================//

// ================== Clothes products ==================

// كل منتج = object واحد. عايز منتج جديد؟ ضيف سطر جديد هنا وخلاص.
const products = [
  { name: "Dragon T-Shirt",      image: "IMGS/clothes.webp",  details: "Breathable fabric, slim fit",         price: 500 },
  { name: "Dragon T-Shirt",      image: "IMGS/clothes1.webp",  details: "Breathable fabric, regular fit",      price: 500 },
  { name: "Training Shorts",     image: "IMGS/clothes.webp",        details: "Lightweight, quick dry",              price: 350 },
  { name: "Dragon Hoodie",       image: "IMGS/clothes1.webp",        details: "Soft fleece, warm and comfortable",   price: 900 },
  { name: "Tank Top",            image: "IMGS/clothes.webp",          details: "Sleeveless, ideal for heavy lifting", price: 300 },
  { name: "Compression Shirt",   image: "IMGS/clothes1.webp",   details: "Stretch fit, supports movement",      price: 650 },
  { name: "Joggers",             image: "IMGS/clothes.webp",       details: "Tapered fit with zip pockets",        price: 750 },
  { name: "Gym Cap",             image: "IMGS/clothes1.webp",           details: "Adjustable strap, one size",          price: 200 },
];

const list = document.querySelector("#clothes-list");

function renderProducts(items) {
  list.innerHTML = items.map(p => `
    <article class="clothes-card">
      <div class="clothes-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="clothes-info">
        <h3>${p.name}</h3>
        <p>${p.details}</p>
        <span class="price">EGP ${p.price.toLocaleString("en-US")}</span>
      </div>
    </article>
  `).join("");
}

renderProducts(products);

// ================== Clothes products ==================
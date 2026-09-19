let home = document.getElementById("home");

let homeBtn = document.getElementById("home-btn");

let clothes = document.getElementById("CLOTHES1");

let aboutbtn = document.getElementById("About-us")

let aboutsecsion = document.querySelector(".about-us")

let clothesViewBtn = document.querySelector("#clothes-view")

let clothesSection = document.querySelector(".clothes")

let supBtn =document.querySelector("#sup-btn")

let supBtn1 =document.querySelector("#sup-btn1")

let supSec = document.querySelector("#sup-sec")

clothes.addEventListener("click", function() {

    clothesSection.style.display="block"
    home.style.display = "none";
    aboutsecsion.style.display="none";
    supSec.style.display="none"
});

homeBtn.addEventListener("click", function() {

    home.style.display = "block";
    aboutsecsion.style.display="none";
    clothesSection.style.display="none";
    supSec.style.display="none"
});

aboutbtn.addEventListener("click",function(){
    aboutsecsion.style.display="block"
    home.style.display="none"
    clothesSection.style.display="none"
    supSec.style.display="none"
})
clothesViewBtn.addEventListener("click",function(){
    clothesSection.style.display="block"
     home.style.display = "none";
    aboutsecsion.style.display="none";
    supSec.style.display="none"
})
supBtn.addEventListener("click",function(){
    supSec.style.display="block"
    aboutsecsion.style.display="none"
    home.style.display="none"
    clothesSection.style.display="none"
})
supBtn1.addEventListener("click",function(){
    supSec.style.display="block"
    aboutsecsion.style.display="none"
    home.style.display="none"
    clothesSection.style.display="none"
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

// ================== Clothes products ==================//

// ================== Supplements products ==================

// الكود متغلف في function عشان أسماء المتغيرات ماتتعارضش مع clothes.js
(function () {
  // كل منتج = object واحد. عايز منتج جديد؟ ضيف سطر جديد هنا وخلاص.
  const supplements = [
    { name: "Whey Protein",        image: "IMGS/cookiescream.jpg.webp",        details: "Fast-absorbing protein for muscle recovery", price: 3000 },
    { name: "Crea-Power Creatine", image: "IMGS/Crea-Power-Creatine-400-g-80-Servings_1.jpg.webp",    details: "Supports strength and power output",         price: 1500 },
    { name: "BCAA",                image: "IMGS/cookiescream.jpg.webp",        details: "Amino acids to support recovery",            price: 900 },
    { name: "Pre-Workout",         image: "IMGS/Crea-Power-Creatine-400-g-80-Servings_1.jpg.webp", details: "Energy and focus before training",           price: 1100 },
    { name: "Mass Gainer",         image: "IMGS/cookiescream.jpg.webp", details: "High-calorie formula for building size",     price: 2400 },
    { name: "Casein Protein",      image: "IMGS/Crea-Power-Creatine-400-g-80-Servings_1.jpg.webp",      details: "Slow-release protein, ideal before sleep",   price: 2800 },
    { name: "Omega-3",             image: "IMGS/cookiescream.jpg.webp",     details: "Daily support for heart and joints",         price: 600 },
    { name: "Multivitamin",        image: "IMGS/Crea-Power-Creatine-400-g-80-Servings_1.jpg.webp",details: "Daily vitamins and minerals",                price: 450 },
  ];

  const supplementsList = document.querySelector("#supplements-list");

  function renderSupplements(items) {
    supplementsList.innerHTML = items.map(p => `
      <article class="supplements-card">
        <div class="supplements-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="supplements-info">
          <h3>${p.name}</h3>
          <p>${p.details}</p>
          <span class="price">EGP ${p.price.toLocaleString("en-US")}</span>
        </div>
      </article>
    `).join("");
  }

  renderSupplements(supplements);
})();

// ================== Supplements products ==================
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

let salBtn = document.querySelector("#sal-btn")

let salSec = document.querySelector("#sal-sec")


clothes.addEventListener("click", function() {

    clothesSection.style.display="block"
    home.style.display = "none";
    aboutsecsion.style.display="none";
    supSec.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)

});

homeBtn.addEventListener("click", function() {

    home.style.display = "block";
    aboutsecsion.style.display="none";
    clothesSection.style.display="none";
    supSec.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
});

aboutbtn.addEventListener("click",function(){
    aboutsecsion.style.display="block"
    home.style.display="none"
    clothesSection.style.display="none"
    supSec.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
})
clothesViewBtn.addEventListener("click",function(){
    clothesSection.style.display="block"
     home.style.display = "none";
    aboutsecsion.style.display="none";
    supSec.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
})
supBtn.addEventListener("click",function(){
    supSec.style.display="block"
    aboutsecsion.style.display="none"
    home.style.display="none"
    clothesSection.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
})
supBtn1.addEventListener("click",function(){
    supSec.style.display="block"
    aboutsecsion.style.display="none"
    home.style.display="none"
    clothesSection.style.display="none"
    salSec.style.display="none"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
})
salBtn.addEventListener("click",function(){
      supSec.style.display="none"
    aboutsecsion.style.display="none"
    home.style.display="none"
    clothesSection.style.display="none"
    salSec.style.display="block"
    menu.style.display = "none"      // يقفل المنيو بعد الاختيار (اختياري، امسحه لو مش عايزه)
    window.scrollTo(0, 0)
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

// ================== Membership plans ==================

// متغلف في function عشان أسماء المتغيرات ماتتعارضش مع باقي الملفات
(function () {
  // كل خطة = object واحد. featured: true = الكارت المميز (المرفوع والمضيء)
  const plans = [
    { name: "Cardio",      icon: "fa-solid fa-person-running", description: "Access to cardio equipment & group classes.", price: 400, period: "Monthly", featured: false },
    { name: "Iron",        icon: "fa-solid fa-dumbbell",       description: "Access to all gym equipment & weight area",   price: 350, period: "Monthly", featured: true  },
    { name: "Full Access", icon: "fa-regular fa-star",         description: "All gym area & all group classes & more",    price: 800, period: "Monthly", featured: false },
  ];

  const membershipList = document.querySelector("#membership-list");

  function renderPlans(items) {
    membershipList.innerHTML = items.map(p => `
      <article class="membership-card ${p.featured ? "featured" : ""}">
        <i class="membership-icon ${p.icon}" aria-hidden="true"></i>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="membership-price">
          <span class="cur">EGP</span>
          <span class="amount">${p.price.toLocaleString("en-US")}</span>
        </div>
        <span class="membership-period">/${p.period}</span>
      </article>
    `).join("");
  }

  renderPlans(plans);
})();

// ================== Membership plans ==================
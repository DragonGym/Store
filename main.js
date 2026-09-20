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

let buySec = document.querySelector("#buy-sec")

let salbtn1 = document.querySelector("#sal-btn1")
// ===============================================
const sections = [home, aboutsecsion, clothesSection, supSec, salSec, buySec].filter(Boolean)

// ====================================
const routes = {
    home: home,
    clothes: clothesSection,
    supplements: supSec,
    membership: salSec,
    about: aboutsecsion,
    buy: buySec
}

// بتعرض السيكشن اللي في الـ hash الحالي
function renderRoute() {
    const name = location.hash.slice(1).toLowerCase()
    const sec = routes[name] || home

    sections.forEach(s => s.style.display = "none")
    sec.style.display = "block"
    menu.style.display = "none"
    window.scrollTo(0, 0)
}

// الاسم زي ما هو، فكل الأماكن اللي بتناديها (المنيو والفوتر وBack وBuy Now) شغالة من غير تعديل
function showSection(sec) {
    const name = Object.keys(routes).find(key => routes[key] === sec)

    if (location.hash.slice(1).toLowerCase() === name) renderRoute()
    else location.hash = name
}
// ====================================

// function showSection(sec) {
//     sections.forEach(s => s.style.display = "none")
//     sec.style.display = "block"
//     menu.style.display = "none"
//     window.scrollTo(0, 0)
// }

// أزرار المنيو وأزرار View More في الرئيسية
clothes.addEventListener("click", () => showSection(clothesSection))
homeBtn.addEventListener("click", () => showSection(home))
aboutbtn.addEventListener("click", () => showSection(aboutsecsion))
clothesViewBtn.addEventListener("click", () => showSection(clothesSection))
supBtn.addEventListener("click", () => showSection(supSec))
supBtn1.addEventListener("click", () => showSection(supSec))
salBtn.addEventListener("click", () => showSection(salSec))
salbtn1.addEventListener("click",() => showSection(salSec))


// لينكات الفوتر
const goMap = { home: home, clothes: clothesSection, supplements: supSec, salary: salSec, about: aboutsecsion }

document.querySelectorAll("[data-go]").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        showSection(goMap[link.dataset.go])
    })
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
  { name: "Training Shorts",     image: "IMGS/clothes/men-s-breathable-lightweight-cross-training-performance-shorts-celliant-grey.jpg",        details: "Lightweight, quick dry",              price: 350 },
  { name: "Dragon Hoodie",       image: "IMGS/clothes/images.jfif",        details: "Soft fleece, warm and comfortable",   price: 900 },
  { name: "Tank Top",            image: "IMGS/clothes/1716881855158-df9e0f5105aa47bc874ee5bda4648155-goods.avif",          details: "Sleeveless, ideal for heavy lifting", price: 300 },
  { name: "Dragon Hoodie",   image: "IMGS/clothes/hodie.avif",   details: "Stretch fit, supports movement",      price: 650 },
  { name: "Joggers",             image: "IMGS/clothes/jeans.avif",       details: "Tapered fit with zip pockets",        price: 750 },
  { name: "Gym Cap",             image: "IMGS/clothes/gym cap.avif",           details: "Adjustable strap, one size",          price: 200 },
];
products.forEach((p, i) => { p.id = "c" + (i + 1); p.category = "clothes" })
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
         <button class="buy-btn" type="button" data-id="${p.id}">Buy Now</button>
      </div>
    </article>
  `).join("");
}

renderProducts(products);

// ================== Clothes products ==================//

// ================== Supplements products ==================

// الكود متغلف في function عشان أسماء المتغيرات ماتتعارضش مع clothes.js
// (function () {
  // كل منتج = object واحد. عايز منتج جديد؟ ضيف سطر جديد هنا وخلاص.
  const supplements = [
    { name: "Whey Protein",        image: "IMGS/cookiescream.jpg.webp",        details: "Fast-absorbing protein for muscle recovery", price: 3000 },
    { name: "Crea-Power Creatine", image: "IMGS/Crea-Power-Creatine-400-g-80-Servings_1.jpg.webp",    details: "Supports strength and power output",         price: 1500 },
    { name: "BCAA",                image: "IMGS/SUP/eaa-bcaa-lemon-2.png",        details: "Amino acids to support recovery",            price: 900 },
    { name: "Pre-Workout",         image: "IMGS/SUP/ABE-CANDY.jpg", details: "Energy and focus before training",           price: 1100 },
    { name: "Mass Gainer",         image: "IMGS/SUP/serious-mass-choco-1.png", details: "High-calorie formula for building size",     price: 2400 },
    { name: "Casein Protein",      image: "IMGS/SUP/Dymatize-fruity-pebbles-3lbs.png",      details: "Slow-release protein, ideal before sleep",   price: 2800 },
    { name: "Omega-3",             image: "IMGS/SUP/Omega-1.png",     details: "Daily support for heart and joints",         price: 600 },
    { name: "Multivitamin",        image: "IMGS/SUP/LIMITLESS-MAN-MAX-100-TAB-1.png",details: "Daily vitamins and minerals",                price: 450 },
  ];
supplements.forEach((p, i) => { p.id = "s" + (i + 1); p.category = "supplements" })
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
            <button class="buy-btn" type="button" data-id="${p.id}">Buy Now</button>
        </div>
      </article>
    `).join("");
  }

  renderSupplements(supplements);
// })();

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

// ================== Buy Now -> How to buy ==================

const allProducts = [...products, ...supplements]
const WHATSAPP_NUMBER = "201223438049"   // كود مصر 20 + الرقم من غير الصفر ومن غير +

const buyProduct = document.querySelector("#buy-product")
const buyWhats = document.querySelector("#buy-whatsapp")
let backSection = clothesSection

function openBuy(id) {
    const p = allProducts.find(item => item.id === id)
    if (!p) return

            currentProduct = p
    updateBuyText()
    // buyProduct.textContent = `You are ordering: ${p.name} - EGP ${p.price.toLocaleString("en-US")}`

    // const msg = `Hello Dragon Gym, I want to order: ${p.name} (EGP ${p.price})`
    // buyWhats.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg)

    backSection = p.category === "clothes" ? clothesSection : supSec
    showSection(buySec)
}

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".buy-btn")
    if (btn) openBuy(btn.dataset.id)
})

document.querySelector("#buy-back").addEventListener("click", () => showSection(backSection))


window.addEventListener("hashchange", renderRoute)
renderRoute()
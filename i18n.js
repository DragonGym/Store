// ================== Language switch (English / عربي) ==================
// حط الملف ده في الـ HTML بعد main.js مباشرة:  <script src="i18n.js"></script>

// القاموس: الشمال = النص الإنجليزي بالظبط زي ما هو في الموقع، واليمين = العربي
const translations = {
  // ----- Menu -----
  "HOME": "الرئيسية",
  "Back to homepage": "العودة للصفحة الرئيسية",
  "CLOTHES": "الملابس",
  "Premium gym wear": "ملابس رياضية فاخرة",
  "SUPPLEMENTS": "المكملات",
  "Fuel your performance": "غذّي أداءك",
  "SALARY": "الاشتراكات",
  "View membership plans": "شاهد خطط الاشتراك",
  "ABOUT US": "من نحن",
  "Know more about us": "تعرّف علينا أكثر",

  // ----- Brand (سيبها إنجليزي) -----
  "Dragon": "Dragon",
  "gym & fitness": "gym & fitness",

  // ----- Hero -----
  "TRAIN HARD, STAY STRONG": "تمرّن بقوة، وابقَ قويّاً",
  "BE STRONGER": "كن أقوى",
  "THAN YESTERDAY": "مما كنت عليه بالأمس",
  "Premium gear, powerful supplements, and the best membership plans to help you reach your goals.":
    "معدات وملابس فاخرة، ومكملات قوية، وأفضل خطط الاشتراك لمساعدتك على الوصول إلى أهدافك.",

  // ----- Home boxes -----
  "High quality, Maximum performance": "جودة عالية وأداء أقصى",
  "High quality, maximum performance": "جودة عالية وأداء أقصى",
  "View More": "عرض المزيد",
  "Fuel your body, Achieve more.": "غذّي جسمك وحقّق المزيد.",
  "Fuel your body, achieve more": "غذّي جسمك وحقّق المزيد",
  "MEMBERSHIP PRICING": "أسعار الاشتراكات",
  "Choose the plan that fits you.": "اختر الخطة التي تناسبك.",
  "Choose the plan that fits you": "اختر الخطة التي تناسبك",
  "CARDIO": "كارديو",
  "Cardio": "كارديو",
  "Access to cardio equipment & group classes.": "استخدام أجهزة الكارديو والحصص الجماعية.",
  "IRON": "حديد",
  "Iron": "حديد",
  "Access to all gym equipment & weight area": "استخدام جميع أجهزة الجيم ومنطقة الأوزان",
  "FULL ACCESS": "اشتراك كامل",
  "Full Access": "اشتراك كامل",
  "All gym area & all group classes & more": "جميع مناطق الجيم وجميع الحصص الجماعية وأكثر",
  "EGP": "ج.م",
  "/Monthly": "/شهرياً",

  // ----- About -----
  "ABOUT": "من",
  "US": "نحن",
  "More than a gym, we are a community": "أكثر من مجرد جيم، نحن مجتمع",
  "OUR MISSION": "رسالتنا",
  "Our mission is to help you become the strongest version of yourself. We provide premium gear, top-quality supplements, and flexible membership plans to support your fitness journey.":
    "رسالتنا هي مساعدتك لتصبح أقوى نسخة من نفسك. نقدّم معدات وملابس فاخرة، ومكملات عالية الجودة، وخطط اشتراك مرنة لدعم رحلتك الرياضية.",
  "OUR VISION": "رؤيتنا",
  "To become the most trusted fitness brand by empowering individuals to live healthier, stronger lives through quality, support, and real results.":
    "أن نصبح العلامة الرياضية الأكثر ثقة من خلال تمكين الأفراد من عيش حياة أصحّ وأقوى عبر الجودة والدعم والنتائج الحقيقية.",
  "OUR VALUES": "قيمنا",
  "Commitment to quality Support every step of the way Built on trust and respect Stronger together":
    "الالتزام بالجودة، ودعم في كل خطوة، ومبني على الثقة والاحترام، وأقوى معاً",
  "WHY CHOOSE": "لماذا تختار",
  "DRAGON GYM ?": "دراجون جيم؟",
  "QUALITY FIRST": "الجودة أولاً",
  "We offer only premium products you can trust.": "نقدّم منتجات فاخرة فقط يمكنك الوثوق بها.",
  "EXPERT SUPPORT": "دعم الخبراء",
  "Our team is here to guide you every step of the way.": "فريقنا هنا لإرشادك في كل خطوة.",
  "COMMUNITY DRIVEN": "مجتمع يدفعك",
  "Join a community that pushes you to be better.": "انضم إلى مجتمع يدفعك لتكون أفضل.",
  "RESULTS FOCUSED": "نركّز على النتائج",
  "Everything we do is designed to help you achieve real results.": "كل ما نقوم به مصمم لمساعدتك على تحقيق نتائج حقيقية.",

  // ----- عناوين صفحات المنتجات والأسعار -----
  "OUR": "قسم",            // OUR CLOTHES  ->  قسم الملابس
  "MEMBERSHIP": "أسعار",   // MEMBERSHIP PRICING  ->  أسعار الاشتراكات
  "PRICING": "الاشتراكات",

  // ----- Buttons -----
  "Buy Now": "اشتري الآن",
  "Back": "رجوع",

  // ----- How to buy -----
  "HOW TO": "كيف",
  "BUY": "تشتري",
  "Follow these simple steps to get your order": "اتبع هذه الخطوات البسيطة للحصول على طلبك",
  "Choose your product": "اختر منتجك",
  "Browse Clothes or Supplements and tap Buy Now on the item you like.":
    "تصفّح الملابس أو المكملات واضغط اشتري الآن على المنتج الذي يعجبك.",
  "Send us your order on WhatsApp": "أرسل لنا طلبك على واتساب",
  "Tap the button below and a message with your product will be ready to send.":
    "اضغط على الزر أدناه وستجد رسالة جاهزة بالمنتج لتُرسلها.",
  "Confirm the details": "أكّد التفاصيل",
  "Our team will confirm availability, size or flavor, and delivery or pick-up.":
    "سيؤكد فريقنا التوفر والمقاس أو النكهة والتوصيل أو الاستلام.",
  "Pay and receive your order": "ادفع واستلم طلبك",
  "Pay when you receive your order or at the gym.": "ادفع عند الاستلام أو في الجيم.",
  "Order via WhatsApp": "اطلب عبر واتساب",

  // ----- Footer -----
  "More than a gym, we are a community. Premium gear, top-quality supplements, and flexible membership plans.":
    "أكثر من مجرد جيم، نحن مجتمع. معدات وملابس فاخرة، ومكملات عالية الجودة، وخطط اشتراك مرنة.",
  "Quick Links": "روابط سريعة",
  "Home": "الرئيسية",
  "Clothes": "الملابس",
  "Supplements": "المكملات",
  "About Us": "من نحن",
  "Find Us": "موقعنا",
  "© 2026 Dragon Gym & Fitness. All rights reserved.": "© 2026 Dragon Gym & Fitness. جميع الحقوق محفوظة.",

  // ----- منتجات الملابس -----
  "Dragon T-Shirt": "تيشرت دراجون",
  "Breathable fabric, slim fit": "قماش قابل للتهوية، قصّة ضيقة",
  "Breathable fabric, regular fit": "قماش قابل للتهوية، قصّة عادية",
  "Training Shorts": "شورت تدريب",
  "Lightweight, quick dry": "خفيف وسريع الجفاف",
  "Dragon Hoodie": "هودي دراجون",
  "Soft fleece, warm and comfortable": "فليس ناعم، دافئ ومريح",
  "Tank Top": "تانك توب",
  "Sleeveless, ideal for heavy lifting": "بدون أكمام، مثالي لرفع الأثقال",
  "Compression Shirt": "تيشرت ضاغط",
  "Stretch fit, supports movement": "قصّة مرنة تدعم الحركة",
  "Joggers": "بنطلون جوجر",
  "Tapered fit with zip pockets": "قصّة مستدقّة مع جيوب بسحاب",
  "Gym Cap": "كاب جيم",
  "Adjustable strap, one size": "حزام قابل للتعديل، مقاس واحد",

  // ----- منتجات المكملات -----
  "Whey Protein": "واي بروتين",
  "Fast-absorbing protein for muscle recovery": "بروتين سريع الامتصاص لاستشفاء العضلات",
  "Crea-Power Creatine": "كرياتين كريا-باور",
  "Supports strength and power output": "يدعم القوة والقدرة",
  "BCAA": "BCAA أحماض أمينية",
  "Amino acids to support recovery": "أحماض أمينية لدعم الاستشفاء",
  "Pre-Workout": "بري ووركاوت",
  "Energy and focus before training": "طاقة وتركيز قبل التمرين",
  "Mass Gainer": "ماس جينر",
  "High-calorie formula for building size": "تركيبة عالية السعرات لبناء الكتلة العضلية",
  "Casein Protein": "كازين بروتين",
  "Slow-release protein, ideal before sleep": "بروتين بطيء الامتصاص، مثالي قبل النوم",
  "Omega-3": "أوميجا 3",
  "Daily support for heart and joints": "دعم يومي للقلب والمفاصل",
  "Multivitamin": "فيتامينات متعددة",
  "Daily vitamins and minerals": "فيتامينات ومعادن يومية",
  "brand elataba":"براند العتبه",
}

// ================== المحرك (مش محتاج تلمسه) ==================

const original = new Map()                                   // النص الإنجليزي الأصلي لكل عنصر
let currentLang = localStorage.getItem("lang") || "en"
let currentProduct = null                                    // آخر منتج اتداس عليه Buy Now
const langBtn = document.querySelector("#lang-btn")

function translateText(key) {
    if (translations[key]) return translations[key]
    const price = key.match(/^EGP\s*([\d,]+)$/)              // "EGP 500" -> "500 ج.م"
    if (price) return price[1] + " ج.م"
    return null
}

// للنصوص اللي بتتبني في الـ JS
function tr(text) {
    return currentLang === "ar" ? (translateText(text) || text) : text
}

// سطر المنتج في How to buy + رسالة الواتساب
function updateBuyText() {
    if (!currentProduct) return
    const p = currentProduct
    const price = p.price.toLocaleString("en-US")
    let line, msg

    if (currentLang === "ar") {
        line = `أنت تطلب: ${tr(p.name)} - ${price} ج.م`
        msg = `مرحباً دراجون جيم، أريد طلب: ${tr(p.name)} (${price} ج.م)`
    } else {
        line = `You are ordering: ${p.name} - EGP ${price}`
        msg = `Hello Dragon Gym, I want to order: ${p.name} (EGP ${p.price})`
    }

    buyProduct.textContent = line
    buyWhats.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg)
}

function applyLang(lang) {
    currentLang = lang
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    langBtn.textContent = lang === "ar" ? "English" : "عربي"

    const missing = new Set()
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)

    while (walker.nextNode()) {
        const node = walker.currentNode
        const parent = node.parentElement
        if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) continue
        if (parent.closest("#lang-btn, #buy-product")) continue

        const src = original.has(node) ? original.get(node) : node.nodeValue
        const key = src.replace(/\s+/g, " ").trim()
        if (!key) continue
        original.set(node, src)

        if (lang === "en") {
            node.nodeValue = src
            continue
        }

        const ar = translateText(key)
        if (ar) {
            const lead = src.match(/^\s*/)[0]
            const trail = src.match(/\s*$/)[0]
            node.nodeValue = lead + ar + trail
        } else if (/[A-Za-z]/.test(key)) {
            missing.add(key)
        }
    }

    updateBuyText()

    // بيقولك إيه النصوص اللي لسه مالهاش ترجمة في القاموس
    if (missing.size) console.warn("Missing Arabic translation for:", [...missing])
}

langBtn.addEventListener("click", function () {
    const next = currentLang === "en" ? "ar" : "en"
    localStorage.setItem("lang", next)
    applyLang(next)
})

applyLang(currentLang)

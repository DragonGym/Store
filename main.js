let home = document.getElementById("home");

let homeBtn = document.getElementById("home-btn");

let clothes = document.getElementById("CLOTHES1");

let aboutbtn = document.getElementById("About-us")

let aboutsecsion = document.querySelector(".about-us")

let clothesViewBtn = document.querySelector("#clothes-view")

clothes.addEventListener("click", function() {

    home.style.display = "none";
    aboutsecsion.style.display="none";
});

homeBtn.addEventListener("click", function() {

    home.style.display = "block";
    aboutsecsion.style.display="none";

});

aboutbtn.addEventListener("click",function(){
    home.style.display="none"
    aboutsecsion.style.display="block"
})
clothesViewBtn.addEventListener("click",function(){
     home.style.display = "none";
    aboutsecsion.style.display="none";
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
// =================bar===================//
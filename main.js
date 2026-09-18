let home = document.getElementById("home");

let homeBtn = document.getElementById("home-btn");

let clothes = document.getElementById("CLOTHES1");

let aboutbtn = document.getElementById("About-us")

let aboutsecsion = document.querySelector(".about-us")


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
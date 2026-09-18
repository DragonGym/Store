let home = document.getElementById("home");

let homeBtn = document.getElementById("home-btn");

let clothes = document.getElementById("CLOTHES1");


clothes.addEventListener("click", function() {

    home.style.display = "none";

});

homeBtn.addEventListener("click", function() {

    home.style.display = "block";
});
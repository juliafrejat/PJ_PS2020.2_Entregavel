var toggle = document.querySelector(".burger");
var nav = document.querySelector("#nav");

toggle.addEventListener('click', function(){
    nav.classList.toggle('active');
})
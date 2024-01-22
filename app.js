const hamburger =document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


    var externalUrl = document.getElementsByClassName("btn");
    for (var i= 0; i< externalUrl.length ; i++){
     externalUrl[i].addEventListener("click", goToExternalLink)
    }
 
    function goToExternalLink(){
     window.location.href = "https://calendly.com/info-o0/30min"
    }
let mobileMenu = document.getElementById("mobileMenus");
let mobileHeader = document.getElementById("headerAndLogo-M");
let homeMenu = document.getElementById("homePage");
let feeds = document.getElementById("feeds");
function openMenusMobile(){
    feeds.style.display= "none";
    document.getElementById("groups").style.display= "none";
    mobileHeader.style.display = "none";

    mobileMenu.style.display = "block";
    mobileMenu.style.height = "100vh";
    mobileMenu.style.width = "100%";
}

function openHomeMenu(){
    mobileMenu.style.display = "none";
    mobileHeader.style.display = "flex";
    feeds.style.display = "block";
}
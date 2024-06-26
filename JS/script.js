let mobileMenu = document.getElementById("mobileMenus");
let mobileHeader = document.getElementById("headerAndLogo-M");
let friendMenu = document.getElementById("fReqMobile")
let homeMenu = document.getElementById("homePage");
let feeds = document.getElementById("feeds");
let FRequestTab = document.getElementById("freindRequestTab");
let mainTab = document.getElementById("mainTab");
let videoSection = document.getElementById("videoContainer");


function openMainTab(){
    mainTab.style.display = "flex";
    FRequestTab.style.display = "none";
    videoSection.style.display = "none";
}

function openFriendRequestTab(){
    FRequestTab.style.display = "block";
    mainTab.style.display = "none";
    videoSection.style.display = "none";
}

function openVideoTab(){
    videoSection.style.display = "block"
    mainTab.style.display = "none";
    FRequestTab.style.display = "none";
}
// for mobile devices
function openHomeMenu(){
    mobileMenu.style.display = "none";
    friendMenu.style.display = "none";
    mobileHeader.style.display = "flex";
    // feeds.style.display = "block";
}

function openMenusMobile(){
    feeds.style.display= "none";
    document.getElementById("groups").style.display= "none";
    mobileHeader.style.display = "none";
    friendMenu.style.display = "none";
    mobileMenu.style.display = "block";
    mobileMenu.style.height = "100vh";
    mobileMenu.style.width = "100%";
}

function openFriendMenu(){
    mainTab.style.display = "none";
    mobileHeader.style.display = "none";
    mobileMenu.style.display = "none"
    friendMenu.style.display = "block";
}
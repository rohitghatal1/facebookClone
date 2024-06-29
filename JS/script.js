let mobileMenu = document.getElementById("mobileMenus");
let mobileHeader = document.getElementById("headerAndLogo-M");
let friendMenu = document.getElementById("fReqMobile")
let homeMenu = document.getElementById("homePage");
let feeds = document.getElementById("feeds");
let FRequestTab = document.getElementById("freindRequestTab");
let mainTab = document.getElementById("mainTab");
let videoSection = document.getElementById("videoContainer");
let groupSection = document.getElementById("groupContainer");
let marketPlaceSection = document.getElementById("marketPlaceContainer");
let notificatinModal = document.getElementById("notificaionModal");


function openMainTab(){
    document.getElementById("homeTab").classList.toggle('borderTop')
    mainTab.style.display = "flex";
    FRequestTab.style.display = "none";
    videoSection.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none";
}

function openFriendRequestTab(){
    document.getElementById("friendRequestTab").classList.toggle('borderTop')
    FRequestTab.style.display = "block";
    mainTab.style.display = "none";
    videoSection.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none";
}

function openVideoTab(){
    document.getElementById("videosTab").classList.toggle('borderTop')
    videoSection.style.display = "block"
    mainTab.style.display = "none";
    FRequestTab.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none"
}

function openMarketPlaceTab(){
    document.getElementById("marketPlaceTab").classList.toggle('borderTop')
    marketPlaceSection.style.display = "block";
    mainTab.style.display = "none";
    videoSection.style.display = "none"
    FRequestTab.style.display = "none";
    groupSection.style.display = "none"
}

function openGroupTab(){
    document.getElementById("groupTab").classList.toggle('borderTop')
    groupSection.style.display = "block";
    mainTab.style.display = "none";
    FRequestTab.style.display = "none";
    marketPlaceSection.style.display = "none";
    videoSection.style.display = "none";
}

function openNotification() {
    if(notificatinModal.style.display === 'none'){
        notificatinModal.style.display = 'block';
    }
    else{
        notificatinModal.style.display = 'none';
    }
}

// for mobile devices
function openHomeMenu(){
    mobileMenu.style.display = "none";
    friendMenu.style.display = "none";
    mobileHeader.style.display = "flex";
    feeds.style.display = "block";
    window.location.reload();
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
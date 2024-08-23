let mobileMenu = document.getElementById("mobileMenus");
let mobileHeader = document.getElementById("headerAndLogo-M");
let friendMenu = document.getElementById("fReqMobile")
let homeMenu = document.getElementById("homePage");
let feeds = document.getElementById("feeds");
let FRequestTab = document.getElementById("freindRequestTab");
let mainTab = document.getElementById("mainTab");
let videoSection = document.getElementById("videoContainer");
let groupSection = document.getElementById("groupContainer");
let groups = document.getElementById("groups");
let marketPlaceSection = document.getElementById("marketPlaceContainer");
let messageModal = document.getElementById("messageModal");
let notificatinModal = document.getElementById("notificaionModal");
let menuModal = document.getElementById("menuModal");
let editProfileModal = document.getElementById("editProfileModal");
let videoSectionMobile = document.getElementById("videoSectionMobile");
let profileSectionMobile = document.getElementById("porileSectionMobile");

function removeborderTop(){
    document.getElementById("homeTab").classList.remove('borderTop');
    document.getElementById("friendRequestTab").classList.remove('borderTop');
    document.getElementById("videosTab").classList.remove('borderTop');
    document.getElementById("marketPlaceTab").classList.remove('borderTop');
    document.getElementById("groupTab").classList.remove('borderTop');
}
function openMainTab(){
    removeborderTop();
    document.getElementById("homeTab").classList.add('borderTop')
    mainTab.style.display = "flex";
    FRequestTab.style.display = "none";
    videoSection.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none";
}

function openFriendRequestTab(){
    removeborderTop();
    document.getElementById("friendRequestTab").classList.add('borderTop')
    FRequestTab.style.display = "block";
    mainTab.style.display = "none";
    videoSection.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none";
}

function openVideoTab(){
    removeborderTop();
    document.getElementById("videosTab").classList.add('borderTop')
    videoSection.style.display = "block"
    mainTab.style.display = "none";
    FRequestTab.style.display = "none";
    marketPlaceSection.style.display = "none";
    groupSection.style.display = "none"
}

function openMarketPlaceTab(){
    removeborderTop();
    document.getElementById("marketPlaceTab").classList.add('borderTop')
    marketPlaceSection.style.display = "block";
    mainTab.style.display = "none";
    videoSection.style.display = "none"
    FRequestTab.style.display = "none";
    groupSection.style.display = "none"
}

function openGroupTab(){
    removeborderTop();
    document.getElementById("groupTab").classList.add('borderTop')
    groupSection.style.display = "block";
    mainTab.style.display = "none";
    FRequestTab.style.display = "none";
    marketPlaceSection.style.display = "none";
    videoSection.style.display = "none";
}

function openMenus(){
    if(menuModal.style.display === 'none'){
        menuModal.style.display = 'block';
    }
    else{
        menuModal.style.display = 'none';
    }
}
function openMesseges(){
    if(messageModal.style.display === 'none'){
        messageModal.style.display = 'block';
    }
    else{
        messageModal.style.display = 'none';
    }
}

function openNotification() {
    if(notificatinModal.style.display === 'none'){
        notificatinModal.style.display = 'block';
    }
    else{
        notificatinModal.style.display = 'none';
    }
}

function openProfileModal(){
    if(editProfileModal.style.display === 'none'){
        editProfileModal.style.display = 'block';
    }
    else{
        editProfileModal.style.display = 'none';
    }
}

// for mobile devices
function openHomeMenu(){
    mobileMenu.style.display = "none";
    videoSectionMobile.style.display = 'none';
    friendMenu.style.display = "none";
    mobileHeader.style.display = "flex";
    feeds.style.display = "block";
    notificatinModal.style.display = 'none';
    profileSectionMobile.style.display = "none"
    window.location.reload();
}

function openMenusMobile(){
    feeds.style.display= "none";
    videoSectionMobile.style.display = 'none';
    groups.style.display= "none";
    notificatinModal.style.display = 'none';
    mobileHeader.style.display = "none";
    friendMenu.style.display = "none";
    mobileMenu.style.display = "block";
    mobileMenu.style.height = "100vh";
    mobileMenu.style.width = "100%";
    profileSectionMobile.style.display = "none"
}

function openFriendMenu(){
    mainTab.style.display = "none";
    mobileHeader.style.display = "none";
    mobileMenu.style.display = "none"
    friendMenu.style.display = "block";
    videoSectionMobile.style.display = 'none';
    notificatinModal.style.display = 'none';
    profileSectionMobile.style.display = "none"
}

function openVideoTabMobile(){
    videoSectionMobile.style.display = 'block';
    mainTab.style.display = 'none';
    mobileHeader.style.display = "none";
    mobileMenu.style.display = "none"
    friendMenu.style.display = "none";
    groups.style.display= "none";
    notificatinModal.style.display = 'none';
    profileSectionMobile.style.display = "none"
}

function opneProfileMobile(){
    profileSectionMobile.style.display = "block";
    mainTab.style.display = 'none';
    mobileHeader.style.display = "none";
    mobileMenu.style.display = "none"
    friendMenu.style.display = "none";
    groups.style.display= "none";
    notificatinModal.style.display = 'none';
    videoSectionMobile.style.display = "none";
}
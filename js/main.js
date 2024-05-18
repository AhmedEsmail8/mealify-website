// window.onload = function() {
//     var header = document.getElementsByClassName("header")[0];
//     var height = header.clientHeight;
//     var viewportHeight = window.innerHeight;
//     if (height < viewportHeight){
//         header.style.height = viewportHeight + "px";
//     }
// }

function showSideBar(){
    var sideBar = document.getElementsByClassName("side-bar")[0];
    sideBar.style.transform = "scaleX(100%)";

    var navBar = document.getElementsByTagName("nav")[0];
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";

    var overLay = document.getElementsByClassName("body-overlay")[0];
    overLay.style.visibility = "visible";
}

function hideSideBar(){
    var sideBar = document.getElementsByClassName("side-bar")[0];
    sideBar.style.transform = "scaleX(0)";

    var navBar = document.getElementsByTagName("nav")[0];
    navBar.style.backgroundColor = "#fff";
    navBar.style.boxShadow = "0px 0px 14px 0px #0000001b";

    var overLay = document.getElementsByClassName("body-overlay")[0];
    overLay.style.visibility = "hidden";
}


function scrollToDiv(className) {

    hideSideBar();

    const element = document.querySelector(className);

    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }

    
}
// Drop down menu for mobile devices
function showMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
//  Drop down menu display set to none when exiting the mobile view
function resetMenu(){
    if(window.innerWidth>800){
        document.getElementById("menu").style.display="none";
    }
}
window.addEventListener("resize", resetMenu);


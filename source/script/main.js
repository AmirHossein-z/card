// for add scroll to menu
let menuLink = document.querySelector(".menu");

for (let i = 0; i < menuLink.children.length; i++) {
    /*
     if user clicks on every item of menu
     page scrolls to that element with this event listener
    */
    menuLink.children[i].addEventListener("click", function () {
        document.getElementById("c" + (i + 1)).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
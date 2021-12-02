let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
    links[i].addEventListener("click", function () {
        links[i].style.marginLeft = 12 + "px";
        links[i].style.color = "#ffff00";
    });
}
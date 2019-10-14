
window.onload = qwe();
window.addEventListener("resize", qwe);

function qwe() {

    let SRCsSmall = [
        "images/slide-man-small.png",
        "images/slide-women-small.png"
    ];
    let SRCsNormal = [
        "images/slide-man.png",
        "images/slide-women.png",
        "images/chin.png"
    ];
    let carousel_items = document.querySelectorAll(".carousel-inner > div");
    let imgs = document.querySelectorAll(".d-block");

    if (window.innerWidth <= 992) {

        imgs[0].setAttribute("src", SRCsSmall[0]);
        imgs[1].setAttribute("src", SRCsSmall[1]);
        carousel_items[2].className = "";
        carousel_items[2].style.display = "none";
    }
    else {

        imgs.forEach((img, index) => {

            img.setAttribute("src", SRCsNormal[index]);
        });
        if (!carousel_items[2].classList.contains("active")) {
        
            carousel_items[2].className = "carousel-item";
            carousel_items[2].style = undefined;
        }
    }
}
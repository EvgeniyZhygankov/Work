
window.onload = qwe();
window.addEventListener("resize", qwe);

function qwe() {
    
    console.log("in")
    let SRCsSmall = [
        "images/slide-man-small.png",
        "images/slide-women-small.png"
    ];
    let SRCsNormal = [
        "images/slide-man.png",
        "images/slide-women.png",
        "images/chin.png"
    ];
    let carousel_inner = document.querySelector(".carousel-inner");
    let imgs = document.querySelectorAll(".d-block");
    
    console.log(window.innerWidth);
    if (window.innerWidth < 1900) {
        console.log(imgs);
        imgs[0].setAttribute("src", SRCsSmall[0]);
        imgs[1].setAttribute("src", SRCsSmall[1]);
        carousel_inner.childNodes[2].className = "carousel-item";
    }
    else {
        imgs.forEach((img, index) => {

            img.setAttribute("src", SRCsNormal[index]);
        });

        carousel_inner.childNodes[2].className = "carousel-item";
    }
}
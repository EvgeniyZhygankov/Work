
window.onload = qwe();
window.addEventListener("resize", qwe);

function qwe() {
    // console.log(`Ширина ${window.innerWidth} Высота ${window.innerHeight}`);
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
    
    if (window.innerWidth <= 992) {
        // console.log(imgs);
        imgs[0].setAttribute("src", SRCsSmall[0]);
        imgs[1].setAttribute("src", SRCsSmall[1]);
        carousel_inner.childNodes[2].className = "";
        carousel_inner.childNodes[2].style.display = "none";
    }
    else {
        imgs.forEach((img, index) => {

            img.setAttribute("src", SRCsNormal[index]);
        });

        carousel_inner.childNodes[2].className = "carousel-item";
        carousel_inner.childNodes[2].style.display = "block";
    }
}
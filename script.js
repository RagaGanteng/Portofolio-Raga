// =========================
// FULLSCREEN IMAGE VIEWER
// =========================

const galleryItems = document.querySelectorAll(".gallery-item");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const imageClose = document.getElementById("imageClose");


// OPEN IMAGE

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        viewerImage.src = image.src;
        viewerImage.alt = image.alt;

        imageViewer.classList.add("active");

        // Mencegah halaman di belakang ikut scroll
        document.body.style.overflow = "hidden";

    });

});


// CLOSE BUTTON

imageClose.addEventListener("click", () => {

    imageViewer.classList.remove("active");

    document.body.style.overflow = "";

});


// CLICK BACKGROUND TO CLOSE

imageViewer.addEventListener("click", (event) => {

    if(event.target === imageViewer){

        imageViewer.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// PRESS ESC TO CLOSE

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        imageViewer.classList.remove("active");

        document.body.style.overflow = "";

    }

});
const themeBtn = document.getElementById("themeBtn");
const settingsBtn = document.getElementById("settingsBtn");
const dialog = document.getElementById("settingsDialog");

const closeBtn = document.getElementById("closeBtn");
const body = document.body;
const images = document.querySelectorAll(".image-setting");
const imageBox = document.querySelector(".image-box");



// Open dialog
settingsBtn.addEventListener("click", () => dialog.showModal());
// Close dialog
closeBtn.addEventListener("click", () => dialog.close());



let isFirstTheme = true;
// Initial state
images[0].style.display = "block";
images[1].style.display = "none";
imageBox.style.backgroundColor = "#0a6e8c";
// Dark mode toggle
themeBtn.addEventListener("click", () => {
    themeBtn.classList.toggle("active");

    if (isFirstTheme) {
        // Light Mode
        body.style.backgroundColor = "gray";
        images[0].style.display = "none";
        images[1].style.display = "block";
        imageBox.style.backgroundColor = "#717474";
    } else {
        // Dark Mode
        body.style.backgroundColor = "#063645";
        images[0].style.display = "block";
        images[1].style.display = "none";
        imageBox.style.backgroundColor = "#0a6e8c";
    }

    isFirstTheme = !isFirstTheme;    
});

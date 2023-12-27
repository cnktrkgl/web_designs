function toggleBtn() {
    let x = document.getElementById("mobileLinks");
    let y = document.getElementById("header");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.height = "auto";
    } else {
        x.style.display = "none";
    }
}
document.getElementById("mainIcon").addEventListener("click", function () {
    this.classList.toggle("active");
    let socialIcons = document.getElementById("socialIcons");
    socialIcons.classList.toggle("show");

    let mainIconImg = document.getElementById("mainIconImg");
    if (this.classList.contains("active")) {
      mainIconImg.style.transform = "rotate(180deg)";
      mainIconImg.src = "img/x-mark-256.png"; 
      socialIcons.style.display = "flex";
    } else {
      mainIconImg.style.transform = "rotate(0deg)";
      mainIconImg.src = "img/chat.png"; 
      socialIcons.style.display = "none";
    }
  });
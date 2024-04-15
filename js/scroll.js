window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    let button = document.getElementById("scrollToTopButton");
    var navbar = document.querySelector(".nav-fixed");
    var fixedScrollPoint = 120; 
    var minWidth = 992; 
  
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  
    if (window.innerWidth > minWidth && window.pageYOffset >= fixedScrollPoint) {
      navbar.classList.add("fixedd");
    } else {
      navbar.classList.remove("fixedd");
    }
  }
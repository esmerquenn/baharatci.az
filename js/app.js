const workCards = document.querySelector(".work-cards");
const work = document.querySelector(".work");

function slider(flag, num) {
  var current = $(".iteme.current"),
    next,
    index;
  if (!flag) {
    next = current.is(":last-child") ? $(".iteme").first() : current.next();
    index = next.index();
  } else if (flag === "dot") {
    next = $(".iteme").eq(num);
    index = num;
  } else {
    next = current.is(":first-child") ? $(".iteme").last() : current.prev();
    index = next.index();
  }
  next.addClass("current");
  current.removeClass("current");
  $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
var setSlider = setInterval(slider, 10000);
//  ////////////////////////////////////////////////
$(".button").on("click", function () {
  clearInterval(setSlider);
  var flag = $(this).is(".prev") ? true : false;
  slider(flag);
  setSlider = setInterval(slider, 10000);
  // //////////////////////////
});

$(".dot").on("click", function () {
  if ($(this).is(".current")) return;
  clearInterval(setSlider);
  var num = $(this).index();
  slider("dot", num);
  setSlider = setInterval(slider, 10000);
  // ///////////////////
});

//
const h1 = document.querySelector("h1");
const h6 = document.querySelector("h6");
const organic = document.querySelector(".organic");
function animateOrganic() {
  organic.style.animation = "none";
  organic.offsetHeight;
  organic.style.animation = `slideDownAndRotate 0.9s ease-out .5s forwards`;
  h1.style.animation = "none";
  h1.offsetHeight;
  h1.style.animation = `upFromDown 0.9s ease-out forwards`;
  h6.style.animation = "none";
  h6.offsetHeight;
  h6.style.animation = `upFromDownh6 0.9s ease-out 0.5s forwards`;
}
setInterval(animateOrganic, 10000);

workCards.onclick = function () {
  workCards.style.boxShadow = "0 0 20px #eeeeee";
  
  setTimeout(function () {
    workCards.style.boxShadow = "none";
  }, 2000);
};

workCards.onblur = function () {
  workCards.style.boxShadow = "none";
};

function updateSlidesPerView() {
  let slideCount = window.innerWidth > 768 ? 3 : 1;
  return slideCount;
}
function updateLoopBolean() {
  let loopBolean = window.innerWidth > 768 ? false : true;
  return loopBolean;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: updateSlidesPerView(),
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 4000,
  },
  loop: updateLoopBolean(),
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("resize", function () {
  swiper.params.slidesPerView = updateSlidesPerView();
  swiper.params.loop = updateLoopBolean();
  swiper.update();
});




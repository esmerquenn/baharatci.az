const workCards = document.querySelector(".work-cards");
const work = document.querySelector(".work");
const data = [
  {
    category: "Baharatlar",
    cards: [
      {
        id: 0,
        img: "hil.webp",
        name: "Hil",
        about: "Üyüdülmüş 100 qr",
        price: "12₼",
      },
      {
        id: 1,
        img: "hilsade.png",
        name: "Hil",
        about: "100 qr",
        price: "10₼",
      },

      {
        id: 2,
        img: "mixek.webp",
        name: "Mixək",
        about: "Üyüdülmüş 100qr",
        price: "4₼",
      },

      {
        id: 3,
        img: "mixeksade.webp",
        name: "Mixək",
        about: "100qr",
        price: "3,80₼",
      },

      {
        id: 4,
        img: "qaraistiot.webp",
        name: "Qara istiot",
        about: "Yumru 100 qr",
        price: "2₼ ",
      },

      {
        id: 5,
        img: "sarimsaqtozu.webp",
        name: "Sarımsaq tozu",
        about: " 100 qr",
        price: "1.20₼",
      },

      {
        id: 6,
        img: "zencefiltozu.webp",
        name: "Zəncəfil",
        about: "Üyüdülmüş 100 qr",
        price: "2.60₼",
      },

      {
        id: 7,
        img: "zencefil.png",
        name: "Zəncəfil",
        about: "100 qr",
        price: "2.40₼",
      },
    ],
  },
  {
    category: "Çərəzlər",
    cards: [
      {
        id: 8,
        img: "araxis.webp",
        name: "Araxis",
        about: "100 qr",
        price: "1₼  ",
      },
      {
        id: 9,
        img: "araxisqovrulmus.webp",
        name: "Araxis",
        about: "Qovrulmuş 100 qr ",
        price: "1.2₼",
      },

      {
        id: 10,
        img: "badam.webp",
        name: "Badam",
        about: "100 qr ",
        price: "2₼",
      },

      {
        id: 11,
        img: "findiq.webp",
        name: "Fındıq ",
        about: "100 qr ",
        price: "2.30₼  ",
      },

      {
        id: 12,
        img: "findiqqovrulmus.webp",
        name: "Fındıq",
        about: "Qovrulmuş 100 qr ",

        price: "2.5₼  ",
      },
      { id: 13, img: "kaju.webp", name: "Kaju", about: "100 qr", price: "2.5₼" },

      { id: 14, img: "noxud.webp", name: "Noxud ", about: "100 qr", price: "0.70₼  " },
      { id: 15, img: "popcorn.webp", name: "Partlamış qarğıdalı ", about: "100 qr", price: "1₼ " },

      { id: 16, img: "qarisiq.webp", name: "Qarışıq ləpə", about: "100qr ", price: "2₼ " },

      { id: 17, img: "qoz.webp", name: "Qoz", about: "100 qr ", price: " 2.50₼  " },

      { id: 18, img: "semicka.webp", name: "Semiçka ləpəsi", about: "100 qr", price: " 0.70₼  " },
    ],
  },

  {
    category: "Meyvə qurusu",
    cards: [
      { id: 19, img: "alma.png", name: "Alma qurusu ", about: "100qr ", price: "2₼" },

      { id: 20, img: "Ananas.png", name: "Ananas qurusu ", about: "100qr ", price: "2₼" },

      { id: 21, img: "əncir.png", name: "Əncir qurusu", about: "100qr", price: " 2.50₼  " },
      { id: 22, img: "Kivi.jpg", name: "Kivi qurusu", about: "  100qr", price: "  1.50₼ " },

      { id: 23, img: "Manqo.png", name: "Manqo qurusu", about: " 100qr ", price: " 1.80₼  " },

      { id: 24, img: "qaraKişmiş.png", name: " Qara kişmiş ", about: "100qr ", price: " 2.50₼  " },

      { id: 25, img: "qaraQaysı.png", name: "Qara Qayısı  ", about: "100qr ", price: " 3₼" },
      { id: 26, img: "sariKismis.png", name: " Sarı kişmiş ", about: "100qr", price: " 1₼  " },

      { id: 27, img: "sarıQaysı.png", name: "Sarı qayısı  ", about: "100qr", price: " 2.50₼  " },

      { id: 28, img: "Tut.webp", name: " Tut qurusu", about: "100qr", price: " 1₼" },
    ],
  },
  {
    category: "Təbii otlar",
    cards: [
      { id: 29, img: "keklikotu.webp", name: "Kəklikotu", about: "100qr ", price: " 1₼  " },

      { id: 30, img: "lavanta.webp", name: "Lavanda", about: "100 qr", price: " 3₼  " },

      { id: 31, img: "nane.webp", name: "Nanə", about: "100 qr ", price: " 0.90₼  " },

      { id: 32, img: "qizilgul.webp", name: "Qızılgül", about: "100 qr", price: " 3₼  " },
    ],
  },

  {
    category: "Təbii yağlar",
    cards: [
      { id: 33, img: "kuncut.webp", name: "Küncüt yağı", about: "100 qr ", price: " 1₼  " },

      { id: 34, img: "zeytun.webp", name: "Zeytun yağı", about: "100 qr", price: " 1₼  " },

      { id: 35, img: "badamyagi.webp", name: "Badam yağı", about: "100qr ", price: " 1₼  " },

      { id: 36, img: "kokos.webp", name: "Kokos yağı", about: "100 qr", price: " 1₼" },
    ],
  },
  {
    category: "Tort məhsulları",
    cards: [
      { id: 37, img: "damla.png", name: "Damla şokolad", about: "100 qr ", price: "  1.50₼  " },

      { id: 38, img: "disk.png", name: "Disk şokolad", about: "100 qr", price: " 1.50₼  " },

      { id: 39, img: "vanil.png", name: "Vanil", about: "10qr ", price: "0.50₼ " },

      { id: 40, img: "qabartma.png", name: "Qabartma tozu", about: "100 qr", price: " 1.50₼" },
      { id: 41, img: "qatisut.png", name: "Qatılaşdırılmış süd", about: "500 qr", price: " 3₼" },
      { id: 42, img: "qatisud.png", name: "Qatılaşdırılmış süd bişmiş", about: "500 qr", price: " 3₼" },
      { id: 43, img: "1.png", subImg: ['22.png','33.png','44.png','55.png'],
       name: "Qida rəngləri", about: "50 qr", price: "0.30 ₼" },

    ],
  },
];

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
const buttonSlider = document.querySelector(".button-slider");
function animateOrganic() {
  organic.style.animation = "none";
  organic.offsetHeight;
  organic.style.animation = `slideDownAndRotate 0.9s ease-out .5s forwards`;
  buttonSlider.style.animation = "none";
  buttonSlider.offsetHeight;
  buttonSlider.style.animation = `upFromDownButton 0.9s ease-out 0.6s forwards`;
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




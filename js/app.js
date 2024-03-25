
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
        about: 'Hil (üyüdülmüş) 100 qr',
        price: "12",
      },
      {
        id: 1,
        img: "hilsade.webp",
        name: "Hil",
        about: 'Hil (üyüdülmüş) 100 qr',
        price: "10",
      },

      {
        id:2,
        img: "mixek.webp",
        name: "Mixək",
        about: "Mixək (üyüdülmüş) 100qr",
        price: "4",
      },

      {
        id:3,
        img: "mixeksade.webp",
        name: "Mixək",
        about: "mixək 100qr",
        price: "3,80",
      },

      {
        id: 4,
        img: "qaraistiot.webp",
        name: "Qara",
        about: "Qara istiot (yumru) 100 qr",
        price: "2 ",
      },

      {
        id:5,
        img: "sarimsaqtozu.webp",
        name: "Sarımsaq",
        about: "Sarımsaq tozu 100 qr",
        price: "1.20",
      },

      {
        id:6,
        img: "zencefiltozu.webp",
        name: "Zəncəfil",
        about: "Zəncəfil (üyüdülmüş) 100 qr",
        price: "2.60",
      },

      {
        id:7,
        img: "zencefil.webp",
        name: "Zəncəfil",
        about: "Zəncəfil 100 qr",
        price: "2.40",
      },
    ],
  },
  {
    category: "Çərəzlər",
    cards: [
      {
        id:8,
        img: "araxis.webp",
        name: "Araxis",
        about: "Araxis 100 qr",
        price: "1  ",
      },
      {
        id:9,
        img: "araxisqovrulmus.webp",
        name: "Araxis",
        about: "Araxis qovrulmuş 100 qr ",
        price: "1.2",
      },

      {
        id: 10,
        img: "badam.webp",
        name: "Badam",
        about: "Badam 100 qr ",
        price: "2",
      },

      {
        id:11,
        img: "findiq.webp",
        name: "Fındıq ",
        about: "Fındıq 100 qr ",
        price: "2.30  ",
      },

      { id:12,
        img: "findiqqovrulmus.webp",
        name: "Fındıq qovrulmuş 100 qr ",
        about: " ",

        price: "2.5  ",
      },
      { id:13,
        img: "kaju.webp",
        name: "Kaju 100 qr ",
        about: " ",
        price: "2.5  ",
      },

      { id:14,
        img: "noxud.webp",
        name: "Noxud (100 qr) ",
        about: " ",
        price: "0.70  ",
      },
      { id:15,
        img: "popcorn.webp",
        name: "Partlamış qarğıdalı ",
        about: " Partlamış qarğıdalı (100 qr) ",
        price: "1 ",
      },

      { id:16,
        img: "qarisiq.webp",
        name: "Qarışıq ləpə 100qr",
        about: "Qarışıq ləpə 100qr ",
        price: "2 ",
      },

      { id:17,
        img: "qoz.webp",
        name: "Qoz 100 qr",
        about: " ",
        price: " 2.50  ",
      },

      { id:18,
        img: "semicka.webp",
        name: "Semiçka ləpəsi (100 qr)",
        about: " ",
        price: " 0.70  ",
      },
    ],
  },

  {
    category: "Meyvə qurusu",
    cards: [
      { id:19,
        img: "alma.jpg",
        name: "Alma",
        about: " ",
        price: "   ",
      },

      { id:20,
        img: "Ananas.jpg",
        name: "Ananas",
        about: " Ananas qurusu  100qr ",
        price: " 2  ",
      },

      { id:21,
        img: "əncir.png",
        name: "əncir",
        about: "Əncir qurusu  100qr",
        price: " 2.50  ",
      },
      { id:22,
        img: "Kivi.jpg",
        name: "Kivi",
        about: " Kivi qurusu 100qr",
        price: "  1.50 ",
      },

      { id:23,
        img: "Manqo.jpg",
        name: "Manqo",
        about: "mango qurusu 100qr ",
        price: " 1.80  ",
      },

      { id:24,
        img: "qaraKişmiş.jpg",
        name: "qara kişmiş",
        about: " Qara kişmiş 100qr ",
        price: " 2.50  ",
      },

      { id:25,
        img: "qaraQaysı.jpg",
        name: "qara qaysı",
        about: "Qara Qayısı  100qr ",
        price: " 3",
      },
      { id:26,
        img: "sariKismis.jpg",
        name: "Sarı kişmiş",
        about: " Sarı kişmiş 100qr",
        price: " 1  ",
      },

      { id:27,
        img: "sarıQaysı.jpg",
        name: "sarı qaysı",
        about: "Sarı qayısı  100qr",
        price: " 2.50  ",
      },

      { id:28,
        img: "Tut.webp",
        name: "Tut",
        about: " Tut qurusu  100qr",
        price: " 1",
      },
    ],
  },
  {
    category: "Təbii otlar",
    cards: [
      { id:29,
        img: "keklikotu.webp",
        name: "Kəklikotu",
        about: "Kəklikotu 100qr ",
        price: " 1  ",
      },

      { id:30,
        img: "lavanta.webp",
        name: "Lavanda",
        about: " lavanda 100 qr",
        price: " 3  ",
      },

      { id:31,
        img: "nane.webp",
        name: "Nanə",
        about: "Nanə 100 qr ",
        price: " 0.90  ",
      },

      { id:32,
        img: "qizilgul.webp",
        name: "Qızılgül",
        about: " Qızılgül 100 qr",
        price: " 3  ",
      },
    ],
  },

  {
    category: "Təbii yağlar",
    cards: [
      { id:33,
        img: "kuncut.webp",
        name: "Küncüt yağı",
        about: "Küncüt yağı 100 qr ",
        price: " 1  ",
      },

      { id:34,
        img: "zeytun.webp",
        name: "Zeytun yağı",
        about: " Zeytun yağı (100 qr)",
        price: " 1  ",
      },

      { id:35,
        img: "badamyagi.webp",
        name: "Badam yağı",
        about: "Badam yağı 100qr ",
        price: " 1  ",
      },

      { id:36,
        img: "kokos.webp",
        name: "Kokos yağı",
        about: " Kokos yağı 100 qr",
        price: " 1",
      },
    ],
  },
];

function slider(flag, num) {
  var current = $(".item.current"),
    next,
    index;
  if (!flag) {
    next = current.is(":last-child") ? $(".item").first() : current.next();
    index = next.index();
  } else if (flag === "dot") {
    next = $(".item").eq(num);
    index = num;
  } else {
    next = current.is(":first-child") ? $(".item").last() : current.prev();
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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let button = document.getElementById("scrollToTopButton");

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
}
document.getElementById("scrollToTopButton").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

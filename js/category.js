const allGridArea = document.querySelector(".all-grid-area");

let a = "";
let categories = `
<div onclick="getCategory()" id=""  class="category cat-1">
<div>
  <span>Bütün Məhsullar</span> <br />
</div>
</div>`;
data.map((item, i) => {
  categories += ` 
  <div onclick="getCategory('${item.category}', '${i}')" id="${item.category}"  class="category cat-${i + 1}">
    <div>
      <span>${item.category}</span> <br />
      ${item.cards?.length} məhsul
    </div>
  </div>`;
});

let cardsContent = "";
data.forEach((category) => {
  getCards(category);
});
function getCategory(category, i) {
  console.log(i);
  let a = document.getElementById(`${category}`);
  console.log(a);
  a.style.background = "#d57373";

  cardsContent = "";
  if (category == undefined) {
    data.forEach((category) => {
      getCards(category);
    });
  } else {
    let filteredCategories = data.filter((cat) => cat.category === category);
    filteredCategories.forEach((category) => {
      getCards(category);
    });
  }

  allGridArea.innerHTML = `<div class="categories">${categories}</div> ${cardsContent}`;
}

allGridArea.innerHTML = `<div class="categories">${categories}</div> ${cardsContent}`;

function getCards(category) {
  category.cards.forEach((item) => {
    cardsContent += `
         
          <div class="kart" onclick="goToDetailsPage('${item.id}', '${category.category}')">
          <div class="after">
             <button onclick="goToDetailsPage('${item.id}', '${category.category}')" class="btn5 btn-after">
             <a href="javascript:void(0);"><i class="fa-solid fa-cart-plus"></i> Ətraflı</a>
             </button>
        </div>
            <img class="card-img" src="mehsullar/${item.img}" alt="${item.name}" />
            <div class="kart-main">
              <div class="position">
                <div class="boyukdaire">
                  <div class="kicikdaire">0</div>
                </div>
              </div>
              <div class="pp-div">
                <p class="pp1">${item.name}</p>
                <p class="pp3">${item.about}</p>
                <p class="pp2">${item.price}</p>
              </div>
            </div>
          </div>`;
  });
}

function goToDetailsPage(itemId, category) {
  window.location.href = `detail.html?item=${itemId}&cat=${category}`;
}

// function MyProduct(item, cat) {
//   let dat = data.filter((dat) => dat.category == cat);
//   let b = {};
//   dat[0].cards.filter((forr) => {
//     if (forr.id == item) {
//       b = forr;
//     }
//   });
//   return b;
// }
{
  /* <button onclick="Myproduct('${item.id}','${category.category}')" data-item-id="${item.id}" class="btn5 btn-after">
<a href="detail.html"><i class="fa-solid fa-cart-plus"></i> Ətraflı</a>
// <a href="/a${item.id}.html"><i class="fa-solid fa-cart-plus"></i> Ətraflı</a> */
}
// getDetail('${item.id}','${category}')

// let section = document.querySelector(".me");
// console.log(section);
//   section.innerHTML += `
//   <div class="all-mehsul-details">
//   <img src="mehsullar/badamyagi.webp" alt="" />

//   <div>
//     <h4>Badam yagi</h4>
//     <p class="price">1.00 m</p>
//     <p class="about-product"><i class="fa-solid fa-check"></i> 100qr</p>
//     <p class="about-product"><i class="fa-solid fa-check"></i> 100% Təbii</p>
//     <p class="about-product"><i class="fa-solid fa-check"></i> Müştərinin istəyindən asılı həcm</p>
//   </div>
// </div>`;

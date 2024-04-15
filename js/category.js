const allGridArea = document.querySelector(".all-grid-area");

let a = "";
let categories = ''
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
function getCategory(category) {
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

  allGridArea.innerHTML = `<div class="categories">${categories}</div>         
                            <h3 class="all-h3">100% təbii məhsullar</h3>
                            ${cardsContent}`;
}

allGridArea.innerHTML = `<div class="categories">${categories}</div>         
                            <h3 class="all-h3">100% təbii məhsullar</h3>
                        ${cardsContent}`;

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


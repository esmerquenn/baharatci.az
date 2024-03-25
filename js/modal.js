const searchIcon = document.getElementById("glass");
const searchInput = document.getElementById("searchInput");
const searchContainer = document.querySelector(".search-container");
const relative = document.querySelector(".relative");

function showInput() {
  relative.classList.toggle("show");
  searchInput.focus();
}

window.addEventListener("click", function (event) {
  if (!searchContainer.contains(event.target)) {
    relative.classList.remove("show");
    searchInput.value = "";
    searchResults.textContent = "";
  }
});

searchInput.addEventListener("click", function (event) {
  event.stopPropagation();
});


searchInput.addEventListener("input", function () {
  const searchValue = this.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (searchValue.length > 0) {
    const filteredResults = data
      .flatMap(category => category.cards.map(card => ({...card, category: category.category})))
      .filter((card) => card.name.toLowerCase().includes(searchValue))
      .slice(0, 10);

    filteredResults.forEach((item) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.textContent = item.name;

      resultItem.addEventListener("click", function () {
        goToDetailsPage(item.id, item.category);
      });

      searchResults.appendChild(resultItem);
    });

    searchResults.style.visibility = "visible";
    searchResults.style.opacity = 1;
  } else {
    searchResults.style.visibility = "hidden";
    searchResults.style.opacity = 0;
  }
});


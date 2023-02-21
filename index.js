import { createCharacterCard } from "../components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = "https://rickandmortyapi.com/api/character?page=<page=42>";
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const characters = data.results;
      maxPage = data.info.pages;
      cardContainer.innerHTML = "";
      characters.forEach((character) => {
        const personCard = createCharacterCard(character);
        cardContainer.append(personCard);
      });

      updatePagination();
    } else {
      console.error("bad response");
    }
  } catch (error) {
    console.error("Fehlgeschlagen");
  }
}

fetchCharacters();

function gotToPrevPage() {
  if (page > 1) {
    page--;
  }
  fetchCharacters();
}

function gotToNextPage() {
  if (page < maxPage) {
    page++;
  }
  fetchCharacters();
}

function updatePagination() {
  pagination.innerText = `${page} / ${maxPage}`;
  prevButton.disabled = page === 1;
  nextButton.disabled = page === maxPage;
}

prevButton.addEventListener("click", gotToPrevPage);

nextButton.addEventListener("click", gotToNextPage);

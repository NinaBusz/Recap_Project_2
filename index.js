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
const maxPage = 42;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=<pageIndex>"
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const characters = data.results;
      characters.forEach((character) => {
        const personCard = createCharacterCard(character);
        cardContainer.append(personCard);
      });
    } else {
      console.error("bad response");
    }
  } catch (error) {
    console.error("Fehlgeschlagen");
  }
}

fetchCharacters();

prevButton.addEventListener("click", () => {
  for (let page = 0; page > 0; page--) {
    //const characters1 = characters.slice(1, 20);
    page = -1;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  for (let page = 0; page < 42; page++) {
    //const characters2 = characters.slice(1, 20);
    fetchCharacters();
  }
});

console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard({
  image,
  name,
  status,
  type,
  occurrences,
}) {
  const characterCard = document.createElement("li");
  characterCard.classList.add("card");
  cardContainer.append(characterCard);
  cardContainer.innerHTML = `
  
  <li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src=${image}
        alt=${name}
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">${status}</dt>
        <dd class="card__info-description">${status.value}</dd>
        <dt class="card__info-title">${type}</dt>
        <dd class="card__info-description">${type.value}</dd>
        <dt class="card__info-title">${occurrences}</dt>
        <dd class="card__info-description">${occurrences.value}</dd>
      </dl>
    </div>
  </li>`;

  /*const heading = document.createElement("h2");
  characterCard.append(heading);
  return createCharacterCard;*/
}

const restourantsURl = "../db/partners.json";
const container = document.querySelector('.restoran-wrapper')

const getData = async (URL) => {
  const res = await fetch(URL, {
    method: "GET",
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("Ебать ты лох");
};

const createRestoransCards = async ({name, stars, time_of_delivery, image}) => {
  const data = await getData(restourantsURl);
  console.log(data, 'data')
  const card = `

    <li class="restoran-list">
    <a href="#">
      <div>
        <p class="title">${name}</p>
        <p class="rating">${stars}</p>
        <p class="deliviry">${time_of_delivery}</p>
      </div>
      <div class="image" style="background-image: url('${image}')"></div>
    </a>
    </li>

    `;

    container.insertAdjacentHTML("beforeend", card)

};
createRestoransCards()

const init = async () => {
  const resaurantsArr = await getData(restourantsURl)
  
  resaurantsArr.map((x) => createRestoransCards(x))
}

init()
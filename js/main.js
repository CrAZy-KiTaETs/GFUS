const restourantsURl = "../db/partners.json";
const container = document.querySelector(".restoran-wrapper");
const wrapper = document.querySelector(".restoran-container");
const foodRes = document.querySelector(".food-res");

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

const createRestoransCards = async ({
  name,
  stars,
  time_of_delivery,
  image,
  products,
}) => {
  const data = await getData(restourantsURl);
  console.log(data, "data");
  const card = `
    <li class="restoran-list" data-product="${products}">
      <div>
        <p class="title">${name}</p>
        <p class="rating">${stars}</p>
        <p class="deliviry">${time_of_delivery}</p>
      </div>
      <div class="image" style="background-image: url('${image}')"></div>
    </li>

    `;

  container.insertAdjacentHTML("beforeend", card);
};
createRestoransCards();

const createFoodCard = ({ name, price, description, image }) => {
  const foodCard = `
      <li class="food-card">
      <div>
        <p class="title">${name}</p>
        <p class="rating">${price}</p>
        <p class="description">${description}</p>
        <button class="buy">BUY</button>
      </div>
      <div class="image" style="background-image: url('${image}')"></div>
    </li>
  `;

  container.classList.add("hide");

  wrapper.insertAdjacentHTML("beforeend", foodCard);
};

const openRes = async (e) => {
  const target = e.target;
  const restoran = target.closest(".restoran-list");
  if (restoran) {
    const restData = await getData(`./db/${restoran.dataset.product}`);
    wrapper.innerHTML = "";
    restData.map((x) => createFoodCard(x));
    wrapper.classList.remove("hide");
  }
};

const init = async () => {
  const resaurantsArr = await getData(restourantsURl);
  resaurantsArr.map((x) => createRestoransCards(x));
};

container.addEventListener("click", openRes);

const goBack = async (e) => {
  const card = e.target.closest(".backBtn");
  if (card) {
    container.classList.remove("hide");
    wrapper.classList.add("hide");  
    wrapper.innerHTML = "";
  }

};

foodRes.addEventListener("click", goBack);

init();

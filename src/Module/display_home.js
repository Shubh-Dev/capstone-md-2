import { addLikes, getAllLikes } from './create_likes.js';

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');

const check = async (item, paragraph) => {
  if (paragraph === undefined) {
    paragraph = document.querySelectorAll('.likeShow');
    const fetchLikes = await getAllLikes();
    fetchLikes.forEach((like) => {
      if (like.item_id === item) {
        paragraph.forEach((card) => {
          if (card.id === item) {
            card.innerHTML = `${like.likes}`;
          }
        });
      }
    });
  }
};

const dynamicDisplay = async () => {
  const data = await fetch(url2).then((response) => response.json());
  data.categories.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'meal';
    meal.innerHTML = `<div class="card" id="${element.idCategory}">
      <div class="images">
      <img class="img" src="${element.strCategoryThumb}">
      </div>
      <div class="actions b">
      <p class="foodcategory">${element.strCategory}</p>
      <div class="thumbshow">
      <i class="fa fa-thumbs-up" aria-hidden="true" id=${element.strCategory}></i>
      <p class="likeShow" id=${element.strCategory}> </p>
      </div>
  
      </div>
      <button class="comment-btn" id=${element.idCategory}>Comment</button>
      </div>`;

    show.appendChild(meal);
  });

  const likes = document.querySelectorAll('.fa.fa-thumbs-up');
  likes.forEach((like) => {
    check(like.id);
    like.addEventListener('click', async () => {
      await addLikes(like.id);
      check(like.id);
    });
  });
};

export default dynamicDisplay;
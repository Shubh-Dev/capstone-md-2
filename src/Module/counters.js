/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = 'tbIiQWOKUtHmxz2molbQ';

export const itemCounter = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const checkLength = dishCount(data.categories);
  document.querySelector('#itemsCount').innerHTML = `Total dishes(${checkLength})`;
};

export const dishCount = (data) => data.length;

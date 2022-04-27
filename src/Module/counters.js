/* eslint-disable no-use-before-define */

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';

export const itemCounter = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const checkLength = dishCount(data.categories);
  document.querySelector('#itemsCount').innerHTML = `Total dishes(${checkLength})`;
};

export const dishCount = (data) => data.length;

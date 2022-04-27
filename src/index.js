import './style.css';

import { itemCounter } from './Module/counters.js';
import dynamicDisplay from './Module/display_home.js';
// import displayPopup from './Module/display_popup.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = 'tbIiQWOKUtHmxz2molbQ';
const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');


dynamicDisplay();
// displayPopup();
itemCounter();
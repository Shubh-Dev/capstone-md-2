/**
 * @jest-environment jsdom
*/
import { dishCount } from './counters.js';
/* eslint-disable no-use-before-define */

const meals = [
  { item_id: 1, likes: 310, id: 1 },
  { item_id: 2, likes: 454, id: 2 },
  { item_id: 3, likes: 80, id: 3 },
  { item_id: 4, likes: 400, id: 4 },
  { item_id: 1, likes: 310, id: 1 },
  { item_id: 2, likes: 454, id: 2 },
  { item_id: 3, likes: 80, id: 3 },
  { item_id: 4, likes: 400, id: 4 },

];

const addComment = () => {
  const allComment = document.querySelector('.all-comment');
  const comment = document.createElement('li');

  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 30);

  comment.innerHTML = `${day}/${month}/2050 Test User: This is a test comment!`;
  allComment.appendChild(comment);
  document.querySelector('.itemsCount').textContent = `Comments (${allComment.children.length})`;
};

describe('items counter and comments Counter ', () => {
  document.body.innerHTML = `
    <div class="comment-section">
      <h3 class="itemsCount">Comments</h3>
        <ul class="all-comment">
        </ul>
    </div>`;

  test('Count Number of meals', () => {
    expect(dis(meals)).toBe(8);
  });

  test('Adding comments', () => {
    addComment();
    expect(document.querySelector('.all-comment').children.length).toBe(1);
  });

  test('Adding more comments', () => {
    addComment();
    addComment();
    addComment();
    expect(document.querySelector('.all-comment').children.length).toBe(4);
  });

  test('Adding even more comments', () => {
    addComment();
    addComment();
    addComment();
    addComment();
    addComment();
    addComment();
    expect(document.querySelector('.all-comment').children.length).toBe(10);
  });
});

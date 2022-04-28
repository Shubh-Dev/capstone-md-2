import { dishCount } from './counters.js';

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

describe('items counter and comments Counter ', () => {
  test('Count Number of meals', () => {
    expect(dishCount(meals)).toBe(8);
  });
});

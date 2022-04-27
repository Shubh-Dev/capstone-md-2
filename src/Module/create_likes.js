const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = 'tbIiQWOKUtHmxz2molbQ';

export const addLikes = async (id) => {
  const awaitLikes = await fetch(`${url}${urlID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitLikes;
};

export const getAllLikes = async () => {
  const allLikes = await fetch(`${url}${urlID}/likes`);
  const dataLikes = allLikes.json();
  return dataLikes;
};

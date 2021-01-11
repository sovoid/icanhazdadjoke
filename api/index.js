const axios = require('axios');
const template = require('./template');

const getRandomJoke = async () => {
  const {data: {joke}} = await axios({
    method: 'get',
    url: 'https://icanhazdadjoke.com/',
    headers: {
      'Accept': 'application/json',
    },
  });

  return joke;
};

const cacheSeconds = 10;

module.exports = async (req, res) => {
  const joke = await getRandomJoke();
  const jokeCard = template(joke);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(jokeCard);
};

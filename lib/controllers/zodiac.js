const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const zodiacDetail = zodiac.find((item) => item.id === id);
    res.json(zodiacDetail);
  })

  .get('/', (req, res) => {
    const list = zodiac.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    res.json(list);
  });

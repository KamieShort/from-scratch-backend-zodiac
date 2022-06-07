const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router().get('/:id', (req, res) => {
  const id = req.params.id;
  const zodiacDetail = zodiac.find((zodiac) => zodiac.id === id);
  res.json(zodiacDetail);
});

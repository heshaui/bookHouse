module.exports = {
  rules: [
    {
      pattern: /\/api\/honorRoll\.php\?type=more\&pageNo=1/,
      respondwith: './honorRoll.json'
    },
    {
      pattern: /\/api\/honorRoll2\.php\?type=more\&pageNo=2/,
      respondwith: './honorRoll2.json'
    },
    {
      pattern: /\/api\/honorRoll3\.php\?type=more\&pageNo=3/,
      respondwith: './honorRoll3.json'
    }
  ]
};

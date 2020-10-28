const bc = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      const author = bc.hashSync('127.00.000.1', bc.genSaltSync(10))
      return knex('links').insert([
        {
          id: 'aa678a8b-23a8-4e30-87fe-f960af0a33ac',
          shortid: 'eWRhpRV',
          destination: 'https://github.com/Lambda-School-Labs/Labs26-Bridgegood-BE/blob/main/data/seeds/000_cleaner.js',
          visits: 0,
          author,
          expired: 0,
          expire_at: new Date(new Date().getTime() + 300 * 60000).getTime().toString(),
        },
        {
          id: '6825eafc-c00b-43fd-9828-2d8ed7b186d8',
          shortid: '23TplPdS',
          destination: 'https://www.npmjs.com/package/shortid',
          visits: 0,
          author,
          expired: 0,
          expire_at: new Date(new Date().getTime() + 300 * 60000).getTime().toString(),
        }
      ]);
    });
};

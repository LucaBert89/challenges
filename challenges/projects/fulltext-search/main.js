const fs = require('fs')
const csv = require('csv-parser')

fs.createReadStream('./data/QUOTE.csv')
  .pipe(csv())
  .on('data', function (row) {
    console.log(row);
  })
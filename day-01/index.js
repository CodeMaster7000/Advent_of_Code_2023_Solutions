const fs = require('fs');
const Part1 = fs.readFileSync('./day-01/input.in', 'utf8')
  .split('\n')
  .map((row) => {
    const firstDigit = row.match(/\d/)[0];
    const lastDigit = row.match(/(\d)[a-z]*$/)[1];
    return parseInt(`${firstDigit}${lastDigit}`);
  })
  .reduce((acc, curr) => acc + curr, 0);
const Part2 = fs.readFileSync('./day-01/input.txt', 'utf8')
  .split('\n')
  .map(row => {
    const numberMap = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    Object.keys(numberMap).forEach(key => {
      if (row.includes(key)) row = row.replaceAll(key, `${key}${numberMap[key]}${key}`);
    });
    const firstDigit = row.match(/\d/)[0];
    const lastDigit = row.match(/(\d)[a-z]*$/)[1];
    return parseInt(`${firstDigit}${lastDigit}`);
  })
  .reduce((acc, curr) => acc + curr, 0);
console.log({Part1, Part2}); // Logs both answers

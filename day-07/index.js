const {log, readLines, split, sum} = require("./common");
let lines = readLines('./input.in', split(/\s+/));
function strengthName(X) {
    const counts = {};
    [...X].forEach(c => counts[c] = (counts[c] || 0) + 1);
    const strength = Object.values(counts).sort((x, y) => y - x);
    const values = [...X].map(c => '23456789TJQKA'.indexOf(c).toString(16));
    return strength + ':' + values;
}
lines.sort(([h1], [h2]) => strengthName(h1).localeCompare(strengthName(h2)));
log('Part 1 solution: ', sum(lines.map(([, b], i) => b * (i + 1))));
function strengthNameJ(X) {
    const counts = {};
    [...X].forEach(c => counts[c] = (counts[c] || 0) + 1);
    const jokers = counts['J'] || 0;
    delete counts['J'];
    const strength = Object.values(counts).sort((x, y) => y - x);
    strength[0] = (strength[0] || 0) + jokers;
    const values = [...X].map(c => 'J23456789TQKA'.indexOf(c).toString(16));
    return strength + ':' + values;
}
lines.sort(([h1], [h2]) => strengthNameJ(h1).localeCompare(strengthNameJ(h2)));
log('Part 2 solution: ', sum(lines.map(([, b], i) => b * (i + 1))));

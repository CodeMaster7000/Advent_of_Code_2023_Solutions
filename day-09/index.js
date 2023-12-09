const data = $0.innerText.split('\n').slice(0,-1);
let history = [];
data.forEach((line,i)=>{
    history.push([line.split(' ')]);
    getNewHistory(history[i], 0);
});
function getNewHistory(his,index) {
    const differences = [];
    for (let i = 1; i < his[index].length; i++) {
      differences.push(his[index][i] - his[index][i - 1]);
    }
    his.push(differences);
    const areAllZeros = differences.every(value => value === 0);
    areAllZeros ? null : getNewHistory(his, index+1);
}
function extrapolate(his, index) {
    const areAllZeros = his[index+1].every(value => value === 0);
    areAllZeros ? his[index+1].push(0) : null;
    const newValue = parseInt(his[index][his[index].length-1]) + his[index+1][his[index+1].length-1];
    his[index].push(newValue);
    index > 0 ? extrapolate(his, index-1) : null;
}
let sum = 0;
history.forEach((h,i)=>{
    extrapolate(h, h.length-2);
    sum += h[0][h[0].length-1];
});
console.log(`Part 1 solution: ${sum}`);
function backExtrapolate(his, index) {
    const areAllZeros = his[index+1].every(value => value === 0);
    areAllZeros ? his[index+1].unshift(0) : null;
    const newValue = parseInt(his[index][0]) - his[index+1][0];
    his[index].unshift(newValue);
    index > 0 ? backExtrapolate(his, index-1) : null;
}
sum = 0;
history.forEach((h,i)=>{
    backExtrapolate(h, h.length-2);
    sum += h[0][0];
});
console.log(`Part 2 solution: ${sum}`);

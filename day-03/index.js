const Part1 = async input => {
    const grid = input.split(/\n/g).map(line => line.split(''));
    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        let currentNumber = '', checkNumber = false, nearSymbol = false;;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x].match(/[0-9]/) && !checkNumber) {
                checkNumber = true;
                currentNumber = '';
                nearSymbol = false;
            }
            if ((x == grid[y].length - 1 || !grid[y][x].match(/[0-9]/)) && checkNumber) {
                if (nearSymbol) sum += parseInt(currentNumber + ((grid[y][x].match(/[0-9]/)) ? grid[y][x] : ''));
                checkNumber = false;
            }
            if (checkNumber) {
                currentNumber += grid[y][x];
                for (let j = -1; j <= 1; j++) {
                    for (let i = -1; i <= 1; i++) {
                        if (i == 0 && j == 0) continue;
                        if (y + j < 0 || y + j >= grid.length || x + i < 0 || x + i >= grid[y].length) continue;
                        if (!grid[y + j][x + i].match(/[0-9.]/)) nearSymbol = true;
                    }
                }
            }
        }
    }
    return sum;
}
const Part2 = async input => {
    const grid = input.split(/\n/g).map(line => line.split(''));
    let GearNumbers = {};
    for (let y = 0; y < grid.length; y++) {
        let currentNumber = '', checkNumber = false, GearLocation = null;
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x].match(/[0-9]/) && !checkNumber) {
                checkNumber = true;
                currentNumber = '';
                GearLocation = null;
            }
            if ((x == grid[y].length - 1 || !grid[y][x].match(/[0-9]/)) && checkNumber) {
                if (GearLocation) GearNumbers[GearLocation].push(parseInt(currentNumber + ((grid[y][x].match(/[0-9]/)) ? grid[y][x] : '')));
                checkNumber = false;
            }
            if (checkNumber) {
                currentNumber += grid[y][x];
                for (let j = -1; j <= 1; j++) {
                    for (let i = -1; i <= 1; i++) {
                        if (i == 0 && j == 0) continue;
                        if (y + j < 0 || y + j >= grid.length || x + i < 0 || x + i >= grid[y].length) continue;
                        const char = grid[y + j][x + i];
                        if (char == '*') {
                            GearLocation = `${x + i},${y + j}`;
                            if (GearNumbers[GearLocation] == null) GearNumbers[GearLocation] = [];
                        }
                    }
                }
            }
        }
    }
    return Object.values(GearNumbers).reduce((sum, array) => {
        if (array.length == 2) sum += array[0] * array[1];
        return sum;
    }, 0);
}
export {Part1, Part2}; // Both parts to the solution

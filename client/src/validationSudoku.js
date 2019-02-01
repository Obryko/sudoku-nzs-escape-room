const SUM_IN_ROW = 45;
const SUM_IN_COL = 45;
const SUM_IN_BOX = 45;
const SUM_IN_GRID = 405;


export const validSumInRows = (grid) => {
    return grid.map(row => row.reduce((acc, val) => acc + val, 0))
        .every(val => val === SUM_IN_ROW);
}

export const validSumInCols = (grid) => {
    return [...Array(9).keys()].map(col =>
            grid.reduce((acc, row) => acc + row[col], 0)
        )
        .every(val => val === SUM_IN_COL)
}

export const validSumInGrid = (grid) => {
    return grid.reduce((accRow, row) =>
        accRow + row.reduce((accCol, val) => accCol + val, 0), 0) === SUM_IN_GRID;
}

export const validSumInBoxs = (grid) => {
    const results = [];
    for (let i = 0; i < 3; i++) {
        for (let t = 0; t < 3; t++) {
            let acc = 0;
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    acc += grid[j + (t * 3)][k + (i * 3)];
                }
            }
            results.push(acc);
        }
    }
    return results.every(val => val === SUM_IN_BOX);
}

export const validNumbersInRows = (grid) => {
    return grid.every(row => row.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, []).length === 9);
}

export const validNumbersInCols = (grid) => {
    return [...Array(9).keys()].map(col =>
            grid.reduce((acc, row) => {
                if (!acc.includes(row[col])) {
                    acc.push(row[col]);
                }
                return acc;
            }, []).length === 9)
        .every(val => val === true);
}

export const validNumbersInBoxs = (grid) => {
    const results = [];
    for (let i = 0; i < 3; i++) {
        for (let t = 0; t < 3; t++) {
            let box = [];
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    box.push(grid[j + (t * 3)][k + (i * 3)]);
                }
            }
            results.push(box.reduce((acc, val) => {
                if (!acc.includes(val)) {
                    acc.push(val);
                }
                return acc;
            }, []).length === 9);
        }
    }
    return results.every(val => val === true);
}

const valid = (grid) => {
    return validNumbersInBoxs(grid) &&
        validNumbersInCols(grid) &&
        validNumbersInRows(grid) &&
        validSumInBoxs(grid) &&
        validSumInGrid(grid) &&
        validSumInRows(grid) &&
        validSumInCols(grid);
}

export default valid;
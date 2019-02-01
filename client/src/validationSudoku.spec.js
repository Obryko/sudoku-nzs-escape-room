import valid, { 
    validSumInRows, 
    validSumInCols, 
    validSumInBoxs,
    validNumbersInRows,
    validNumbersInCols,
    validNumbersInBoxs,
    validSumInGrid
} from './validationSudoku';

describe('Validation sudoku', () => {
    const grid = [
        [9,5,7,6,1,3,2,8,4],
        [4,8,3,2,5,7,1,9,6],
        [6,1,2,8,4,9,5,3,7],
        [1,7,8,3,6,4,9,5,2],
        [5,2,4,9,7,1,3,6,8],
        [3,6,9,5,2,8,7,4,1],
        [8,4,5,7,9,2,6,1,3],
        [2,9,1,4,3,6,8,7,5],
        [7,3,6,1,8,5,4,2,9],
    ];

    test('should be correct sum in all rows', () => {
        const result = validSumInRows(grid);
        expect(result).toBeTruthy();
    });

    test('should be correct sum in all cols', () => {
        const result = validSumInCols(grid);
        expect(result).toBeTruthy();
    });

    test('should be correct sum in all box', () => {
        const result = validSumInBoxs(grid);
        expect(result).toBeTruthy();
    });

    test('should have diffrent number in rows', () => {
        const result = validNumbersInRows(grid);
        expect(result).toBeTruthy();
    });

    test('should have diffrent number in cols', () => {
        const result = validNumbersInCols(grid);
        expect(result).toBeTruthy();
    });

    test('should have diffrent number in boxs', () => {
        const result = validNumbersInBoxs(grid);
        expect(result).toBeTruthy();
    });

    test('should be correct sum in grid', () => {
        const result = validSumInGrid(grid);
        expect(result).toBeTruthy();
    });

    test('should be correct all validator together', () => {
        const result = valid(grid);
        expect(result).toBeTruthy();
    });
})

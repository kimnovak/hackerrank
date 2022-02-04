/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function sumArray(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

function extractHourglassItems(arr, row, rowIndex, columnIndex) {
    return [...row.slice(columnIndex, columnIndex + 3), arr[rowIndex + 1][columnIndex + 1], ...arr[rowIndex + 2].slice(columnIndex, columnIndex + 3)]
}

function hourglassSum(arr) {
    // Write your code here
    return Math.max(...arr.reduce((prev, row, rowIndex) => {
        return rowIndex < arr.length - 2 ? [...prev, ...row.reduce((prevRowSums, currentItem, columnIndex) => {
            return columnIndex < row.length - 2 ? [...prevRowSums, sumArray(extractHourglassItems(arr, row, rowIndex, columnIndex))] : prevRowSums;    
        }, [])] : prev;
    }, []));
}

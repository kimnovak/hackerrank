/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    return a.reduce((prev, current, index) => {
        return current === b[index] ? prev : current > b[index] ? [prev[0] + 1, prev[1]] : [prev[0], prev[1] + 1] 
    }, [0, 0])

}
// Use only map, filter and reduce. No Loops!
// Write a function that:
/**
 * 1. Takes an array with numbers and first squares all the numbers and multiplies all the squares to get one product and returns that product.
 */
function getMultiplesOfSquareFromArray(arr) {
    return arr.map(item => {
        return item ** 2;
    }).reduce((previousValue, currentValue) => {
        return previousValue * currentValue;
    });
}
document.getElementById('ans1').innerHTML = getMultiplesOfSquareFromArray([2,3,5]);

/**
 * 2. Takes an array of strings and keeps strings that have vowels 'a' and 'i' in them and removes all others as a new array.
 */
function filterVowelsArray(arr) {
    return arr.filter(item => {
        return item.includes('a') || item.includes('i');
    });
}
document.getElementById('ans2').innerHTML = JSON.stringify(filterVowelsArray(['Nisha', 'Thapa', 'John', 'Dow']));

/**
 * 3. Takes an array of arrays like this -> [ [3,46,7,8], [4,6,8,10], [6,7,8,8], [24,6]]
 * and returns only the array that has even numbers in it.
 * so return value will be -> [[4,6,8,10], [24,6]]
 */
function filterEvenNumbersArray(arr) {
    return arr.filter(item => {
        return item.every(num => num % 2 === 0);
    });
}
document.getElementById('ans3').innerHTML = JSON.stringify(filterEvenNumbersArray([ [3,46,7,8], [4,6,8,10], [6,7,8,8], [24,6]]));

/**
 * 4. Takes an array of objects with each object containing a key called 'name' and returns an array with those names.
 * Example: Input ->  [ {name: 'john'},{name: 'bob'},{name: 'mary'},{name: 'doe'}]
 * Output -> ['john', 'bob', 'mary', 'doe']
 */
function getValueFromObjectInArray(arr) {
    return arr.map(item => {
        return item.name;
    });
}
document.getElementById('ans4').innerHTML = JSON.stringify(getValueFromObjectInArray([ {name: 'john'},{name: 'bob'},{name: 'mary'},{name: 'doe'}]));

/**
 * 5. Takes an array of numbers and returns true if all the numbers in the list are even , otherwise returns false. Remember no Loops!
 */
function isAllNumbersEven(arr) {
    return arr.every(item => item % 2 === 0);
}
document.getElementById('ans5').innerHTML = isAllNumbersEven([10, 8, 2]);
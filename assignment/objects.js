/** 
 * Q1. Takes two numbers num1 and num2 and create an object that has numbers between num1 and num2 as keys and values will be squares of those.
 * Example: makeObject(2,6) returns { 2: 4, 3: 9, 4: 16, 5: 25, 6:36 }
 * 
 * This function makeObject() will make an object with key number and value square of number
 * @param num1
 * @param num2
 * 
 * @returns stringify object with key number and value square of number
 *  
 * @result assign the result to id ans1 in DOM
 */
function makeObject(num1, num2) {
    let object = {}
    for (let i = num1; i <= num2 ; i++) {
        object[i] = i**2   
    }
    return JSON.stringify(object);
}
document.getElementById('ans1').innerHTML = makeObject(2, 6);

/**
 * Q2. Takes an object as first argument and a key as second argument. It will return the new object with that key-value pair removed.
 * 
 * This function removeKeyAndGetNewObject() will remove a key from object and returns a new object
 * 
 * @param myObj
 * @param str
 * 
 * @returns stringify new object after removing a key from the object
 * 
 * @result assign the result to id ans2 in DOM
 */
const obj = {
    name: 'john',
    age: 29,
    gender: 'male'
}
function removeKeyAndGetNewObject(myObj, str) {
    delete myObj[str];
    return JSON.stringify(myObj);
}
document.getElementById('ans2').innerHTML = removeKeyAndGetNewObject(obj, 'age');

/**
 * Q3. Takes a list of numbers and stores unique numbers from it as keys and their count inside the list as values.
 * Example:- [2,3,4,3,2,2,3,3,3] will return { 2: 3, 3: 5, 4: 1 }
 * 
 * This function uniqueNumbers() will create a new object with unique numbers and their counts of repetitiveness
 * 
 * Array should be a list of numbers
 * Run a for loop for each item of an array and check if the number is already exists as a key
 * if number already exists as a key, then add 1 on a count
 * if number doesn't already exists as a key, then add key and the count as 1
 * 
 * @returns stringify object with key as unique number and value as count
 * 
 * @result assign the result to id ans3 in DOM
 */
const newObj = {}
function uniqueNumbers(list) {
    list.forEach(num => {
        if(newObj.hasOwnProperty(num)) {
            newObj[num] += 1
        } else {
            newObj[num] = 1
        }
    })
    return JSON.stringify(newObj);
}
document.getElementById('ans3').innerHTML = uniqueNumbers([2,3,4,3,2,2,3,3,3]);
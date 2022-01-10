/** 
 * Q1. Takes a string and returns the reversed string.
 */
function reverseStrings(str){
    const newArray = str.split('');
    const reverseArray = newArray.reverse();
    const reverseStr = reverseArray.join('');
    return reverseStr;
}
document.getElementById("ans1").innerHTML = reverseStrings('john')

/** 
 * Q2. Takes an array of numbers and returns the sum of all the numbers in the array.
 * [2, 3, 1] = 6
 */ 

function addNumbers(arr){
   let result = 0;
   for(let i = 0; i < arr.length; i++){
       result = arr[i] + result;
   }
    return result;
}
document.getElementById("ans2").innerHTML = addNumbers([2,3,1,6])

/** 
 * Q3. Takes a string and returns the string with last character removed.
 * Example:- for 'hello' as input return 'hell
 */
function removeLastCharacter(str){
    let newArray = str.split('');
    newArray.pop();
    const newStr = newArray.join('');
    return newStr;
}
document.getElementById("ans3").innerHTML = removeLastCharacter('hello')

/**
 * Q4. Takes a number and returns the sum of all numbers from that 1 to that number.
 * Example:- for 4 as input return 1 + 2 + 3 + 4.
 * Use loops
 */
function sumInLoops(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i;
    }
    return result;
}
document.getElementById("ans4").innerHTML = sumInLoops(4)

/**
 * Q5. Takes an array of numbers and find the second largest number in it and returns that number.
 */
function findSecondLargestNumber(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    return sortedArr[sortedArr.length - 2];
}
document.getElementById("ans5").innerHTML = findSecondLargestNumber([1,4,1000,40,205])

/**
 * Q6. Takes two numbers:- sizeOfArray and numberOfZeroes.
    Using loop to create array of size given with each array having number of zeroes provided.
    Example:- sizeOfArray is 3 and numberOfZeroes is 4
    Return Value is:-   [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
 */
function createArray(sizeOfArray, numberOfZeroes){
    let outerArray = [];
    for(let i = 0; i < sizeOfArray; i++) {
        let innerArray = [];
        for(let j = 0; j < numberOfZeroes; j++) {
            innerArray.push(0);
        };
        outerArray.push(innerArray);
    };
    return outerArray;
}
const sizeOfArray = 3
const numberOfZeroes = 4
     
document.getElementById('ans6').innerHTML = JSON.stringify(createArray(sizeOfArray, numberOfZeroes))

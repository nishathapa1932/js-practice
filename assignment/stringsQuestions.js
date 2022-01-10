/** 
 * Q1. Takes a string and returns the reversed string.
 */
 function reverseStrings(str){
    const newArray = str.split('');
    const reverseArray = newArray.reverse();
    const reverseStr = reverseArray.join('');
    return reverseStr;
}
document.getElementById("ans1").innerHTML = reverseStrings('Nisha')

/** 
 * Takes a number but as a string and returns the sum of all digits.
 * Example: '4356' returns 18 because 4 + 3 + 5 + 6 is 18
 */ 
 function returnDigitsSum(str){
    let result = 0;
    for(let i = 0; i < str.length; i++){
        result = str[i] + result;
    }
     return result;
 }
 document.getElementById("ans2").innerHTML = returnDigitsSum([4,3,5,6])


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
document.getElementById("ans5").innerHTML = findSecondLargestNumber([300,3,6,60,5000])

/**
 * Q6. Write a function that find the number of vowels in the string and returns the count. For example: 'john doe' will return 3. 
 * two 'o's and 1 'e'.
 * (Hint: a, e , i , o , u are vowels)
 */
 function countVowels(str) {
    let count = 0;
    const newArray = str.split('');
    newArray.forEach(item => {
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count++;
        }
    });
    return count;
}
document.getElementById("ans6").innerHTML = countVowels('john doe')

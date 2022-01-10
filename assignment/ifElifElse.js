/**
 * Q1. Have two integer variables and print greatest among them.
 * 
 * if num1 is greater than num2, assign num1 to ans1Result
 * if num2 to greater than num1, assing num2 to ans1Result
 * 
 * @result assign the result to id ans1 in DOM
 */
var num1 = 10;
var num2 = 30;
var ans1Result;
if (num1 > num2) {
    ans1Result = num1;
} else {
    ans1Result = num2;
}
document.getElementById('ans1').innerHTML = ans1Result;

/**
 * Q2. Given a score variable as an integer number write if, else, else if conditions to print the grade as follows
 *     
 * if testscore is greater than equal to 80, assign 'A' to ans2Result
 * if testscore is greater than equal to 45 and less than 80, assign 'D' to ans2Result
 * if testscore is greater than equal to 25 and less than 45, assign 'E' to ans2Result
 * if testscore is less than 25, assign 'F' to ans2Result
 * 
 * @result assign the result to id ans2 in DOM
 */ 
 
var testscore = 80;
var ans2Result;

if (testscore >= 80) {
    ans2Result = 'A';
} else if (testscore >= 45) {
    ans2Result = 'D';
} else if (testscore >= 25) {
    ans2Result = 'E';
} else {
    ans2Result = 'F';
}
document.getElementById('ans2').innerHTML = ans2Result;


/**
 * Q3. Make a variable age with some number.
 *     If the person is below 21, print "Illegal to drink"
 *     If the person is 21 or above, print "Legal Age"
 *     If the person is above 90, print "Too old to drink"
 * 
 * if age is less than 21, assign 'illegal to drink' to ans3Result
 * if age is greater than 90, assign 'too old to drink' to ans3Result
 * if age is greater than equal to 21 and less than equal to 90, assign 'legal age' to ans2Result
 * 
 * @result assign the result to id ans3 in DOM
 */
 
var age = 10;
var ans3Result;

if (age < 21) {                                 
    ans3Result = 'Illegal to drink';
} else if (age > 90) {
    ans3Result = 'Too old to drink';
} else {
    ans3Result = 'Legal Age';
}
document.getElementById('ans3').innerHTML = ans3Result;

/**
 * Q4. Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 * this will store value in ans4result the values are fizzBuzz if the number is divisible by 3 or 5
 * 
 * Run a for loop from 1 to 100
 * if a number is a multiple of 3 and 5, assign 'FizzBuzz' to ans4Result
 * if a number is multiple of 3 but not 5, assing 'Fizz' to ans4Result
 * if a number is multiple of 5 but not 3, assing 'Buzz' to ans4Result
 * if a number is neither mutiple of 3 nor 5, assign a number to ans4result
 * 
 * on every loop, add ans4Result to myArray
 * @result assign myArray to id ans4 in DOM
 */
var ans4Result;
const myArray = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        ans4Result = "FizzBuzz";
    } else if (i % 3 === 0) {
        ans4Result = "Fizz"
    } else if (i % 5 === 0) {
        ans4Result = "Buzz"
    } else {
        ans4Result = i
    }
    myArray.push(ans4Result);
}
document.getElementById('ans4').innerHTML = myArray.join(',\n');
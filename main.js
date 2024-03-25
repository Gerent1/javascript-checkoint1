// String Manipulation Functions:
// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

// Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters('hello'));

// Capitalize Words
function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
}

console.log(capitalizeWords('hello world'));

// Array Functions:

// Find Maximum and Minimum
function findMaxAndMin(arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

console.log(findMaxAndMin([1, 2, 3, 4, 5]));
// Sum of Array
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray, [1, 2, 3, 4, 5]);
// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0));
// Mathematical Functions:

// Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

// Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}   

console.log(isPrime(5));

// Fibonacci Sequence
function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacciSequence(10));
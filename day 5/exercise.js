// pertanyaan 1

let numbers = [12, 5, 23, 18, 4, 45, 32]

let nilaiTerendah = Math.min(...numbers);
let nilaiTertinggi = Math.max(...numbers)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = (sum / numbers.length).toFixed(4)


console.log("1. Nilai terendah adalah", nilaiTerendah, ", nilai tertinggi adalah", nilaiTertinggi, ", dan rata-rata adalah", average)


// pertanyaan 2
const arrayToString = (...buah) => {
    buah[buah.length - 1] = ` and ${buah[buah.length - 1]}`;
    console.log(buah.toString())
}
arrayToString("2. apple", "banana", "cherry", "date")

// pertanyaan 3

// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

const splitString = (string = "") => {
    console.log("3.", string.split(" "))
}
splitString("Hello World")

// pertanyaan 4


function addArray(array1, array2) {
    let result = [];
    for (let i = 0; i<array1.length; i++) {
        result.push(array1[i] + array2[i])
    }
    return result
}

let array1 = [1,2,3]
let array2 = [3,2,1]
let result = addArray(array1, array2)
console.log("4.", result)

const sumArr = (arr1 = [], arr2 = []) => 
    arr1.map((val,i) => val + arr2[i])

console.log("4.", sumArr([1, 2, 3], [3, 2, 1]))

// pertanyaan 5
const addNewElement = (arr = [], element) => {
    if (arr.indexOf(element) == -1) arr.push(element);
    return arr;
};
console.log("5.", addNewElement([1, 2, 3], 10))

//pertanyaan 6
function filterEvenNumbers(arr) {
    return arr.filter(number => number%2 === 0);
    }
let number = [1,2,3,4,5,6]
let evenNumber = filterEvenNumbers(number)
console.log("6.", evenNumber)

// pertanyaan 6
const removeOdd = (...numbers) => 
console.log("6.", numbers.filter((val) => val%2 == 0))

removeOdd(1, 2, 3, 4, 5, 6, 7)

// pertanyaan 7
const insertArr = (maxSize, ...numbers) => {
    numbers.length = maxSize;
    return numbers
}
console.log("7.", insertArr(5, 5, 10, 24, 3, 6, 7, 8))

// pertanyaan 8

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let totalArray= combineArrays(arr1, arr2)
console.log("8.", totalArray)

// pertanyaan 8
const combineArr = (arr1 = [], arr2 = []) => arr1.concat(arr2)
console.log("8.", combineArr([1,2,3], [4,5,6]))

// pertanyaan 9
const findDuplicate = (...arr) => {
    const duplicate = arr
    .sort()
    .filter((val, index) =>
    val == arr[index + 1] ? arr.indexOf(val) === index : null)
    return duplicate;
};

console.log("9.", findDuplicate(1, 3, 5, 2, 3, 2, 2, 2, 3, 3, 4, 5, 5));

// pertanyaan 10
const diff = (arr1 = [], arr2 = []) =>
arr1.filter((val) => arr2.indexOf(val) == -1);

console.log("10.", diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), "diff");

// pertanyaan 11
const primitive = (...arr) => arr.filter((val) => typeof val != "object");
console.log("11.", primitive(1, [], undefined, {}, "string", {}, []));

// pertanyaan 12
const secondSmallest = (...arr) =>
arr.sort((a,b) => a-b)[1]
console.log("12.", secondSmallest(5, 3, 1, 6, 2, 6), "2nd smallest");

// pertanyaan 13
const summ = (...mixed) =>
mixed.reduce((sum, current) => (typeof current === "number" ? sum + current : sum), 0);

console.log("13.", summ("3", 1, "string", null, false, undefined, 2));


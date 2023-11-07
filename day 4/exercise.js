// pertanyaan 1
let triagle = (height) => {
    let number = 0;
    for (let i = 1; i <= height; i++) {
        let result = "";
        for (let j=0; j<i; j++) {
        number++;
        result += number > 9 ? `${ number}` : ` 0${number}`;
    }
    console.log(result);
}}
triagle(4)

// pertanyaan 2
function fizzbuzz(n) {
    for (let i = 1; i <=n; i++) {
        if (i%3 === 0) {
            console.log("Fizz")}
        else if(i%5 === 0) {
            console.log("Buzz")}
        else if(i%3 === 0 && n%5 ===0) {
            console.log("FizzBuzz")}
        else {
            console.log(i);}
        }}

fizzbuzz(10)

// pertanyaan 3
let weight = 50
let height = 1.53
BMI = weight / (height * height)

if (BMI < 18.5) {
    console.log("less weight")}
else if (BMI>18.5 && BMI< 24.9) {
console.log("ideal")}
else if (BMI>25 && BMI< 29.9) {
    console.log("overweight")}
else if (BMI>30 && BMI< 39.9) {
        console.log("very overweight")}
else if (BMI>39.9) {
    console.log("obesity")
}

// pertanyaan 4

const removeOdd = (...numbers) => {
    console.log(numbers.filter((number) => (number % 2 == 0)))
}
removeOdd(1,2,3,4,5)


// pertanyaan 5
const splitString = (string = "") => {
    console.log(string.split(" "))
}
//split merubah string menjadi array
splitString("Hello World");
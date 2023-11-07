//pertanyaan 1 //

let celcius = 60
let fahrenheit = (celcius * 9 / 5) + 32
console.log(`1. Suhu ${celcius}°C sama dengan ${fahrenheit}°F`) 


// pertanyaan 2 //
let angka = 24
if (angka % 2 == 1) {
    console.log(`2. Angka merupakan bilangan ganjil`);
}
else {
    console.log (`2. Angka merupakan bilangan genap`)
}

// pertanyaan 3 // 
let bilangan = 7
let pembagi = 0
for (let i = 1; i <= bilangan; i++) {
if(bilangan%i == 0) {pembagi++}
}
if(pembagi == 2) {
    console.log(`3. Bilangan ${bilangan} merupakan bilangan prima`)
}
else {
    console.log(`3. Bilangan ${bilangan} bukan bilangan prima`)}

// pertanyaan 4 //
const angka1 = 5;
let result = 0;
let message = `4. Penjumlahan dari 1 sampai ${angka1} atau `
for (let i = 1; i <= angka1; i++) {
    if (i == angka1) message += i;
    else message += `${i} + ` ;
    result += i;
}
{console.log(message, "adalah", result)}

// pertanyaan 5 //
const bilangan1 = 5;
let result1 = 1;
let message1 = `5. Faktorial dari ${bilangan1} atau `
for (let i = 1; i <= bilangan1; i++) {
    if (i == bilangan1) message1 += i;
    else message1 += `${i} x ` ;
    result1 *= i;
}
{console.log(message1, "adalah", result1)}

// pertanyaan 6 //
let fibonacci = 15 

let a = 0
let b = 1

for (let i = 2; i <= fibonacci; i++) {
    nextFib = a + b; 
    a = b;
    b = nextFib;
}

console.log(`6. Angka deret Fibonacci ke-${fibonacci} adalah ${nextFib}`);
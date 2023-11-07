// pertanyaan 1 //
let angka = 9;
let batas = 10;

  for (let i = 1; i <= batas; i++) {
    const hasil = angka * i;
    console.log(`${angka} x ${i} = ${hasil}`);
  }
// pertanyaan 2 //
let string = "madam";
let reverseString = ""
for (let i = string.length - 1; i>=0; i--) {
    reverseString += string.charAt(i);
}
console.log(string, string === rever)

  // pertanyaan 3 //
let CM = 100000;
let M = CM / 100000;
console.log(`3. ${CM} cm sama dengan ${M} m`)

// pertanyaan 4 //
const number = 1000000; 
const formattedNumber = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
}).format(number);

console.log(`4. ${formattedNumber}`); 

// pertanyaan 5 //
let inputString = "Hello world";
let searchString = "ell";

let resultString = inputString.replace(searchString, '');

console.log(`5. ${resultString}`); 

// pertanyaan 9 //
num1 = 42
num2 = 97
if(num1>num2) {
    console.log(`9. Lebih besar angka ${num1}` )
}
else {console.log(`9. Lebih besar angka ${num2}` )}

// pertanyaan 10 //
 num1 = 42;
 num2 = 27;
 num3 = 18;

if (num1 > num2)
temp = num1;
num1= num2;
num2 = temp;

// 27 42 18 

if (num1 > num3)
temp = num1;
num1 = num3;
num3 = temp;

// 18 42 27

if (num2 > num3)
temp = num2;
num2 = num3;
num3 = temp;

console.log(`10. Urutan menjadi ${num1}, ${num2}, ${num3}`);
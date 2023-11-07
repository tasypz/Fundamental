
// square
function square(number) {
    //task dari function square
    return number * number;
  }
  

console.log("square ajah", square(4))
//atau
let hasil = square(4);
console.log(hasil, "pake let");

//square2 --> hasil undefine, karna gada return
function square2(number) {
    number * number;
  }


  console.log("square2 ajah", square2(4))

  //square3 --> gapake return, lgsg console.log
function square3(number) {
    console.log(number * number, "print dari square3"); 
  }

  square3(3)

  //bikin fungsi namanya print seakan-akan console.log
  function print(value) {
    console.log(value); //8
  }
  
function penjumlahan(angka1, angka2) {
    print(angka1 + angka2);
  }
penjumlahan(5, 3); // bisa lgsg masukkin angka

let number1 = 10,
  number2 = 11;

penjumlahan(number1, number2); // bisa bikin variabel dulu


function pengurangan(angka1, angka2) {
    print(angka1 - angka2);
}
pengurangan(10, 3);

let angka1 = 8,
  angka2 = 5;
pengurangan(angka2, angka1);

function perkalian(angka1, angka2) {
    print(angka1 * angka2);
}
perkalian (4, 5);

const pembagian = function (angka1, angka2) {
    print(angka1 / angka2);
}
pembagian (3, 3)

// jadi cara nulis function sejauh ini yaitu bisa 
// function perkalian(angka1, angka2) {
//     print(angka1 * angka2);
// }
// perkalian (4, 5);
//  atau
// const pembagian = function (angka1, angka2) {
//     print(angka1 / angka2);
// }
// pembagian (3, 3)

const penjumlahan3 = (angka1, angka2, angka3) => angka1 + angka2 + angka3
console.log("arrow", penjumlahan3(1, 2, 3))

const penjumlahan3_2 = (angka1, angka2, angka3) => {
    return angka1 + angka2 + angka3
}
console.log("cb", penjumlahan3_2(1, 2, 3))

const greetings = () => {
    const hello = "Hello";
    return hello;
}
console.log(greetings()); //kl mau console.log si hello gabisa, krn dia di dalam greetings

const restFunction = (param1, param2, ...restparam) => {
    console.log(param1, "param1")
    console.log(param2, "param2")
    console.log(param1, restparam, "restParam")
   };
  
  restFunction(1, 2, 3, 4); //param1 sm 2 itu angka ke1 sm 2, kl restparam tidak terbatas dan masuk ke []

  const testFunction = (param1, param2, param3) => {
    console.log (param1, "param1")
    console.log (param2, "param2")
    console.log (param3, "param3")
  }
  testFunction (1, 2, 3, 4, 5);

  const restFunction2 = (...restParam) => {
    console.log(restParam, "restParam");
  };

  restFunction2(1, 2, 3, 4, 5)

  const restPenjumlahan = (...numbers) => {
    let result = 0;
    for (let number of numbers) result += number;
    return result;
  }
  console.log(restPenjumlahan(1, 2, 3, 4, 5, 6, 7, 1, 2, 32, 32, 32, 323, 232, 323)
  );

  const getMsg = (name) => {
    const say = () => "hello, " + name;
    const welcomeMsg = () => " welcome to Purwadhika "
    const hopeMsg = () => "hope " + name + " will like it here"
    return say() + welcomeMsg() + hopeMsg();
  };
  console.log(getMsg("aryo"))

  const greetingsClosure = (name) => {
    const hello = "hello ";
    return () => hello + name;
  }
  const greetDavid = greetingsClosure("david");
  console.log(greetDavid());
  // atau
  console.log(greetingsClosure("naruto")())
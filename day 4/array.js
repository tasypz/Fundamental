let arr1 = ['A', 'B', 'C', 'D', 'E'] // jd ada 2 jenis penulisan
let arr2 = new Array('A', 'B', 'C', 'D', 'E') // jd ada 2 jenis penulisan

console.log(arr1);
console.log(arr2);

const numbers = [1, 2, 3, 4, 5]; // array of number
const books = ['buku ipa', 'buku ips', 'komik naruto', 'komik onepiece']


console.log(books);

const student1 = {
    name : "udin",
    email : "udin@gmail.com",
    age : 17
};

const student2 = {
    name : "ujang",
    email : "ujang@gmail.com",
    age : 18
};

const students = [student1, student2];
console.log(students);

// built in method array
//1. push -> menambah di angka terakhir (menambahkan angka 6 di array(didalam push namanya parameter))

console.log(numbers);
numbers.push(6);
console.log(numbers);

// maka push untuk menambahkan value di array di posisi index terakhir

//2. toString
console.log(numbers.toString().replace(/,/g, "")); //ngereplace smua koma pake /(nama/,g(global))

// numbers.push("7"); // tidak disarankan untuk mencampurkan tipe data lain dalam array
console.log(numbers);

//3. join -> mengubah array mnjadi string dan mengganti setiap koma jadi value yg ada di parameter join

console.log(numbers.join(""))

//4. pop -> menghapus last index dari array
numbers.pop()
console.log(numbers);

//5. shift -> menghapus element pertama array
numbers.shift()
console.log(numbers);

//6. unshift -> menambahkan ke paling depan
numbers.unshift(5)
console.log(numbers);

//7. splice -> menghapus index dalam array dgn parameter pertama jadi lokasi index, dan yg kedua total index, dan yg ketiga mengganti angka yg dihapus
// jd combo, menghapus dan menambah
// numbers.splice(0, 1)
// numbers.splice(0, numbers.length) --> hapus smua
console.log(numbers);

numbers.splice(0, 2, 8)
console.log(numbers);

console.log(numbers.length); //total index

//properti --> menyimpan value dalam data tertentu
//method/function --> yg melakukan pengolahan data, menghasulkan data ttntu

//8. concat --> menggabungkan 2 array disimpan dalam variabel
const numbers2 = [11, 12, 13, 14]
// console.log(numbers.concat(numbers2));
const gabunganNumbers = numbers.concat(numbers2);
console.log(gabunganNumbers)

// mencari lokasi index dari value dalam array
gabunganNumbers.push(4);
console.log ("angka 4 berlokasi di index ke", gabunganNumbers.indexOf(4)); //angka 4 lokasi di index ke-2 tp hanya ambil index sekali aja, ga ngeloop jd lgsg dia stop

// sort --> mengurutkan berdasarkan alpabet
const fruits = ["apel", "mangga", "durian", "rambutan", "anggur"]
console.log(fruits.sort())
console.log(gabunganNumbers.sort((a, b) => a - b)) //mengurutkan array of numbers

// membalikkan urutan
console.log(fruits.reverse())
console.log(gabunganNumbers.sort((a, b) => b - a))

// if true, maka switch
// [3,  4,  4,  5, 8, 11, 12, 13, 14]
// 4-3? true maka switch -> true itu bukan 0 atau -
// [4, 3, 4, 5, 8, 11, 12, 13, 14]
// [4, 4, 5, 8, 11, 12, 13, 14, 3]
// [4, 5, 8, 11, 12, 13, 14, 3, 4] // muterin terus


console.log(gabunganNumbers.sort((a, b) => b - a))
for (let number of gabunganNumbers) console.log(number)

for (let i = 0; i < gabunganNumbers.length; i++)
console.log(gabunganNumbers[i], "ini for biasa")

gabunganNumbers.map((value, index) => // bisa looping tanpa mikirin index kebrp, juga otomatis parameter 1 adalah value, 2 adalah index
console.log(value, "merupakan index ke", index))

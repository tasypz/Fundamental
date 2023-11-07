//* pertanyaan 1 *//

let panjang = 5,
lebar = 3;
let luas = panjang * lebar;

console.log(`1. apabila persegi panjang dengan panjang ${panjang} dan lebar ${lebar} maka menghasilkan luas sebesar ${luas}`);

//* pertanyaan 2 *//

let keliling = 2*(panjang+lebar);

console.log(`2. apabila persegi panjang dengan panjang ${panjang} dan lebar ${lebar} maka menghasilkan keliling sebesar ${keliling}`);

//* pertanyaan 3 *//
let jarijari = 5;
let diameter = 2 * jarijari;
let kelilingLingkaran = (Math.PI * 2 * jarijari).toFixed(4);
let luasLingkaran = (Math.PI * Math.pow(jarijari,2)).toFixed(3);

console.log(`3. lingkaran dengan jari-jari ${jarijari} memiliki diameter ${diameter}, keliling ${kelilingLingkaran}
dan luas ${luasLingkaran}`);

//* pertanyaan 4 *//
let a = 80, b = 65;
let c = 180 - a - b;
console.log(`4. bila sudut a sebesar ${a} dan sudut b sebesar ${b}, maka sudut c sebesar ${c}`)

//* pertanyaan 5 *//

let date1 = new Date("01/20/2022");
let date2 = new Date("01/22/2022");

let perbedaanWaktu = date2.getTime() - date1.getTime();
let perbedaanHari = perbedaanWaktu / (1000 * 3600 * 24);

console.log(`5. Jumlah hari antara tanggal ${date1} dan ${date2} adalah ${perbedaanHari} hari`);

//* pertanyaan 6 *//

let jumlahHari = 400;
let tahun = Math.floor (jumlahHari / 365);
let bulan = Math.floor (jumlahHari % 365 / 30);
let hari = Math.floor (jumlahHari % 365 % 30);

console.log(`6. ${jumlahHari} hari sama dengan ${tahun} tahun, ${bulan} bulan, dan ${hari} hari`);

const bmw = {
    brand: "bmw",
    model: "m135i",
    price: 800000000,
};

const toyota = {
    brand: "toyota",
    model: "innova",
    price: 500000000,
}

class Car {
    type = "mobil";
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const honda = new Car("honda", "jazz", 300000000);
const ferrari = new Car("ferrari", "model ferrari", 3000000000);

console.log(bmw, toyota);
console.log(honda);
console.log(ferrari);

const user = {
    name : "David",
    greet() {
        console.log("hello");
    },
};

console.log(user)
console.log(user.name)
user.greet()

let person = {
    name : "frengky",
    age : 26,
    address : {
        street : "jalan satu besar",
        postalCode: 15311
    }
};

person.hobby = "basket"
person.age = 20
delete person.hobby

console.log(person)
console.log(person.name)
console.log(person["name"]) // cara lain
console.log(person.address)
console.log(Object.keys(person)) // return array isi array adl nama2 key di object
console.log(Object.entries(person)) // return nested array, kiri = key. kanan = value

for (let key in person) { //key diaccess dalam bentuk string
    console.log(person[key])
}

const anime = {
    firstName : "naruto",
    lastName : "uzumaki",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value = "") {
        const splittedValues = value.split(" ") // string akan diubah jd array, jd dipisahkan lewat spasi
        this.firstName = splittedValues[0];
        this.lastName = splittedValues[1]
    }
}

console.log(anime)
console.log(anime.fullName) // dianggap properti bukan function jd gada ()
anime.fullName = "sasuke uchiha"
console.log(anime.fullName)


// destructure --> unpack values

const computer = {
    vga : "3000",
    processor: "i7 13700k",
};

const { vga, processor } = computer;
console.log(vga)
console.log(processor)

let data1 = [1, 2, 3]
let data2 = [4, 5, 6]
let data3 = data1.concat(data2);
let data4 = [...data1, ...data2] // dikeluarin dulu baru digabung
let data5 = [data1, data2] // langsung digabung jd di bungkus yg berbeda
console.log(data3)
console.log(data4)
console.log(data5)

const person2 = {
    firstName : "udin",
    lastName : "ujang",
    greet() {
        //let firstName = "lulu"; // ${firstName} gausa pake this
        console.log(`Hello nama lengkap saya ${this.firstName} ${this.lastName}`)
    }
}
person2.greet()


//exercise 1

class Student {
    constructor(name, email, age, score) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.score = score;
    }
}
const students = [
    new Student("naruto", "n@mail.com", 17, 60),
    new Student("sasuke", "s@mail.com", 18, 90),
    new Student("sakura", "sa@mail.com", 17, 100) 
]

// const score = (students = []) => {
//     students.sort((a,b) => b.score - a.score);
//     const highest = students[0];
//     const lowest = students[students.length - 1]
//     const avg = 
//     students.reduce((sum, current) => sum + current.score,0) / students.length;
//     return{highest, lowest, avg}
// };

// console.log(score(students)) // tapi age nya harus bikin 2x

// atau

console.log(students)

const hla = (students = [], key = "") => {
    students.sort((a,b) => b[key] - a[key])
    const highest = students[0][key];
    const lowest = students[students.length - 1][key]
    const avg = 
    students.reduce((sum, current) => sum + current.score,0) / students.length;
    return{highest, lowest, avg}
};
console.log(hla(students, "age"))

// exercise 2

class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }
}
class Transaction {
#total = 0; 
#products = [];

addToCart(product, qty) {
    if (product instanceof Product) {
        product.qty = qty;
        this.#products.push(product);
    } else console.log("invalid product");
}
showTotal() {
    this.#total = this.#products.reduce(
     (sum, current) => sum + current?.price * current?.qty,0    
    );
    return this.#total;
}
checkout(pay = 0) {
    this.showTotal();
    if (this.#total > pay) return console.log("uang anda kurang");
    this.#products = [];
    this.#total = 0
    return console.log("terima kasih sudah berbelanja")
}
}
const transaction = new Transaction()
transaction.addToCart(new Product("kemeja", 300000),2)
transaction.addToCart(new Product("celana", 400000),1)
console.log(transaction.showTotal())
transaction.checkout(1200000);
console.log(transaction.showTotal())

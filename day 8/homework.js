//pertanyaan 1
let number = 5;
for (let i = 0; i < number; i++) {
    let star = ""
    for (let j = 0; j <= i; j++) {
        star += "*";
    }
    console.log(star)
}

console.log()
for (let i = 0; i < number; i++) {
    let star = ""
    for (let j = 0; j < number; j++) {
        if (j < i) star += " ";
        else {
        star += "*";}
    }
    console.log(star)
}

console.log()
for (let i = 0; i < number; i++) {
    let star = ""
    for (let j = 0; j <= number; j++) {
        if (j < number - i) star += " ";
        else {
        star += "*";}
    }
    console.log(star)
}
console.log()
for (let i = 0; i < number; i++) {
    let star = ""
    for (let j = 0; j < number - i; j++) {
        star += "*";
    }
    console.log(star)
}
console.log()
for (let i = 0; i < number; i++) {
    let star = ""
    for (let j = 0; j <= number; j++) {
        if (j < number - i) star += " ";
        else {
        star += "* ";}
    }
    console.log(star)
}

// pertanyaan 2 dibantu chatGPT
class GoFoodCart {
    constructor(restaurant, deliveryCostPerKm) {
        this.restaurant = restaurant;
        this.deliveryCostPerKm = deliveryCostPerKm;
        this.cart = [];
    }

    addFood(food) {
        // Cek apakah makanan sudah ada di cart
        const existingFood = this.cart.find(item => item.food.name === food.name);
        if (existingFood) {
            existingFood.food.qty += food.qty;
        } else {
            this.cart.push({ food });
        }
    }

    deleteFood(foodName) {
        const index = this.cart.findIndex(item => item.food.name === foodName);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }

    editFoodQty(foodName, newQty) {
        const item = this.cart.find(item => item.food.name === foodName);
        if (item) {
            item.food.qty = newQty;
        }
    }

    calculateTotalCost() {
        const foodTotal = this.cart.reduce((total, item) => total + (item.food.price * item.food.qty), 0);
        const deliveryCost = this.restaurant.jarak * this.deliveryCostPerKm;
        const totalCost = foodTotal + deliveryCost;
        return totalCost;
    }
}

// Membuat restoran dan cart
const restaurant = { name: "kwetiaw 99", jarak: 5 };
const deliveryCostPerKm = 2000;
const cart = new GoFoodCart(restaurant, deliveryCostPerKm);

// Menambahkan makanan ke cart
const food1 = { name: "capcay", price: 50000, qty: 2 };
cart.addFood(food1);

// Mengedit kuantitas makanan
cart.editFoodQty("capcay", 3);

// Menghapus makanan dari cart
cart.deleteFood("capcay");

// Menambahkan makanan lagi
const food2 = { name: "mie goreng", price: 40000, qty: 1 };
cart.addFood(food2);

// Menghitung total biaya
const totalCost = cart.calculateTotalCost();
console.log("Total biaya:", totalCost);
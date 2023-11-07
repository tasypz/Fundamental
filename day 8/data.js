class Stack {
    #maxSize;
    #container = [];
    constructor(maxSize = 10) {
        this.#maxSize = maxSize;
    }
push(element) {
    if(this.#isFull()) return console.log("stack overflow");
    this.#container.push(element);
    }
pop() {
    if (this.#isEmpty) return console.log("stack underflow");
    this.#container.pop();
}
}
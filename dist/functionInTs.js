"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Parameters With Types
function getPizza(name, size) {
    return console.log(`You will get ${name} pizza ,which size will be ${size} inches`);
}
getPizza("italian", 12);
//Return Function Type
function getMorePizza() {
    return "get more pizza";
}
console.log(getMorePizza());
//Optional Return Type Function
function getExtraCheese(qty) {
    return qty;
}
console.log(getExtraCheese(true));
//void which doesnt return anything 
function getChilli() {
    console.log("void chilli");
}
//function with default return value
function defaultItems(type = "cold-coffee") {
    return type;
}
console.log(defaultItems());
//# sourceMappingURL=functionInTs.js.map
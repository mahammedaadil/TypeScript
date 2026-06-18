"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type assertion
let books = 42;
let bookLength = books.length;
let bookString = '{"name":"TypeScript"}';
let bookObj = JSON.parse(bookString);
console.log(bookObj.name);
let createElement = document.createElement("h1");
createElement.innerText = "hello world";
let getElement = document.getElementById('username');
console.log(getElement);
//# sourceMappingURL=moreTypes.js.map
//type assertion
let books:any=42
let bookLength:number =(books as string).length

type Book={
    name:string;
}
let bookString='{"name":"TypeScript"}'
let bookObj=JSON.parse(bookString) as Book

console.log(bookObj.name);

let createElement=document.createElement("h1") as HTMLHeadingElement
createElement.innerText="hello world"
let getElement=document.getElementById('username') as HTMLInputElement
console.log(getElement);


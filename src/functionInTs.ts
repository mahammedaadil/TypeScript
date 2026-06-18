//Parameters With Types
function getPizza(name:string,size:number){

    return console.log(`You will get ${name} pizza ,which size will be ${size} inches`);
    
}
getPizza("italian",12)

//Return Function Type
function getMorePizza():string{
    return "get more pizza"
    
}
console.log(getMorePizza());


//Optional Return Type Function
function getExtraCheese(qty?:boolean){

    return qty
}

console.log(getExtraCheese(true));


//void which doesnt return anything 
function getChilli():void{
    console.log("void chilli");
}


//function with default return value
function defaultItems(type:string="cold-coffee"){
return type
}

console.log(defaultItems());


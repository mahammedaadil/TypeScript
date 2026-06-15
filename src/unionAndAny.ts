//type Union
let subscribers:number | string ="1M"
subscribers=1000000

let apiResponseStatus:"pending" |"success" |"failed"
// apiResponseStatus="done" //cannot do this
apiResponseStatus="success" //can be done this,it gives suggestions as well


//type Any
let orders=["12","15","17"]
let currentOrder:any;

for(let order of orders){

    if(order==="15"){
        currentOrder=order;
    }
}

console.log(currentOrder);


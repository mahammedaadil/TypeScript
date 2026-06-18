//creating an object Type Inference-means type script automatically detect types
const animals={
    type:"Tiger",
    color:"red",
    isDanger:true,
    qualities:["can hunt","eat meat","run fast"]
}

//Type Annotation in objects -means we are explicitely giving types to an object
let spiderMan:{
    actor:string;
    actress:string;
    budget:number;
    isHit:boolean;
    expectedEarning?:null
}

//all types from an object should be added here , except optional ones when we use that object , otherwise it will give it an error
spiderMan={
    actor:"Tom Holland",
    actress:"Zendeya",
    budget:20000000000000,
    isHit:true,
}

//printing object
console.log(spiderMan);



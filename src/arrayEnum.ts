//arrays in TS
let  arr:number[]=[20,30,40,60];
let arr2:string[]
arr2=["aadil","typescript","learning"]

interface User{
    name:string,
    email?:string
}

let arr3:User[]

arr3=[{name:"aadil",email:"sahil"},{name:"kadir"}]

let arr4:readonly number[]=[10,20,30]
// arr4.push(10) //this read only cannot be modified


//ENUMS in TS
 enum stories{

    CHILDHOOD=10,
    ADULTHOOD=20,
    OLDIES=30

}

//cannot do this the adulthood automatically take 11
//  enum stories2{

//     CHILDHOOD=10,
//     ADULTHOOD,
//     OLDIES

// }


//can do this but not recommended
enum numbers{
    TEN=10,
    TWENTY="twenty"
}

//access enum values
console.log(numbers.TWENTY);


//enums without values
enum Name{
    FIRSTNAME,
    LASTNAME,
    SURNAME
}

//access
console.log(Name.FIRSTNAME);

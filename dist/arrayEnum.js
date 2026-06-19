"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//arrays in TS
let arr = [20, 30, 40, 60];
let arr2;
arr2 = ["aadil", "typescript", "learning"];
let arr3;
arr3 = [{ name: "aadil", email: "sahil" }, { name: "kadir" }];
let arr4 = [10, 20, 30];
// arr4.push(10) //this read only cannot be modified
//ENUMS in TS
var stories;
(function (stories) {
    stories[stories["CHILDHOOD"] = 10] = "CHILDHOOD";
    stories[stories["ADULTHOOD"] = 20] = "ADULTHOOD";
    stories[stories["OLDIES"] = 30] = "OLDIES";
})(stories || (stories = {}));
//cannot do this the adulthood automatically take 11
//  enum stories2{
//     CHILDHOOD=10,
//     ADULTHOOD,
//     OLDIES
// }
//can do this but not recommended
var numbers;
(function (numbers) {
    numbers[numbers["TEN"] = 10] = "TEN";
    numbers["TWENTY"] = "twenty";
})(numbers || (numbers = {}));
//access enum values
console.log(numbers.TWENTY);
//enums without values
var Name;
(function (Name) {
    Name[Name["FIRSTNAME"] = 0] = "FIRSTNAME";
    Name[Name["LASTNAME"] = 1] = "LASTNAME";
    Name[Name["SURNAME"] = 2] = "SURNAME";
})(Name || (Name = {}));
//access
console.log(Name.FIRSTNAME);
//# sourceMappingURL=arrayEnum.js.map
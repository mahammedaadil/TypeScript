"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Required
const checkReq = {
    shop_no: 101,
    name: "ABC Office",
    isHavingAC: true,
    total_shops: 25,
    common_address: "kosad"
};
//Omit
const checkOmit = {
    name: "ABC Office",
    isHavingAC: true,
    total_shops: 25,
    common_address: "kosad"
};
//Pick
const checkPick = {
    shop_no: 500,
    total_shops: 300,
    isHavingAC: false
};
//Partial
const checkPartial = {
    shop_no: 300
};
console.log(checkReq);
console.log(checkOmit);
console.log(checkPick);
console.log(checkPartial);
//# sourceMappingURL=OmitReqPickPartial.js.map
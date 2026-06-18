"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type Union
let subscribers = "1M";
subscribers = 1000000;
let apiResponseStatus;
// apiResponseStatus="done" //cannot do this
apiResponseStatus = "success"; //can be done this,it gives suggestions as well
//type Any
let orders = ["12", "15", "17"];
let currentOrder;
for (let order of orders) {
    if (order === "15") {
        currentOrder = order;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map
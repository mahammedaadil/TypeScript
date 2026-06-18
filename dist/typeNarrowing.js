"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type Narrowing.
function getChai(kind) {
    if (typeof kind === "string") {
        console.log(`making ${kind} of tea`);
    }
    return `Chai order number ${kind}`;
}
console.log(getChai(1234));
console.log(getChai("greenTea"));
//# sourceMappingURL=typeNarrowing.js.map
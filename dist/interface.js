"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printStudent(student) {
    console.log(student.roll_no);
    console.log(student.name);
    console.log(student.email);
    console.log(student.phone);
    console.log(student.maths);
    console.log(student.science);
    console.log(student.socialScience);
}
const student1 = {
    roll_no: 1,
    name: "Aadil",
    email: "aadil@example.com",
    phone: "9876543210",
    maths: 90,
    science: 85,
    socialScience: 88,
};
console.log(printStudent(student1));
//# sourceMappingURL=interface.js.map
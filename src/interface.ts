//creating interface 
interface Student {
  roll_no: number;
  name: string;
  email: string;
  phone: string;
}

//extending it will have all types from its extended interface ,its like merging
interface Marks extends Student {
  maths: number;
  science: number;
  socialScience: number;
}

//creating function to print
function printStudent(student: Marks) {
  console.log(student.roll_no);
  console.log(student.name);
  console.log(student.email);
  console.log(student.phone);
  console.log(student.maths);
  console.log(student.science);
  console.log(student.socialScience);  
}

//created object to call in function
const student1: Marks = {
  roll_no: 1,
  name: "Aadil",
  email: "aadil@example.com",
  phone: "9876543210",
  maths: 90,
  science: 85,
  socialScience: 88,
};


//function call
printStudent(student1)

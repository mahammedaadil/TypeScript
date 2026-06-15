//type Narrowing.
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    console.log(`making ${kind} of tea`);
  }
  return `Chai order number ${kind}`
}

console.log(getChai(1234));
console.log(getChai("greenTea"));

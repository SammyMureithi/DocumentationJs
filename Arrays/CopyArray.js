const fruits=['Apple', 'Mango', 'Cherry'];
//Let's copy the array using the spread syntax
const fruitCopy=[... fruits];
console.log('Using Spread operator')
console.log(fruitCopy);

//Let's create a copy using the from() method
const fruitCopy1=Array.from(fruits);
console.log('Using from() method')
console.log(fruitCopy1)

const fruitCopy2=fruits.slice();
console.log('Using the slice() method')
console.log(fruitCopy2);
let myArray=[1,3,77,83,30];

myArray.forEach(x => console.log('Expected Output '+x));

//Array,from()

console.log(Array.from(myArray,x => x+3))
console.log(Array.from('Foo', x=> x+'ll'))
const fruits=['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
//Returns false since our array does not have Orange
console.log(fruits.includes('Orange'));
//Lets Append Orange to our Array
fruits.push('Orange');
//Now let's check if our array has Orange now that we have addded it
console.log(fruits.includes('Orange'));

//We can remove the last item of our array
 fruits.pop()
 //we have removed oOrange ,let's check if it still exists
 console.log(fruits.includes('Orange'));

 //Let's remove 3 elements from the end of our array 
  const removedItems=fruits.splice(3)
 //We can now see the last 3 elements omitted
 console.log(fruits)
 //we can also see the omitted element in our array
 console.log(removedItems)
//lets retun back what we removed from our 'fruits' array
fruits.push(removedItems);
console.log(fruits)
 //Remove the first item of our array 
 fruits.shift();
 console.log(fruits);
//we can ass we remove multple emlemts from the start of our array

const fruit = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
console.log(fruit);
const removedItmes=fruit.splice(0,1)
console.log(removedItems);
console.log(fruit);
//Add a new element at the begginning of our array
fruit.unshift('Mure');
console.log(fruit);

//Remove a single elemnt by its index
const start=fruit.indexOf('Cherry');
const elementRemoved=fruit.slice(start,1)

console.log(elementRemoved);

console.log(fruit);

//We could also replace multiple items in our array
const fruit1=['Apple', 'Banana', 'Strawberry'];
const startPos=-2;
const deleteCount=2;
console.log('Old Array');
console.log(fruit1);
const RemovedElement=fruit1.splice(startPos,deleteCount,'Mango','Tomato Tree');
console.log('New  Array');
console.log(fruit1);
console.log('Removed Elements');
console.log(RemovedElement);

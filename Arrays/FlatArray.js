const arr1=[1,2,3,[4,5]];

console.log(arr1.flat());

const arr2=[1,2,3,[[[4,6]]]];

console.log(arr2.flat(2));


console.log(arr2.reduce((acc,val) => acc.concat(val),[]))
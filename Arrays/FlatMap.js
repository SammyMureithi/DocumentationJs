let arr1=[1,2,3,4];

console.log(arr1.map(x => [x*2]))

console.log(arr1.flatMap(x =>[x*2]))
//Only one level is flattened

console.log(arr1.flatMap(x =>[[x*2]]))
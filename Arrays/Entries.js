const fruits=['Apples','Oranges','Banana','Avocados']

const fruit=fruits.entries();
for(let i=0;i<=fruits.length-1;i++){

    console.log(fruit.next().value);
}

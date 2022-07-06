const inventory=[
    {name:'asparagus',type:'vegetable'},
    {name:'banana',type:'fruit'},
    {name: 'Goat',type:'meat'},
    {name: 'Carrot', type: 'vegetable'},
    {name: 'fish', type: 'meat' }
]

let result = inventory.groupBy(inventory =>{
    return inventory.type;
})

console.log(result.vegetable)
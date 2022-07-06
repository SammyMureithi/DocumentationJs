import groupBy from 'lodash/groupBy';

const inventory=[
    {name:'asparagus',type:'vegetables',quantity: 23},
    {name: 'goat', type: 'meat', quantity: 10},
    {name: 'fish', type: 'meat',quantity : 2},
    {name: 'carrots', type :'vegetables' ,quantity: 5}
]
//let result = inventory.groupBy( ({ type }) => type );
function myRestockMachine({quantity}){
    return quantity>5 ? 'Ok':'Restock';
}
let  myResult=inventory.groupBy(myRestockMachine)

console.log(myResult)
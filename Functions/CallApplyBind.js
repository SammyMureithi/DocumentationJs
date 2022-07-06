//Traditional example

//A simplest object with its own "this"

var obj={
    num : 100
};

//a simple traditional function to operate on "this"

var add= function(a,b,c){
    return this.num +a+b+c;
}

//Call
var result=add.call(obj,1,2,3);//we establish our function scope as "obj"

console.log(result);

//Bind

var result=add.bind(obj);//We establish the function scope
console.log(result(1,2,3));

//Apply

const arr=[1,2,3];
var result=add.apply(obj,arr);
console.log(result)

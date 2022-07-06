'use strict';

var obj={
    i: 10
};


console.log(Object.defineProperty(obj,'b',{
    get :()=>{
        console.log(this.i, typeof this.i,this);
        return this.i +10;
    }
})
)
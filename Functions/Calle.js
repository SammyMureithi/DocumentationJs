function create() {
    return function(n) {
       if (n <= 1)
          return 1;
       return n * arguments.callee(n - 1);
    };
 }
 
 var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
 console.log(result)
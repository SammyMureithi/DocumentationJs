function adder(base /*, n2, ... */) {
    base = Number(base);
    for (var i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return arguments.length;
  }

  console.log(adder(45,567,78,77))
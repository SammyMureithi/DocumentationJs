const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];

  function findCherries(inventory){

    return inventory.name ==='cherries';
  }

  console.log(inventory.find(findCherries))
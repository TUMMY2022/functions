/**
 * const findWaldo = function(names, found) {
  //array1.forEach(element => console.log(element));
  for (let i = 0; i < names.length; i++)
  {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);
*/
const findWaldo = function(names, found) {
  names.forEach(name => {
    if (name === "Waldo") {
      found();
    }
  });
};
const actionWhenFound = function() {
  console.log("Found him!");
};
  
findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);

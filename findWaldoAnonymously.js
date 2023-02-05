
const findWaldo = function(names, found) {
  names.forEach(function(name, postion) {
    if (name === "Waldo") {
      found(postion);
    }
  }
  );
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
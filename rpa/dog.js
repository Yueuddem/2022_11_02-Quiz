
function Dog(name) {
  this.name = name;
}

const lucy = new Dog('Lucy');
const maxx = new Dog('maxx');

console.log(lucy, lucy instanceof Dog);
console.log(maxx);
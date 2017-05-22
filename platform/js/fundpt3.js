class Person {
  constructor(name) {
    this.name = name;
    this.distanceTraveled = 0;
  }

  sayName() {
    console.log(this.name);
  }
  saySomething(text) {
    console.log(`${this.name} says '${text}'`)
  }
  walk(distance = 3) {
    this.distanceTraveled += distance;
    console.log(`${this.name} is walking.`);
  }
  run(distance = 10) {
    this.distanceTraveled += distance;
    console.log(`${this.name} is running.`);
  }
  crawl(distance = 1) {
    this.distanceTraveled += distance;
    console.log(`${this.name} is crawling.`);
  }
}

let person = new Person('Jack');

person.sayName();
person.saySomething('what??');
person.walk();
person.run();
person.crawl();
console.log(person.distanceTraveled);

const BELTS = ['white', 'yellow', 'green', 'red', 'brown', 'black'];

class Ninja {
  constructor(name, cohert, beltLevel) {
    this.name = name;
    this.cohert = cohert;
    this.beltLevel = (beltLevel > BELTS.length) ? BELTS.length - 1 : beltLevel;
  }
  beltUp() {
    this.beltLevel = (this.beltLevel < BELTS.length - 1) ? this.beltLevel + 1 : this.beltLevel;
  }

  getDetails() {
    return (`${this.name} is at belt ${BELTS[this.beltLevel]}`)
  }
}

const ninjasItterable = {};
ninjasItterable[Symbol.iterator] = function* () {
    yield new Ninja('Mark', 'unknown', 0)
    yield new Ninja('Amy', 'unknown', 5)
    yield new Ninja('John', 'unknown', 2)
    yield new Ninja('Berry', 'unknown', 9)
    yield new Ninja('Brook', 'unknown', BELTS.length - 1)
}

for (let beltIndex = 0; beltIndex < BELTS.length; beltIndex++) {

    for(let ninja of ninjasItterable) {
          console.log(`before beltUp:${ninja.getDetails()}`);
          ninja.beltUp();
          console.log(`After beltUp:${ninja.getDetails()}`);
    }

}

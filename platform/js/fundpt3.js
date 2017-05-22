
const Person = function(name) {
    this.name = name;
    this.distanceTraveled = 0;
    this.sayName = function() {
        console.log(this.name);
    }
    this.saySomething = function(text) {
        console.log(`${this.name} says '${text}'`)
    }
    this.walk = function(distance = 3) {
        this.distanceTraveled += distance;
        console.log(`${this.name} is walking.`);
    }
    this.run = function(distance = 10) {
        this.distanceTraveled += distance;
        console.log(`${this.name} is running.`);
    }
    this.crawl = function(distance = 1) {
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

const BELTS = ['white','yellow','green','red','brown','black'];

const Ninja = function(name, cohert, beltLevel) {
    this.name = name;
    this.cohert = cohert;
    this.beltLevel = (beltLevel > BELTS.length) ? BELTS.length-1 : beltLevel;

    this.beltUp = function() {
        this.beltLevel = (this.beltLevel < BELTS.length-1) ? this.beltLevel+1 : this.beltLevel;
    }

    this.getDetails = function() {
        return (`${name} is at belt ${BELTS[this.beltLevel]}`)
    }
}


const ninjas =
    [
        new Ninja('Mark', 'unknown', 0)
        , new Ninja('Amy', 'unknown', 5)
        , new Ninja('John', 'unknown', 2)
        , new Ninja('Berry', 'unknown', 9)
        , new Ninja('Brook', 'unknown', BELTS.length-1)
    ];

for (let beltIndex = 0; beltIndex < BELTS.length; beltIndex++) {
    for (var ninjaIndex = 0; ninjaIndex < ninjas.length; ninjaIndex++) {
        console.log(`before beltUp:${ninjas[ninjaIndex].getDetails()}`);
        ninjas[ninjaIndex].beltUp();
        console.log(`After beltUp:${ninjas[ninjaIndex].getDetails()}`);

    }
}

function Vehical(name, numberofWheels, numberOfPassengers, speed) {
    this.distanceTraveled = 0;
    this.name = name;
    this.numberofWheels = numberofWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;
    this.vin = Math.floor(Math.random()*100000);
}

Vehical.prototype.makeNoise = function() {
    console.log(this.name, ': HONK, HONK');
    return this;
}

Vehical.prototype.move = function(time) {
    this.updateDistanceTraveled(time);
    this.makeNoise();
    return this;
}

Vehical.prototype.checkMiles = function() {
    console.log(this.name, ': distance traveled :', this.distanceTraveled);
    return this.distanceTraveled;
}

Vehical.prototype.updateDistanceTraveled = function(time) {
    this.distanceTraveled += time * this.speed;
    return this;
}


let bike = new Vehical('bike', 2, 1, 10);
bike.makeNoise();
bike.makeNoise = function() { console.log(this.name, ': RING, RING'); return this; }
bike.makeNoise().move(10).move(10).checkMiles();
console.log(bike);

let sedan = new Vehical('sedan', 4, 5, 70);
sedan.makeNoise();
sedan.makeNoise = function() { console.log(this.name, ': Honk, Honk'); return this; }
sedan.makeNoise().move(10).checkMiles();
console.log(sedan);

let bus = new Vehical('bus', 4, 20, 50);
bus.passengerCount = 0;
bus.addPassengers = function(num) { this.passengerCount += num; }
bus.addPassengers(5);
bus.addPassengers(5);
console.log(bus.passengerCount);
bus.move(10).move(10).checkMiles();

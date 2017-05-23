function Vehical(name, numberofWheels, numberOfPassengers, speed) {

    var distanceTraveled = 0;
    var updateDistanceTraveled = function(time) {
        distanceTraveled += time * speed;
    }

    this.name = name;
    this.numberofWheels = numberofWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;

    this.makeNoise = function() {
        console.log(this.name, ': HONK, HONK');
    }

    this.move = function(time) {
        updateDistanceTraveled(time);
        this.makeNoise();
    }

    this.checkMiles = function() {
        console.log(name, ': distance traveled :', distanceTraveled);
        return distanceTraveled;
    }
}


let bike = new Vehical('bike', 2, 1, 10);
bike.makeNoise();
bike.makeNoise = function() { console.log(this.name, ': RING, RING'); }
bike.makeNoise();
bike.move(10);
bike.checkMiles();

let sedan = new Vehical('sedan', 4, 5, 70);
sedan.makeNoise();
sedan.makeNoise = function() { console.log(this.name, ': Honk, Honk'); }
sedan.makeNoise();
sedan.move(10);
sedan.checkMiles();

let bus = new Vehical('bus', 4, 20, 50);
bus.passengerCount = 0;
bus.addPassengers = function(num) { this.passengerCount += num; }
bus.addPassengers(5);
bus.addPassengers(5);
console.log(bus.passengerCount);
bus.move(10);
bus.checkMiles();

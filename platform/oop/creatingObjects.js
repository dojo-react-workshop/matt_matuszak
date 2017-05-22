function Vehical() {

    var vehicalInstance = {};

    vehicalInstance.makeNoise = function() {
        console.log('HONK, HONK');
    }

    return vehicalInstance;
}


let bike = Vehical();

bike.makeNoise();
bike.makeNoise = function() { console.log('RING, RING'); }
bike.makeNoise();

let sedan = Vehical();
sedan.makeNoise();
sedan.makeNoise = function() { console.log('Honk, Honk'); }
sedan.makeNoise();

let bus = Vehical();
bus.passengerCount = 0;
bus.addPassengers = function(num) { this.passengerCount += num; }
bus.addPassengers(5);
bus.addPassengers(5);
console.log(bus.passengerCount);

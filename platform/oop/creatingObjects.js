function Vehical(name, numberofWheels, numberOfPassengers) {

    var vehicalInstance = { name: name, numberofWheels: numberofWheels, numberOfPassengers: numberOfPassengers };

    vehicalInstance.makeNoise = function() {
        console.log('HONK, HONK');
    }

    return vehicalInstance;
}


let bike = Vehical('bike', 2, 1);
bike.makeNoise();
bike.makeNoise = function() { console.log('RING, RING'); }
bike.makeNoise();

let sedan = Vehical('sedan', 4, 5);
sedan.makeNoise();
sedan.makeNoise = function() { console.log('Honk, Honk'); }
sedan.makeNoise();

let bus = Vehical('bus', 4, 20);
bus.passengerCount = 0;
bus.addPassengers = function(num) { this.passengerCount += num; }
bus.addPassengers(5);
bus.addPassengers(5);
console.log(bus.passengerCount);

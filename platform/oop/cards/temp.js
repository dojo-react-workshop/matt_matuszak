class Temp {
    constructor(val) {
        this.value = val;
    }

    getValue() {
        return this.value;
    }

    repeat(arr) {
        // arr.forEach(function(val) {
        //     console.log(val, this.value);
        //     // console.log(val);
        // }, this)
        arr.forEach((val) => { console.log(val, this.value); })
    }
}


let temp = new Temp('Matt');

temp.repeat([1,2,3,4]);
console.log(temp.value);

function Temp2(val) {
    this.value = val;

    this.getValue = function() {
        return this.value;
    }

    this.repeat = function(arr) {
        console.log(this.value);

        arr.forEach(function(val) {
            console.log(val, this.value);
            // console.log(val, this.getValue());
        }, this);
    }
}

let temp2 = new Temp2('Matt');
temp2.repeat([1,2,3,4]);
console.log(temp2.value);

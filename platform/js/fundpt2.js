let ArrayUtils = {
    sumArray: function (sumArray, startingIndex = 0, endingIndex) {

      if (Array.isArray(sumArray)) {
        if (typeof(endingIndex) === 'undefined') {
          endingIndex = sumArray.length - 1;
        }
        let sum = 0;
        sumArray.forEach(function(val, currentIndex) {

          if (typeof(val) === 'number' &&
            currentIndex >= startingIndex &&
            endingIndex >= currentIndex
          ) {
            sum += val;
          }
        });

        console.log('we have an array with the values summed:', sum);
        return sum;
      }
      return; //undefined
    }
    , findMin: function (arr) {
      if (Array.isArray(arr)) {
        let min;
        arr.forEach(function(val, currentIndex) {

          if (typeof(val) === 'number'
                && (typeof(min) === 'undefined' || min > val)) {
            min = val;
          }
        });

        console.log('the minimum value is:', min);
        return min;
      }
      return; // undefined
    }
    , average: function (arr) {
        let sum = this.sumArray(arr);

        if(typeof(sum) !== 'undefined') {
            return (sum)/arr.length;
        } else {
            return;
        }
    }
}

// sumValues('abc')
// sumValues(1,2,3)
ArrayUtils.sumArray([1, 2, 3])
ArrayUtils.sumArray([1, 'a', 3])

ArrayUtils.findMin([1,2,3,4])
ArrayUtils.findMin([5,2,3,4,1])
ArrayUtils.findMin(['-1',1,2,3,4,'a'])

console.log(ArrayUtils.average([1,2,3,4]))
console.log(ArrayUtils.average([5,2,3,4,1]))
console.log(ArrayUtils.average(['-1',1,2,3,4,'a']))

let person = {
    name: 'Matthew'
    , distanceTraveled: 0
    , sayName: function() {
        console.log(this.name);
    }
    , saySomething: function(text) {
        console.log(`${this.name} says '${text}'`)
    }
    , walk: function(distance = 3) {
        this.distanceTraveled += distance;
        console.log(`${this.name} is walking.`);
    }
    , run: function(distance = 10) {
        this.distanceTraveled += distance;
        console.log(`${this.name} is running.`);
    }
    , crawl: function(distance = 1) {
        this.distanceTraveled += distance;
        console.log(`${this.name} is crawling.`);
    }
}

person.sayName();
person.saySomething('what??');
person.walk();
person.run();
person.crawl();
console.log(person.distanceTraveled);

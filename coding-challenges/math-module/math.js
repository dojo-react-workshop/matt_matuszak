module.exports = {

    add: function(x,y) {
        return x+y;
    }

    , multiply: function(x,y) {
        return x*y;
    }

    , square: function(x) {
        return x*x;
    }

    , random: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

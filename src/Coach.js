function Coach() {
    this.passengers = [];
};

Coach.prototype.board = function(passenger) {
    this.passengers.push(passenger); 
};

function Passenger() {};

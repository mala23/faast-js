function Train() {
    this.coaches = [];
};

Train.prototype.dock = function(coach) {
    train.coaches.push(coach);
};

function Coach() {
    this.passengers = [];
};

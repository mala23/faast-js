describe("Coach", function() {

    beforeEach(function() {
        coach = new Coach;
        passenger = new Passenger;
    });

    it("has passengers", function() {
        expect(coach.passengers).toEqual([]);   
    });

    it("boards passengers", function() {
        coach.board(passenger);
        expect(coach.passengers.length).toEqual(1); 
    });

});

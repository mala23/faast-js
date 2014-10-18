describe("Train", function() {
    
    beforeEach(function () {
       train = new Train;
       coach01 = new Coach;
    });

    it("has coaches", function() {
        expect(train.coaches).toEqual([]); 
    });

    it("docks coaches", function() {
      train.dock(coach01); 
      expect(train.coaches.length).toEqual(1); 
    });

});

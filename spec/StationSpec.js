describe("Station", function() {
  station = new Station;
  train = "train";
  it("has trains", function() {
    expect(station.trains).toEqual([]); 
  });
  it("docks trains", function() {
    station.trains.push(train);
    expect(station.trains.length).toEqual(1); 
  });
});

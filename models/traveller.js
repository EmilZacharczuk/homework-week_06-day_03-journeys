const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
//   return this.journeys.map(journey => journey.startLocation);
// };
    result = [];
    this.journeys.forEach((journey) => {
      startLocation = journey.startLocation;
      result.push(startLocation);
    });
    return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  result = [];
  this.journeys.forEach((journey) => {
    endLocation = journey.endLocation;
    result.push(endLocation);
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  result = [];
  this.journeys.forEach((journey) => {
    if (journey.transport === transport)
    result.push(journey)
  })
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = [];
  this.journeys.forEach((journey) => {
    if (journey.distance > minDistance)
    result.push(journey)
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

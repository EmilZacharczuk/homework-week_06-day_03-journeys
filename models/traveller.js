const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
//   return this.journeys.map(journey => journey.startLocation);
// };
    const result = [];
    this.journeys.forEach((journey) => {
      startLocation = journey.startLocation;
      result.push(startLocation);
    });
    return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = [];
  this.journeys.forEach((journey) => {
    endLocation = journey.endLocation;
    result.push(endLocation);
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = [];
  this.journeys.forEach((journey) => {
    if (journey.transport === transport)
    result.push(journey)
  })
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = [];
  this.journeys.forEach((journey) => {
    if (journey.distance > minDistance)
    result.push(journey)
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0;
  this.journeys.forEach((journey) => {
      total += journey.distance;
  })
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let journeysArray = this.journeys.map(journey => journey.transport)
  let myOrderedArray = journeysArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator
  }, [])
  return myOrderedArray;
};


module.exports = Traveller;

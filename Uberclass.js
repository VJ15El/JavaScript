class Uber {
  constructor(baseFare, costPerKm, costPerMinute = 0) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMinute = costPerMinute;
  }

  calculateFare(distance, time = 0) {
    const distanceCost = distance * this.costPerKm;
    const timeCost = time * this.costPerMinute;
    return this.baseFare + distanceCost + timeCost;
  }
}

const uberRide = new Uber(2, 1, 0.5);
const price = uberRide.calculateFare(10, 15);
console.log(`Total Uber fare: $${price}`);

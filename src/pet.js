/* eslint-disable func-names */
const initialAge = 0;
const initialHunger = 0;
const maximumFitness = 10;

function Pet(name) {
  this.name = name;
  this.age = initialAge;
  this.hunger = initialHunger;
  this.fitness = maximumFitness;
}

Pet.prototype.growUp = function () {
  const hungerIncrement = 5;
  const fitnessDecrement = 3;

  this.age = this.age + 1;
  this.hunger += hungerIncrement;
  this.fitness -= fitnessDecrement;
};

Pet.prototype.walk = function () {
  const fitnessImprovement = 4;
  if (maximumFitness - this.fitness > fitnessImprovement) {
    this.fitness += fitnessImprovement;
  }
  else {
    this.fitness = maximumFitness;
  }
};

Pet.prototype.feed = function () {
  const hungerImprovement = 3;
  if (this.hunger - hungerImprovement >= 0) {
    this.hunger -= hungerImprovement;
  }
  else {
    this.hunger = initialHunger;
  }
};

Pet.prototype.checkUp = function () {
  const needsFeeding = 5;
  const needsWalking = 3;
  if (this.hunger >= needsFeeding && this.fitness <= needsWalking) {
    return 'I am hungry AND I need a walk';
  }
  else if (this.hunger >= needsFeeding) {
    return 'I am hungry';
  }
  else if (this.fitness <= needsWalking) {
    return 'I need a walk';
  }
  else {
    return 'I feel great!';
  }
};

module.exports = Pet;

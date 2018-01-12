// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

function Animal(options) {
  this.species = options.species;
  this.name = options.name;
}

// add 'grow' to Animal's prototype here

Animal.prototype.grow = function() {
  console.log(`${this.name} grew larger`);
}

Animal.prototype.greeting = function() {
  console.log(`${this.name} says ${this.speak}`);
}

function Dog(dogAttributes) {
  Animal.call(this, dogAttributes);
  this.speak = dogAttributes.speak;
  this.waggyTail = dogAttributes.waggyTail;
}

Dog.prototype = Object.create(Animal.prototype);

const grizzly = new Dog({
  species: 'Canis cuteus',
  name: 'Grizzly Bear',
  speak: 'woof',
  waggyTail: true,
});

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method

function Cat(catAttributes) {
  // invoke Animal here with .call
  Animal.call(this, catAttributes);
  this.speak = catAttributes.speak;
  this.waggyTail = catAttributes.waggyTail;
  this.stripedFur = catAttributes.stripedFur;
}

Cat.prototype = Object.create(Animal.prototype);

const garfield = new Cat({
  species: 'feline',
  name: 'Garfield',
  speak: 'meow',
  stripedFur: false,
});

// connect the prototypes here

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie',
  species: 'feline',
  speak: 'meow',
});

foofie.grow();
foofie.greeting();

//CLASS example
class Fruit {
  constructor(fruitAttributes) {
    this.type = fruitAttributes.type;
    this.name = fruitAttributes.name;
    this.isRipe = fruitAttributes.isRipe;
    this.calories = fruitAttributes.calories;
  }
//method within class, outside of constructor
  calculateCalories() {
    console.log(`${this.name} has ${this.calories * 200} calories`);
  }
}

//subclasses, that inherit from fruit
//inherits prototype methods through "extend"
class Banana extends Fruit{
  constructor(bananaAttributes) {
  //inherits the different attributes
  super(bananaAttributes);
  this.doMonkeysEat = bananaAttributes.doMonkeysEat;
  }
  ripen() {
    if(this.isRipe === false) {
      this.isRipe = true;
    }
  }
}

class BananaMaca extends Banana {
  constructor(bMacaAttributes) {
    super(bMacaAttributes);
    this.tastesLikeApple = bMacaAttributes.tastesLikeApple;
    this.size = bMacaAttributes.size;
  }
}

class Kiwi extends Fruit {
  constructor(kiwiAttributes) {
    super(kiwiAttributes);
    this.isFuzzy = kiwiAttributes.isFuzzy;
  }
}

//instances of 
const newBanana = new BananaMaca({
  doMonkeysEat: true,
  name: 'Banana',
  isRipe: false,
  calories: 3,
  type: 'tree',
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  name: 'Kiwi',
  isRipe: false,
  calories: 3,
  type: 'tree',
});

myBanana.ripen();
console.log(myBanana);


//constructors (extra example)

//constructor (capitalized)
function Fruit(fruitAttributes) {
  this.type = fruitAttributes.type;
  this.name = fruitAttributes.name;
  this.isRipe = fruitAttributes.isRipe;
  this.calories = fruitAttributes.calories;
}

//method
Fruit.prototype.calculateCalories = function() {
  console.log(`${this.name} has ${this.calories * 200} calories`);
}

//subclasses, that inherit from fruit
function Banana(bananaAttributes) {
  //inherits the different attributes
  Fruit.call(this, bananaAttributes);
  this.doMonkeysEat = bananaAttributes.doMonkeysEat;
}

function BananaMaca(bMacaAttributes) {
  Banana.call(this, bMacaAttributes);
  this.tastesLikeApple = bMacaAttributes.tastesLikeApple;
  this.size = bMacaAttributes.size;
}

function Kiwi(kiwiAttributes) {
  Fruit.call(this, kiwiAttributes);
  this.isFuzzy = kiwiAttributes.isFuzzy;
}

//inherits prototype (methods)
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.ripen = function() {
  if(this.isRipe === false) {
    this.isRipe = true;
  }
};

Kiwi.prototype = Object.create(Fruit.prototype);

//instances of 
const newBanana = new Banana({
  doMonkeysEat: true,
  name: 'Banana',
  isRipe: false,
  calories: 3,
  type: 'tree',
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  name: 'Kiwi',
  isRipe: false,
  calories: 3,
  type: 'tree',
});

// newKiwi.calculateCalories();
// newKiwi.ripen();
// newKiwi.isRipe;
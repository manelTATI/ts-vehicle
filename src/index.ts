// An interface is a "contract": it describes the shape an object must have.
// Anything that claims to be a Vehicle must have these properties and method.
interface Vehicle {
  make: string; // brand of the vehicle, e.g. "Toyota"
  model: string; // model name, e.g. "Corolla"
  year: number; // year it was built, e.g. 2022
  start(): void; // a method that does something but returns nothing
}

// The Car class "implements" Vehicle, so TypeScript checks
// that Car really has everything the Vehicle interface asks for.
class Car implements Vehicle {
  // Declare the properties the class will hold.
  make: string;
  model: string;
  year: number;

  // The constructor runs when we write `new Car(...)`.
  // It takes the values and stores them on the new object.
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Our version of the start() method required by the interface.
  start(): void {
    console.log("Car engine started");
  }
}

// Create a real Car object (an "instance") with sample values.
const myCar = new Car("Toyota", "Corolla", 2022);

// Call start() to check that the message is printed.
myCar.start();

// Optional: print the car's details too.
console.log(`Make: ${myCar.make}`);
console.log(`Model: ${myCar.model}`);
console.log(`Year: ${myCar.year}`);

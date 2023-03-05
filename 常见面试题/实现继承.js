class Car {
    constructor(brand) {
        this.brand = brand;
    }
    showBrand() {
        console.log("the brand of car :>> ", this.brand);
    }
}

class ElectricCar extends Car {
    constructor(brand, duration) {
        super(brand);
        this.duration = duration;
    }
    showDuration() {
        console.log("this. duration of this ElectricCar :>>", this.duration);
    }
}

ElectricCar.prototype.showOriginator = function (originator) {
    console.log("originator of this  ElectricCar :>> ", originator);
};

const tesla = new ElectricCar("tesla", "600km");
tesla.showBrand(); // the brand of car :>>  tesla
tesla.showDuration(); // this. duration of this ElectricCar :>> 600km
console.log("tesla instanceof Car :>> ", tesla instanceof Car); // tesla instanceof Car :>>  true
console.log("tesla instanceof ElectricCar :>> ", tesla instanceof ElectricCar); // tesla instanceof ElectricCar :>>  true
console.log("tesla.__proto__ :>> ", tesla.__proto__); // tesla.__proto__ :>>  Car {}
console.log("ElectricCar.prototype === tesla.__proto__  :>> ", ElectricCar.prototype === tesla.__proto__); // ElectricCar.prototype === tesla.__proto__  :>>  true
tesla.showOriginator("Mask"); // originator of this  ElectricCar :>>  Mask
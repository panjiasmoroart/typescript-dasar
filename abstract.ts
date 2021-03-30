// abstract class ini sebuah class yang tidak  bisa di instance langsung dari luar class itu sendiri 
// melainkan harus diextends ke sebuah class childnya

// class kendaraan
abstract class Vehicle {
  // wheels = roda
  abstract wheels: number

  start(): void {
    console.log("brummm")
  }
}

// Mobil ini adalah sebuah kendaraan
class Car extends Vehicle {
  // karena di class Vehicle ada property wheels kita harus membuat juga property tersebut
  // cara bacanya setiap mobile harus mempunyai roda
  wheels: number = 4
}

class Motorcycle extends Vehicle {
  wheels: number = 2
}

let car = new Car()
car.start()
car.wheels
console.log(car)

let motor = new Motorcycle()
motor.start()
motor.wheels
console.log(motor)
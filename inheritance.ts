// pewarisan atau turunan
export class User {
  name: string 

  constructor(name: string, public age:number) {
    this.name = name 
  }

  setName(value: string): void {
    this.name = value 
  }

  getName = (): string => {
    return this.name
  }
} 

// public    = bisa di akses dari semua / luar class 
// private   = hanya bisa diakses dari class itu sendiri 
// protected = hanya bisa diakses dari class tersebut, dan class turunannya

// admin ini mewarisi semua sifat dan method yang ada di class User
class Admin extends User {
  // maksudnya admin bisa menulis dan membaca 
  read: boolean = true 
  write: boolean = true 

  getRole() : {readData: boolean, writeData: boolean} {
    return {
      readData: this.read,
      writeData: this.write
    }
  }
}

let admin = new Admin("Panji Asmoro", 27)
admin.getName()
admin.getRole()
admin.setName("dsa")
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

// admin ini mewarisi semua sifat dan method yang ada di class User
class Admin extends User {
  // maksudnya admin bisa menulis dan membaca 
  read: boolean = true 
  write: boolean = true
  phone: string 

  constructor(phoneUser: string, name: string, age: number) {
    // karena pada class User memiliki constructor name, age
    super(name, age)
    this.phone = phoneUser
  }

  getRole() : {readData: boolean, writeData: boolean} {
    return {
      readData: this.read,
      writeData: this.write
    }
  }
}

// isinya harus tiga constructor phone, name dan age  
let admin = new Admin("0858", "Panji Asmoro", 27)
admin.getName()
admin.getRole()
admin.setName("dsa")
admin.phone

console.log(admin)
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
  // email tidak bisa diakses dari luar class jadi haru menggunkana getter 
  // _email pada saat akses tinggal set email saja, tidak perlu set _email
  private _email: string = ""
  // statice property untuk memanggilnya tanpa harus membuat ojek terlebih dahulu 
  static getRoleName: string = "admin"

  constructor(phoneUser: string, name: string, age: number) {
    // karena pada class User memiliki constructor name, age
    super(name, age)
    this.phone = phoneUser
  }

  static showRoleName() {
    return "Hai role admin"
  }

  getRole() : {readData: boolean, writeData: boolean} {
    return {
      readData: this.read,
      writeData: this.write
    }
  }

  // setter biasanya untuk validasi ketika ingin mengubah property pada class
  // getter untuk mengambil data pada suatu class
  set email(value: string) {
    // contoh 
    (value.length < 5) ? this._email = "Email kurang dari 5" : this._email = value
    // this._email = value
  }

  get email(): string {
    return this._email
  }
}

// untuk mengakses static property atau method kita tidak perlu membuat objek 
let cetakProperti = Admin.getRoleName
let cetakMethod = Admin.showRoleName()
console.log(cetakProperti)
console.log(cetakMethod)
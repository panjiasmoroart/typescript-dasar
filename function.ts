// tipe data balikan pada function 
function getName(): string {
  // balikannya harus string
  return "Hello, my name is Panji Asmoro"
  // pasti error
  // return 12345
}
console.log(getName())

function getAge(): number {
  return 27
}
console.log(getAge())

// karena void jadi tidak perlu me return apa apa, tidak boleh menggunakan return
function printName(): void {
  console.log("Print name")
  // pasti error 
  // return "Hallo"
}
printName()

// menggunakan parameter
function multiply(a: number, b: number): number {
  return a * b
}
// const result = multiply(5, 10)
// console.log(result)
console.log(`function dengan argumen ${multiply(2,5)}`)

// menggunakan javascript pada umumnya tanpa typescript
// function add(val1, val2) {
//   return val1 + val2
// }
// misalkan ada salah input string, jadi ga benar hasilnya 
// console.log(add("tes", 10))

// function as type 
// let age: number = 20
// type Age = number 
// let age: Age = 123

// type Tambah itu val1,val2 typenya harus number returnnya juga number
// dengan ada type seperti ini function kita jauh lebih aman dari error 
type Tambah = (val1: number, val2: number) => number 
const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2
}
console.log(Add(2,3))


// default parameter
const fullName = (first: string, last: string = "Asmoro"): string => {
  return first + " " + last 
}
console.log(fullName("Panji"))
console.log(fullName("Panji", "Alfarisi"))

// optional parameter ?
const showOptional = (val1: string, val2?: string): string => {
  return val1 + " "  + val2
}
console.log(showOptional("Parameter 1"))
// Parameter 1 undefined ---> untuk parameter kedua diganti dengan undefined karena kita menggunakan ?
console.log(showOptional("Parameter 1", "Parameter 2"))

// sebaikanya untuk optional parameter jangan gunakan tipe data number
// karena number + undefined tidak bisa
// const showOptionalNumber = (val1: number, val2?: number): number => {
//   return val1 + val2
// }
// console.log(showOptionalNumber(10, 2))

// kalo functionnya menggunakan type string pasti bisa, karena dia returnya pasti string
const showOptionalString = (val1: number, val2?: number): string => {
  return val1 + " " + val2
}
console.log(showOptionalString(10, 2))


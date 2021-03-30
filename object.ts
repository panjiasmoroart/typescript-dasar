//Object 
// let user = {
//   // jadi pada typescript hal yang seperti ini dibaca juga sebagai Type selain varaiabel
//   name: "Panji Asmoro",
//   age: 27
// }

// user = {
//   // pasti error 
//   // address: "Depok"
//   name: "Depok",
//   age: 20
// }

// ada cara yang lebih baik untuk menentukan type pada objek
type User = {
  name: string,
  age: number
}

let user: User = {
  name: "Panji Asmoro",
  age: 25,
  // jika kta tambah address pasti error karena pada Type User kita hanya buat dua name dan age
  // address: "Depok"
}
console.log(user)
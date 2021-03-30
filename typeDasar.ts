// console.log("Dari typeDasar typescript")

// Tipe Data String
let nama = "Panji Asmoro"
// pasti error kalo diisi dengan tipe data number
// nama = 20
// atau bolean juga error
// nama = true
// harus diisi dengan string juga
// nama = "Keren"                              

// Tipe Data Number
// let umur: number = 27
// console.log(umur) 
let umur: number 
umur = 27
// console.log(umur)

// Tipe Data Boolean
let isMarried: boolean
isMarried = true
isMarried = false 

// Tipe Data Any (bisa diisi tipe apa pun)
let heroes: any = "Irno Man"
heroes = 20 
heroes = []
heroes = {}
heroes = true || false || "String Data"


// Tipe union, 
// misalkan nomor hp, biasanya pada nomor hp ada yang menggunakan awalan tanpa 0 dan tidak
// 6285577 -> ini pasti number 
// 085577 -> nah ini kalo dijadikan number, 0 nya pasti dihapus oleh sistem 
// 85577 -> menjadi seperti ini 
// "085577" -> untuk kasus yang seperti ini bisa kita jadikan string 

// pada typescript kita bisa gunakan tipe data union (bisa menggunakan tipe data lebih dari satu)
let phone: number | string 
phone = 6285883154447 
phone = "085883154447"
// phone = true
console.log(phone)

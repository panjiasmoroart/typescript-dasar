// array 
// let arrayNumber = [1, 2, 3]
// kalo arraynya diisi string pasti error
// arrayNumber = ['Panji Asmoro']

// array ini isinya harus number saja
let arrayNumber: number[]
arrayNumber = [1]

// array ini sisinya harus string saja
let arrayString: string[]
arrayString = ["ReactJS", "Angular", "VueJS"]

// arra ini isinya bisa apa saja
let arrayAllType: any[]
arrayAllType = [1, 2, 3, "String", true, {}]

// tapi kembali lagi jika memang butuhnya number pakailah type number

// tuples adalah sebuah array yg isinya bisa berbagai macam tipe data tapi inilai/itemnya terbatas
// array ini hanya boleh berisi string atau angka
let biodata: [string, number]
// pasti error karena ada tipe booleannya
// biodata = ["Surabaya", true]
// error karena isinya lebih > 2 ada tiga element didalamanya 
// biodata = ["Surabaya", 2, "Jakarta"]
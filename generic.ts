function getData(value: any) {
  return value;
}

// karena type datanya any, maka kita kasih number, string dll tidak error
console.log(getData("Panji Asmoro").length)
// jika number dikasih length maka hasilnya undefined, karena memang tidak boleh sebenarnya
console.log(getData(12345).length)

// Generic
// tidak harus T juga bebas boleh Type dll, tapi standarnya T
// myData ini dia mengatakan ketika menggunakan function <T> ini beritahu saya typenya apa 
// misalkan kita masukan string maka value: string 
// misalkan kita masukan number maka value: number, jadi ketika di return tidak ada length nya 
function myData<T>(value: T) {
  return value;
}

console.log(myData("Panji Asmoro").length)
// kalo kita kasih length setelahnya pasti error
console.log(myData(12345))


// Generic menggunakan arrow function di typescript biasa .ts
const arrowFunc = <T>(value: T) => {
  return value;
}
console.log(arrowFunc("Panji Asmoro").length)
// kalo kita kasih length setelahnya pasti error
console.log(arrowFunc(12345))

// Generic menggunakan arrow function di typescript .jsx
// extends unknown karena tidak diketahui
// const arrowFunc = <T extends unknown>(value: T) => {
//   return value;
// }
// atau bisa gini juga 
// const arrowFunc = <T, >(value: T) => { }
// sekenarionya List ini isinya bisa angka, string
// keuntungan jika menggunakan Generic class, classnya tidak tergantung dengan type data yg 
// ditentukan, jadi kita tentukan berdasarkan yang kita mau, classnya bisa dinamis diisi number dll 
class List<T> {
  // isinya adalah generic array 
  private data: T[]

  // (...elements) rest parameter typenya generic array
  constructor(...elements: T[]) {
    this.data = elements
  }

  // single inputan bukan array
  add(element: T): void {
    this.data.push(element)
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements)
  }

  getAll(): T[] {
    // mengembalikan generic array
    return this.data;
  }
}

// isi dari list ini harus number semua
// (...elements: T[]) atau rest parameter maka tidak menggunakan array untuk aksesnya 
// let numbers = new List<number>(1, 2, 3)
// numbers.add(4)
// numbers.addMultiple(5, 6, 7)
// console.log(numbers)

// (elements: T[]) tidak menggunakan rest parameter maka menggunakan array untuk aksesnya 
// let numbers = new List<number>([1, 2, 3])

// isi dari list ini bisa number atau string 
let random = new List<number | string>(1, "a", "b", 2)
random.add("Panji Asmoro")
random.add(90)
random.addMultiple(100, "New Data")
random.getAll()
// console.log(random)
console.log(random.getAll())

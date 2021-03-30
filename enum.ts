// enum adalah sebuah tipe data sekumpulan data constan seperti halnya .env 
// username, passwordnya dll, .env data constatnya ada di level konfigurasi
// kalo enum ini menyimpan data constantnya di level aplikasi

// numeric enums 
// enum Month {
//   JAN,
//   FEB
// }
enum Month {
  JAN = 1,
  FEB,
  MAR = 200,
  APR,
  MAY
}
console.log(Month)
console.log(Month.JAN)

// string enums 
enum MonthEnumString {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei"
}
console.log(MonthEnumString.FEB)
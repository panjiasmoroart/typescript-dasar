// sekenarionya gini, misalkan kita mempunyai class Laptop yang mengimplementasikan class Laptop
// misalkan ada Laptop biasa, gamming, programming dll jadi masing masing laptop mempunyai spec
// yang berbeda tetapi ada beberapa kesamaan seperti punya keyboard, touchpad, power dll

// contoh
interface Laptop {  
  name: string
  
  on(): void 
  off(): void
}

// karena class Asus mengimplement class Laptop jadi class Asus harus mempunyai 
// property dan method yang ada di class Laptop jika tidak maka akan error
// kalo untuk tambahannya seperti method atau property diperbolehkan
class Asus implements Laptop {
  name: string; 
  isGamming: boolean;

  constructor(name: string, isGamming: boolean) {
    this.name = name;
    this.isGamming = isGamming; 
  }

  on(): void {
    console.log('nyala')
  }

  off(): void {
    console.log('mati')
  }

}


class MackBook implements Laptop {
  name: string; 
  keyboardLight: boolean

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight; 
  }

  on(): void {
    console.log('nyala')
  }

  off(): void {
    console.log('mati')
  }

}

let asus = new Asus("Asus", true)
console.log(asus); console.log(asus.on()); console.log(asus.off());

let mackbook = new MackBook("MackBook", true)
console.log(mackbook); console.log(mackbook.on()); console.log(mackbook.off());
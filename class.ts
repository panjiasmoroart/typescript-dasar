export class Member {
  public name: string 

  constructor(memberName: string, public age: number) {
    this.name = memberName
  }
}

// contoh diatas bisa disederhanakan seperti ini
export class Mahasiswa {
  
  constructor(public name: string) {  
  }
}

let member = new Member("Panji Asmoro", 27)
console.log(member)
console.log(member.name)

let mahasiswa = new Mahasiswa("Alfarisi")
console.log(mahasiswa)


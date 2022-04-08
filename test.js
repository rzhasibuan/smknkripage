class Group {
  constructor(name){
    this.name = name;
  }

  createGroup(name) {
    console.info(`group berhasil dibuat ${name}`);
  }

  removeGroup(name) {
    console.info(`group ${name} berhasil dihapus `)
  }

  infoGroup(name) {
    console.info(`${this.name}`)
  }

}

class Member extends Group {
  constructor(name, jumlah) {
    // properti super 
    super(name);
    this.jumlah = jumlah;
  }
  // properti private
  #numberPhone;

  // method public 
  addMember() {
    console.info('selamat bergabung di group');
    // method super
    super.infoGroup();
  }

  set (number) {
    this.#numberPhone = number;
    console.info('nomer telephone berhasil di tambahkan');
  }

  get () {
    console.info(this.#numberPhone);
  }

  // method private
  say(name) {
    if(name) {
      this.#sayWithName(name);
    }else{
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.info('hallo');
  }
  #sayWithName(name) {
    console.info(`hallo ${name}`);
  }
}

// const group = new Group('keluarga cemara');

// group.createGroup('keluarga cemara');
// const member = new Member("keluarga cemara",4);
// member.set('085358339930');
// member.get();
// member.say()

// member.infoGroup();

// error custom 
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}
// Error
class MathUtil {
  static sum(...numbers) {
    if(numbers.length === 0) {
      throw new ValidationError('Total parameter harus lebih dari 0', 'number');
    }

    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
}

// error handling try catch
try {
  console.info(MathUtil.sum());
}catch(error) {
  // console.info(`ini akan ditampilkan jika terjadi error: ${error.message}`);
  if (error instanceof ValidationError) {
    console.info(`terjadi error pada field: ${error.field} dengan pesan error ${error.message}`);
  }else{
    console.info(`terjadi error: ${error.message}`);
  }
}finally{
  console.info(`block finally akan selalu di eksekusi jika tidak terjadi error ataupun tidak `);
}
// console.info('reza');


class Counter {
  constructor() {
    this.value = 1;
  }

  next() {
    try{
      return this.value;
    }finally{
      this.value++;
    }
  }

}

// const counter = new Counter();
// console.info(counter.next());


class Counter2 {
  #number = 1;

  increment() {
    return this.#number++;
  }

  decrement() {
    return this.#number-1;
  }

}

const counter2 = new Counter2();

console.info(counter2.increment());
// console.info(counter2.increment()); 
// console.info(counter2.decrement());

 
// pengunaan instanceof untuk mengecek sebuah class turunan atau tidak 

class Employee {
  // karyawan
  constructor(service) {
    this._service = service;
  }

  addPost() {
    const post = this._service.addNote({'nama',"alamat"});
  }
}

class Manager extends Employee{
  // manager
}

const reza = new Manager();
const ibes = new Employee();

console.info(ibes instanceof Employee);
console.info(ibes instanceof Manager);
console.info(reza instanceof Manager);
console.info(reza instanceof Employee);

const routes = (handler) => [
  {
    method: 'get',
    path : '/home',
    handler : handler,
  }
]

console.info(routes('reza'));


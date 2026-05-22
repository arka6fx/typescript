class BankAccount {
  private balance: number;

  constructor(initialBalanace: number) {
    this.balance = initialBalanace;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(20);
console.log(acc.getBalance());
//encapsulation
class User {
  private _name: string;
  private _age: number;

  constructor(name: string) {
    this._name = name;
    this._age = 0; // default value
  }

  set age(age: number) {
    this._age = age;
  }
  set name(name: string) {
    this._name = name;
  }
  get age(): number {
    return this._age;
  }
  get name(): string {
    return this._name;
  }
}

const u1 = new User("arka");
u1.age = 22;
console.log(u1.age);

//single level inheritance

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, i am ${this.name}`);
  }
}

class Student extends Person {
  private rollNo: number;

  constructor(name: string, rollNo: number) {
    super(name);
    this.rollNo = rollNo;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

const p1: Student = new Student("arka", 29);
p1.greet();
p1.study();

//polymorphism
//overloading(compile time polymorphism)

function add(a: string): string;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: string | number, b?: number, c?: number): string | number {
  // case 1 → string
  if (typeof a === "string") {
    return `Good morning ${a}`;
  }

  // case 2 → 3 numbers
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    return a + b + c;
  }

  // case 3 → 2 numbers
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Invalid arguments");
}

//overriding
abstract class Payment {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  abstract processPayment(): void;

  printReceipt() {
    console.log(`Paid Rs ${this.amount}`);
  }
}

class CreditCardPaymeny extends Payment {
  constructor(amount: number) {
    super(amount);
  }
  override processPayment(): void {
    console.log(`Processing credit card payment of Rs ${this.amount}`);
    setTimeout(() => {
      console.log(`Payment Done!`);
      this.printReceipt();
    }, 2000);
  }
}

class UpiPayment extends Payment {
  constructor(amount: number) {
    super(amount);
  }
  override processPayment(): void {
    console.log(`Processing UPI payment of Rs ${this.amount}`);
    setTimeout(() => {
      console.log(`Payment Done!`);
      this.printReceipt();
    }, 2000);
  }
}

const payments: Payment[] = [new CreditCardPaymeny(2000), new UpiPayment(1500)];

for (const payment of payments) {
  payment.processPayment();
  /* payment.printReceipt(); */
}

abstract class Shape {
  protected dimensions: number[];

  constructor(...dimensions: number[]) {
    this.dimensions = dimensions;
  }

  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(length: number, breadth: number) {
    super(length, breadth);
  }

  override getArea(): number {
    const [length, breadth] = this.dimensions;
    return length! * breadth!;
  }
}

class Circle extends Shape {
  constructor(radius: number) {
    super(radius);
  }

  override getArea(): number {
    const [radius] = this.dimensions;
    return Math.PI * radius! * radius!;
  }
}

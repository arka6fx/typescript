const user = {
  firstName: "arka",
  lastName: "garai",
  age: 22,
};

//types
type User = {
  firstName: string;
  lastName: string;
  age: number;
};

//unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(id);
}

printId(23);
printId("12wqd32");

//intersection
type Employee = {
  name: string;
  startDate: number;
};

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "arka",
  startDate: new Date().getDate(),
  department: "software developer",
};
//arrays in ts
function filterAdults(users: User[]) {
  users.filter((user) => user.age >= 18);
}
const users: User[] = [
  {
    firstName: "Arka",
    lastName: "Garai",
    age: 22,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Aisha",
    lastName: "Khan",
    age: 15,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    age: 52,
  },
  {
    firstName: "Sundar",
    lastName: "Pichai",
    age: 51,
  },
];
filterAdults(users);
console.log(users);

//enum : enums are user defined data type that lets you define a set of named constants.

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function doSomething(keyPressed: Direction) {
  if (keyPressed === Direction.Up) {
    console.log("go up");
  }
}
doSomething(Direction.Up);

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const e0 = getFirstElement([1, "cat", "mat"]);
console.log(e0);

//pick partial readonly record map exclude
/* Pick → select properties from object */
/* Omit → remove properties from object */
/* Exclude → remove types from union types */
type Cycle = {
  model: string;
  wheel: number;
  gear: boolean;
};

type MinimalCycle = Pick<Cycle, "model" | "wheel">;
type partialCycle = Partial<MinimalCycle>;
type excludedCycle = Omit<Cycle, "gear">;
interface Config {
  readonly DATABASE_URL: string;
  readonly CLIENT_ID: string;
}

const config: Readonly<Config> = {
  DATABASE_URL: "url",
  CLIENT_ID: "332d2e2d23",
};
/* config.DATABASE_URL = "lol"; */
type Event = "click" | "hover" | "scroll";
type ExcludeEvent = Exclude<Event, "scroll" | "hover">;

type MyType = "weeb" | "cs nerd" | "sense of joy";

function judgeType(type: MyType) {
  console.log(type);
}

judgeType("weeb");

type Scores = Record<string, number>;
const marks: Scores = {
  math: 90,
  english: 85,
};
//index signature
type A = {
  [key: string]: number;
};
//record
type B = Record<string, number>;

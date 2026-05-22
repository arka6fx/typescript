function greet(name: string) {
  console.log(`hi ${name}`);
}

greet("arka");

function isEligibleForVote(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const val = isEligibleForVote(20);
console.log(val);

function pikachu1(fn: (x: number) => void) {
  setTimeout(() => {
    fn(3);
  }, 1000 * 5);
}

function callMe(num: number) {
  console.log("i am called " + num);
}

pikachu1(callMe);

const pikachu = {
  type: "electric",
  evolution: "raichu",
  ownedBy: "ash",
  attacks: ["electric volt", "iron tail"],
};

const charmander = {
  type: "fire",
  evolution: "charlizard",
  ownedBy: "ash",
  attacks: ["flame thrower"],
};

interface Pokemon {
  type: string;
  evolution: string;
  ownedBy: string;
  attacks: string[];
}

function fight(pokemon: Pokemon) {
  pokemon.attacks.forEach((attack) => {
    console.log(attack);
  });
}

fight(pikachu);
fight(charmander);

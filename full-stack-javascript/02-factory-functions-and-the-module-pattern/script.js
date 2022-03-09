
// -------------------------
// -------------------------
// -------------------------
// FACTORY FUNCTIONS

function cc(x) {
    console.log(x);
}

const person = (name, age) => {
    const greet = () => console.log("hey!");

    return {name, age, greet};
}

const cabs = person("cabs", 21);

// cabs.greet();

// -------------------------
// -------------------------
// -------------------------
// SCOPE

let a = 17;

const func = x => {
  let a = x;
};

func(99);

// console.log(a)

// -------------------------
// -------------------------
// -------------------------
// CLOSURES

var sayHello = function (name) {
    var text = 'Hello, ' + name;
    return function () {
        console.log(text);
    };
};

let greetCabs = sayHello("cabs");

// greetCabs();
// sayHello("cabs2")();

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreator();

// counter(); // 0
// counter(); // 1
// counter(); // 2
// counter(); // 3

// -------------------------
// -------------------------
// -------------------------
// FACTORY FUNCTIONS

const Player = (name, level) => {
    let health = level;

    const getLevel = () => level;
    const getName = () => name;
    const getHealth = () => health;

    const die = () => {
        if (health < 0) {
            health = 0;
            console.log(`${name} is already dead`);
        } else {
            console.log(`${name} died`);
        }
    };

    const damage = (damageValue) => {
        health -= damageValue;
        if (health <= 0) {
            die();
        }
    }

    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} (${enemy.getHealth()}) has damaged ${name} (${health})`);
        } else {
            enemy.damage(1);
            console.log(`${name} (${health}) has damaged ${enemy.getName()} (${enemy.getHealth()})`)
        }
    }

    return {attack, damage, getLevel, getName, getHealth};
}

const jimmy = Player("Jim", 20);
const dave = Player("Dave", 12);

// for (let i = 0; i < 15; i++) jimmy.attack(dave);

// -------------------------
// -------------------------
// -------------------------
// FACTORY FUNCTIONS INHERITANCE


const Person = (name, age) => {
    const sayName = () => console.log(`My name is ${name}`);
    const sayAge = () => console.log(`My age is ${age}`);
    return {sayName, sayAge};
}

const Adult = (name, age) => {
    const {sayAge, sayName} = Person(name, age);
    const beAdult = () => console.log(`${name}: I am an adult`);
    return {sayName, beAdult, sayAge};
}

let adultCabs = Adult("cabs", 27);

adultCabs.sayAge();
adultCabs.beAdult();
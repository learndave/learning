
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

greetCabs();
sayHello("cabs2")();
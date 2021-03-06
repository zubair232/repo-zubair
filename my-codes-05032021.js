//to know how "this" keyword works

const book = {
  title: "wonderfull book", pages: 102,
  openBook() {
    console.log(this.title + "=" + this.pages);
  }
};
book.openBook();

//to know how "this" keyword works

const video = {
  title: "game",
  parts: ['a', 'b', 'c', 'd'],
  showParts() {
    this.parts.forEach(function (parts) {
      console.log(this.title, parts);
    }, this);
  }
};
video.showParts();

//to know how "this" keyword works

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert(user.ref().name);

////////

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () { // shows the current step
    alert(this.step);
  }
};


//constructor using "new" keyword

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);

/////////////
// using "new.target keyword"
function User() {
  alert(new.target);
}
User();

/////////////

function User(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
}
let nm = prompt("what is your name");
let userName = User(nm);
alert(userName.name);

// methods in constructor

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi();

///////


function Calculator() {
  this.read = function () {
    this.a = +prompt("a value", 0);
    this.b = +prompt("b value", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calc = new Calculator();
calc.read();
alert("sum " + calc.sum());
alert("mul " + calc.mul());


////////

function Accumulator(initValue) {
  this.value = initValue;

  this.read = function () {
    this.value += +prompt('How much to add?', 0);
  };
}
let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert(accumulator.value);



//object to primitive conversion

let user = {
  name: "zubair",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500);

////

let user = {
  name: "zubair",
  toString() {
    return this.name;
  }
};
alert(user);
alert(user + 23);

////////

let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2);

////////

let obj = {

  toString() {
    return "2";
  }
};

alert(obj * 2); // string "2" is converted and multiplied by 2 and results 4. * converts string to number.

//working of weak map

let weakMap = new WeakMap();
let obj1 = {};

weakMap.set(obj1, 23); // does the job no error
weakMap.set("obj", "100"); // gives an error as strings are not accepted as keys.

//// caching example using Map.

let cache = new Map();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

//accessing above func from a different file.
let obj = {};
let result1 = process(obj);
let result2 = process(obj);
alert(cache.size); // it returns 1
obj = null;
alert(cache.size); // it also returns 1. bcz the result calc for only the 1st time. from the 2nd time onwards obj is read from the cache.

// use weakMap can overcome above issue of getting 1 even after making obj unreachable.

let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

//accessing above func from a different file.

let obj = {};

let result1 = process(obj);
let result2 = process(obj);

obj = null;

alert(cache.size); // returns undefined

// to get today 

let today = new Date();
alert(today);

// milliseconds

let Dec31_1969 = new Date(-24 * 3600 * 1000); // -24 hrs for dates before the year 1970.
alert(Dec31_1969);

let Jan01_1970 = new Date(0);
alert(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);   // +24 hrs for dates from the year 1970.
alert(Jan02_1970);

let date = new Date("08-03-2021"); // passing date in string form
alert(date);

// or can be done this way as well

let date = new Date(2011, 0, 1, 2, 3, 4, 567); //year,month-jan,date,hours,minutes,seconds,millisec
alert(date);

// some methods to access time.

let date = new Date();
alert(date.getHours());
alert(date.getMilliseconds());
alert(date.getTimezoneOffset());// returns diff between local time and UTC.

// setting time

let today = new Date();
today.setHours(0);
today.setHours(0, 0, 0, 0);   // just like hours there are methods for date,month,fullyear ant etc.
alert(today);

//Autocorrection 
let date = new Date(2020, 1, 28);
date.setDate(date.getDate() + 2); // feb 30 2020.

alert(date);// but retuen as march 01 2020. 


// date to number conversion

let date = new Date();
alert(+date);                  // returns timestamp
alert(date.getTime());


//calculating time taken to run a loop

let start = new Date(); //  time before loop

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); //  time after loop

alert(`The loop took ${end - start} ms`);
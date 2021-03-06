//accessing an non existing objects and properties

let user={};
alert(user.address?user.address:undefined);

/////

let user = {};
alert(user.address ? user.address.street ? user.address.street.name : null : null);


//optional chaining 

let user = null;

alert( user?.address );
alert( user?.address.street );

///// 

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // - outputs "I am admin"
  
  userGuest.admin?.(); //- closes without an error

  ////////

  let key="firstName";
  let user={firstName:"zubair"};
  let user1={};
  alert(user?.[key]); /// zubair
  alert(user1?.[key]); /// undefined
alert(user2?.[key]); // error

///

delete user?.name; // undefined if defined we can delete user

//

let user = null;
user?.name = "John"; // error while writing using optional chaining.

// use of symbol type

const a = 234;
const b = 234;

console.log(a==b); // true

const c = Symbol("type");
const d = Symbol("type");
console.log(c==d);       // false 

// global symbol

let id = Symbol.for("type"); // symbol is created
let idAgain= Symbol.for("type");
alert( id === idAgain ); // returns true 

let idOnceAgain=Symbol("type2");
alert(Symbol.keyFor(id)); // returns key for the symbol id. will not work for non-global symbols.
alert(Symbol.keyFor(idOnceAgain)); // returns undefined . will not work for non-global symbols.

// using objects as key in map.

let profile = { name: "John" };
let profInf = new Map();
profInf.set(profile,"myName");
alert(profInf.get(profile));

// iterating map using methods

let brands=new Map([['samsung',5],['LG',4.5],['onida',4]]);
for(let names  of brands.keys()){
    alert(names);
}
for(let stars  of brands.values()){
    alert(stars);
}
for(let entry of brands){
    alert(entry);
}

// iterating map using forEach

brands.forEach( (value, key) => {
    alert(`${key}: ${value}`);
  });

// creating map from an object

let obj3={name:zubair,age:24};
let myMap= new Map(Object.entries(obj3));
alert(myMap.get(age));

// creating object from a map
let brands=new Map([['samsung',5],['LG',4.5],['onida',4]]);
let obj5=Object.fromEntries(brands.entries());
alert(obj5.samsung);

// creating and iterating over a set

let set = new Set(["oranges", "apples", "bananas","apples"]);

for (let value of set) {alert(value);} // sets while iteration ignore duplicates. apples is displayed only once.

// a example progrom using map

let arr1 = ["owl", "teachers", "cheaters", "Low", "WEER", "were", "hectares"];

function anagram(arr){
let anagMap=new Map();

for(let word of arr){
    let sorted = word.toLowerCase().split('').sort().join('');
    anagMap.set(sorted,word);
}
return Array.from(anagMap.values());
}
alert(anagram(arr1));
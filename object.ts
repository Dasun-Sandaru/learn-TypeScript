let person1: {name: string, age: number, isStudent: boolean} = {
  name: "Dasun",
  age: 27,
  isStudent: true,
}

let person2: {name: string, age: number, isStudent: boolean} = {
  name: "John",
  age: 30,
  isStudent: false,
};

// custom types
type Person = { 
  name: string;
  age: number;
  isStudent: boolean;
};

let person3: Person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};


type myStringOrNumber = string | number;
let myVariable: myStringOrNumber = "Hello";
let anotherVariable: myStringOrNumber = 42;

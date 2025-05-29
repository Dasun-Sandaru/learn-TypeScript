let myVeriable: any = 10;
let unknownVariable: unknown = 10;

myVeriable = "Hello"; // This is fine, as 'any' can hold any type
unknownVariable = "Hello"; // This is also fine, as 'unknown' can hold any type

myVeriable.toUpperCase();
//unknownVariable.toUpperCase(); // This will cause a TypeScript error, as 'unknown' must be type-checked first

if (typeof unknownVariable === "string") {
  unknownVariable.toUpperCase(); // Now this is fine, as we've checked the type
}

// type assertion
(unknownVariable as string).toUpperCase(); // or unknownVariable.toUpperCase();


// type casting
unknownVariable = "5";
unknownVariable = +"5"; // This will convert the string "5" to the number 5

unknownVariable = "true";
unknownVariable = +"true"; // This will convert the string "true" to the boolean true


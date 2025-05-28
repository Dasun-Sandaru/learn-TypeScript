// functions

function add(a: number,b: number): number {
    return a + b;
}

function sayHello(msg: string): void{
    console.log(msg);
}

function getArray(arr: number[]): number[] {
    return arr;
}

// let sub = (a,b) => {
//     return a - b;
// }

let sub = (a: number, b: number): number => {
    return a - b;
}
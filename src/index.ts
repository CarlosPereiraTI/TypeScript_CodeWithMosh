/*
// console.log('Hello World');

let age: number = 20;

// unable to set another type to one already defined
// age = 'a;'

if (age < 50) {
    age += 10;
}

console.log(age);


// ---------------------------------------------------
let sales: number = 123_456_789;
let course: string = "TypeScrip";
let is_published: boolean = true;

// is not necessary to write the type
// ex:
// let course = "TypeScrip";
// TS understand that is an string

let level; // Considered any

// The any type
// is not recommended to use it, with this we are not using the main benefit of TS



// Arrays
//let numbers = []; // this is considered as any
// we should use something like
let numbers: number[] = [];
// this is empty but won't accepts any kind of elements.

// numbers.forEach(n => n.)

// Tuples


// Instead of arrays we can use tuples to represent different types
let user: [number, string] = [1, "Charlie"];
user.push(1);



// Enums
// PascalCase
const enum Size { Small, Medium, Large };
// as default it start in 0
// we can use explicit another value
// enum Size { Small = 's', Medium = 'm', Large = 'l' };
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
// as good practice always set the value to return
function calculateTax(income: number): number {
    // return 0;
    if (income < 50_000){
        return income * 1.2;
    }
    return income;
}


// Objects
// let employee = {id: 1};
// employee.name = "Charlie"; / Not valid in TS
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
} = { 
    
    id: 1,
    name: 'Charlie',
    retire: (date: Date) => {
        console.log(date);
    }

    };
// employee.name = "Charlie"; -> valid but is not the best practive


// Advanced types
// Type Aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: {
    
} = { 
    
    id: 1,
    name: 'Charlie',
    retire: (date: Date) => {
        console.log(date);
    }

    };
*/

// Union
/*
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number'){
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10Kg');
*/

// Intersection Types
/*
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
*/

// Literal types (exact, specific)
/*
type Quantity = 50 | 100;

let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';
*/


// Nullable values
/*
function greet(name: string | null | undefined){
    if (name){
        console.log('Hello' + name.toUpperCase());
    } else {
        console.log('Hello Guess!');
        
    }
        
    
}

greet(undefined);
*/


// Optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional propoerty access opetator
console.log(customer?.birthday?.getFullYear());

// Optional call
let log: any = null;
log?.('a');



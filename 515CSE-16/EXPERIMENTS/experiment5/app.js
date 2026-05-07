let person = {
    name: "GUNGUN",
    age: 20,
    class: "BTech"
    
};
console.log(person.name);
console.log(person.age);
console.log(person.class);
typeof
console.log(typeof(person));

let numbers =[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(typeof(numbers));

let mixedArray = [1, "Hello" ,true, [1,2,3], {name: "GUNGUN", age:20}];
console.log(mixedArray[0]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray[5]);

function greet() {
    console.log("Hello, World!");
}
greet();

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

let square = x => x*x;
console.log(square(4));

//map on array
let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num) => num* 5);
console.log(squaredArray);    //[5,10,15,20,25]

let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); //[2,4]


let sum = [1,2,3,4,5];
let total= sum.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
console.log(total);   //15

let subtract =[1,2,3,4,5];
let number= subtract.reduce((accumlator, currentValue) => accumlator - currentValue, 2);
console.log(number);  //-13

let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "charlie", marks: 78 },
];
let marks = students.map(student.marks);
console.log(marks);
let names = students.map(student.names);
console.log(names);
let toppers = students.filter(student => student.marks>=80);
console.log(toppers);
let totalMarks = students.reduce((acc,student) => acc + student.marks,0);
console.log(totalMarks);

let mixedObject = {
    name: "Gungun" ,
    age: 20,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    greet: function() {
        console,log("Hello!");
        let arrowGreet = () => {
            console.log("Hi");
        }
    }
};
console.log(mixedObject.name); // Gungun
console.log(mixedObject.age);  //20
console.log(mixedObject.hobbies);  //[------]
console.log(mixedObject.hobbies[0]); //reading
console.log(mixedObject.hobbies[1]); //traveling
console.log(mixedObject.hobbies[2]); //coding
console.log(mixedObject.address); // {street: "123 -----"}

console.log(mixedObject.address.street); //123 Main St
console.log(mixedObject.address.city); //New York
console.log(mixedObject.address.country); //USA

mixedObject.address.greet(); //Hello!

//object inside array
let people =[
    {name: "Gungun", age: 20},
    {name: "Drishti", age: 20},
    {name: "Hansika", age: 18}
];
console.log(people[0]); //{name: "Gungun", age: "20"}
console.log(people[1].name); //Drishti
console.log(people[2].age); //18

//array inside object
let company ={
    name: "Tech Crop",
    employees: ["Alice", "Bob", "Charlie"]
};
console.log(company.name); //Tech Crop
console.log(company.employees); //["Alice", "Bob", "Charlie"]
console.log(company.employees[0]); //Alice
console.log(company.employees[1]); //Bob
console.log(company.employees[2]); //Charlie
// Program 1
function scope() {
    let a = "This is 'let' variable."
    const b = "This is 'const' variable."
    var c = "This is 'var' variable."

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("Program 1")
scope();
console.log("\n------------------------------");

// Program 2
function returnSecondFruit(fruits) {
    console.log(fruits);
    console.log(fruits[1]);
}

console.log("\nProgram 2")
returnSecondFruit(["Apple", "Banana", "Chiku", "Watermelon", "Grapes"]);
console.log("\n------------------------------");

// Program 3
function modifyArray(arr) {
    console.log(arr);
    arr.push("Pineapple");
    console.log(arr);
    arr.pop();
    console.log(arr);
}

console.log("\nProgram 3")
modifyArray(["Apple", "Banana", "Chiku", "Watermelon", "Grapes"]);
console.log("\n------------------------------");

// Program 4
function squared(arr) {
    console.log(arr);
    return arr.map(num => num * num);
}

console.log("\nProgram 4")
const sqArr = squared([2, 3, 4, 5]);
console.log(sqArr);
console.log("\n------------------------------");

// Program 5
function filterEven(arr) {
    console.log(arr);
    const oddArr = arr.filter(num => num % 2 != 0);
    return oddArr;
}

console.log("\nProgram 5")
console.log(filterEven([1, 2, 3, 4, 5, 6]));
console.log("\n------------------------------");

// Program 6
const person = {
    name: "Vasu Mali",
    age: 22,
    occupation: "Student"
}

function greetPerson(obj) {
    console.log(`Hello my name is ${obj.name}. I am ${obj.age} years old and I am a ${obj.occupation}.`);
}

console.log("\nProgram 6")
greetPerson(person);
console.log("\n------------------------------");

// Program 7
function areaRectangle(obj) {
    console.log(`Width: ${obj.width} and Height: ${obj.height}`);
    return (obj.width * obj.height);
}

console.log("\nProgram 7")
const area = areaRectangle({width: 5, height: 10});
console.log("Area : "+area)
console.log("\n------------------------------");

// Program 8
const user = {
  name: "Vasu",
  age: 22,
  role: "Developer",
  city: "Pune"
};

function getObjKeys(obj) {
    return Object.keys(obj);
}

console.log("\nProgram 8")
const keys = getObjKeys(user)
console.log(keys)
console.log("\n------------------------------");

// Program 9
function mergeObj(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { name: "Vasu", age: 22 };
const obj2 = { occupation: "Developer", city: "Pune" };

console.log("\nProgram 9")
console.log("Object 1 : ",obj1);
console.log("Object 2 : ",obj2);

const mergedObj = mergeObj(obj1, obj2);
console.log("Merged Object : ",mergedObj)
console.log("\n------------------------------");

// Program 10
function sumArr(arr) {
    console.log(arr)
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum)
}

console.log("\nProgram 10")
sumArr([1, 2, 3, 4])
console.log("\n------------------------------");
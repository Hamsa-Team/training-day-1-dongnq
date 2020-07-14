import { hello } from "./data.js"

// var - let - const 
var test = [1, 2, 3, 4, 5, 6];
let test2 = [7, 8, 9]
const user = {
    name: "Long",
    address: "Hung Yen"
}

//template literal + destructuring assignment
const { name, address } = user;
console.log(`name: ${name}, address: ${address}`);

//rest parameter
function sum(...number) {
    console.log(number);
}

//spread syntax
sum(...test, ...test2);

//bind + this
function testFunc() {
    console.log(this);
}
const bindTest = testFunc.bind(user);

bindTest()

//arrow function + async/await

const getData = async () => {
    try {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("async"), 3000);
        })
        let res = await promise;
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

getData()

//promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise");
        reject(new Error("Rejected"))
    }, 1000);
})
promise.finally(() => {
    console.log('done');
}).then((val) => {
    console.log(val);
}).catch(err => {
    console.log(err);
})

//import/export
hello(user.name)
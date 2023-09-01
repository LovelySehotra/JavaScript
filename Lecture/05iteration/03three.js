// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    console.log(key);
    // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
    
// }
//example of for in loop 
// const iterable = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ]);
  
//   for (const entry of iterable) {
//     console.log(entry);
//   }
//   // ['a', 1]
//   // ['b', 2]
//   // ['c', 3]
  
//   for (const [key, value] of iterable) {
//     console.log(value);
//   }
//   // 1
//   // 2
//   // 3
  
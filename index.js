// parentObj = {
//     calAge: function() {
//         console.log(`${this.name} ${this.age}`)
//     }
// }

// let childObj = Object.create(parentObj);

// childObj.name = 'Anamika';
// childObj.age = 12;

// childObj.calAge();

// parentObj = {
//     sum: function(arr) {
//         let sum = 0;
//         for(let i = 0;i< arr.length;i++) {
//             sum += arr[i];
//         }
//         console.log(sum);
//     }
// }

// let childObj = Object.create(parentObj);
// childObj.sum([1, 2, 3, 4, 5]);
// childObj.sum([3, 4, 5, 6, 7])

// const greatGrandFather = {
//     House: 'Karol Bagh'
// }

// let grandfather = {
//     age: 70,
//     location: 'Hyderabad'
// }

// grandfather = Object.create(greatGrandFather);

// const father = Object.create(grandfather);

// father.name = 'John';

// console.log(father.name);
// // console.log(father.location)
function retriveOwnProperties(user) {
    return Object.keys(user);
}

function inheritetedProperties(user) {
    return user.toString();
}

const user = {
    name: 'Alex',
    age: 30
}

console.log(retriveOwnProperties(user));
console.log(inheritetedProperties(user));


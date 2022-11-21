//Методи масивів

// const square = (a, b) => a * b
//
// console.log(square(126,30));



// перенос букв по одній вниз

// let str = 'Privet Dimon!';
// console.log(str);
// console.log(str[0]);
// for (const strElement of str) {
//     console.log(strElement);
// }

// верхній нижній регістр букв

// let str = 'Privet Dimon!';
// console.log(str);
// let s = str.concat('!!!');
// console.log(s);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('Privet'));
// console.log(str.endsWith('Dimon'));
// console.log(str.substring(0, 13));
// console.log(str.indexOf('v'));
// console.log(str.lastIndexOf('D'));
// console.log(str.indexOf('v 5'));
// console.log(str.charAt(7));
// console.log(str.replaceAll('r', 'Y'));
// let split = str.split(' ');
// console.log(split);

// додавання в масив елементів

// let arr = [];
// console.log(Array.isArray(arr));
// // arr[arr.length] = 100;
// console.log(arr.push('new element1'));
// console.log(arr.push('new element2'));
// console.log(arr.push('new element3'));
// console.log(arr.push('new element4'));
// console.log(arr.push('new element5'));
// console.log(arr);
//
// console.log(arr.pop());
// console.log(arr);
//
// arr.unshift('!!!');
// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr);

// єднання масивів і вирізання

// let join = arr.join(';'); // розділяння елементів знаками, або пробылами
// console.log(join);
//
// let nums = [12, 22, 33];
// let concat = arr.concat(nums);
// console.log(concat);
// console.log(arr);
// console.log(nums.reverse());
//
// console.log(concat);
// let slice = concat.slice(0, 4);
// console.log(slice);
// console.log(concat);

// let splice = concat.slice(0, 2);
// console.log(slice);
// console.log(concat);

// console.log(concat.indexOf(11, 1));

// console.log(concat.includes(2));
// console.log('Hello okten'.includes('ok'));


// функції масиву з зворотними викликами!!!!!!!!!

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// users.forEach(function (value, index,array) {  // звичайна функція
//     console.log(value);
//
// });

// users.forEach(value => console.log(value));    // через стрілочну функцію

// let filteredUsers = users.filter(function (value) {    // відфільтровати та перенести масив в ноаий масив
//     return value.age > 30;
// });
// console.log(filteredUsers);

// let filteredUsers = users.filter( value => value.age < 30  );  // аналог з верху стрілковою функцією
// console.log(filteredUsers);

// let mapUsers = users.map(function (value,index) {
//     let newUsers = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     };
// return newUsers;
// })
//
// console.log(mapUsers);

// let mapUsers = users.map(function (value,index) {  //скорочений вид
//        return {...value, id:index+1};
// });
// console.log(mapUsers);

// users.map((value, index) => {
//     return {id: index + 1, name: value.name, age: value.age, status: value.status}
// })

// let find = users.find(value => value.name === 'max');  //пошук в масиві
// console.log(find);

// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sort = users.sort((u1, u2) => {
//         return u1.age - u2 .age;
// });
// console.log(sort);

// сортовання по іменні

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name === b.name) {
//         return 0
//     }
//
// }));
// метод сортування по обєктам і масивам Reduce

let reduce =   users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    }else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT: [], statF: []});
console.log(reduce);

// function fileter(array, predicateFn) {
//     let filterArr = [];
//     for (const item of array) {
//         if (predicateFn(item)) {
//             filterArr.push(item);
//         }
//
//     }
//
//     return filterArr;
// }
//
//
// console.log(fileter(users, (item) => item.status));
// console.log(fileter(users, (item) => item.age > 30));
//
// let products = [
//     {
//         title: 'MILK',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'JUICE',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'TOMATO',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'TEA',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// console.log(fileter(products,(value) => value.price > 15));
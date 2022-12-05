//масиви та обєкти урок №2

// let arr = [
//     [12,23,41],
//     [],
//     [],
// ]
//
// console.log(arr);
//
// const innerArray = arr[0];
// console.log(innerArray);
//
// console.log(typeof arr);

// Object

// const obj = {
//     id: 1412341,
//     name: 'Dima',
//     age:31,
//     skill: ['html', 'js', 'java'],
//     wife: {
//         name: 'olya',
//         age: 30
//     }
// }
// console.log(obj.name);    // просто через крапку
// console.log(obj['id']);   // якщо через [] скобки то в скобках
//
// console.log(obj.skill[2]);
//
// console.log(obj.wife['name']);
//
// let users = [
//     {skills: ['html', 'JS', 'mongo'], username: 'Waldo', name: 'Dmytro', password: 123456},
//     {skills: ['html', 'JS', 'mongo'], username: 'Taipa', name: 'Andriy', password: 123456789},
//     {skills: ['html', 'JS', 'mongo'], username: 'Fawne', name: 'Taras', password: 12345678},
//     {skills: ['html', 'JS', 'mongo'], username: 'Peace', name: 'Petro', password: 12345},
//     {skills: ['html', 'JS', 'mongo'], username: 'Danell', name: 'Anna', password: 111111},
//     {skills: ['html', 'mySQL', 'mongo'], username: 'Cala', name: 'Julia', password: 1234567},
//     {skills: ['html', 'mySQL', 'mongo'], username: 'Tyna', name: 'Swetlana', password: 'sunshine'},
//     {skills: ['html', 'mySQL', 'mongo'], username: 'Theodore', name: 'Iryna', password: 'qwert'},
//     {skills: ['html', 'mySQL', 'mongo'], username: 'Zoolal', name: 'Lena', password: 'iloveyou'},
//     {skills: ['html', 'mySQL', 'mongo'], username: 'Martell', name: 'Viktoriya', password: 'password'},
// ];

// console.log(users[0].name); // перший спосіб
// console.log(users[1]['name']); // другий спосіб

// масив в обєкті масиву

// console.log(users[0].skills[1]);


// users[0]['name'] = 'Igor';
//
// console.log(users[0]);

// delete users.skills;
// console.log(users);

// IF ELSE

// let color = prompt('який колір на світлофорі?',  '');
//
// if (color === 'red') {
//     console.log('Стій')
// }else {
//     console.log('Іди')
// }


// let color = prompt('enter color');
//
// switch (color) {
//     case 'green':
//         console.log('go!');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('введений не вырний формат')
// }

//ЦИКЛИ!

// FOR

// let x = 0;
// x = x + 1;
// console.log(x)


// for (let i = 0; i < users.length; i++) {
//     document.write(`<h3>тут находиться користувач- ${users[i].name} ${users[i].username} - ${users[i].skills } - </h3>`)
//
//
//     debugger;
// }

// FOR OF

// for (const user of users) {
//     document.write(`<h3>
// тут находиться користувач-
// ${user.name}
// ${user.username} -
// ${user.skills } -
// </h3>`);
//
// }

// FOR IN
//
// for (const usersKey in users) {
//     console.log(usersKey, users[usersKey]);
//
// debugger
// }

// WHILE
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     console.log(user);
//     i++;
// }
//
// do {
//     console.log('asdagaagwedc');
// } while (false)

const users = [
    {
        name: 'Vasia',
        age:22,
        isMarried: true
    },
    {
    name: 'Anya',
    age:22,
    isMarried: false
}
]

// let reduce = userMerried.reduce((acc, value, index) => value.isMarried ? [...acc, {...value,flat: index +1}] : acc< []);
// console.log(reduce);
// console.log(userMerried);

let reduce = users.reduce((acc, value, index) => {
    if (value.isMarried) {
        value.flat = index +1;
        acc.push(value);
    }
    return acc;
},[]);
console.log(reduce);
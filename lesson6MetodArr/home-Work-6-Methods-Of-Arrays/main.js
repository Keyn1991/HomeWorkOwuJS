// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str = "'hello world', 'lorem ipsum', 'javascript is cool'";
// console.log(str.length);
//
// - Перевести до великого регістру наступні стрінгові значення
//
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let textLor = "hello world', 'lorem ipsum', 'javascript is cool'";
//
// console.log(textLor.toUpperCase());
//
// - Перевести до нижнього регістру настипні стрінгові значення
//
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let textLorem = "'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'";
// //
// console.log(textLorem.toLowerCase());
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '  dirty string   ';
// console.log(str);
// console.log(str.replaceAll(' ', ''));
//
// let str = '  dirty string   ';
// console.log(str);
// console.log(str.trim());
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
//
// let arr = str.split(' ')
// console.log(arr);
// console.log(typeof arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr =[10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(number => number.toString());
// console.log(map);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let num = [11,21,3];
const sortNums = (direction,arr) => {
    if (direction === 'ascending') {
        arr.sort((a,b) => a - b);

    }else if (direction === 'descending') {
        arr.sort((a,b) => a - b);
    }

}




// console.log(nums.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b)   {
//         return -1
//     }
//     if (a === b) {
//         return 0
//     }
//
//
// }));
// //
// //
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
// let user = coursesAndDurationArray.sort((u1, u2) => {
//     return u1.monthDuration - u2.monthDuration;
// });
// console.log(coursesAndDurationArray);
// //
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //
// let filteredUsers = coursesAndDurationArray.filter(function (value) {
//     return value.monthDuration > 5;
// });
// console.log(filteredUsers);
// //
// //
// описати колоду карт

let arrCards = [

    {card: 'clubs', value: 6, color:'black'},
    {card: 'clubs', value: 7, color:'black'},
    {card: 'clubs', value: 8, color:'black'},
    {card: 'clubs', value: 9, color:'black'},
    {card: 'clubs', value: 10, color:'black'},
    {card: 'clubs', value: 'Jack', color:'black'},
    {card: 'clubs', value: 'Queen', color:'black'},
    {card: 'clubs', value: 'King', color:'black'},
    {card: 'clubs', value: 'Ace', color:'black'},

    {card: 'spades', value: 6, color:'black'},
    {card: 'spades', value: 7, color:'black'},
    {card: 'spades', value: 8, color:'black'},
    {card: 'spades', value: 9, color:'black'},
    {card: 'spades', value: 10, color:'black'},
    {card: 'spades', value: 'Jack', color:'black'},
    {card: 'spades', value: 'Queen', color:'black'},
    {card: 'spades', value: 'King', color:'black'},
    {card: 'spades', value: 'Ace', color:'black'},

    {card: 'tambourines', value: 6, color:'red'},
    {card: 'tambourines', value: 7, color:'red'},
    {card: 'tambourines', value: 8, color:'red'},
    {card: 'tambourines', value: 9, color:'red'},
    {card: 'tambourines', value: 10, color:'red'},
    {card: 'tambourines', value: 'Jack', color:'red'},
    {card: 'tambourines', value: 'Queen', color:'red'},
    {card: 'tambourines', value: 'King', color:'red'},
    {card: 'tambourines', value: 'Ace', color:'red'},

    {card: 'hearts', value: 6, color:'red'},
    {card: 'hearts', value: 7, color:'red'},
    {card: 'hearts', value: 8, color:'red'},
    {card: 'hearts', value: 9, color:'red'},
    {card: 'hearts', value: 10, color:'red'},
    {card: 'hearts', value: 'Jack', color:'red'},
    {card: 'hearts', value: 'Queen', color:'red'},
    {card: 'hearts', value: 'King', color:'red'},
    {card: 'hearts', value: 'Ace', color:'red'},



    {value: 'Joker', color:'red'},
    {value: 'Joker', color:'black'},
];

// - знайти піковий туз

// let spadeAce = arrCards.find(value => value.card === 'spades' && value.value === 'Ace');
// console.log(spadeAce);


// - всі шістки

// let allSixes = arrCards.filter(value => value.value === 6);
// console.log(allSixes);

// - всі червоні карти


// let redColor = arrCards.filter(value => value.color === 'red');
// console.log(redColor);

// - всі буби

// let tambourines = function (array) {
//     if (array.card === 'tambourines') {
//         console.log(array);
//     }
// }
// arrCards.forEach(tambourines)

// - всі трефи від 9 та більше

// let highClubs = [];
// for (let cards of arrCards) {
//     if (cards.card === 'clubs' && cards.value !== 6 && cards.value !== 7 && cards.value !== 8) {
//         highClubs.push(cards)
//     }
// }
// console.log(highClubs);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = arrCards.reduce((accumulator, card) => {
//     if (card.card === 'spades') {
//         accumulator.spades.push(card);
//     }else if (card.card === 'tambourines') {
//         accumulator.diamonds.push(card);
//     } else if (card.card === 'hearts') {
//         accumulator.hearts.push(card)
//     } else if (card.card === 'clubs') {
//         accumulator.clubs.push(card)
//     }
//     return accumulator;
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(reduce)
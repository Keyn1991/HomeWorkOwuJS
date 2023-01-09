// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr = [];

// for (let i = 0, k = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         arr[k] = i;
//     k++
// }
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0, k = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr[k] = i
//         k++
//     }
// }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100) ;
//
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8) + 8) ;
//
// }
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < arr.length; i+=3) {
//         console.log(arr[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//
//     }
//
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr2 = [];
//
// for (let i = 0, k = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         arr2[k] = arr[i]
//         k++
//
//     }
//
// }
//
// console.log(arr2);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

//
// let newArr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i+1] % 2 === 0) {
//         console.log(newArr[i]);
//     }
//
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let priceArr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (const number of priceArr) {
//     sum  += number;
// }
// let result = sum/priceArr.length
// console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let newArr = [];
//
// for (let i = 0; i < 5; i++) {
//     arr[i] = Math.floor(Math.random() * 100) ;
//     console.log(arr[i]);
// newArr[i] = arr[i] * 5;
//     console.log(newArr[i]);
//
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

//
// let arrMixed = [4,7,3,1.6, 'fgasd', 'dasdas', 'hgadfa', 'dasdaswqv','utres', true, false];
// let newArr = [];
//
// for (let i = 0; i < arrMixed.length; i++) {
//     if (typeof arrMixed[i] === 'number'){
//         newArr[i] = arrMixed[i]
//         console.log(newArr[i]);
//     }
//
// }
//



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
            // TO BE CONTINUED .....
        // ]

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city
//         }
//     }
//
// }
// console.log(usersWithId);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [13, 24, 6, 12 ,77 ,11, 10, 90 ,88 ,16];

// let i = 0;
// while (i  < arr.length) {
//
//     if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//
//     }
//     i++
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i]
//     console.log(newArr[i]);
//
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let str = '';


// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
//
// }
// console.log(str);
//

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// while (i < arr.length){
//     str += arr[i]
//     i++
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (const string of arr) {
    str += string;

}

console.log(str);
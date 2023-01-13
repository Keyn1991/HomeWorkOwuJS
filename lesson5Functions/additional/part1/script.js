// const square = (a, b) => a * b
// console.log(square(12,3));
// function foo(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul`)
// }
// foo('Привет чувак')

// const arr = [2134,4124,4141,5626];
// function foo(array) {
//     let sum = 0;
//     for (const item of  array) {
//         sum += item;
//     }
//     return sum;
// }
// let number = foo(arr);
// console.log(number);
// min num//
// let arr = [1,2,3,4,5];
// let res = Math.min(...arr);
// console.log(res);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)




// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)








// - створити функцію яка повертає найбільше число з масиву
// const arr = [1,2,33,112,4];
// const max = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (item > max) {
//             max = item
//         }
//     }
//     return max;
// }
// console.log(max(arr));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const arr = [2134,4124,4141,5626];
// function foo(array) {
//     let sum = 0;
//     for (const item of array)
//     { sum += item;
//
//     }
//     return sum/array.length;
// }
//
// console.log(foo(arr));



//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function foo(...arguments) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max);
//
//     }
//     if (item < min) {
//         min = item;
//     }
//
//
//     console.log(max);
//
//     return min;
// }
//
//
//
// let foo1 = foo(1,2,3,4,5,6,7);
// console.log(foo1);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.





// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const arr = [1,2,3];
// function foo(array) {
//     let newArray = [];
//     for (let i = array.length - 1, j = 0; i >= 0; i--) {
//          newArray[j++] = array[i];
//
//     }
//     return newArray;
// }
//
// console.log(foo(arr));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// const foo = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
// let foo1 = foo('q');
// console.log(foo1);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3];
// function foo(array1,array2) {
//     let  res = [];
//     let xxx = array1.length >= array2.length ? array1 : array2;
//     for (let i = 0;  i < xxx.length; i++) {
//         res[i] = (array1[i] || 0) + (array2[i] || 0)
//
//     }
//     return res;
// }
//
// console.log(foo(arr1, arr2));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// const arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
//
// function foo(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//            for (const  key in array[i]) {
//                newArray[j++] = key;
//            }
//
//         }
//
//     }
// return newArray;
// }
//
// console.log(foo(arr));
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:

const arr = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];


function foo(array) {
    let newArray = [];
    for (let i = 0, j = 0; i < array.length; i++) {
           for (const  key in array[i]) {
               newArray[j++] =array[i][key];
           }



    }
return newArray;
}

console.log(foo(arr));
///
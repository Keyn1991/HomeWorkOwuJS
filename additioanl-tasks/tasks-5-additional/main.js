

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const foo = (num1, num2, num3) => {
//     if (num1 > num2 && num2 < num3) {
//         console.log(num2);
//     }else if (num2 > num1 && num1 < num3) {
//         console.log(num1);
//     }else if (num1 > num3 && num2 > num3){
//         console.log(num3)
//     }
//
// };
//
// foo(25,1, 15)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const foo = (num1, num2, num3) => {
//     if (num1 > num2 && num3 < num1) {
//         console.log(num1);
//     }else if (num2 > num1 && num3 < num2) {
//         console.log(num2);
//     }else if (num3 > num1 && num3 > num2){
//         console.log(num3)
//     }
//
// };
//
// foo(25,100, 1500)


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

// - створити функцію яка повертає найменьше число з масиву

// const arr = [20,2,33,112,4];
// const min = (array) => {
//     let min = array[0];
//     for (let item of array) {
//         if (item < min) {
//            min = item
//         }
//     }
//     return min;
// }
// console.log(min(arr));



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// const arr = [2,5,99];
//
// let sum = 0;
//
// const foo = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] ;
//
//     }
//     return sum + arr.length;
// };
//
// foo(arr);
// console.log(sum);
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// const num = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//
//     }
// }
// num(5)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function foo(a,b) {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//
//     } else  if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//
//         }
//     }
//
// }
// foo(15, 10);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// const  arr = [9,8,0,4];
// function foo(array,num) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i + 1]) {
//             let temp = array[i];
//             array[i] = array[i + 1];
//             array[i + 1] = temp;
//         }
//     }
//     return array;
// }
//
// console.log(foo(arr, 1));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// const  arr = [1,0,6,0,3];
// function foo(array) {
//     const newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         array[i] ? newArray[index++] = array[i] : counter++;
//
//     }
//
//     const num = newArray.length;
//     for (let i = num; i < num + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }
//
// console.log(foo(arr));

//
// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// A



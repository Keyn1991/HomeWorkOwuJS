

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
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
const  arr = [1,0,6,0,3];
function foo(array) {
    const newArray = [];
    let counter = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] ? newArray[index++] = array[i] : counter++;

    }

    const num = newArray.length;
    for (let i = num; i < num + counter; i++) {
        newArray[i] = 0;
    }
    return newArray;
}

console.log(foo(arr));

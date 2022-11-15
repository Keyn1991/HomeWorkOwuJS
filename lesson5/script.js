// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRec(stronaA, stronaB) {
//
//     let s = stronaA * stronaB;
//
// document.write(s);
// return 0;
//
// }
// areaRec(10, 15)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaRec(r) {
//
//     let s = 3.14 * r * r;
//
//
//     document.write(s);
//     return 0;
// }
// areaRec(15)




// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function areaRec(r, h) {
//
//
//
//     let s =  Math.PI * r * (r + h);
//
//
//     document.write(s);
//     return 0;
// }
// areaRec(20, 30)
//
// //

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayPrinter(arr) {
//     for (const item of arr) {
//         console.log(item)
//
//     }
// }
//
// arrayPrinter([123,5125,512,15151, 'hello', 'world', 'owo']);




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(tag, text) {
//     document.write(`<${tag}>${text}</$tag> `)
//
//
// }
// text('p', 'Hello World');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function create(text) {
//
//     document.write(`<ul>`);
//
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
// }
//
// create('Hello World!',)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function create(text, elementLi) {
//
//     document.write(`<ul>`);
//     for (let i = 0; i < elementLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// create('Hello World!', '3')
//


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrayPrinter = [7, 11, 90, 'Dmytro', 'Potapchuk', true, false, null];
//
// function arr(array) {
//
//     document.write(`<ul>`);
//
//     for (let item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr(arrayPrinter);
//



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
        {id: 14715, name: 'vasya', age: 31},
        {id: 21414, name: 'petya', age: 30},
        {id: 34124, name: 'kolya', age: 29},
        {id: 45151, name: 'olya', age: 28}
    ];
function arrayObjectsUsers(array) {



    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        document.write
        (`<div><ul>
             <li>id:${user.id}</li>
				<li>name: ${user.name}</li>
				<li>age: ${user.age}</li>
			</ul></div>`);

    }
    document.write(`</div>`)

}


arrayObjectsUsers(users)



// - створити функцію яка повертає найменьше число з масиву

// arrayNum = [1, 5, 11, 14, -6, 7, -4, 15];
// function getMinNum(arrayNum) {
//     let min = arrayNum[0];
//     for (let number of arrayNum) {
//         if (min > number) {
//             min = number;
//         }
//     }
//
//     return min;
//
//
// }
// console.log(getMinNum(arrayNum));
//


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// arrayNum = [1, 5, 11, 14, -6, 7, -4, 15];
//
// function arrSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//
//     }
//     console.log(sum);
//
// }
// arrSum(arrayNum)
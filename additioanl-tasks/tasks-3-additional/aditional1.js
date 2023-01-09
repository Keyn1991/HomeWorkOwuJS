// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array = [4,7,3,1.6, 'fgasd', 'dasdas', 'hgadfa', 'dasdaswqv','utres', true, false];
//
// console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let arr = [];
//
// arr.push('padfa','gada', 'arfar');
// console.log(arr);


// - є масив [2,17,13,6,22,31,45,66,100,-18] :


// 1. перебрати його циклом while

// let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while ( i < arr.length) {
//
//
//     console.log(arr[i]);
//     i++;
// }

//     2. перебрати його циклом for
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i= 0;
// while (i < arr.length)  {
//
//     let arr1  = arr[i]
//     if (arr1 % 2 !== 0 ) {
//         console.log(arr1);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 !== 0) {
//        console.log(arr[i]);
//    }
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < arr.length)  {
//
//     if (arr[i] % 2 === 0 ) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = 0; i < arr.length; i++) {
//
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"


// for (let i = 0; i < arr.length; i+=3) {
//         arr[i] = 'okten';
//     console.log(arr);
// }

// 8. вивести масив в зворотньому порядку.
// let i = 0;
// while (arr.length  > i) {
//
//
//     console.log(arr[i]);
//     i--;
// }

 // let i = arr.length;
// while ( i > 0) {
//     console.log(arr[i]);
//     i--;
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// #1

// let i = arr.length;
// while ( i > 0) {
//     console.log(arr[i]);
//     i--;
// }

//#2

// for (let i = arr.length; i > 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

//#3

// let i = arr.length;
// while (i > 0 )  {
//
//
//     if (arr[i] % 2 !== 0 ) {
//         console.log(arr[i]);
//     }
//     i--;
// }

//#4

// for (let i = arr.length; i > 0; i--) {
//    if (arr[i] % 2 !== 0) {
//        console.log(arr[i]);
//    }

// }

//#5

// let i =  arr.length;
// while (i > -18)  {
//
//     if (arr[i] % 2 === 0 ) {
//         console.log(arr[i]);
//     }
//     i--;
// }

//#6

// for (let i = arr.length; i > -18 ; i--) {
//
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

//#7

// for (let i = 0; i < arr.length; i+=3) {
//         arr[i] = 'okten';
//     console.log(arr);
// }

// let i =  arr.length;
// while (i >= -18)  {
//
// if (i-=3) {
//     arr[i] = 'okten'
// }
//         console.log(arr[i]);
//     i-=3;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


let arrNum = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 100 ];

// for (let i = 0; i < arrNum.length; i++) {
//     const arrElement = arrNum[i];
//     console.log(arrElement);
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrStr = ['afafa', 'dadadtgas', 'ikyugjg', 'vbcbdc', 'hdfgd', 'fasfqyh', 'fasfhy', 'jytufjt', 'ipuipo', 'hwgtvvb'];
//
// let i = 0;
// while (i < arrStr.length){
//     console.log(arrStr[i])
//     i++
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrMixed = [4,7,3,1.6, 'fgasd', 'dasdas', 'hgadfa', 'dasdaswqv','utres', true, false];

// for (let i = 0; i < arrMixed.length; i++) {
//     console.log(arrMixed[i]);
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// for (let i = 0; i < arrMixed.length; i++) {
//
//     if (typeof arrMixed[i] === "boolean") {
//         console.log(arrMixed[i])
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (let i = 0; i < arrMixed.length; i++) {
//
//     if (typeof arrMixed[i] === "number") {
//         console.log(arrMixed[i])
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (let i = 0; i < arrMixed.length; i++) {
//     if (typeof arrMixed[i] === 'string') {
//         console.log(arrMixed[i]);
//     }
//
// }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


let arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = i;

}
console.log(arr);


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
//     document.write(i, '_')
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
//     document.write(i, '_')
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i+=2) {
//     console.log(i)
//     document.write(i, '_')
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//
//         console.log(i)
//         document.write(i, '_')
//
//
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//
//         console.log(i)
//         document.write(i, '_')
//
//
//     }
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'bookname1',
        pageCount: 250,
        genres: ['art'],
        authors: ['author1']
    },
    {
        title: 'bookname2',
        pageCount: 300,
        genres: ['scientific', ],
        authors: ['author2', 'author3']
    },
    {
        title: 'bookname3',
        pageCount: 350,
        genres: ['fiction', ],
        authors: ['author4']
    },
    {
        title: 'bookname4',
        pageCount: 400,
        genres: ['technical'],
        authors: ['author5', 'author6']
    },
    {
        title: 'bookname5asdada',
        pageCount: 450,
        genres: ['scientific', 'technical', 'sdad', 'dasda'],
        authors: ['author7', 'author8', 'author9']
    },
]




// -знайти наібльшу книжку.

// let count = books[0];
//
// for (const book of books) {
//     if (book.pageCount > count.pageCount) {
//         count = book;
//     }
//
// }
// console.log(count);


// - знайти книжку/ки з найбільшою кількістю жанрів

// let count = books[0];
//
// for (const book of books) {
//     if (book.genres.length > count.genres.length) {
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найдовшою назвою

// let count = books[0];
//
// for (const book of books) {
//     if (book.title > count.title) {
//         count = book;
//     }
//
// }
// console.log(count);
// - знайти книжку/ки які писали 2 автори

// let count = books[0];
//
// for (const book of books) {
//     if (book.authors.length === 2) {
//         count = book;
//     }
//
// }
// console.log(count);

// - знайти книжку/ки які писав 1 автор

// let count = books[0];
//
// for (const book of books) {
//     if (book.authors.length === 1) {
//         count = book;
//     }
//
// }
// console.log(count);




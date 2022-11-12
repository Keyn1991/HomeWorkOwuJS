// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [ 1, 7, 10, 90, 17, 'Dmytro', 'Sofia', 'Vova', 'Masha', 'Misha', 'Hello', 'World', 14, false, false ];
// console.log(arr);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr=[]
//
// arr[0] = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
// arr[1] = 'quia et suscipit suscipit recusandae consequuntur';
// arr[2] = 'expedita et cum reprehenderit molestiae ut ut quas totam';
// arr[3] = 'nnostrum rerum est autem sunt rem eveniet architecto';
// arr[4] = 'est rerum tempore vitae sequi sint nihil reprehenderit';
// arr[5]=['dolor beatae ea dolores neque fugiat blanditiis']
// arr[6]=['ea molestias quasi exercitationem repellat qui ipsa sit aut']
// arr[7]=['iusto sed quo iure voluptatem occaecati omnis eligendi au']
// arr[8]=['ullam et saepe reiciendis voluptatem adipisci']
// arr[9]=['amet autem assumenda provident rerum']
// arr[10]=['repudiandae veniam quaerat sunt sed']
//
//
// console.log(arr[2]);





// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// 1. перебрати його циклом while

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//
//
//     console.log(arr[i]);
//     i++;
// }

//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//
//
//     console.log(arr[0]);
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !==  0) {
//         console.log(arr[i]);
//
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// 8. вивести масив в зворотньому порядку.

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//


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
        title: 'bookname5',
        pageCount: 450,
        genres: ['scientific', 'technical'],
        authors: ['author7', 'author8', 'author9']
    },
]


let count = books[0];


for (const book of books) {
    if (book.pageCount > count.pageCount) {
        count = books;
    }

}
console.log(count);
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор




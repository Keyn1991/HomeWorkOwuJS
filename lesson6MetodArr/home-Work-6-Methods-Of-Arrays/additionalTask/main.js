// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// document.writeln(cutString('наслаждение',3));

// function cutString(str,n) {
//     let string = []
//     for (let i = 0; i < str.length; i = i+n) {
//        string.push(str.substr(i, n))
//     }
//     return string;
// }
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

//   let string = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//     console.log(string.substring(0, length));
//
// }
//
// delete_characters(string, 6)



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));


// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     let string = str.split(' ');
//     for (const a of string) {
//         document.write(a.concat('-').toUpperCase())
//     }
//
// }
//
// insert_dash(str)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let string = 'хочу вивчити JavaScript'
// function upCase(str) {
//     console.log(str.replace(str[0], str[0].toUpperCase()));
// }
//
//
//
// upCase(string)

// let str = 'hello';
// const toUP = (str) =>
//     str[0].toUpperCase() + str.slice(1)
//
//
// console.log(toUP(str));

// - Дано список імен.

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// const foo = (n1, n2, n3) => {
//     console.log(n1, n2, n3);
//
//
// }
// foo(n1.replace(/[^a-zа-яё0-9\s]/gi, ' '))
// foo(n2.replace(/[^a-zа-яё0-9\s]/gi, ' '))
// foo(n3.replace(/[^a-zа-яё0-9\s]/gi, ' '))
//
//
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'




//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.





// let random_start = 1;
// let random_end = 100;
// let allСycles = 100;
//
// let arr= []
//
// for( i = random_start; i <= random_end;i++) {
//     arr.push(i)
// }
//
// for( countCycles = 1; countCycles <= allСycles; countCycles++){
//     console.log(arr.splice(Math.random()*arr.length,1)[0])
// }

// function foo() {
//     let from = 1, to = 100, n = 100;
//     let result = [...Array(to - from +1).keys()].map(i => i + from)
//         .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), [])
//         .slice(0, n);
//
//     console.log(result)
//
// }
// foo()

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function foo() {
//     let from = 1, to = 100, n = 100;
//     let result = [...Array(to - from +1).keys()].map(i => i + from)
//         .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), [])
//         .slice(0, n);
//
//     console.log(result)
//     return   result.sort()
//
// }
//
// foo()


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.sort());

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
//
// document.writeln(count(str, symb)) // 5

// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(str, 5));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню



// 21314 --> '14124 + 300 + 50 +6'

// const number = (number) => {
//   const arr = [];
//   let index = 0;
//
//   while (number) {
//       let i = number %10 *10 ** index++;
//       arr.unshift(i);
//       number /=10;
//       number = parseInt(number);
//
//       if (i === 0) {
//           arr.shift();
//
//       }
//   }
//   return arr.join('+')
//
// }
// let s = number(30303);
// console.log(s);


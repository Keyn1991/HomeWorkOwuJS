
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('це великий масив!', '');
}else {
    console.log('це малий масив!', '');
}



// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.



// - Перепишіть конструкцію if з використанням умовного оператора '?':

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
//
//
//
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!




//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('Введіть номер квартири');

if (apartment >= 1 && apartment <= 20) {
    alert('Це перший підїзд!')
}else if (apartment >= 21 && apartment <= 48) {
    alert('Це другий підїзд!')
}else if (apartment >= 49 && apartment <= 90) {
    alert('Це третій підїзд!')
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Введіть цифру');
//
// if (number === 10) {
//     console.log('ВІРНО')
// }else if (number !== 10) {
//     console.log('НЕВІРНО')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('яка температура на дворі?');
//
// if (temp >= 10 && temp < 22){
//     console.log('йдемо ВЧИТИСЯ!')
// } else {
//     console.log('вчимося ОНЛАЙН!')
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
//
// let number = +prompt('Введіть цифру');
//
// switch (number) {
//     case 1:
//         console.log('Вы виграли авто!');
//         break;
//     case 2:
//         console.log('Вы виграли мото!');
//         break;
//     case 3:
//         console.log('Вы виграли телефон!');
//         break;
//     case 4:
//         console.log('Вы виграли єнота!');
//         break;
//     case 5:
//         console.log('Вы виграли кота!');
//         break;
//     default:
//         console.log('Вы програли!');
// }
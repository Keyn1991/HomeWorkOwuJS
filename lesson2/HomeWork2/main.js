
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['Hello', 'Dmytro', 'Potapchuk', 'age', 7, 11, 1990, 0, true, 'owo' ];
console.log(arr);









// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {
    title: 'React TypeScript Node',
    pageCount:  544,
    genre: 'Programming'
}

let book_2 = {
    title: 'JavaScript',
    pageCount:  647,
    genre: 'Programming'
}

let book_3 = {
    title: 'Python kurs dla nauczycieli i studentow',
    pageCount:  416,
    genre: 'Programming'
}





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookTS = {
    title: 'React, TypeScript, Node',
    pageCount: 544,
    genre: 'Programming',
    authors:
    {name: ['David Choi'], age: [38]}


}

let bookJS = {
    title: 'JavaScript',
    pageCount:  647,
    genre: 'Programming',
    authors:
    {name: ['Jon Duckett'], age: [33]}
}

let bookPython = {
    title: 'Python kurs dla nauczycieli i studentow',
    pageCount: 416,
    genre: 'Programming',
    authors:
    {name: ['David Choi'], age: [39]}

}








// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {username: 'Waldo', name: 'Dmytro', password: 123456},
    {username: 'Taipa', name: 'Andriy', password: 123456789},
    {username: 'Fawne', name: 'Taras', password: 12345678},
    {username: 'Peace', name: 'Petro', password: 12345},
    {username: 'Danell', name: 'Anna', password: 111111},
    {username: 'Cala', name: 'Julia', password: 1234567},
    {username: 'Tyna', name: 'Swetlana', password: 'sunshine'},
    {username: 'Theodore', name: 'Iryna', password: 'qwert'},
    {username: 'Zoolal', name: 'Lena', password: 'iloveyou'},
    {username: 'Martell', name: 'Viktoriya', password: 'password'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
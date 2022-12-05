// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//
//    constructor (id, name, surname , email, phone) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone
//    }
// }
// let user0 = new User(1,'vasia', 'Norma','pgafas@sdgsf.com', 4914598758);
// let user1 = new User(2,'petia', 'Emmanuel','ads@sdgsf.com', 4914478758);
// let user2 = new User(100, 'olya', 'Jamia','basdfas@sdgsf.com', 49165498758);
// let user3 = new User(4, 'anton', 'Mathilde','pgafgds@sdgsf.com', 4914596758);
// let user4 = new User(5, 'ivan', 'Damiana','srs@sdgsf.com', 491459878);
// let user5 = new User(6, 'sasha', 'Davina','sftseas@sdgsf.com', 474914598758);
// let user6 = new User(7, 'masah', 'Martina','pipfas@sdgsf.com', 4914698758);
// let user7 = new User(8, 'dasha', 'Laurie','msgss@sdgsf.com', 49146868758);
// let user8 = new User(9, 'ilya', 'Augustus','ueryas@sdgsf.com', 49145878958);
// let user9 = new User(10, 'oleg', 'Estebana','poipoas@sdgsf.com', 49145213658);
//
//
//
//
// let arr = [];
// arr.push(user0,
//            user1,
//            user2,
//            user3,
//            user4,
//            user5,
//            user6,
//            user7,
//            user8,
//            user9);

// console.log(arr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(arr => arr.id % 2 ===0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let users = arr.sort((user0, user1) => user0.id - user1.id);
// console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
// let user0 = new Client(1,'vasia', 'Norma','pgafas@sdgsf.com', 4914598758, ['beer', 'cili', 'vino','roll','bun','brown bread']);
// let user1 = new Client(2,'petia', 'Emmanuel','ads@sdgsf.com', 4914478758, ['candy', 'tea', 'tomato','white bread','rye bread']);
// let user2 = new Client(100, 'olya', 'Jamia','basdfas@sdgsf.com', 49165498758, ['melesma', 'lesions','vascular']);
// let user3 = new Client(4, 'anton', 'Mathilde','pgafgds@sdgsf.com', 4914596758, [ 'acne', 'tattoo']);
// let user4 = new Client(5, 'ivan', 'Damiana','srs@sdgsf.com', 491459878, ['chocolate', 'toffees']);
// let user5 = new Client(6, 'sasha', 'Davina','sftseas@sdgsf.com', 474914598758, ['marshmallows', 'lollipops']);
// let user6 = new Client(7, 'masah', 'Martina','pipfas@sdgsf.com', 4914698758,['mints']);
// let user7 = new Client(8, 'dasha', 'Laurie','msgss@sdgsf.com', 49146868758, ['candies']);
// let user8 = new Client(9, 'ilya', 'Augustus','ueryas@sdgsf.com', 49145878958, ['biscuits']);
// let user9 = new Client(10, 'oleg', 'Estebana','poipoas@sdgsf.com', 49145213658, ['doughnuts','beer', 'cili', 'vino','roll','bun','brown bread']);
//
// let arrayClients = [];
// arrayClients.push(user0,user1,user2,user3,user4,user5,user6,user7,user8,user9);
// console.log(arrayClients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let users = arrayClients.sort((user0, user1) => user0.order.length - user1.order.length);
// console.log(users);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function CarConstructor(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    // this.drive = function () {
    //     console.log(`Їдемо зі швидкістю ${maxSpeed} км. на годину`);
    // };
    //
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // this.info = function () {
    //     console.log(`model - ${model}, producer - ${producer}, year - ${year}, max Speed - ${maxSpeed}, engine - ${engine}`);
    // };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    // this.increaseMaxSpeed = function (newSpeed) {
    //     console.log(maxSpeed + newSpeed);
    // };

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    // this.changeYear = function (newValue) {
        // console.log(this.year = newValue);
    // };

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // this.addDriver = function (driverName, driverAge, driverPhone) {
    //
    //     this.driver = [];
    //     this.driver.Name = driverName;
    //     this.driver.Age = driverAge;
    //     this.driver.Phone = driverPhone;
    //
    // };
// }
//
//
// let car = new CarConstructor('Audi', 'German',2021,245,4.2);
// console.log(car);
//
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
//
//
// car.addDriver('Dmytro', 31, 48507340438);
// console.log(car.driver);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class ClassCarConstruct {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    // drive() {
    //     console.log(`Їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
    // }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // info() {
    //     console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Max Speed - ${this.maxSpeed}, Engine - ${this.engine}`);
    // };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    // increaseMaxSpeed(newSpeed) {
    //     console.log(this.maxSpeed + newSpeed);
    // };

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    // changeYear(newValue) {
    //     console.log(this.year = newValue);
    // };

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // addDriver(driverName, driverAge, driverPhone) {
    //
    //     this.driver = [];
    //     this.driver.Name = driverName;
    //     this.driver.Age = driverAge;
    //     this.driver.Phone = driverPhone;
    //
    // };
// }

// let classCar = new ClassCarConstruct('mercedes', 'German',2019,260, 6.3)
// console.log(classCar);
//
// classCar.drive();
// classCar.info();
// classCar.increaseMaxSpeed(30);
// classCar.changeYear(2019);
//
//
// classCar.addDriver('Viktor',28,6794474541)
// console.log(classCar.driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name,age,foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}
let cinderellaArray = [];
let  ci0 = new Cinderella('Vika', 21, 36);
let  ci1 = new Cinderella('Nika', 31, 37);
let  ci2 = new Cinderella('Lika', 24, 38);
let  ci3 = new Cinderella('Slonika', 34, 41);
let  ci4 = new Cinderella('Veronika', 26, 36);
let  ci5 = new Cinderella('Olya', 23, 40);
let  ci6 = new Cinderella('Sveta', 25, 38);
let  ci7 = new Cinderella('Lilya', 27, 37);
let  ci8 = new Cinderella('Katya', 29, 36);
let  ci9 = new Cinderella('Masha', 32, 35);

cinderellaArray.push(ci0,ci1,ci2,ci3,ci4,ci5,ci6,ci7,ci8,ci9);
console.log(cinderellaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Anton', 27, 35 )

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function foo() {
    for (let findShoe of cinderellaArray) {
        if (prince.shoe === findShoe.foot) {
            console.log(`${findShoe.name} Masha є тею попелюшкою!)`);
        }
    }
}
foo()

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let find = cinderellaArray.find(dropShoe => dropShoe.foot === prince.shoe)
console.log(find);



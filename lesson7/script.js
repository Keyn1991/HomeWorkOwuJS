// // console.log('start');
// // try {
// //     console.log(a);
// // } catch (e) {
// //     console.log(e);
// // }
// // console.log('end');
// //
// // let name = 'vasia';
// // let age = 31;
// // let user = {
// //     name,
// //     age
// // }
// // console.log(user);
// //
// // let user = {
// //     name: 'kokos',
// //     age: 31,
// //     wife: {
// //         name: 'olya',
// //         age: 32
// //     }
// // };
// // let {name,age,wife, wife: {name:wName, age: wAge}} = user;
// // console.log(name, age, wife, wName, wAge);
//
//
// // let user = [
// //         {id: 14715, name: 'vasya', age: 31},
// //         {id: 21414, name: 'petya', age: 30},
// //         {id: 34124, name: 'kolya', age: 29},
// //         {id: 45151, name: 'olya', age: 28}
// //     ];
// //
// // let a = JSON.stringify(user);
// // console.log(a);
// //
// // let s = JSON.parse('123556');
// // console.log(s);
//
// //
// // let user = [
// //         {id: 14715, name: 'vasya', age: 31},
// //         {id: 21414, name: 'petya', age: 30},
// //         {id: 34124, name: 'kolya', age: 29},
// //         {id: 45151, name: 'olya', age: 28}
// //     ];
//
// // console.log('start');
// // try {
// //     console.log('try block');
// // } catch (e) {
// //     console.error(e);
// // } finally {
// //     console.log('finally block');
// // }
// // console.log('end');
//
//
// // function calc(a, b) {
// //     // try {
// //     //
// //     //
// //     // } catch (e){
// //     //
// //     // }
// //
// //     if (b === 0) {
// //         throw new Error('b is 0');
// //     }
// //     return a / b;
// // }
// //
// // calc(10, 0);
// //
// // let user = {
// //
// // };
// // user?.name?.fn;
//
// // let name = 'vasya';
// // let age = 31;
// // let user = {
// //     name,
// //     age,
// //     foo() {
// //         console.log(this);
// //     },
// // }
// // console.log(user);
// // user.foo();
//
// // let user = {
// //     name: 'vasya',
// //     age: 31,
// //     foo() {
// //         console.log('foo');
// //     },
// // };
//
//
// // let {name,foo} = user;
// // console.log(name);
// // // console.log(age);
// // foo();
// //
// // function asd({name}) {
// //     console.log(name)
// // }
// //
// // let obj = {a: 'asduads', name: 'wqyreq'};
// // asd(obj);
//
// // let {status} = user;
// // console.log(status);
//
//
// // let name = 'vasya';
// // let age = 31;
// // let user = {
// //     name,
// //     age,
// //     foo() {
// //         console.log(this);
// //     },
// //     wife: {
// //         name: 'anna'
// //     }
// // }
// // console.log(user);
// // user.foo();
// //
// // let {name: userName, age: userAge, wife:{name:wifeName},wife} = user;
// // console.log(userName, userAge);
// // console.log(wife);
//
//
// // let [a, , c] = [11, 22, 33];
// // console.log(a, c);
//
// // let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true}
// // ];
// //
// // let [{name, age, status}, user2] = users;
// // console.log(user2);
//
// // let user = {
// //     name: 'vasya',
// //     age: 123
// // };
// //
// // let user2 = user;
// //
// //
// // let user3 = {
// //     name: 'vasya',
// //     age: 123
// // };
// //
// //
// // console.log(user === user2);
// // console.log(user === user3);
//
//
// // let user = {
// //     name: 'vasya',
// //     age: 123
// // };
// //
// // let userCopy = {...user}
// // console.log(userCopy);
// // console.log(userCopy === user);
// // userCopy.age = 0;
// // console.log(userCopy);
// // console.log(user);
//
// // let nums = [11, 22, 33];
// // let nums2 = [...nums];
// // console.log(nums === nums2);
//
// //
// // let user = {
// //     name: 'vasya',
// //     skills: ['html', 'js'],
// //     greeting: function () {
// //     }
// }
//
// // let userClone = {...user};
// // console.log(user === userClone);
// // console.log(user.skills === userClone.skills);
//
// // let s = JSON.stringify(user); // convert to JSON
//
// // let userJsonClone = JSON.stringify(user);
// // console.log(userJsonClone);
// // let parse = JSON.parse(userJsonClone);
// // console.log(parse); // greeting
// // console.log(user); // greeting
// // console.log(user === parse);
// // console.log(user.skills === parse.skills);
//
// // let assign = Object.assign({}, user);
// // console.log(assign);
// // console.log(assign === user);
// // console.log(assign.skills === user.skills);
//
//
//
// //// Вивчити!!!!!!!!!!!!!!!!!
//
//
//

// function asd() {
//     let x = 100;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
//
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());

// let user = {name: 'asdgyqwe', age: 132};
// user.age = -100500;

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;

        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        },
    }
}

let builder = userBuilder('vasya', 31);
console.log(builder);

console.log(builder.getAge());
console.log(builder.getName());
builder.setAge(-100);
console.log(builder.getAge());

// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
//
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
// let mainSection = document.getElementsByTagName('body')
// let mainSectionNew = mainSection[0]
//
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//
//     let mainInfo = document.createElement('h2');
//     mainInfo.innerText = simpson.name + '-' + simpson.surname + '-' + simpson.age + 'years';
//     div.appendChild(mainInfo);
//
//     let info = document.createElement('h3');
//     info.innerText = simpson.info;
//     div.appendChild(info);
//
//     let img = document.createElement('img');
//     img.src = simpson.photo;
//     div.appendChild(img);
//
//     mainSectionNew.appendChild(div);
//
// }
//
// Цикл в циклі
// - Є масив
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
// //
// //
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
// //
// let mainSection = document.getElementsByTagName('body')[0]
//
// for (const coursesArrayElement of coursesArray) {
//
//     let div = document.createElement('div');
//     div.classList.add('skills');
//     mainSection.appendChild(div)
//
//     for (const divElement of coursesArrayElement.modules) {
//         let divTwo = document.createElement('div');
//             divTwo.classList.add('skills-key')
//             div.appendChild(divTwo)
//             let titleInf = document.createElement('h4');
//             titleInf.innerText = coursesArrayElement.modules[divElement]
//             divTwo.appendChild(titleInf)
//
//     }
//
//     //
//     //
//     for (const divKey in coursesArrayElement.modules) {
//         let divTwo = document.createElement('div');
//         divTwo.classList.add('skills-key')
//         div.appendChild(divTwo)
//         let titleInf = document.createElement('h4');
//         titleInf.innerText = coursesArrayElement.modules[divKey]
//         divTwo.appendChild(titleInf)
//     }
// // }
// //
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// //
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.innerText = 'Hello';
// block.style.width = '400px';
// block.style.height = '400px';
// block.style.margin = '20px';
// block.style.color = 'red';
// block.style.fontSize = '32px';
// block.style.background = 'yellow';
// document.body.appendChild(block)
//
// document.body.appendChild(block.cloneNode(true))
// //
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// //
// let  array =  ['Main','Products','About us','Contacts']
// let menu = document.getElementsByClassName('menu')[0];
// for (const string of array) {
//     let li = document.createElement('li')
//     li.innerText = `${string}`;
//     menu.appendChild(li)
// }
// //
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// //
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let li = document.createElement('li')
//     li.innerText = coursesAndDurationArrayElement.title + '  ' + coursesAndDurationArrayElement.monthDuration
//     document.body.appendChild(li)
// }
// //
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// //
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// //
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     document.body.appendChild(div);
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = coursesAndDurationArrayElement.title;
//     div.appendChild(h1);
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = coursesAndDurationArrayElement.monthDuration;
//     div.appendChild(p)
//
// }
// //
// //
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// //
// function foo() {
//     let h1 = document.querySelector('.text');
//     h1.innerHTML = document.querySelector('.text').value = '';
// }
// document.querySelector('.btn').onclick = foo;
// //
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// //
// //
// let input = document.createElement('input');
// let button = document.createElement('button');
// let message = document.createElement('h1');
// button.innerText = 'Go';
// input.placeholder='Скільки тобі років?'
//
// button.addEventListener('click',function () {
//     if (input.value > 18) {
//         message.innerHTML = 'ти можеш увійти'
//
//     } else {
//         message.innerHTML = 'ти  не можеш увійти'
//     }
// });
// document.body.append(input, button, message);
//
//
// //
// //
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');

let button = document.createElement('button');
button.innerText = 'Click';

document.body.append(inputOne, inputTwo, inputThree, button);

button.onclick = () => {
    let tr = inputOne.value;
    let td = inputTwo.value;
    let text = inputThree.value;

    const generateTable = (raws, columns, world) => {
      let table  = document.createElement('table');
      table.style.border = `2px solid black`;
      document.body.append(table);

        for (let i = 0; i < raws; i++) {
            let raw = document.createElement('tr');
            table.append(raw)


            for (let j = 0; j < columns; j++) {
                let column = document.createElement('td');
                column.innerText = `${world}`;
                column.style.border = `2px solid black`;
                raw.append(column);
            }

        }
    }
    generateTable(tr,td,text)
}


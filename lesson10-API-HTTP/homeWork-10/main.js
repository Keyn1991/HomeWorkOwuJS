
fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            let div = document.createElement('div');
            div.classList.add('user-box');
            let h2 = document.createElement('h2');

            h2.innerText = `${user.id} ${user.name}`;

            let a = document.createElement('a');
            a.innerText =`${user.id}  ${user.name} `
            a.href = 'user-details.html?id=' + user.id;

            h2.appendChild(a)
            div.appendChild(h2)
            document.body.appendChild(div)

        }
    })

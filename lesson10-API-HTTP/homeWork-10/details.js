let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('http://jsonplaceholder.typicode.com/users/' +id)
    .then(value => value.json())
    .then(value => {

        for (const user in value) {
            let userDiv = document.createElement('div');
            userDiv.innerHTML = `${user}  ${value[user]}`

            if (typeof value[user] !== 'object') {
                userDiv.innerHTML = `${user} ${value.user}`
            } else {
                userDiv.innerHTML = `${user}`
                for (const key in value[user]) {
                    const userInnerDiv = document.createElement('div')
                    if (typeof value[user][key] !== 'object') {
                        userInnerDiv.innerHTML = `${key} -- ${value[user] [key]}`;
                    } else {
                        userInnerDiv.innerHTML = `${key} : `;

                        for (const element in value[user] [key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[user][key][element] !== 'object') {
                            htmlDivElement.innerHTML = `${key} -- `
                            }
                        }
                    }
                }

            }


            let h2 =document.createElement('h2');
            userDiv.appendChild(h2)
            document.body.appendChild(userDiv);

        }








               h2.innerHTML = `${value.id} -- ${value.name} -- ${value.username} -- ${value.email} -- ${value.address.street} --  ${value.address.suite} -- ${value.address.city} -- ${value.address.suite} -- ${value.address.zipcode} -- ${value.address.geo.lat} -- ${value.address.geo.lng} -- ${value.phone} -- ${value.website} -- ${value.company.name} -- ${value.company.catchPhrase} -- ${value.company.bs}`







    })

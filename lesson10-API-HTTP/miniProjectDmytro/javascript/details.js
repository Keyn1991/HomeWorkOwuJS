let url = new URL (location.href);
let id = url.searchParams.get("id");

let divMain =document.createElement('div');
divMain.classList.add('userInfo');
document.body.appendChild(divMain);

let divUserCard = document.createElement('div');
divUserCard.classList.add('user-card');
divMain.appendChild(divUserCard);

let divInform = document.createElement('div')
divInform.classList.add('inform')
divInform.innerText = 'USER INFORMATION:'
divUserCard.appendChild(divInform)

let divAddress = document.createElement('div')
divAddress.classList.add('address')
divAddress.innerText = 'ADDRESS:'
divUserCard.appendChild(divAddress)

let divGeo = document.createElement('div')
divGeo.classList.add('geo')
divGeo.innerText = 'GEO:'
divUserCard.appendChild(divGeo)

let divCompany = document.createElement('div')
divCompany.classList.add('company')
divCompany.innerText = 'COMPANY:'
divUserCard.appendChild(divCompany)







fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
.then(response => response.json())
.then(user =>  {

    ///////////////////////// цикл

    let  {data:userData} = value;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `${userData.email}`

    div.appendChild(h2)
    document.body.appendChild(div);
})
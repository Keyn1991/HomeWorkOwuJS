let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('http://jsonplaceholder.typicode.com/users/' +id)
    .then(value => value.json())
    .then(value => {

               let div = document.createElement('div');
               let h2 =document.createElement('h2');

               h2.innerHTML = `${value.id} ${value.name} ${value.username} ${value.email} ${value.address.street} ${value.address.suite} ${value.address.city} ${value.address.suite} ${value.address.zipcode} ${value.address.geo.lat} ${value.address.geo.lng} ${value.phone} ${value.website}  ${value.company.name}  ${value.company.catchPhrase} ${value.company.bs}`

               div.appendChild(h2)
               document.body.appendChild(div);




    })

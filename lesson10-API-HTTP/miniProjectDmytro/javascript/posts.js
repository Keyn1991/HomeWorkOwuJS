const mainDiv = document.createElement('div')
mainDiv.classList.add('main')
document.body.appendChild(mainDiv)

const url =new URL(location.href);
const  id = url.searchParams.get('id');

const  divP = document.createElement('div')
divP.classList.add('info')
mainDiv.appendChild(divP)


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then(response => response.json())
    .then(postInfo => {
        console.log(postInfo)
        for (const postInfoKey in postInfo) {

            const p = document.createElement('p')
            p.innerText = `${postInfoKey}: ${postInfo[postInfoKey]}`
            divP.appendChild(p)
        }

    })


const coments = document.createElement('div')
coments.classList.add('coments')
coments.innerText = 'Post coments:'
mainDiv.appendChild(coments)

const divComent = document.createElement('div');
divComent.classList.add('main-coment')
mainDiv.appendChild(divComent);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(coments => {
        console.log(coments)
        for (const coment of coments) {

            const div = document.createElement('div')
            div.classList.add('coment')
            div.innerText = `${coment.body}`
            divComent.appendChild(div)

        }

    })
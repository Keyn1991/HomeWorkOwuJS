const url = new URL(location.href);
const id = url.searchParams.get('id');

const mainDiv = document.createElement("div");
mainDiv.classList.add('mainDiv');
const divHeader = document.createElement("div");
divHeader.classList.add('header');
mainDiv.appendChild(divHeader);
document.body.append(mainDiv);


fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        for (const item in value) {

            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item} ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`;
                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} ${value[item][key]}`;
                    } else {
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.appendChild(userInnerDiv)
                }
            }

            divHeader.appendChild(userDiv)
            // document.body.append(userDiv);

        }

        const btnPosts = document.createElement('button')
        btnPosts.innerText = 'post of current user'
        btnPosts.classList.add('post-btn')

        const divAside = document.createElement('div');
        divAside.classList.add('aside');
        document.body.append(divAside)


        btnPosts.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts/`)
                .then(response => response.json())
                .then(posts => {
                    const divMainPost = document.createElement('div');
                    divMainPost.classList.add('post');
                    divAside.appendChild(divMainPost);

                    for (const divMainPostElement of posts) {
                        const userPost = document.createElement('div');
                        userPost.classList.add('user-post')
                        userPost.innerText = `${divMainPostElement.title}`
                        divAside.appendChild(userPost)


                        const btnPostInfo = document.createElement('button')

                        btnPostInfo.innerText = 'Post information'
                        userPost.appendChild(btnPostInfo)


                        btnPostInfo.onclick = function () {
                            location.href = `post-details.html?id=${divMainPostElement.id}`
                        }
                    }

                })
        }


        divHeader.appendChild(btnPosts)

    })


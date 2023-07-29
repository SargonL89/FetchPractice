function verGrapCards() {
    const btn1 = document.querySelector('.btn1');
    const div = document.querySelector('.div1');

    btn1.addEventListener('click', async () => {
        await fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphic-cards')
            .then(Response => Response.json())
            .then(data => 
                data.forEach(placa => {
                    div.innerHTML += `<ul>
                    <li>id: ${placa.id}</li>
                    <li>fabricante: ${placa.fabricante}</li>
                    <li>marca: ${placa.marca}</li>
                    <li>modelo: ${placa.modelo}</li>
                    <li>memoria: ${placa.memoria}</li>
                    <li>precio: ${placa.precio}</li>
                    </ul>`
                })
            )
            .then(limpiar())
            .catch(error => {
                console.error("Estás mandando fruta!", error)
            })
    })
}

function limpiar() {
    const btn2 = document.querySelector('.btn2');
    const div = document.querySelector('.div1');
    
    btn2.addEventListener('click', () => {
        div.innerHTML = ``
    })
}

verGrapCards()


function encerarPulir() {
    fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphic-cards')
    .then(Response => Response.json())
    .then(data => {
        console.log(typeof data);
        const cardsIn = JSON.stringify(data);
        console.log(typeof cardsIn);
        const cardsOut = JSON.parse(cardsIn);
        console.log(typeof cardsOut)
        })
}


function request() {
    fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => filterUsers(data))
}

function filterUsers(user) {
    const btn3 = document.querySelector('.btn3');
    const div =  document.querySelector('.div1');

    if (user.results[0].gender === 'female') { 
        btn3.addEventListener('click', () => {
            div.innerHTML = `
            <ul><img src="${user.results[0].picture.large}" alt="userPicture"></ul>
            <ul>Name: ${user.results[0].name.first}</ul>
            <ul>Last name: ${user.results[0].name.last}</ul>
            <ul>Gender: ${user.results[0].gender}</ul>            
            <ul>Email: ${user.results[0].email}</ul>
            <ul>Cell phone number: ${user.results[0].cell}</ul>
            `
        })
    }
    else {request()};
    limpiar()
}

request();
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
                console.error("Error al obtener los datos", error)
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


async function encerarPulir() {
    await fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphic-cards')
    .then(Response => Response.json())
    .then(data => {
        console.log(typeof data);
        const cardsIn = JSON.stringify(data);
        console.log(typeof cardsIn);
        const cardsOut = JSON.parse(cardsIn);
        console.log(typeof cardsOut)
        })
    .catch(error => {
        console.error("Error! estás haciendo cualquiera!", error)
    })
}


async function request() {
    await fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => filterUsers(data))
    .catch(error => {console.error("Error al cargar los datos", error)})
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

function inputCity() {
    const btn4 = document.querySelector('.btn4');

    btn4.addEventListener('click', async () => {
        const input1 = document.querySelector('.input1').value;
        await fetch(`http://api.weatherapi.com/v1/current.json?key=c9c4c2c89746407589f161742232907&q=${input1}&aqi=no`)
        .then(Response => Response.json())
        .then(data => weather(data))
        .catch(error => {console.error("Error al recibir los datos de la API", error)})
    })
}

function weather(data) {
    const div = document.querySelector('.div1');

    div.innerHTML = `<strong><ul>Location</ul></strong>
        <ul>
        <li>Name: ${data.location.name}</li>
        <li>Region: ${data.location.region}</li>
        <li>Country: ${data.location.country}</li>            
        <li>Local Time: ${data.location.localtime}</li>
        </ul>
        <strong><ul>Current</ul></strong>
        <ul>
        <li>Last Updated: ${data.current.last_updated}</li>
        <li>Temperature (C°): ${data.current.temp_c}</li>
        <li>Condition: ${data.current.condition.text}</li>
        <img src="${data.current.condition.icon}" alt="weather">
        </ul>
        `
}

inputCity()


function Solicitud(nombre, email, mensaje) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    // console.log(`${nombre} y ${email} y ${mensaje}`)
}

function procesarDatos() {
    const btn = document.getElementById("submit");

    btn.addEventListener('click', () => {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
    
        const solicitud = new Solicitud(nombre, email, mensaje);
        const inJSON = JSON.stringify(solicitud);
        localStorage.setItem('nuevoMensaje', inJSON);
    })
}

procesarDatos()

function verLocalStorage() {
    const div = document.querySelector('.div1');
    const btn = document.getElementById("verData");
    
    btn.addEventListener('click', () => {
        const localS = localStorage.getItem('nuevoMensaje');
        const data = JSON.parse(localS);

        console.log(data)
        div.innerHTML = `
            <ul>Nombre: ${data.nombre}</ul>
            <ul>Email: ${data.email}</ul>
            <ul>Mensaje: ${data.mensaje}</ul>
            `
    })
}

verLocalStorage()

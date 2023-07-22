function verGrapCards() {
    const btn1 = document.querySelector('.btn1');
    const div = document.querySelector('.div1');

    btn1.addEventListener('click', async () => {
        await fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphic-cards')
            .then(Response => Response.json())
            .then(data => 
                data.forEach(placa => {
                    div.innerHTML += `
                    <ul>"id": "${placa.id}"</ul>
                    <ul>"fabricante": "${placa.fabricante}", </ul>
                    <ul>"marca": "${placa.marca}", </ul>
                    <ul>"modelo": "${placa.modelo}", </ul>
                    <ul>"memoria": "${placa.memoria}", </ul>
                    <ul>"precio": ${placa.precio}</ul>
                    `
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
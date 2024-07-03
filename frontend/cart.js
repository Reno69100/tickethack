fetch(`http://localhost:3000/temps`).then(reponse => reponse.json()).then(data => {
    document.querySelector('#liste-temps').innerHTML = ''
    let total = 0
    for (let element of data.cart) {
        let heure = element.date.toString().substring(16,21)
        total += element.price
        document.querySelector('#liste-temps').innerHTML += `
            <p>My cart</p>
            <div id="liste-temps">
                <div class="temps">
                    <div id="trajet">${element.departure} > ${element.arrival}</div>
                    <div id="hour">${heure}</div>
                    <div id="price">${element.price}€</div>
                    <button id="delete">X</button>
                </div>
            </div>
        `
    }

    document.querySelector('#liste-temps').innerHTML += `
        <div id="total-container">
            <div>Total: <span id="total">${total}</span>€</div>
            <button id="purchase">Purchase</button>
        </div>
    `
})
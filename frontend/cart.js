fetch(`http://localhost:3000/temps`).then(reponse => reponse.json()).then(data => {
    document.querySelector('#mini-container-cart').innerHTML = `
        <p>My cart</p>
        <div id="liste-temps">
        </div>
    `
    if (data.cart.length > 0) {
        let total = 0
        for (let element of data.cart) {
            let heure = element.date.toString().substring(11,16)
            total += element.price
            document.querySelector('#liste-temps').innerHTML += `
                <div class="temps">
                    <span class="id-temps">${element._id}</span>
                    <div class="trajet">${element.departure} > ${element.arrival}</div>
                    <div class="hour">${heure}</div>
                    <div class="price">${element.price}€</div>
                    <button class="delete">X</button>
                </div>
            `
        }

        document.querySelector('#mini-container-cart').innerHTML += `
            <div id="total-container">
                <div>Total: <span id="total">${total}</span>€</div>
                <button id="purchase">Purchase</button>
            </div>
        `

        for (let element of document.querySelectorAll('.temps')) {
            element.querySelector('.delete').addEventListener('click', function () {
                
                fetch('http://localhost:3000/temps', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({id: element.querySelector('.id-temps').textContent})
                }).then(response => response.json()).then(() => window.location.assign('cart.html'))
            })
        }

        document.querySelector('#purchase').addEventListener('click', function () {      
            fetch('http://localhost:3000/bookings/purchase').then(response => response.json()).then(() => window.location.assign('bookings.html'))
        })
    } else {
        document.querySelector('#mini-container-cart').innerHTML = `
        <p>No tickets in tour cart.</p>
        <p>Why not plan a trip ?</p>`
    }
})
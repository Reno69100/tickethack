fetch(`http://localhost:3000/purchase`).then(reponse => reponse.json()).then(data => {
    document.querySelector('#mini-container-bookings').innerHTML = `
        <p>My bookings</p>
        <div id="liste-bookings">
        </div>
    `

    for (let element of data.bookings) {
        
        document.querySelector('#liste-bookings').innerHTML += `
            <div class="booking">
                <div class="trajet">${element.departure} > ${element.arrival}</div>
                <div class="hour">${heure}</div>
                <div class="price">${element.price}€</div>
                <div class="time">Departure in 5 hours</div>
            </div>
        `
    }

    document.querySelector('#mini-container-bookings').innerHTML += `
        <hr align="center" width="200" color="rgba(37, 85, 46)">
        <p id="green-text">Enjoy your travels with Tickethack !</p>
    `
})
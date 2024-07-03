fetch(`http://localhost:3000/bookings`).then(reponse => reponse.json()).then(data => {
    document.querySelector('#mini-container-bookings').innerHTML = `
        <p>My bookings</p>
        <div id="liste-bookings">
        </div>
    `

    for (let element of data.bookings) {
        let dateNow = new moment()
        let dateTrain = new moment(element.date)
        let durationDays = moment.duration(dateTrain.diff(dateNow)).days()
        let durationHours = moment.duration(dateTrain.diff(dateNow)).hours()-2
        let texteDays = ""
        let texteDurations = ""
        if(durationDays > 0) {
            texteDays = durationDays + " days and "
        }

        if(durationHours >= 0) {
            texteDurations = `Departure in ${texteDays} ${durationHours} hours`
        } else {
            texteDurations = "Departure has passed"
        }

        let heure = element.date.toString().substring(11,16)
        document.querySelector('#liste-bookings').innerHTML += `
            <div class="booking">
                <div class="trajet">${element.departure} > ${element.arrival}</div>
                <div class="hour">${heure}</div>
                <div class="price">${element.price}€</div>
                <div class="time">${texteDurations}</div>
            </div>
        `
    }

    document.querySelector('#mini-container-bookings').innerHTML += `
        <hr align="center" width="200" color="rgba(37, 85, 46)">
        <p id="green-text">Enjoy your travels with Tickethack !</p>
    `
})

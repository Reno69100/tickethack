document.querySelector('#search').addEventListener('click', function () {
    fetch('http://localhost:3000/search').then(reponse => reponse.json).then(data => {
        if (!data.trips) {
            document.querySelector('#image-result').src = "nofound/train.png"
            document.querySelector('#comment-result').textContent = "No trip found."
        } else {
            for (let element of data.trips) {
                document.querySelector('#mini-container-result').innerHTML += `
                    <div class="trip">
                        <span class="departure-trip">${element.departure}</span> > <span class="arrival-trip">${element.arrival}</span> <span class="hour-trip">${element.date}</span> <span class="price-trip">${element.price}</span> <button class="book-trip">Book</button>
                    </div>
                `
            }
        }
    })
})
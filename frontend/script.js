document.querySelector('#search').addEventListener('click', function () {
    let departure = document.querySelector('#departure').value
    let arrival = document.querySelector('#arrival').value
    let date = document.querySelector('#date').value

    if (departure && arrival && date) {
        fetch(`http://localhost:3000/search/${departure}/${arrival}/${date}`).then(reponse => reponse.json()).then(data => {
            console.log(data)
            if (data.trips.length < 1) {
                document.querySelector('#mini-container-result').innerHTML = `
                    <img id="image-result" src="images/notfound.png">
                    <hr align="center" width="200" color="rgba(37, 85, 46)">
                    <p id="comment-result">No trip found.</p>
                `
                document.querySelector('#mini-container-result').style.overflow = "visible"
                document.querySelector('#mini-container-result').style.display = "flex"
                //document.querySelector('#image-result').src = "images/notfound.png"
                //document.querySelector('#comment-result').textContent = "No trip found."
            } else {
                document.querySelector('#mini-container-result').innerHTML = ''
                
                for (let element of data.trips) {
                    document.querySelector('#mini-container-result').innerHTML += `
                        <div class="trip">
                            <span class="departure-trip">${element.departure}</span> > <span class="arrival-trip">${element.arrival}</span> <span class="date-trip">${element.date}</span> <span class="price-trip">${element.price}</span>€ <button class="book-trip">Book</button>
                        </div>
                    `
                }
                document.querySelector('#mini-container-result').style.overflow = "scroll"
                document.querySelector('#mini-container-result').style.display = "block"

                for (let element of document.querySelectorAll('.book-trip')) {
                    element.addEventListener('click', function() {
                        let newTemp = {
                            departure: this.parentNode.querySelector('.departure-trip').textContent,
                            arrival: this.parentNode.querySelector('.arrival-trip').textContent,
                            date: this.parentNode.querySelector('.date-trip').textContent,
                            price: this.parentNode.querySelector('.price-trip').textContent,
                        }
                        
                        //faire un fetch post
                        window.location.assign('cart.html')
                    })
                }
            }
        })
    }
})
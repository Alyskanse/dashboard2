const cars = [
    ['Nissan', '350Z', '2003', '33,000'],
    ['Toyota', 'Corolla', '2002', '20,000'],
    ['Audi', 'A4', '2017', '50,000'],
    ['Honda', 'Civic', '2003', '20,000'],
    ['Tesla', 'S', '2019', '80,000']
]

function settable() {
    for (let i = 0; i < cars.length; ++i) {
        const car = cars[i];
        setrow(car, i);
    }
}

function setrow (car, id) {
    ++id;
    document.getElementById("make-" + id).innerHTML = car[0];
    document.getElementById("model-" + id).innerHTML = car[1];
    document.getElementById("year-" + id).innerHTML = car[2];
    document.getElementById("price-" + id).innerHTML = car[3];
}
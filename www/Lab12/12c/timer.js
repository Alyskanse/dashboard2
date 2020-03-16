let value = 0;

function counter () {
    incrementAndSet();
    setInterval(incrementAndSet, 3000);
}

function incrementAndSet () {
    ++value;
    document.getElementById('my-counter-value').innerHTML = value;
}


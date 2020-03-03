const weatherData = [
    {day: "fri", hi: 82, lo: 55},
    {day: "sat", hi: 75, lo: 52},
    {day: "sun", hi: 69, lo: 52},
    {day: "mon", hi: 69, lo: 48},
    {day: "tue", hi: 68, lo: 51}
];

function sum(a, b) {
    return a + b;
}

function setAverages() {
    const hiSum = weatherData.map(a => a.hi).reduce(sum);
    const loSum = weatherData.map(a => a.lo).reduce(sum);

    const avgHi = hiSum / weatherData.length;
    const avgLo = loSum / weatherData.length;
    const avg = (hiSum + loSum) / (weatherData.length * 2.0);

    document.getElementById("avgHi").innerHTML = avgHi;
    document.getElementById("avgLo").innerHTML = avgLo;
    document.getElementById("avg").innerHTML = avg;
}


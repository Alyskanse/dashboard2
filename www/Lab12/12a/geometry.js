function settable() {
    for (let i = 1; i <= 4; ++i) {
        const geometries = calcCircleGeometries(Math.random());
        setrow(geometries, i);
    }
}

function setrow(geometries, id) {
    document.getElementById("radius-" + id).innerHTML = geometries.radius;
    document.getElementById("area-" + id).innerHTML = geometries.area;
    document.getElementById("circumference-" + id).innerHTML = geometries.circumference;
    document.getElementById("diameter-" + id).innerHTML = geometries.diameter;
}

function calcCircleGeometries(radius) {
    const pi = Math.PI;
    let area = pi * radius * radius;
    let circumference = 2 * pi * radius;
    let diameter = 2 * radius;
    let geometries = {radius, area, circumference, diameter};
    return geometries;
}

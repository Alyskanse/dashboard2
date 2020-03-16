function select(obj) {
    obj.classList.remove('deselected');
    obj.classList.add('selected');

    obj.innerHTML = "Focused!";
}

function deselect(obj) {
    obj.classList.remove('selected');
    obj.classList.add('deselected');

    obj.innerHTML = "Not focused";
}
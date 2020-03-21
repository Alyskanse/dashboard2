function gridify(content) {
    console.log(content);
}

$(document).ready(() => {
    const div = $('#grid');
    const json = JSON.parse(`{"data": [${div.text()}]}`);

    const row = $('<div class="row"></div>');

    const cols = [];
    for (const col of json.data) {
        const colData = $('<div class="column"></div>');
        const images = [];

        for (const img of col) {
            const path = `images/${img}.jpg`;
            images.push($(`<img src="${path}" style="width:100%"/>`));
        }

        colData.html(images);
        cols.push(colData);
    }

    row.html(cols);
    div.html(row);
    div.removeAttr('hidden');
});
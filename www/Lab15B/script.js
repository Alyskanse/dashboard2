const standings = [
    {
        name: 'Oregon',
        conference: '8-1',
        overall: '12-2',
        lastGame: {
            text: '28-27 WIS',
            win: true
        },
        htmlClass: 'ou'
    },
    {
        name: 'California',
        conference: '4-5',
        overall: '8-5',
        lastGame: {
            text: '35-20 ILL',
            win: true
        },
        htmlClass: 'cal'
    },
    {
        name: 'Washington',
        conference: '4-5',
        overall: '8-5',
        lastGame: {
            text: '38-7 BSU',
            win: true
        },
        htmlClass: 'uw'
    },
    {
        name: 'Oregon State',
        conference: '4-5',
        overall: '5-7',
        lastGame: {
            text: '10-24 ORE',
            win: false
        },
        htmlClass: 'osu'
    },
    {
        name: 'Washington State',
        conference: '3-6',
        overall: '4-8',
        lastGame: {
            text: '21-31 AFA',
            win: false
        },
        htmlClass: 'wsu'
    },
    {
        name: 'Stanford',
        conference: '3-6',
        overall: '4-8',
        lastGame: {
            text: '24-25 ND',
            win: false
        },
        htmlClass: 'su'
    }
];

function load() {
    const list = document.querySelector('.list-group');
    const items = list.getElementsByTagName('li');

    // Parallel loop
    for (let i = 0; i < items.length; ++i) {
        const domItem = items[i];
        const scoreItem = standings[i];

        domItem.classList.add(scoreItem.htmlClass);

        domItem.innerHTML = `
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  ${scoreItem.name}
                </div>
                <div class="col-sm">
                  Conference ${scoreItem.conference}
                </div>
                <div class="col-sm">
                  Overall ${scoreItem.overall}
                </div>
              </div>
            </div>
        `;
    }
}
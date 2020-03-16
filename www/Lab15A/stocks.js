const stocks = [
    {
        companyName: 'Microsoft',
        marketCap: '$381.7 B',
        sales: '$86.8 B',
        profit: '$22.1 B',
        numOfEmployees: '128,000'
    },
    {
        companyName: 'Symetra Financial',
        marketCap: '$2.7 B',
        sales: '$2.2 B',
        profit: '$254.4 M',
        numOfEmployees: '1,400'
    },
    {
        companyName: 'Micron Technology',
        marketCap: '$37.6 B',
        sales: '$16.4 B',
        profit: '$3.0 B',
        numOfEmployees: '30,400'
    },
    {
        companyName: 'F5 Networks',
        marketCap: '$9.5 B',
        sales: '$1.7 B',
        profit: '$311.2 M',
        numOfEmployees: '3,834'
    },
    {
        companyName: 'Expedia',
        marketCap: '$10.8 B',
        sales: '$5.8 B',
        profit: '$398.1 M',
        numOfEmployees: '18,210'
    },
    {
        companyName: 'Nautilus',
        marketCap: '$476 M',
        sales: '$274.4 M',
        profit: '$18.8 M',
        numOfEmployees: '340'
    },
    {
        companyName: 'Heritage Financial',
        marketCap: '$531 M',
        sales: '$137.6 M',
        profit: '$21 M',
        numOfEmployees: '748'
    },
    {
        companyName: 'Cascade Microtech',
        marketCap: '$239 M',
        sales: '$136 M',
        profit: '$9.9 M',
        numOfEmployees: '449'
    },
    {
        companyName: 'Nike',
        marketCap: '$83.1 B',
        sales: '$27.8 B',
        profit: '$2.7 B',
        numOfEmployees: '56,500'
    },
    {
        companyName: 'Alaska Air Group',
        marketCap: '$7.9 B',
        sales: '$5.4 B',
        profit: '$605 M',
        numOfEmployees: '13,952'
    },
];

function updateTable(stock, row) {
    for (const key in stock) {
        const id = `${key}-${row}`;
        console.log(id);
        document.getElementById(id).innerHTML = stock[key];
    }
}

function updateAll() {
    let row = 0;
    stocks.forEach(s => updateTable(s, ++row));
}

/*
function setRow(flight, id) {
    for (const key of Object.keys(flight)) {
        document.getElementById(key + '-' + id).innerHTML = flight[key];
    }
}
*/

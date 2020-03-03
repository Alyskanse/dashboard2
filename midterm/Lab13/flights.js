const flights = [
    {
        airline: 'Alaska',
        number: 'ASA1012',
        origin: 'Seattle-Tacoma Intl - SEA',
        destination: 'Minneapolis/St Paul Intl - MSP',
        dep_time: 'February 26, 2020 18:37:00 PST',
        arrival_time: 'February 26, 2020 21:51:00 CST',
        arrival_gate: 'GATE E1'
    },
    {
        airline: 'Alaska',
        number: 'ASA1222',
        origin: 'San Francisco Intl - SFO',
        destination: 'Austin-Bergstrom Intl - AUS',
        dep_time: 'February 26, 2020 18:28:00 PST',
        arrival_time: 'February 26, 2020 21:43:00 CST',
        arrival_gate: 'GATE 3'
    },
    {
        airline: 'Alaska',
        number: 'ASA1063',
        origin: 'John F Kennedy Intl - JFK',
        destination: 'Seattle-Tacoma Intl - SEA',
        dep_time: 'February 26, 2020 18:38:00 EST',
        arrival_time: 'February 26, 2020 20:13:00 PST',
        arrival_gate: 'GATE N18'
    },
    {
        airline: 'Alaska',
        number: 'ASA1391',
        origin: 'New Orleans Intl - MSY',
        destination: 'San Francisco Intl - SFO',
        dep_time: 'February 26, 2020 19:19:00 CST',
        arrival_time: 'February 26, 2020 20:09:00 PST',
        arrival_gate: 'GATE D4'
    },
    {
        airline: 'Alaska',
        number: 'ASA1367',
        origin: 'Boston Logan Intl - BOS',
        destination: 'Los Angeles Intl - LAX',
        dep_time: 'February 26, 2020 19:26:00 EST',
        arrival_time: 'February 26, 2020 20:44:00 PST',
        arrival_gate: 'GATE 69B'
    },
    {
        airline: 'Alaska',
        number: 'ASA1233',
        origin: 'John Wayne - SNA',
        destination: 'Seattle-Tacoma Intl - SEA',
        dep_time: "February 26, 2020 20:47:00 PST",
        arrival_time: "February 26, 2020 23:21:00 PST",
        arrival_gate: 'GATE C11'
    },
    {
        airline: 'Alaska',
        number: 'ASA1801',
        origin: 'Los Angeles Intl - LAX',
        destination: 'Portland Intl - PDX',
        dep_time: 'February 26, 2020 19:48:00 PST',
        arrival_time: 'February 26, 2020 22:16:00 PST',
        arrival_gate: 'GATE C1'
    },

    {
        airline: 'Alaska',
        number: 'ASA1804',
        origin: 'Salt Lake City Intl - SLC',
        destination: 'Seattle-Tacoma Intl',
        dep_time: 'February 26, 2020 20:54:00 MST',
        arrival_time: 'February 26, 2020 21:55:00 PST',
        arrival_gate: 'GATE C18'
    },
    {
        airline: 'Alaska',
        number: 'ASA1004',
        origin: 'Portland Intl - PDX',
        destination: 'Los Angeles - LAX',
        dep_time: 'February 26, 2020 20:18:00 PST',
        arrival_time: 'February 26, 2020 22:20:00 PST',
        arrival_gate: 'GATE 69A'
    },
    {
        airline: 'Alaska',
        number: 'ASA1041',
        origin: 'Seattle-Tacoma Intl',
        destination: 'Los Angeles - LAX',
        dep_time: 'February 26, 2020 20:46:00 PST',
        arrival_time: 'February 26, 2020 23:23:00 PST',
        arrival_gate: 'GATE 63'
    }
];

function getFlightDuration(flight) {
    const d = new Date(flight.dep_time);
    const a = new Date(flight.arrival_time);

    const ms = a.getTime() - d.getTime();

    let seconds = ms / 1000;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;

    let minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    return hours + 'h ' + minutes + 'm';
}

function updateTable() {
    for (const flight of flights) {
        flight.duration = getFlightDuration(flight);
    }

    for (let i = 0; i < flights.length; ++i) {
        setRow(flights[i], i + 1);
    }
}

function setRow(flight, id) {
    for (const key of Object.keys(flight)) {
        document.getElementById(key + '-' + id).innerHTML = flight[key];
    }
}
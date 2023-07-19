// const { doc } = require('prettier');

function showTime() {
    var a_p = '';
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    if (curr_hour < 12) {
        a_p = 'AM';
    } else {
        a_p = 'PM';
    }
    if (curr_hour == 0) {
        curr_hour = 12;
    }
    if (curr_hour > 12) {
        curr_hour = curr_hour - 12;
    }
    curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    document.getElementById('date').innerHTML =
        date() + ' ' + curr_hour + ':' + curr_minute + ':' + curr_second + ' ' + a_p;
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function date() {
    var months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay(),
        thisDay = myDays[thisDay];
    var yy = date.getYear();
    var year = yy < 1000 ? yy + 1900 : yy;

    return thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
}

function toggleDarkMode() {
    const btn = document.querySelector('#toggle-dark');
    const html = document.querySelector('html');
    const light = document.querySelector('#toggle-light');
    const dark = document.querySelector('#toggle-dark');

    btn.addEventListener('click', function() {
        html.classList.add('dark');
        light.classList.remove('hidden');
        dark.classList.add('hidden');
    });
}

function toggleLightMode() {
    const btn = document.querySelector('#toggle-light');
    const html = document.querySelector('html');
    const light = document.querySelector('#toggle-light');
    const dark = document.querySelector('#toggle-dark');

    btn.addEventListener('click', function() {
        html.classList.remove('dark');
        light.classList.add('hidden');
        dark.classList.remove('hidden');
    });
}

setInterval(showTime, 500);

toggleDarkMode();
toggleLightMode();
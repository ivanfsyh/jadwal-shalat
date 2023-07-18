function loadContent() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.myquran.com/v1/sholat/kota/semua';

    xhr.onloadend = function() {
        // console.log(this.responseText);
        var data = JSON.parse(this.responseText);
        var lokasi = '';

        for (var i = 0; i < data.length; i++) {
            lokasi +=
                "<div class='m-4'> <button class='w-52 p-5 m-auto border-2 border-teal-500 text-center font-bold  hover:bg-teal-600 hover:text-slate-100'> " +
                data[i].lokasi +
                '</button></div>';
        }

        // document.getElementById('lokasi').innerHTML = lokasi;
        document.getElementById('lokasi').innerHTML = lokasi;
    };

    xhr.open('GET', url, true);
    xhr.send();
}

// loadContent();

function cariKota() {
    var inputKota = document.getElementById('cari').value;
    var xhr = new XMLHttpRequest();
    var url = 'https://api.myquran.com/v1/sholat/kota/cari/' + inputKota;

    xhr.onloadend = function() {
        var data = JSON.parse(this.responseText);

        // console.log(data.data);

        var lokasi = '';

        for (var i = 0; i < data.data.length; i++) {
            lokasi +=
                "<div class='mt-4 md:me-3 p-5 border-2 border-teal-500 text-center font-bold hover:bg-teal-600 hover:text-slate-100'> <a href='jadwal_shalat.html?kota=" +
                data.data[i].id +
                "'> " +
                data.data[i].lokasi +
                '</a></div>';
        }

        // document.getElementById('lokasi').innerHTML = lokasi;
        document.getElementById('lokasi').innerHTML = lokasi;
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function loadData() {
    var idKota = getURLParameter('kota');
    var bulan = new Date().getMonth();
    var tahun = new Date().getFullYear();
    var xhr = new XMLHttpRequest();
    var url =
        'https://api.myquran.com/v1/sholat/jadwal/' + idKota + '/' + tahun + '/' + bulan;

    xhr.onloadend = function() {
        var data = JSON.parse(this.responseText);

        // console.log(data.data.jadwal[0].tanggal);

        var row = '';

        for (var i = 0; i < data.data.jadwal.length; i++) {
            // console.log(data.data.jadwal[i].tanggal);
            row +=
                " <tr class='border-b'><td class='whitespace-nowrap border-r px-6 py-4 font-medium'>" +
                data.data.jadwal[i].tanggal +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].imsak +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].subuh +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].terbit +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].dhuha +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].dzuhur +
                "</td> <td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].ashar +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].maghrib +
                "</td><td class='whitespace-nowrap border-r px-6 py-4'>" +
                data.data.jadwal[i].isya +
                '</td></tr> ';
        }

        document.getElementById('row').innerHTML = row;
        document.getElementById('kota').innerHTML = data.data.lokasi;
        document.getElementById('provinsi').innerHTML = 'PROVINSI ' + data.data.daerah;
    };

    xhr.open('GET', url, true);
    xhr.send();
}

loadData();
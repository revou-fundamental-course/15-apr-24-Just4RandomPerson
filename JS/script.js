var form = document.getElementById("form");
function convert(e) {
    var temp_input = document.getElementsByTagName('select')[0].value;
    var nilai_input = parseInt(document.getElementById('celcius').value);
    if (temp_input === 'C'){
        var hasil = (nilai_input * 1.8) + 32;
        hasil = hasil.toFixed(1);
        document.getElementById("fahrenheit").value = hasil;
        document.getElementById("kalkulasi").value = `(${nilai_input} * 9/5) + 32 = ${hasil}`;
    } else{
        var hasil = (5*(nilai_input-32))/9;
        hasil = hasil.toFixed(1);
        document.getElementById("fahrenheit").value = hasil;
        document.getElementById("kalkulasi").value = `(5/9*(${nilai_input}-32) = ${hasil}`;
    }
    e.preventDefault();
}

function reset() {
    form = form.reset()
}

function change() {
    var temp_input = document.getElementsByTagName('select')[0].value;
    if (temp_input === 'F'){
        document.getElementById('text-awal-input').innerHTML = 'Fahrenheit (&deg;F)';
        document.getElementById('text-akhir-input').innerHTML = 'Celcius (&deg;C)';
        document.getElementById('judul-rumus').innerHTML = 'Cara Konversi dari Fahrenheit (&deg;F) ke Celcius (&deg;C)';
        document.getElementById('deskripsi-rumus').innerHTML = "Suhu <span class=\"huruf-s\">S</span> dalam derajat Celcius (&deg;C) sama dengan suhu <span class=\"huruf-s\">S</span> dalam derajat Fahrenheit (&deg;F) kurang 32 dikalikan 5/9.";
        document.getElementById('rumus').innerHTML = '<span class="huruf-s">S</span>(&deg;C) = (<span class="huruf-s">S</span>(&deg;F) - 32) x 5/9';
    }else{
        document.getElementById('text-awal-input').innerHTML = 'Celcius (&deg;C)';
        document.getElementById('text-akhir-input').innerHTML = 'Fahrenheit (&deg;F)';
        document.getElementById('judul-rumus').innerHTML = 'Cara Konversi dari Celcius (&deg;C) ke Fahrenheit (&deg;F)';
        document.getElementById('deskripsi-rumus').innerHTML = "Suhu <span class=\"huruf-s\">S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class=\"huruf-s\">S</span> dalam derajat Celcius (&deg;C) ke 9/5 tambah 32.";
        document.getElementById('rumus').innerHTML = '<span class="huruf-s">S</span>(&deg;F) = (<span class="huruf-s">S</span>(&deg;C) x 9/5) + 32';
    }
}
form.addEventListener("submit", convert);
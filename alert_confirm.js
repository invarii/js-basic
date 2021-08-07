alert('Selamat Datang..');
var perulangan = true;

while (perulangan === true) {
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);

    perulangan = confirm('coba lagi?');
}

alert('terimakasih')
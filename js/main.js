// Tipe data String
let boxSaya = 'Sepatu';
// Tipe data Number
let jumlahBox = 5;
// Tipe data Boolean
let wallet = 10000;
let hutang = 9000;

// tipe data array
// jumlah anak di array dihitung dari 0 bukan 1
let telurFoods = ['Gado-gado', 'Ketoprak', 'BMW', 'Omelette', 'Jengkol', 'Bubur Ayam'];
// mendeklarasikan data yang tidak sesuai array dengan metode replace
telurFoods[2] = "Pancake";
// .push untuk menambahkan array di akhir
telurFoods.push("Sate Telur");

// tipe data object
let rumahKita = {
    lebarTanah:50,
    lebarBangunan:100,
    warna:'Hitam',
    kids:[
        'Jodi',
        'Bahmi',
        'Udin'
    ]
}

// Menampilkan data
console.log(telurFoods[0]);
// object memungkinkan memanggil data tanpa menghitung urutan seperti array
console.log(rumahKita.warna);
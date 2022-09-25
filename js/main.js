// Belajar Switch Case

let tabungan = 160000;

switch (tabungan) {
    case 0:
        console.log("Kerja dulu baru beli mobil");
        break;
    case 50000:
    case 100000:
    case 115000:
        console.log("Beli mobil Avanza");
        break;
    case 150000:
        console.log("Beli mobil BRV");
        break;
    case 160000:
    case 200000:
        console.log('Beli pesawat jet');
        break;
    default:
        console.log('tidak ada pilihan');
        break;
}

// Menampilkan data


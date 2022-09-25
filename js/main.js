// Belajar For In Loop

let kelasPremium = ['Blender', 'Laravel', 'React JS', 'Flutter', 'Swift UI']
let rumah = {
    cat:'biru',
    lantai:'marmer',
    mobil:'3',
}

// Menampilkan data
console.log(rumah);

// Perulangan data

for (const data in rumah) {
    if (Object.hasOwnProperty.call(rumah, data)) {
        const element = rumah[data];
        console.log(element);
    }
}
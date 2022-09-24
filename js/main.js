// Belajar Function
// function adalah sebuah container yang didesain untuk menjalankan berbagai aksi
function checkUserData(username, password) {
    let usernameDb = 'richardo';
    let passwordDb = '123aaa';

    let validasi = username == usernameDb && password == passwordDb;
    console.log(validasi);
}

checkUserData("richardo", "123aaa");
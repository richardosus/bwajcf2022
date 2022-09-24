// Belajar Function
// function adalah sebuah container yang didesain untuk menjalankan berbagai aksi
function checkUserData(username, password) {
    let usernameDb = 'richardo';
    let usernameDb2 = 'richardo2';
    let passwordDb = '123aaa';
    let passwordDb2 = '123';

    if (username == usernameDb) {
        if (password == passwordDb) {
            alert('Berhasil Login')
        } else{
            alert('Password salah')
        }
    } else if(username == usernameDb2){
        if (password == passwordDb2) {
            alert('Berhasil Login Username2')
        } else {
            alert('Password Username2 Salah')
        }
    } else{
        alert('Username salah')
    }
}
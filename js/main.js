// Belajar Logical Operator
let usernameDatabase = "hujan";
let passwordDatabase = "123aaa";

let usernameDariInputUser = "hujan";
let passwordDariInputUser = "111aaa";

let validasiDataUser = usernameDariInputUser == usernameDatabase && passwordDariInputUser == passwordDatabase;

let cuaca1 = "hujan"
let cuaca2 = "tidak bersalju"

let pakeJaket = cuaca1 == "hujan" || cuaca1 == "tidak bersalju";

// Menampilkan data
console.log(validasiDataUser);
console.log(pakeJaket)
/*
FOREACH DÖNGÜSÜ

*/


let isimler = ["enes", "abdulah", "fatih", "adem"];

// isimler.forEach(function (isim) {  // önce dizi ismi sonra foreach sonra içine bir fonksion ver fonsksiyona bir değişken isimi ver bu kadar:)
//     console.log(isim);
// })

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);
// }

sayac = 0;
while (sayac < isimler.length) {
    console.log(isimler[sayac])
    sayac++;
}


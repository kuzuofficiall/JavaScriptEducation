/*
                              çoklu if yapısı
 if(koşul){
 
 }
 if(koşul){
 
 }
 if(koşul){
 
 hepsi ayrı koşul doğru olanları çalitirir
 }
if else : iki seçeneğin olduğu yerde kulanılır 
if else if else : 2 den fazla seçeneğin olduğu yerde kulanılır 
if if if if : her şart ayrı ayrı kontrol etmek istersen kulanılır
*/


/*
kulanıcdan adını ve tc sini al 
adı boş geçilemez ve tcsi 11 karakter olması lazım 

*/
let ad = prompt("lütfen adınızı giriniz")
let tckn = prompt("lütfen tcni gir ")
// function kontrolEt(ad, tckn) {
//     if (ad != "") {
//         if (tckn.length == 11) {
//             alert("isim ve tc başarılı ")
//         } else {
//             alert("lütfen 11 karakter olsun")
//         }
//     }
//     else {
//         alert("lütfen isim alanını boş bırakma")
//     };

// };
// kontrolEt(ad, tckn);


function kontrolEt2(ad, tckn) {

    if (ad = "") {
        console.log("lütfen isim alanını boş bırakma")
    };
    if (tckn !== 11) {
        console.log("lütfen 11 karakter olsun")
    };
    console.log("isim ve tc başarılı ")

};
kontrolEt2(ad, tckn);


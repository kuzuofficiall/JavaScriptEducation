/*
 Session Stroge kulanması  depolama alanı verileri depolar 
 locale stroge ile session stroge arasındaki fark sesion stroge değer eklediğinizde tarayıcı kapatığın an değerler silinir tutulmaz 
 localde ise tarıyıcıda kapansa bilgisayarda kapansa değerler tutulur silinmez  
bütün değerler string olrak yüklenir
 */

// değer ekleme 
// sessionStorage.setItem("34", "abdullah");
// sessionStorage.setItem("23", "fatih");
// sessionStorage.setItem("1", "adem");

// // değer silme 
// sessionStorage.removeItem("1");

// let vale = sessionStorage.getItem("34"); // burda benden bir key istiyor
// console.log(vale);
// if (vale === null) {
//     console.log("değer bulunamadı")

// } else {
//     console.log("değer bulundu");
// }

// // hepsini silme 
// sessionStorage.clear();

// let value = sessionStorage.getItem(23);
// console.log(typeof value);

// let names = ["ali", "enes", "abdullah", "zeynep"];
// sessionStorage.setItem("names", JSON.stringify(names));

// let value1 = JSON.parse(sessionStorage.getItem("names"));
// console.log(value1);
// value1.forEach(function (names) {
//     console.log(names);
// })

/**
 * local stroge  tarıyıcıda kapansa bilgisayarda kapansa değerler tutulur silinmez 
 */
localStorage.setItem("motion1", "push up");
localStorage.setItem("motion2", "barfix");
localStorage.setItem("motion3", "dumbel curl");
localStorage.setItem("motion4", "squat");


// değer silme 
// localStorage.removeItem("motion1");

// let value = localStorage.getItem("motion1"); // burda benden bir key istiyor
// console.log(vale);

// hepsini silme
// localStorage.clear();

let motions = ["push up", "barfix", "dumbel curl", "squat"];
localStorage.setItem("motions", JSON.stringify(motions));
let value = JSON.parse(localStorage.getItem("motions"));
value.forEach(function (motion) {
    console.log(motion);
});

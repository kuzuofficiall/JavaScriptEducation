/*
 ---------------------- diyalog Kutuları-------------------------------------
    - alert
    - prompt
    - confirm
*/

// console.log(window)  hepsi window ojesinin içinde 

//functiondur
alert("işleme devam etmeden önce kaydetmelisin") // kulanıcıya mesaaj verirsin 

// prompt(); kulanıcadan değer alabiliyoruz 
let isim = prompt("İsminizi Giriniz"); // kulanıcan gelen değeri yakalamak için bir depere atacaz  
let yas = prompt("yaşinizi giriniz");

console.log("isminiz :" + isim)
console.log("Yaşiniz :" + yas)
// kulanıcın onayını almak için yapılır boolen bir değer döner 
let sonuc = confirm("silmek istediğinize eminmisiniz");
console.log(sonuc);

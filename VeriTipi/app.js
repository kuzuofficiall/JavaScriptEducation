/*
? Veri Tipleri 

String
Number
Boolen
Null
Undefined
Object
Function 

*/

// let isim = "abdullah kuzu"
// console.log(typeof (isim))

let sayi1 = 10.5;
let sayi2 = 12;

console.log(sayi1 + sayi2);
console.log(typeof sayi1);

let sonuc = sayi1 + sayi2;
console.log(sonuc !== 4);// burda boolen döner true yada false cıktı verir 

let a = null; // içerisinde değer atamadiğn boş anlamına gelir değer atamsı yapmadığnızda verirsin  
console.log(a);

//-----------------Undefined veri tipi-------------

let b;
console.log(typeof b); // tanımlanmamiş değişken değeri vermediğinizde olur 

//-------------Object veri tipi -----------------

let insan = {
    isim: "abdullah",
    yaş: 23,
    soyİsim: "kuzu"

};
console.log(typeof insan);

let rakamlar = [  // dizi tipinde 
    1, 2, 3, 4, 5, 6
];
console.log(typeof rakamlar);

// ---------------- Function veri tipi --------------------
let func = function () {
    console.log("merhaba");
}
func();
console.log(typeof func);
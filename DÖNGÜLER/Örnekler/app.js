/*
asal sayı bulma 


let sayi = Number(prompt("lütfen bir sayı giriniz"));

let asalMi = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        asalMi = false
        break;
    }
}
if (asalMi) {
    console.log("asaldir")
} else {
    console.log("asal değildir")
}
*/

/*
çarpım tablosu 


for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i + " x " + j + "= " + i * j)
        
    }
    console.log("-----------------------------------")
}
*/

/*

faktoriyel hesaplama
let sayi = Number(prompt("bir sayı gir "));
let carpim = 1;
for (let i = 1; i <= sayi; i++) {
    carpim = carpim * i;
    //  console.log(carpim) // burda yazarsan her adımda render edilir 
}
console.log(carpim);
*/

/*
 amstrong sayısı 
153 ,370,407

153 =1*1*1 +5*5*5 + 3*3*3

let sayiString = prompt("sayi gir");

let sayi = Number(sayiString);
let toplam = 0;
for (let i = 0; i < sayiString.length; i++) {
    let basamk = sayi % 10
    sayi = Math.floor(sayi / 10);
    toplam += basamk * basamk * basamk; 153
}
if (sayiString == toplam) {
    console.log("amstrongdur");
} else {
    console.log("amstrong değildir :(");
}
*/
// ikinci yol
let sayi = prompt("sayi gir")

let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
    let rakam = sayi.charAt(i);
    toplam = rakam * rakam * rakam;
}

if (Number(sayi) == toplam) {
    alert("Amstorngdur");
} else {
    alert("amstrong sayısı değil")
}
/*
 ? sorular 
1- Türkçe 40  -- 4 puan
2- Matematik 40
3- sosyal bilimler 20
4 fen Bilimleri 20
----------> 100 puan ösym veriyor 
----------> okul puanı max 60 puan

*/

let türkçeDoğru, türkçeYanlış = 0;
let matDoğru, matYanlış = 0;
let fenDoğru, fenYanlış = 0;
let sosyalDoğru, sosyalYanlış = 0;
let puan = 0;
let okulPuanı = 0;
let = yenisatır = "\n";


let metin = prompt("Tyt Puan Hesaplamasına Hoş geldiniz" + yenisatır + "1 - puan Hesapla " + yenisatır + "2 -çıkış yap")
let secim = Number(metin);
console.log(secim);
switch (secim) {

    case 1:
        let türkçeDoğru = Number(prompt("lütfen türkçe doğru sayısıı giriniz"));
        let türkçeYanlış = Number(prompt("lütfen türkçe yanliş sayısını giriniz"));

        let matDoğru = Number(prompt("lütfen türkçe matematik sayısıı giriniz"));
        let matYanlış = Number(prompt("lütfen matematik yanliş sayısını giriniz"));

        let fenDoğru = Number(prompt("lütfen fen doğru sayısıı giriniz"));
        let fenYanlış = Number(prompt("lütfen fen yanliş sayısını giriniz"));

        let sosyalDoğru = Number(prompt("lütfen sosyal doğru sayısıı giriniz"));
        let sosyalYanlış = Number(prompt("lütfen sosyal yanliş sayısını giriniz"));

        doğruSayısı = türkçeDoğru + fenDoğru + sosyalDoğru + matDoğru;
        yanlişSayısı = türkçeYanlış + fenYanlış + sosyalYanlış + matYanlış;

        netOranı = doğruSayısı - (yanlişSayısı / 4);
        puan = (netOranı * 4) + okulPuanı + 100;
        alert(" Tyt puanınız :" + puan)
        break;
    case 2:
        alert("başarıyla çıkış yapıldı .... ");
        break;
    default:
        alert("lütfen girilen değer aralığında giriniz")
        break;


}
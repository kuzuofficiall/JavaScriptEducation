/*

Bilet Fiyatı Hesaplama:

Kullanıcıdan yaşını, yolculuk mesafesini ve seyahat tipini (Tek Yön/Çift Yön) alın.
12 yaşından küçükse %50 indirim,
12-24 yaş arasında %10 indirim,
65 yaş ve üzeri %30 indirim,
Çift yön seçilirse %20 indirim uygulayın ve bilet fiyatını hesaplayan bir program yazın.


const birimFiyat = 10; // Kilometre başına fiyat

const yas = parseInt(prompt("Yaşınızı girin:"));
const mesafe = parseFloat(prompt("Gideceğiniz mesafeyi (km) girin:"));
const seyahatTipi = parseInt(prompt("Seyahat tipinizi seçin: 1 - Tek Yön, 2 - Çift Yön"));

let indirimOrani = 0;

if (yas < 12) {
    indirimOrani = 0.50;
} else if (yas >= 12 && yas <= 24) {
    indirimOrani = 0.10;
} else if (yas >= 65) {
    indirimOrani = 0.30;
}

let ciftYonIndirimi = 0;
if (seyahatTipi === 2) {
    ciftYonIndirimi = 0.20;
}

let normalFiyat = mesafe * birimFiyat;
let indirimliFiyat = normalFiyat - (normalFiyat * indirimOrani);

if (seyahatTipi === 2) {
    indirimliFiyat = (indirimliFiyat - (indirimliFiyat * ciftYonIndirimi));
}

console.log("Normal Fiyat: " + normalFiyat + " TL");
console.log("İndirimli Fiyat: " + indirimliFiyat + " TL");
*/

/*
Kullanıcıdan gün numarasını (1-7 arası) alın ve bu numaraya karşılık gelen gün ismini yazdıran bir program yazın. 
Örneğin, 1 girilirse "Pazartesi" yazmalı.

*/

let gün = Number(prompt("lütfen (1-7) arasında bir sayı girin"));

if (gün == 1) {
    console.log("pazartesi")

} else if (gün == 2) {
    console.log("salı");
}
else if (gün == 3) {
    console.log("çarşamba")
}
else if (gün == 4) {
    console.log("perşembe")
}
else if (gün == 5) {
    console.log("cuma")
}
else if (gün == 6) {
    console.log("cumartesi")
}
else if (gün == 7) {
    console.log("pazar")
}



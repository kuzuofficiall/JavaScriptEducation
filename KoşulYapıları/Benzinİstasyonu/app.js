/*  Benzin İstasyonu 

Dizel :43.84 TL/LT
Benzin:44.54 tl/lt
Lpg :22.94 TL/LT

Gelen Müşterilerden alacağımız Bilgiler 
1- yakıt tipi 
2- kaç litre alacak

*/

let Dizel = 43.84, Benzin = 44.54, Lpg = 22.94;
const yenisatır = "\r\n"

const yakıtMetni = "1-Dizel" + yenisatır
    + "2-Benzin" + yenisatır + "3-Lpg" + yenisatır + "lütfen hangisni alacagınızı giriniz";

let yakıtTipi = prompt(yakıtMetni);
let yakıtLitresi = Number(prompt("yakıt litresini Giriniz"));
let bakiye = Number(prompt("Bakiyenizi Giriniz"))


if (yakıtTipi = "1") {
    odencekTutar = Dizel * yakıtLitresi;

    if (bakiye > odencekTutar) {
        kalanBakiye = (bakiye - odencekTutar);
        alert("Alabiliyorsun seni zengin" + yenisatır + "ödediğiniz tutar :" + odencekTutar + yenisatır + "kalan-bakiyeniz: " + kalanBakiye)
    }
    else {
        //baiye yetmiyorsa
        alert("paranız yetmiyor pis fakir " + yenisatır + "ödenecek tutar" + odencekTutar + yenisatır + "eksik olan para :" + (odencekTutar - bakiye))
    }
} else if (yakıtTipi = "2") {
    odencekTutar = Benzin * yakıtLitresi;

    if (bakiye > odencekTutar) {
        kalanBakiye = (bakiye - odencekTutar);
        alert("Alabiliyorsun seni zengin" + yenisatır + "ödediğiniz tutar :" + odencekTutar + yenisatır + "kalan-bakiyeniz: " + kalanBakiye)
    }
    else {
        //baiye yetmiyorsa
        alert("paranız yetmiyor pis fakir " + yenisatır + "ödenecek tutar" + odencekTutar + yenisatır + "eksik olan para :" + (odencekTutar - bakiye))
    }
} else if (yakıtTipi = "2") {
    odencekTutar = Lpg * yakıtLitresi;

    if (bakiye > odencekTutar) {
        kalanBakiye = (bakiye - odencekTutar);
        alert("Alabiliyorsun seni zengin" + yenisatır + "ödediğiniz tutar :" + odencekTutar + yenisatır + "kalan-bakiyeniz: " + kalanBakiye)
    }
    else {
        //baiye yetmiyorsa
        alert("paranız yetmiyor pis fakir " + yenisatır + "ödenecek tutar" + odencekTutar + yenisatır + "eksik olan para :" + (odencekTutar - bakiye))
    }
}


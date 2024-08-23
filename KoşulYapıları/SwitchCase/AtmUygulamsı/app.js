/*
        Atm Uygulaması
1- Bakiye görüntüleme
2- para çekme
3- para yatırma
4- çıkış

*/


yeniSatır = "\n";
let metin = "1 - Bakiye görüntüleme" + yeniSatır + "2 - para çekme" + yeniSatır + "3 - para yatırma" + yeniSatır + "4 - çıkış"
let secim = Number(prompt(metin));
let Bakiye = 1000;

switch (secim) {
    case 1:
        alert("bakiyeniz:" + Bakiye)
        break;
    case 2:
        let çekilecekTutar = Number(prompt("lütfen çekilecek tutar Giriniz"));
        if (Bakiye > çekilecekTutar) {
            Bakiye = Bakiye - çekilecekTutar;
            alert("Paranız başarnız başarıyla çekilmiştir" + yeniSatır + "kalan Bakiyeniz" + Bakiye)
        } else {
            alert("bakiyenden fazla para çekemezsiniz" + yeniSatır + "bakiyeniz" + Bakiye)
        }
        break;
    case 3:
        let yatırma = Number(prompt("lütfen yatırcağınız tutarı giriniz"));
        Bakiye = Bakiye + yatırma;
        alert("bakiyeniz :" + Bakiye)
        break;
    case 4:
        alert("başarıyla çıkış yapılmıştır")
        break;
    default:
        alert("lütfen istenilen değerde giriniz")
        break;
}
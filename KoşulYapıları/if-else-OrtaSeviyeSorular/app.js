/*
                  Not Sistemi:

Kullanıcıdan bir not alıp, 0-100 arasında bir sayı girildiğinde şu şekilde bir değerlendirme yapan programı yazın:
90 ve üzeri: A
80-89: B
70-79: C
60-69: D
50-59: E
49 ve altı: F

let not = Number(prompt("0-100 arasında bir sayı girin"));

if (not >= 90) {
    console.log("AA")
}
else if (not > 80 && not <= 90) {
    console.log("BB")
}
else if (not > 70 && not <= 79) {
    console.log("CC")
}
else if (not > 60 && not <= 69) {
    console.log("DD")
}
else if (not > 50 && not <= 59) {
    console.log("EE")
}
else {
    console.log("FF")
};
*/

/*
   Sayıların Büyüklük Karşılaştırması:

Kullanıcıdan 3 sayı alıp, bu sayıların hangisinin en büyük ve hangisinin en küçük olduğunu bulan bir program yazın.

let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
let sayi3 = parseFloat(prompt("Üçüncü sayıyı girin:"));

let enbüyük, enKüçük;

if (sayi1 > sayi2 && sayi1 > sayi3) {
    enbüyük = sayi1;
}
else if (sayi2 > sayi1 && sayi2 > sayi3) {
    enbüyük = sayi2
}
else {
    enbüyük = sayi3;
}

if (sayi1 < sayi2 && sayi1 < sayi3) {
    enKüçük = sayi1;
}
else if (sayi2 < sayi1 && sayi2 < sayi3) {
    enKüçük = sayi2
}
else {
    enKüçük = sayi3;
};

console.log("En büyük sayı: " + enbüyük);
console.log("En küçük sayı: " + enKüçük);
*/

/*
              Artık Yıl Kontrolü:

Kullanıcıdan bir yıl alıp, bu yılın artık yıl olup olmadığını kontrol eden bir program yazın.
Artık yıl kuralı: Yıl 4'e bölünebiliyorsa artık yıldır, ancak 100'e bölünüp 400'e bölünemeyen yıllar artık yıl değildir.



let yil = parseInt(prompt("Bir yıl girin:"));


let artikYilMi;

if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
    artikYilMi = true;
} else {
    artikYilMi = false;
}

if (artikYilMi) {
    console.log(yil + " bir artık yıldır.");
} else {
    console.log(yil + " bir artık yıl değildir.");
}
*/

/*
                 Basit Hesap Makinesi:

Kullanıcıdan iki sayı ve bir işlem (toplama, çıkarma, çarpma, bölme) alıp, sonucu hesaplayan bir program yazın.


let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));

let islem = prompt("Bir işlem seçin (+, -, *, /):");

let sonuc;

if (islem === "+") {
    sonuc = sayi1 + sayi2;
} else if (islem === "-") {
    sonuc = sayi1 - sayi2;
} else if (islem === "*") {
    sonuc = sayi1 * sayi2;
} else if (islem === "/") {
    if (sayi2 !== 0) { // Bölme işleminde sıfıra bölme kontrolü
    sonuc = sayi1 / sayi2;
} else {
    sonuc = "Hata: Sıfıra bölme tanımsızdır.";
}
} else {
    sonuc = "Geçersiz işlem.";
}

console.log("Sonuç: " + sonuc);
*/




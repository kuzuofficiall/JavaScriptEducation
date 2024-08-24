/*
kelime sayısnı bulan uygulama


let metin = "lorem ispum data moda  zeynbi çok seviyorum aşkım benim"
let harf = prompt("harf giriniz")

let toplam = 0; // function içinde tanımlamazsak burda tanımlarsam hepsini üst üste toplar

function bul(harf) {
    let = toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
            toplam += 1;
        }
    }
    // return toplam;
    console.log("harf sayısı:  " + toplam)
};

// let sonuc = bul(harf)
// console.log("harf sayısı", sonuc)
bul("a");
bul("z")
bul("e");
bul("o")

*/

/*
  Mükemel sayı uygulaması

  6 - 28 - 496
 -----> bir sayıyı tam bölünmesi için maksimum yarısına kadar bölebilirsin
  6 = 1, 2, 3,6 =12   bölen sayıların toplamı orjnal sayımın 2 katına eşitse mükemel sayı olur



  function isPerfectNumber(number) {
    let toplam = 0;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            toplam += i
        }
    }
    toplam += 1 + number;
    if (toplam == number * 2) {
        console.log("mükemel sayısın");
    } else {
        console.log("eziksin");
}

}

isPerfectNumber(12);
*/

// function convertDesimalBinary(number) {
//     let binary = "";
//     while (true) {
//         binary = (number % 2).toString() + binary; // her geleni başa atığı için reverse fonksiyonuna gerek yok
//         number = Math.floor(number / 2);

//         if (number == 1) {
//             binary = 1 + binary;
//             break;
//         }
//     }

//     // let sonuc = reverse(binary)
//     // console.log(sonuc)
//     console.log(binary)
// }
// convertDesimalBinary(15);

// function reverse(binary) {
//     let reverseBinary = "";
//     for (let i = binary.length - 1; i >= 0; i--) {
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }

// function BinaryconvertDesimal() {
//     let binary = "100"; // binary number
//     let decimal = 0; // decimal equivalent
//     let length = binary.length; // length of the binary string

//     for (let i = 0; i < length; i++) {
//         let rakam = binary.charAt(length - 1 - i); // get the binary digit starting from the rightmost
//         let sonuc = Number(rakam) * Math.pow(2, i); // multiply the digit by 2 raised to the power of its position
//         decimal += sonuc; // add the result to the decimal value
//         console.log(Number(rakam) * (Math.pow(2, i)));
//     }

//     console.log("binary: ", binary, " decimal: ", decimal);
// }

// BinaryconvertDesimal();

// ikinci yol
// let binary = "1010";
// function convertBinaryToDesimal() {
//     let toplam = 0;
//     let üst = 0;

//     for (let i = binary.length - 1; i >= 0; i--) {
//         toplam += Number(binary.charAt(i)) * Math.pow(2, üst)
//3 indeksdeki değeri getir yani 1     x     1
//         üst++;

//     }
//     console.log("sonuc : " + toplam);
// }
// convertBinaryToDesimal(binary);

/*  Bir dizi içindeki sayıları toplayan bir fonksiyon yazın.

let dizi = [1, 2, 3, 4, 5, 6]

function toplama(dizi) {
    let top = 0;
    for (let i = 0; i < dizi.length; i++) {
        top = top + dizi[i];
    }
    console.log("toplam " + top)
}
toplama(dizi);
*/

/*
Toplama ve Çıkarma Fonksiyonu:
İki sayıyı toplayan ve çıkartan basit fonksiyonlar yazın.

let toplam = 0;
function topla(sayi, sayi2) {
    toplam = sayi + sayi2
    console.log(toplam)
}
topla(23, 24)
*/

/*
Faktöriyel Hesaplama:

Bir sayının faktöriyelini bulan bir fonksiyon yazın.

function FaktöriyelHesapla(n) {
    
if (n < 0) {
    console.log("eksi sayıların faktoriyeli olmaz ")
}

let sonuc = 1;
for (let i = 1; i <= n; i++) {
    sonuc *= i
}
return sonuc;
}
console.log(FaktöriyelHesapla(5));
function faktoriyel(n) {
    if (n < 0) return "Geçersiz giriş";
    if (n === 0) return 1;
    return n * faktoriyel(n - 1);
}

console.log(faktoriyel(5));
console.log(faktoriyel(0));
console.log(faktoriyel(-3));
*/

/*
Dizideki En Büyük Sayıyı Bulma:
Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.
let dizi = [1, 2, 4, 6, 8, 23, 9, 0]
function DiziSearch(dizi) {
    let enBuyukSayiIndis = 0;
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[enBuyukSayiIndis] < dizi[i]) {
            enBuyukSayiIndis = i;
        }
    }
    return enBuyukSayiIndis;
}
console.log(dizi[DiziSearch(dizi)]);

*/

/*
Dizi Elemanlarının Frekansını Bulma:

Bir dizideki her elemanın kaç kez tekrarlandığını bulan bir fonksiyon yazın.

let dizi = [1, 2, 4, 2, 4, 5, 2, 4, 1, 6, 7, 4, 4]

//1:2 fr:1
//2:3 fr:2
function frenkasBulma() {
    let sayac1 = 0;
    let sayac2 = 0;
    let frekans1 = dizi[0];
    let frekans;
    for (let i = 0; i < dizi.length; i++) {
        frekans1 = dizi[i];
        sayac1 = 0;
        console.log(frekans1);
        for (let j = 0; j < dizi.length; j++) {
            if (frekans1 == dizi[j]) {
                sayac1++;
            }
        }
        
        if (i == 0) {
            sayac2 = sayac1;
            frekans = dizi[0];
        }
        if (sayac1 >= sayac2) {
            sayac2 = sayac1;
            frekans = dizi[i];
        }
    }
    console.log("Frekans:", frekans, "defa var: ", sayac2)
}

frenkasBulma();

function frekansBulma(dizi) {
    let frekanslar = {}; // Her elemanın frekansını tutmak için bir nesne

     Diziyi dolaş ve her elemanın frekansını say
    for (let i = 0; i < dizi.length; i++) {
        let eleman = dizi[i];

        Eğer eleman daha önce görülmemişse, frekansı 1 yap
        if (frekanslar[eleman] === undefined) {
            frekanslar[eleman] = 1;
        } else {
         Eğer eleman zaten varsa, frekansı 1 artır
            frekanslar[eleman]++;
        }
    }

     Frekansları konsola yazdır
    for (let eleman in frekanslar) {
        console.log(eleman + " elemanı " + frekanslar[eleman] + " defa tekrar etti.");
    }
}
let dizi = [1, 2, 4, 6, 8, 23, 9, 0, 6, 4, 6];
frekansBulma(dizi);


*/

/*
Palindrom Kontrolü:

Bir kelimenin veya sayının palindrom olup olmadığını kontrol eden bir fonksiyon yazın.


function palindromKontrolu(girdi) {

    let stringGirdi = girdi.toString();

    let tersGirdi = stringGirdi.split("").reverse().join("");// split('') karakterleri bir diziye böler, reverse() diziyi ters çevirir,
    // ve join('') ile tekrar string haline getiririz.
    
    if (stringGirdi == tersGirdi) {
        return true
        
    } else {
        return false;
}


}
console.log(palindromKontrolu("kek"));
console.log(palindromKontrolu("level"));
console.log(palindromKontrolu("hello"));
console.log(palindromKontrolu(12321));
console.log(palindromKontrolu(12345));


function palindrom(kelime) {
    
let tersKelime = "";

for (let i = kelime.length - 1; i >= 0; i--) {
    tersKelime += kelime[i];
    
}
if (kelime == tersKelime) {
    console.log("palidrom")
} else {
    console.log("palidrom değildir")
}
}

palindrom("ksafdsafd");

*/
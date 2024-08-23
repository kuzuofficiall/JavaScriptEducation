/*
for (değişken;koşul;arttırma-azaltma){
kodlar
}

for (let i=0;i<=10;i++){
console.log(i);
}
*/
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 1den 10 kadar olan çiftleri yazdıralım
for (let i = 0; i <= 10; i += 2) {
    console.log("i değeri :" + i)

}
// 1den 10 kadar olan çiftleri yazdıralım

for (let i = 1; i <= 10; i += 2) {
    console.log("i değeri :" + i)

}

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("abdullah")
    } else {
        console.log("naber müdür")
    }

}
*/
// 50 den 1 e kadar gidelim ve toplamlarını bulalım

// let toplam = 0;
// for (let i = 50; i >= 1; i--) {
//     toplam = toplam + 1;
//     console.log(i)
// }
// console.log("Toplam :" + toplam)

//1'den 100'e kadar olan sayıları ekrana yazdıran bir algoritma yaz.
// let toplam = 0
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     toplam = toplam + 1
// }

//Verilen bir dizideki tüm elemanları toplayıp sonucu ekrana yazdıran bir algoritma yaz.
// dizi = [1, 2, 3, 4, 5]
// toplam = 0;
// for (let i = 0; i < dizi.length; i++) {
//     toplam = toplam + dizi[i];
// }
// console.log("toplam  " + toplam)


//Girilen bir sayının faktöriyelini hesaplama

// let sayi = Number(prompt("Faktöriyelini hesaplamak istediğin sayıyı gir"));

// let faktör = 1;

// if (sayi < 0) {
//     console.log("Negatif sayıların faktöriyeli hesaplanamaz");
// } else {
//     for (let i = 1; i <= sayi; i++) {
//         faktör *= i;
//     }
//     console.log(faktör);
// }

/*
Verilen bir dizi içindeki çift sayıların sayısını bulan bir algoritma yaz.
*/

// dizi = [1, 2, 3, 4, 5, 6, 8, 12, 14, 16];
// let çiftSayi = 0;

// for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] % 2 == 0) {  // Burada dizi[i] kullanarak dizinin elemanını kontrol ediyoruz.
//         çiftSayi += 1;
//     }
// }

// console.log(çiftSayi);
// Girilen bir sayının asal olup olmadığını kontrol etme:

// let sayi = Number(prompt("lütfen sayi giriniz"))
// let asal = true;

// if (sayi <= 1) {
//     asal = false;
// }
// else {
//     for (let i = 2; i < sayi; i++) {

//         if (sayi % i === 0) {
//             asal = false;
//             break;
//         }

//     }
// }
// if (asal) {
//     console.log(sayi + "  bir asal sayidir")
// } else {
//     console.log(sayi + "  bir asal değildir ")
// }

/*
Amaç: Fibonacci dizisinin belirli bir uzunluğa kadar hesaplanması.
Adımlar:
Fibonacci dizisinin ilk iki elemanını (0 ve 1) belirle.
Döngü ile sonraki Fibonacci sayılarını hesapla ve listeye ekle.
Kullanıcıdan kaç sayı hesaplanacağı bilgisini al.
Sonucu ekrana yazdır.
kullanıcı 5 tane istedi
0,1,1,2,3
*/
// let want = Number(prompt("ne kadar uzunlukta fibınacii hesaplayacan"));

// let fib = [0, 1]; //java
// //boş  bir dizi oluşturma
// let dizi = new Array(want)
// if (want >= 1) {
//     dizi[0] = 0;
// }
// if (want >= 1) {

//     dizi[1] = 1;
// }

// for (let i = 0; i < want - 2; i++) {
//     dizi[i + 2] = dizi[i] + dizi[i + 1];//
// }

// console.log(dizi)

// let dizi = [0, 1, 1, 2, 3, 5];

// for (let i = 0; i < want - 2; i++) {
//     dizi[i + 2] = dizi[i] + dizi[i + 1]
// }
// // console.log(Fibonacci)
// for (let i = 0; i < want; i++) {
//     console.log(dizi[i])
// }

// // başka bir çözüm yolu
// // Kullanıcıdan kaç Fibonacci sayısı hesaplanacağı bilgisini al
// let n = parseInt(prompt("Kaç Fibonacci sayısı hesaplanacak?"));

// // Fibonacci dizisinin ilk iki elemanını (0 ve 1) belirle
// let fibonacci = [0, 1];

// // Döngü ile sonraki Fibonacci sayılarını hesapla ve listeye ekle
// for (let i = 2; i < n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// // Sonucu ekrana yazdır
// console.log("Fibonacci Dizisi:", fibonacci);

/*
Bir diziyi tersine çevirme:
Amaç: Verilen bir diziyi tersine çevirmek.
Adımlar:
Diziyi tanımla.
Tersine çevirmek için yeni bir dizi oluştur.
Diziyi son elemandan başlayarak ilk elemana kadar döngü ile dolaş.
Her elemanı yeni dizinin sonuna ekle.
Sonucu ekrana yazdır.

 */

// let dizi = [0, 1, 2, 3, 4, 5, 6];
// dizi.reverse() //buda fonksiyon kulnarak yapılıyor

// let dizi1 = [];
// for (let i = dizi.length - 1; i > 0; i--) {
//     // dizi1[0] =dizi[5]
//     //dizi1{1}=dizi[4]
//     dizi1[dizi.length -1 - i]=dizi[i];

// }

// console.log(dizi)

/*
Girilen sayının basamaklarındaki rakamların toplamını bulma:
Amaç: Kullanıcıdan alınan bir sayının basamaklarındaki rakamların toplamını bulmak.
Adımlar:
Kullanıcıdan bir sayı al.
Basamakları toplamak için bir değişken oluştur.
Döngü ile sayının basamaklarını ayırıp topla.
Sonucu ekrana yazdır.

let sayi = Number(prompt("lütfen bir sayi giriniz"))
let toplam = 0;

while (sayi > 0) {
    let basamak = sayi % 10
    toplam += basamak
    sayi = Math.floor(sayi / 10);
}
console.log("Basamakların toplamı:", toplam);
let sayi = prompt("Bir sayı girin:");

let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
    toplam += parseInt(sayi[i]); // Her basamağı sayıya çevirip toplama ekler
}

console.log("Basamakların toplamı:", toplam);
*/

/*
Bir dizideki en büyük ve en küçük sayıyı bulma:
Amaç: Verilen bir dizideki en büyük ve en küçük sayıyı bulmak.
Adımlar:
Diziyi tanımla.
En büyük ve en küçük değerler için başlangıç değerleri oluştur.
Döngü ile dizideki her elemanı kontrol et.
Eğer eleman mevcut en büyük veya en küçük değerden büyük ya da küçükse, güncelle.
Sonuçları ekrana yazdır.
let dizi = [3, 5, 1, 9, 2, 8, 4];
let enBüyük = [0];
let enKüçük = [0];
for (let i = 0; i < dizi.length; i++) {
    
if (dizi[i] > enBüyük) {
    enBüyük = dizi[i];
}
if (dizi[i] < enKüçük) {
    enKüçük = dizi[i];
}

}
console.log("En Büyük Sayı:", enBüyük);
console.log("En Küçük Sayı:", enKüçük);
*/
/*
Girilen bir kelimenin palindrom olup olmadığını kontrol etme:

Amaç: Kullanıcıdan alınan bir kelimenin palindrom olup olmadığını kontrol etmek.
Adımlar:
Kullanıcıdan bir kelime al.
Kelimeyi tersine çevir.
Tersine çevrilen kelime ile orijinal kelimeyi karşılaştır.
Eşitse palindrom olduğunu, değilse olmadığını yazdır.

let kelime = prompt("Bir kelime girin:");

let tersKelime = '';
for (let i = kelime.length - 1; i >= 0; i--) {
    tersKelime += kelime[i]; // Her bir karakteri ters sırayla ekle
}

if (kelime === tersKelime) {
    console.log("Kelime bir palindromdur." + "" + tersKelime);
} else {
    console.log("Kelime bir palindrom değildir." + "" + tersKelime);
}
*/
/*
Asal çarpanlarına ayırma:

Amaç: Bir sayıyı asal çarpanlarına ayırmak.
Adımlar:
Kullanıcıdan bir sayı al.
2'den başlayarak sayının kareköküne kadar döngü ile bölünebilir asal sayıları bul.
Bulduğun her asal sayıyı sonuç listesine ekle ve sayıyı bu asal sayıya böl.
Sonucu ekrana yazdır.



*/

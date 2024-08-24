/*
dizinin metotları 

push :dizinin sonunua elaman ekler , ayrıca dizinin uzunluğunu döner
unshift :dizinin başına eleman ekler ,eleman sayısını geriye döner

pop : dizinin sonunda elaman siler , elman sayısı döner 
shift: dizinin başından eleman siler ,eleman sayısı döner 

splice (index,index) : eleman eklemek ve silmek için kulanılır


toString  : diziyi stringe çevirebiliriz
join : diziyi stringe çevirir farkı ise araya eleman ekleyebiliriz

concat : dizileri birleştirmek için kulanılır
slice(dilimlemek) : diziyi istenilen yerde bölüp yeni bir dizi oluşturmak 
length: dizinin uzunluğunu verir 
reverse dizinin elemanlarını ters çevirir 
split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek
indexof : elemanın index numarasını verir 
includes : verilen elamanı içeriyior mu ona bakılır  


*/

let arablar = ["bmw", "audi", "mercdes", "bugatti", "porche", "ferari", "lamborgini"];

// const sayilar = [1, 2, 3, 4, 5]
// let ekle = arablar.push(...sayilar) // objeyi değil içindeki elemanları döndürüyorsun
// let ekle = arablar.push(sayilar, "tofaş") // objeyi ekle ve tofaşı ekler 
// console.log(arablar, "eklenen", ekle)


// arablar.unshift("clio");
// let dönenDeğer = arablar.unshift(...sayilar, "clio")
// console.log(arablar, dönenDeğer);




// Dizinin son elemanını kaldır ve döndür
// let sonEleman = arablar.pop();
// console.log(arablar);
// console.log(sonEleman);  

// let silinenEleman = arablar.shift()
// console.log(arablar)
// console.log(silinenEleman) 

// ----------splice------------------------------
// eleman kaldrıma 
// let kaldırılanEleman = arablar.splice(2, 1,) //ilk parametre olarak başlangıç indeksini alır, ikinci parametre olarak kaç eleman kaldırılacağını belirtir ve üçüncü ve sonrası parametreler ise eklemek istediğiniz elemanlardır.
// console.log(arablar);
// console.log(kaldırılanEleman)
//eleman ekleme

// let eklenenEleman = arablar.splice(2, 0, "abdullah")
// console.log(arablar);
// console.log(eklenenEleman);

// Eleman Değiştirme:

// arablar.splice(2, 0, "sarı");
// console.log(arablar);

// -------------------------------------------------------
// let stringArablar = arablar.toString()
// console.log(typeof stringArablar);
// console.log(typeof arablar);

// -------------------------------------------

// let stringArablar = arablar.join("?")
// console.log(arablar)
// console.log(stringArablar)

// ------------------------------------------------------
// let sayilar = [1, 2, 4, 5,]
// let BirleşmişDizi = arablar.concat(sayilar)
// console.log(BirleşmişDizi)

// -----------------------------------------------------------

// let ayriDizi = arablar.slice(5)
// console.log(arablar);
// console.log(ayriDizi);
// ---------------------------------------------------------------
// let uzunluk = arablar.length
// console.log(uzunluk)
// --------------------------------------------------------------

// arablar.reverse();
// console.log(arablar)

// -----------------------------------------------
// let tarih = "23-08-2024";
// let parcalar = tarih.split("-");

// console.log(parcalar);  // ["23", "08", "2024"]
//sınırlı bölmek
// let cumle = "JavaScript öğrenmek çok eğlenceli";
// let ikiKelime = cumle.split(" ", 2);

// console.log(ikiKelime);  // ["JavaScript", "öğrenmek"]


// -------------------------------------------------------

// let index = arablar.indexOf("bugatti");
// console.log(index); // bir dizi veya string içinde belirli bir değerin ilk bulunduğu indeks numarasını döndürür. 
// let bulunmayan = arablar.indexOf("rolce-roys")
// console.log(bulunmayan);   //Eğer değer bulunamazsa -1 döner

// if (index == -1) {
//     console.log("eleman yoktur")

// } else {
//     console.log("eleman vardır")
// }

// -----------------------------------------------------------------------
let sonuc = arablar.includes("ford")
if (sonuc) {
    console.log("eleman vardır")
} else {
    console.log("eleman yoktur")
}
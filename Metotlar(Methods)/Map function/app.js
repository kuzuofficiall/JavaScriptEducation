/*
Map ----> key (anahtar) value(değer)
 map metodu, bir dizi (array) üzerinde işlem yaparak, her bir eleman için belirli bir işlemi uygular 
  bu işlemin sonucunda yeni bir dizi döndürür. Orijinal diziyi değiştirmez; yani yeni bir dizi oluşturur.
   map, genellikle bir dizi elemanlarını dönüştürmek için kullanılır.

   
   const map1 = new Map(); // Yeni bir Map nesnesi oluşturuluyor. Map, anahtar-değer (key-value) çiftlerini saklayan bir veri yapısıdır.
   
   let value; // Bir değişken oluşturuluyor, bu değişken çeşitli işlemlerde kullanılabilir.
   
   // Map'e değerler ekleniyor:
   map1.set(21, "diyarbakır"); // 21 anahtarı ile "diyarbakır" değeri ekleniyor.
   map1.set(34, "istanbul");   // 34 anahtarı ile "istanbul" değeri ekleniyor.
   map1.set(1, "adana");       // 1 anahtarı ile "adana" değeri ekleniyor.
   
   // Map üzerinde dolaşıp anahtar-değer çiftlerini yazdırmak için for-of döngüsü kullanılıyor:
   for (let [key, value] of map1) {
    console.log(key, value); // Her bir anahtar ve ona karşılık gelen değer konsola yazdırılıyor.
}

let array = [34, "istanbull"]; // Bir dizi oluşturuluyor.
let [a, b] = array; // Dizinin elemanları `a` ve `b` değişkenlerine atanıyor (destructuring).
console.log(a, b); // `a` ve `b` değerleri konsola yazdırılıyor (34 ve "istanbull").

const keys = Array.from(map1.keys()); // Map'in tüm anahtarları bir diziye dönüştürülüyor.
keys.forEach((key) => {
    console.log(key); // Bu anahtarlar üzerinde `forEach` döngüsü kullanılarak her bir anahtar konsola yazdırılıyor.
});

for (let key of map1.keys()) {
    console.log(key); // Yine aynı şekilde, for-of döngüsü ile tüm anahtarlar üzerinde dolaşıp anahtarlar konsola yazdırılıyor.
}

for (let value of map1.values()) {
    console.log(value); // Bu döngü ile de Map'teki tüm değerler üzerinde dolaşılıyor ve konsola yazdırılıyor.
}

// Map'ten diziye çevirme:
const myMap = new Map(Array); // Bu satırda Map oluşturuluyor fakat yanlış bir kullanım. Doğru kullanım `new Map(iterable)` şeklinde olmalı.
const myArray = Array.from(myMap); // Map'teki anahtar-değer çiftleri bir diziye dönüştürülüyor.
console.log(myArray); // Sonuç olarak elde edilen dizi konsola yazdırılıyor.
*/


/*
set bir değeri yalnızca  bir defa tutabililr aynı değerden 100 tanede olas yalnızca bir tanesini tutar


const set = new Set();

// add metodu 
set.add(true);
set.add(3.13);
set.add("abdullah"); // Bu string "abddullah" olarak eklendi
set.add("kuzu");
set.add(4);
set.add({ username: "enes", pasword: "1" });
set.add([1, 2, 3, 4]);

set.delete("abdullah"); // Silmeye çalışırken de aynı stringi kullanıyoruz
set.delete(4)
const obj = { username: "enes", password: "1" }; // Bir nesne oluşturuyoruz
const arr = [1, 2, 3, 4]; // Bir dizi oluşturuyoruz

// Set'e ekleme yapıyoruz
set.add(obj);
set.add(arr);
// Bu objeyi silmek istiyoruz
set.delete(obj); // Aynı referanslı objeyi kullanarak siliyoruz
// Diziyi silmek istiyoruz
set.delete(arr); // Aynı referanslı diziyi kullanarak siliyoruz

console.log(set.size); // Bu sefer silme işlemi başarılı olacak

console.log(set.has(true));

for (const value of set) {
    console.log(value)
}
*/

/*
Template literals çok satırlı metinleri kolayca yazmamızı sağlar 
ve içlerinde değişkenleri veya ifadeleri yerleştirmek için ${} yapısını kullanırız.
Backtick (`) kullanılır.
${} ile değişkenler veya ifadeler yerleştirilebilir.
Çok satırlı stringler kolayca yazılabilir.
İfadeler, fonksiyonlar ve hesaplamalar içerebilir.

*/
function write(firstNaame, Lastname) {

    console.log("isim :", firstNaame, "\n", "soy isim:", Lastname)

    console.log(`
        isim :${firstNaame} 
        soyisim:${Lastname}
              `)

}
write("enes", "bayram");
const sayi1 = 10;
const sayi2 = 20;

const sonuc = `Toplam: ${sayi1 + sayi2}`;

console.log(sonuc);

function hosgeldinMesaji(isim) {
    return `Hoş geldin, ${isim}!`;
}

const mesaj = `Mesaj: ${hosgeldinMesaji("Enes")}`;

console.log(mesaj);
// Çıktı: Mesaj: Hoş geldin, Enes!


const ad = "Enes";
const yas = 25;
const mesaj1 = `Merhaba ${ad}, 
  ${yas >= 18 ? `yetişkin` : `çocuk`}sin.`;

console.log(mesaj1);
// Çıktı: Merhaba Enes,
// yetişkinsin.



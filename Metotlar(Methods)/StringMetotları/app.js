/**
 * charAt() --> bizim vermiş olduğumuz index numarasındaki karakteri dönen bir metotur
 * concat() ---> birleştirme işlemi yapar iki stringi birleştirir orjinalini bozmuyor ikisini birleştirip kopyasını veriyor 
 * indexof()---> karakteri verip hangi indexte olduğunu buluyorsun eğer yoksa -1 döner
 * lastindexof() ---> verdiğimiz kelimenin indexini yakalıyoruz
 * toUpperCase()-----> kelimelerin hepsini büyük harfe dönüştürür orjinalini bozmuyor
 * toLowerCase()-----> kelimelerin hepsini küçük harf yapar 
 * trim() ------>   boşlukları temizler sağdan soldan 
 * slice() -----> dilimlemek için kulanılır istediğin yerden kesip bitirebiliyorsun  bir cümle içindeki bir kelimeyi veya bir karakteri çekip almak için kulanılır
 * substring()---->dilimlemek için kulanılır istediğin yerden kesip bitirebiliyorsun bir cümle içindeki bir kelimeyi veya bir karakteri çekip almak için kulanılır
 * replace() -----> bir stringdeki belirli bir kısmı başka bir string ile değiştirmek için kullanılır. Orijinal string değişmez; yeni bir string döner.
 * split() ----> bir stringi belirli bir ayırıcıya göre parçalara ayırarak bir dizi (array) oluşturur.
 * valueOf() --->metodu, bir nesnenin (object) ilkel değerini (primitive value) döndürür. Çoğu durumda, JavaScript bu metodu otomatik olarak çağırır.
 * startsWith() ----> ben bununla başlıyor mu başlamıyor mu ona göre sana bir boolen değer dönecek 
 * endsWith() --> bu seferde bununla bitiyor mu küçük büyük harf hasasiyeti var
 */

let kurs = "Modern web geliştirme kursu";

// let karakter = kurs.charAt(0);
// console.log(karakter);

// let tarih = "2022";

// let sonuc = kurs.concat("abdullah kuzu", tarih);
// console.log(sonuc);

// let index = kurs.indexOf("u");
// console.log(index)

// let index1 = kurs.lastIndexOf("k")
// console.log(index1);

// let sonuc = kurs.toUpperCase();
// console.log(kurs)
// console.log(sonuc)

// let sonuc = kurs.toLowerCase();
// console.log(kurs)
// console.log(sonuc)

// console.log(kurs.trim());


// console.log(kurs);
// console.log(kurs.slice(7, 10)); // web

// console.log(kurs)
// console.log(kurs.substring(0, 6))

// console.log(kurs.replace("Modern", "güncel"))

// let dizi = console.log(kurs.split(" "));
// console.log(dizi);

// let num = new Number(10);
// console.log(num.valueOf()); // 10

// let str = new String("Merhaba");
// console.log(str.valueOf()); // "Merhaba"

// console.log(kurs.startsWith("m"))
// console.log(kurs.startsWith("M"))
// if (kurs.startsWith("M")) {
//     console.log("M harfi ile başlıyor")
// } else {
//     console.log("başlamıyor ")
// }

console.log(kurs.endsWith("kursu"))
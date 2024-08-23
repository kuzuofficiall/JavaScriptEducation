/*
parametresiz geriye değer döndğürmeyen metot tanımlamak

function metot ismi (){
kodlar
}
metot bir defa yaz istedğin yerde istediğn kadar çağr clean kod yazmaya yarar

*/

// function yazdir() {
//     console.log("abdullah")
// };
// yazdir();
// yazdir(); // iki defa yazacak.  bir kere yaz istediğin kadar çağır

// function topla() {
//     console.log(5 + 7)
// }

// topla();

/*
parametreli metot 

 burdaki yaş promptaki yaş ile aynı değil istediğin isimi verebilirsin
  bu bir değişken parametre değişkene referans olur başlangıç değeri verirsen parametere vermene grek yok verdiğin değerle başlar
  bir yerde parantez aç kapa varsa bu bir metotur örnek parseInt() number() bunlar örnek olabilir

  function yazdir(ism, soyisim) {
    
  console.log(ism, "", soyisim);
}
yazdir("abdullah", "kuzu");
yazdir("zeynep", "aslan") // bir metot sen hangi değerleri verirsen ona göre çalışır parametreli kulanmanın amacı bu istediğin kadar parametre tanımlayabilirsin

cube(5);
cube(3);
function cube(sayi) {
    console.log(sayi * sayi * sayi)
}

let yas = Number(prompt("yaşinizi giriniz"))

function kontrolEt(kullaniciSayi = 19) {
    if (kullaniciSayi > 18) {
        console.log("ehliyet albilrsiniz")
    } else {
        console.log("alamazsın")
}
}
kontrolEt()
*/

/*
 geriye değer döndüren metot tanımlamak  ---- return :geriye döndürmek

*/

function cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    console.log(sonuc)
    return sonuc; // bir değeri metotun dişarısına çıkarmak için kulanılır  kendinden sonra yazılan hiçbir kodu çaliştırmaz 
    console.log("abdullah") //çalişmaz return dan sonra geldiği için 
}

let dönenDeğer = cube(2)

function KareAl(sayi) {
    let sonuc = sayi * sayi;
    console.log(sonuc);
}
KareAl(dönenDeğer);


function deneme() {

    console.log("abdullah")
    // void : geriye değer döndürmeyen demek
}
deneme();

/*
OOP giriş
bizler bir sınfın içerisinde tnımlı olan  özelilerine erişmek için o sınıftan  nesne türeriz 
nesneyi bir değiken üzerinde saklarız refarans gösterip çağırırız
bir sıfın içine erişmek için  o sınıftan nesen türetmelisin örnek insan1 ve insan2 türetim sonra onları çağrdım

*/

class Insan { // sınıf

    /*
    Özelikler 
    yapucu metot
    function
    */
    constructor(isim, soyisim, yas, maas) { // yapıcı metot 
        this.isim = isim; // değer atamsı yaptım parametre olarak gelen isime atadım
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    bilgileriGöster() {
        console.log(
            `isim : ${this.isim}
            soyisim : ${this.soyisim}
            yaş : ${this.yas}
            Maaş : ${this.maas}
         `
        )
    }
}

const insan1 = new Insan("abdullah", "kuzu", 22, 10000); // NEW İLE nesne  oluşturulur  önce constructor a gider çalişır sınıfın içini doldurur insan1 Insan sınıfının referansını tutuyor
const insan2 = new Insan("betül", "çınar", 24, 2134);
// insan1.bilgileriGöster(); // yukarda  insan1 den türetip çağrdık 
// insan2.bilgileriGöster();
console.log(insan1)
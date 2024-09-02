/*
! STATİC NEDİR 
Durağan değişmeyen bir anlamı var 
bizler bazı metotlarımızı static olarak tanımladığımzda classtan nesne türetmeden direk sınıf ismi üzerinden  erişebiliyoruz 
bir consturactor tanımlamasan bile derleyici senin yerine arka planda tanımlıyor

!! bir function veya bir özellik static ise class a özgüdür değilse nesneye özgüdür 
*/
class Matemtik {

    static topla(a, b) { // !bir sınıf veya bir metot static anaht kelimesini kulanıp türetilmişse ona nesne referansı üzerinden erişemezsin sınıf ismi üzerinden erişebilirsin
        console.log(a + b)
    }
    cikar(a, b) {
        console.log(a - b)
    }
    carp(a, b) {
        console.log(a * b)
    }
    böl(a, b) {
        console.log(a / b)
    }

}

// const referans = new Matemtik();
// referans.topla(13, 4) //!referans üzeriden çağırırz burda Matematik sınıfını refernas  nesnesini türetik ve refernas üzerinden çağırdık 
Matemtik.topla(12, 4)// 9 satırdaki kod bu demek

class Insan { // sınıf

    static langugages = 19;
    constructor(isim, soyisim, yas, maas) { // yapıcı metot 
        this.isim = isim; // değer atamsı yaptım parametre olarak gelen isime atadım
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    writeİnfo() {
        console.log(
            `isim : ${this.isim}
            soyisim : ${this.soyisim}
            yaş : ${this.yas}
            Maaş : ${this.maas}
         `
        )
    }
}

console.log(Insan.langugages) 
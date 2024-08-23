/*     Scope(Kapsam)
=> Global Scope                Sen buna heryerden erişebilirsin hiçbir parantez içinde olmalı
=> Fuction Scope               sadece tanımladığın fonksiyon içinde kullanabilirsin 
=> Block Scope
 
*/

// var Değişkenİsmi = 10;
// console.log(Değişkenİsmi)

// var a = 5; // hiçbir kıvırcık parantez  olmadığı için global bir değişken oldu 
// if (a<3) {
//     console.log(a)
// }

function method1() {
    var sayi = 10;
    console.log(sayi)  // fuction scop bu burdan erişeblirsin 
}
console.log(sayi) // hata verecek çünkü function scop olarak tanımladım sadece kıvırcık içinde çalışır burda hata alır 

function method2() {
    let sayi4 = 5 // burası function scop olur 

    console.log(sayi4) // function scop olduğu için erişebilirim 
    console.log(sayi2) // burda hata alır çünkü if de tanimladım block scop oldu function scop işlevi görmez


    if (condition) {
        let sayi2 = 5; //burasıdad block scop  sadece if içinde kulanırsın 
        console.log(sayi4) // function scop olduğu için erişebilirim 
        console.log(sayi2) // block scop  olduğu için sadece burda erişilebilir 
    }

    while (true) {

    }

}

console.log(sayi4) // bunada burdan erişemem çünkü method içinde tanımladım  function scop global değil hata alır 
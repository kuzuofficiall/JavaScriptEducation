/*
                        tür dönüşümleri

string ,number,boolen,undefined,and,null.
object ,function 
    
*/

let a = 5;
let b = "10";
let b1 = Number("10"); // direk böylede yapabilirsin  

//string veri tipinden Number veri tipine çevirme 

let c = Number(b);
console.log(typeof c);
console.log(a + c);
//parseInt() bununlada çevirme yapılır parseFloat() parse int noktadan sonraki değeri atıyor float ise noktadan sonraki değeride aloğ gösteriyor
let d = parseInt("12");
console.log(typeof d);

//NUmber dan string veri tipine dönüştürme
let x = String(55);
console.log(typeof x);
console.log(x);


let z = (55).toString(); // böylede oluyor 

let sonuc = String(true);
console.log(typeof sonuc);


let rakamlar = String([1, 2, 3, 4]);
console.log(typeof rakamlar);
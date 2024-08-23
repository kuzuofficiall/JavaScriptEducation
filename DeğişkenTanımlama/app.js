
// Var - Let - Const

/*  Değişken Nedir ?
 istediğimiz verileri, bilgileri saklamamıza sağlayan yapılara değişken (variable) denilmektedir. 
 Değişkenlere verdiğimiz isimler ile erişebilir, birbirinden ayırabilir, işlemlerimizi yapabilir. 
 Kurallar çerçevesinde değişkenlere verdiğimiz isimlerin bilgisayar için bir önemi yoktur,
 sadece kodun okunabilirliği ve anlaşılabilir olması için yazılımcılar için önemlidir.
*/

/* tip belirtmene gerek yok (int ,string , boolen )  |    var -let - const ile yaparız
                                                     |  
   type değişken ismi = değer                        |   var -let - const değişkenİsmi =Değer      
    int   sayi         =  5                          |
*/


// var : HER ZAMAN FUNCTİON SCOP gibi davranır
// let /const : block scoptur değişir 


function selamVer() {
    if (true) {
        var selam = "selam ver"
        let a = 5;
        console.log(a)
        console.log(selam) //hem burda hem de fuction blockta çalişir var her zaman function scoptur  
    }
    console.log(a) // hata alır çünkü block scop tanımladım sadece if içinde çalişir 
    console.log(selam) // hata almaz
}


/*
 let ve const arasındaki fark 
const a = 10;
a = 17; // hata alır değeri sonradan değiştiremez             
console.log(a) 
const ile nesne tanımlarsan değiştiremezsin 

const user ={
username :"abdullah",
pasword:"12345",
}

user age ={age:23}; (1)hata alır eşitirden sonra birşey atamazsiniz ama içindeki değere ulaşip değiştirebilirsin const olduğu için let olsa çalişir  
 user.username ="Abdullah kuzu" // bunu yapabilirsin(1)
*/

/*
let a =10
 a=16;   // hata almaz sonradan değerini değiştirebilirsin 
console.log(a) 
*/
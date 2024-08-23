/*

if(koşul){
kodları yazarsın
}else{
kodları yazarsın
}

*/

// let not = 65;
// if (not > 65) {
//tek başına çalışır if yazmasanda olur 
// koşul sağlıyorsa burası 
//     console.log("geçtiniz notunuz:" + not)
// } else {
//sağlamıyorsa burası çalışır 
// if'siz kulanamazsın if olmadan yalnız çalişmaz
//     console.log("kaldınız  notunuz :" + not)
// }
// burda number tip dönüşümü yaptı ki gelen değer string geldi  number oldu
// let yas = Number(prompt("Yaşınızı giriniz "))
// let para = Number(prompt(" Para Miktarını Giriniz"))

// if (yas >= 18 && para >= 3000) {
//     alert("ehliyet sınavına girebilirsiniz")
// } else {
//     alert("ehliyet sınavına katılamazsınız")
// } 14

/*             Ders Ortalması bulma  
 vize1 %30 ,vize2 %30 , final%40
 geçme notunda 50 olsun

*/

let vize1 = Number(prompt("lütfen vize1 giriniz "));
let vize2 = Number(prompt("lütfen vize2 giriniz "));
let final = Number(prompt("lütfen final notunuzu giriniz"));

let Ortalma = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4)

if (Ortalma >= 50) {
    console.log("Tebrikler geçtiniz --->" + Ortalma)
}
else {
    console.log("kaldın siktir git ders çaliş --->" + Ortalma)
}
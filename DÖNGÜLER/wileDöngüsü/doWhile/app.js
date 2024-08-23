/*
do{
kodlar
}
while(koşul);

derleyici yukardan gelip do giriyor önce sonra while 
while true dönerse yine do ' ya giriyor whilden ayıran özelik ise koşul sağlanmazsa bile do 1 defa çalişir 

*/

// let yaş = 23;
// do {
//     console.log("ehliyet alabilirsin ")
// } while (yas >= 25); // bu koşul sağlamasada bir defa çalişip döngü öyle sonlanır 

// 1 den 20 kadar olan tek sayıların toplamını bulalım 

// let toplam = 0;
// let sayac = 1;

// do {

//     if (sayac % 2 == 1) {
//         toplam = toplam + sayac
//     }
//     sayac++;
// } while (sayac <= 20);
// console.log("toplam :" + toplam)


// break ve continnue 

// break ----> bir döngümüz var 100 kere dönmemiz gerekiyor ama bazen 70 kadr dönsün deriz işte burda break devreye girer döngüyü kırar ve döngüden çıkar 

// let sayac = 1;
// while (sayac <= 10) {
//     console.log(sayac)
//     if (sayac == 8) {
//         break;
//     }

//     sayac++;

// }// 8 den sonra dönmez kırıp çıktı

// ? continue  döngüyü yalnızca bir kereye mahsus kırıyor

let sayac1 = 0;

while (sayac1 <= 10) {
    sayac1++;
    if (sayac1 == 8) {
        continue;
    }
    if (sayac1 > 10) {

    }
    console.log(sayac1);
}


/*
kelime sayısnı bulan uygulama 


let metin = "lorem ispum data moda  zeynbi çok seviyorum aşkım benim"
// let harf = prompt("harf giriniz")

let toplam = 0; // function içinde tanımlamazsak burda tanımlarsam hepsini üst üste toplar

function bul(harf) {
    let = toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
            toplam += 1;
        }
    }
    // return toplam;
    console.log("harf sayısı:  " + toplam)
};

// let sonuc = bul(harf)
// console.log("harf sayısı", sonuc)
bul("a");
bul("z")
bul("e");
bul("o")

*/

/*
  Mükemel sayı uygulaması 

  6 - 28 - 496
 -----> bir sayıyı tam bölünmesi için maksimum yarısına kadar bölebilirsin
  6 = 1, 2, 3,6 =12   bölen sayıların toplamı orjnal sayımın 2 katına eşitse mükemel sayı olur


  
  function isPerfectNumber(number) {
    let toplam = 0;
    
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            toplam += i
        }
    }
    toplam += 1 + number;
    if (toplam == number * 2) {
        console.log("mükemel sayısın");
    } else {
        console.log("eziksin");
}

}

isPerfectNumber(12);
*/

// function convertDesimalBinary(number) {
//     let binary = "";
//     while (true) {
//         binary = (number % 2).toString() + binary; // her geleni başa atığı için reverse fonksiyonuna gerek yok
//         number = Math.floor(number / 2);

//         if (number == 1) {
//             binary = 1 + binary;
//             break;
//         }
//     }

//     // let sonuc = reverse(binary)
//     // console.log(sonuc)
//     console.log(binary)
// }
// convertDesimalBinary(15);

// function reverse(binary) {
//     let reverseBinary = "";
//     for (let i = binary.length - 1; i >= 0; i--) {
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }

// function BinaryconvertDesimal() {
//     let binary = "100"; // binary number
//     let decimal = 0; // decimal equivalent
//     let length = binary.length; // length of the binary string

//     for (let i = 0; i < length; i++) {
//         let rakam = binary.charAt(length - 1 - i); // get the binary digit starting from the rightmost
//         let sonuc = Number(rakam) * Math.pow(2, i); // multiply the digit by 2 raised to the power of its position
//         decimal += sonuc; // add the result to the decimal value
//         console.log(Number(rakam) * (Math.pow(2, i)));
//     }

//     console.log("binary: ", binary, " decimal: ", decimal);
// }

// BinaryconvertDesimal();

// ikinci yol 
let binary = "1010";
function convertBinaryToDesimal() {
    let toplam = 0;
    let üst = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        toplam += Number(binary.charAt(i)) * Math.pow(2, üst)
        //3 indeksdeki değeri getir yani 1     x     1
        üst++;

    }
    console.log("sonuc : " + toplam);
}
convertBinaryToDesimal(binary);

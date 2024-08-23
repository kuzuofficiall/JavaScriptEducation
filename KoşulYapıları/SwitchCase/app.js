/*
                 switch case 

switch(değer){
case 1:
    kodlar 
    break;
}
case 2:
  kodlar 
  break;

case3:
 kodlar 
 break;

default :
kodlar 
break;

if else'ye alternatiftir bir yerde bir ihtimal varsa yol ayrımı varsa
şöylesyse böyle yap böyleyse böyle yap  switcdeki değer ile case deki değer eşleşirise o case çalişir 
hiçbiri çalişmazsa  default kodu çalişir 
sadece bir tane case çalişir  break kulanmazsak diğer caselrde çalişir istenilen case + altındaki tüm kodlar   

 */

/*let yeniSatir = "\n";
let metin = "1 - Pazartesi" + yeniSatir + "2 -salı" + yeniSatir + "3-carşamba" + yeniSatir + "4- perşembe" + yeniSatir + "5- cuma" +
  yeniSatir + "6- cumartesi" + yeniSatir + "7 - pazar";

let değer = Number(prompt(metin));

switch (değer) {
  case 1:
    console.log("bugun günlerden pazartesi")
    break;
  case 2:
    console.log("bugun günlerden salı")
    break;

  case 3:
    console.log("bugun günlerden çarşamba")
    break;
  case 4:
    console.log("bugun günlerden pazartesi")
    break;
  case 5:
    console.log("bugun günlerden cuma")
    break;
  case 6:
    console.log("bugun günlerden cumartesi")
    break;
  case 7:
    console.log("bugun günlerden pazar")
    break;

  default:
    console.log("lütfen geçerli bir değer giriniz")

} */

/*
Kolay Seviye: Basit Hesap Makinesi
Kullanıcıdan iki sayı ve bir işlem türü (toplama, çıkarma, çarpma, bölme) alıp,
switch-case kullanarak doğru işlemi gerçekleştiren bir algoritma.


let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
let islem = prompt("İşlem türünü seçin (toplama, çıkarma, çarpma, bölme):");

let sonuc;

switch (islem) {
  case "toplama":
    sonuc = sayi1 + sayi2;
    alert("Sonuç: " + sonuc);
    break;
    
    case "çıkarma":
      sonuc = sayi1 - sayi2;
      alert("Sonuç: " + sonuc);
      break;
      
      case "çarpma":
        sonuc = sayi1 * sayi2;
        alert("Sonuç: " + sonuc);
        break;
        
        case "bölme":
          // Bölme işleminde sıfıra bölmeyi unutma
          if (sayi2 !== 0) {
            sonuc = sayi1 / sayi2;
            alert("Sonuç: " + sonuc);
          } else {
            alert("Hata: Sıfıra bölme yapılamaz.");
        }
        break;
        
        default:
          alert("Geçersiz işlem türü.");
          break;
        }
        */


/*
 Sınıf Notu Hesaplama
Kullanıcıdan not aralığı alıp, bu not aralığına göre harf notu (A, B, C, vb.) hesaplayan bir algoritma.

Öneri:

Kullanıcıdan 0-100 arasında bir not girilmesini iste.
Switch-case kullanarak bu nota göre harf notunu belirle:
90-100: A
80-89: B
70-79: C
60-69: D
0-59: F
Harf notunu ekrana yazdır.
 


let not = parseInt(prompt("Lütfen 0-100 arasında bir not girin:"));

let harfNotu;

if (not >= 0 && not <= 100) {
  
switch (true) {
  case (not >= 90 && not <= 100):
      harfNotu = "A";
      break;
      case (not >= 80 && not < 90):
        harfNotu = "B";
        break;
        case (not >= 70 && not < 80):
          harfNotu = "C";
          break;
          case (not >= 60 && not < 70):
            harfNotu = "D";
            break;
            case (not >= 0 && not < 60):
      harfNotu = "F";
      break;
      default:
        harfNotu = "Geçersiz not";
        break;
  }
  alert("Harf notunuz: " + harfNotu);
} else {
  alert("Lütfen geçerli bir not girin (0-100 arası).");
}
*/

/*
  Bir metin içinde belirli karakterlerin sıklığını sayıp, her bir karakterin sıklığını switch-case kullanarak hesaplayan bir algoritma.

Kullanıcıdan bir metin girilmesini iste.
Metindeki karakterleri sırayla kontrol et.
Switch-case ile her karakterin sıklığını say:
Örneğin, a, b, c gibi belirli harfler için sıklıklarını ayrı ayrı say.
Sonuçları ekrana yazdır.



let metin = prompt("lütfen bir metin giriniz");

let aSayisi = 0
let bSayisi = 0
let cSayisi = 0
let zSayisi = 0
let FSayisi = 0

for (let i = 0; i < metin.length; i++) {
  
let karakter = metin[i].toLowerCase();

switch (karakter) {
  case "a":
    aSayisi++;
    break;
    case "b":
      bSayisi++;
      break;
      case "c":
        cSayisi++;
        break;
        case "z":
          zSayisi++;
          break;
          case "f":
            FSayisi++;
            
            default:
      break;
  }
  
}
alert("A harfi sayısı: " + aSayisi);
alert("B harfi sayısı: " + bSayisi);
alert("C harfi sayısı: " + cSayisi);
alert("z harfi sayısı :" + cSayisi);
alert("f harfi sayısı" + FSayisi);
*/


/*

kullanıcıdan alınan yıl, ay ve gün bilgilerini kullanarak geçerli bir tarih olup olmadığını kontrol eder. 

let yil = Number(prompt("lütfen bir yıl giriniz"));
let ay = Number(prompt("lütfen bir ay girirniz"));
const gun = prompt("lütfen gün giriniz");
let gunSayisi;

switch (ay) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    gunSayisi = 31;
    break;
  case 4: case 6: case 9: case 11:
    gunSayisi = 30;
    break;
    case 2:
      // Artık yıl kontrolü
      if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
        gunSayisi = 29;
      } else {
        gunSayisi = 28;
    }
    break;
    default:
      console.log("Geçersiz ay");
      break;
    }
    
    if (gun <= gunSayisi) {
      console.log("Geçerli tarih: " + gun + "/" + ay + "/" + yil);
    } else {
      console.log("Geçersiz tarih!");
  }
  */

/*
Bu algoritmada, bir otel rezervasyon sistemi için geçerli tarihleri ve saatleri doğrulamak, 
ayrıca çakışan rezervasyonları kontrol etmek gerekiyor. Bu,
 kullanıcıların odaları aynı anda rezerve etmelerini engellemek için kullanılır.

 Kullanıcıdan Giriş ve Çıkış Tarihlerini Al:

Kullanıcıdan rezervasyon başlangıç (giriş) ve bitiş (çıkış) tarihlerini al (gg/aa/yyyy formatında).
Tarihlerin Geçerliliğini Kontrol Et:

Girilen tarihlerin doğru bir şekilde sıralandığından emin ol (örneğin, çıkış tarihi giriş tarihinden önce olamaz).
Geçmiş tarihler için rezervasyon yapılamayacağını kontrol et.
Zaman Dilimi Kontrolü:

Kullanıcıdan giriş ve çıkış saatlerini al (örneğin, 14:00 - 12:00).
Saatlerin geçerli olup olmadığını ve saat dilimlerinin çakışmadığını kontrol et (örneğin, aynı gün içinde giriş saati çıkış saatinden önce olmalıdır).
Çakışan Rezervasyonları Kontrol Et:

Sistemdeki mevcut rezervasyonlar ile yeni rezervasyonun tarih ve saat aralıklarını karşılaştır.
Eğer bir çakışma varsa, kullanıcıya uygun olmayan saat aralıklarını göster ve yeni bir saat aralığı seçmesini iste.
Artık Yıl ve Ay Gün Sayısı Kontrolleri:

Giriş ve çıkış tarihlerinde, ayların gün sayısını ve artık yılları kontrol et.
Bu kontrolleri yaparken, ayların ve yılların farklı uzunlukta olabileceğini dikkate al.
Sonuç:

Eğer tüm kontrollerden geçerse, rezervasyonu onayla.
Aksi halde, hata mesajları göster.
*/

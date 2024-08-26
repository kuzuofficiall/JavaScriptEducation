/*
             kitap bulma uygulaması
*/

let kitaplar = [
    {
        isim: "Her Şeyi Düşünme",
        yazar: "Anne Bogel",
        fiyat: 40,
        raf: "5.1.RAF"
    },
    {
        isim: "Sapiens: İnsan Türünün Kısa Bir Tarihi",
        yazar: "Yuval Noah Harari",
        fiyat: 75,
        raf: "2.5.RAF"
    },
    {
        isim: "İnsan Ne ile Yaşar?",
        yazar: "Tolstoy",
        fiyat: 20,
        raf: "3.4.RAF"
    },
    {
        isim: "Dönüşüm",
        yazar: "Franz Kafka",
        fiyat: 30,
        raf: "3.3.RAF"
    },
    {
        isim: "Fahrenheit 451",
        yazar: "Ray Bradbury",
        fiyat: 35,
        raf: "2.4.RAF"
    },
    {
        isim: "Hayvan Çiftliği",
        yazar: "George Orwell",
        fiyat: 25,
        raf: "2.3.RAF"
    },
    {
        isim: "Kürk Mantolu Madonna",
        yazar: "Sabahattin Ali",
        fiyat: 40,
        raf: "1.4.RAF"
    },
    {
        isim: "Küçük Prens",
        yazar: "Antoine de Saint-Exupéry",
        fiyat: 15,
        raf: "1.3.RAF"
    },
    {
        isim: "Suç ve Ceza",
        yazar: "Fyodor Dostoyevski",
        fiyat: 45,
        raf: "1.2.RAF"
    },
    {
        isim: "1984",
        yazar: "George Orwell",
        fiyat: 50,
        raf: "1.1.RAF"
    },
    {
        isim: "Tutunamayanlar",
        yazar: "Oğuz Atay",
        fiyat: 60,
        raf: "2.2.RAF"
    },
    {
        isim: "Simyacı",
        yazar: "Paulo Coelho",
        fiyat: 35,
        raf: "3,2.RAF"
    },
    {
        isim: "Satranç",
        yazar: "Stefan Zweig",
        fiyat: 20,
        raf: "2.1.RAF"
    },
    {
        isim: "Yüzyıllık Yalnızlık",
        yazar: "Gabriel Garcia Marquez",
        fiyat: 55,
        raf: "3.1.RAF"
    },
    {
        isim: "Bir Ömür Nasıl Yaşanır?",
        yazar: "İlber Ortaylı",
        fiyat: 50,
        raf: "4.3.RAF"
    },
    {
        isim: "Serenad",
        yazar: "Zülfü Livaneli",
        fiyat: 45,
        raf: "4.1.RAF"
    },
    {
        isim: "Başlangıç",
        yazar: "Dan Brown",
        fiyat: 70,
        raf: "5.5.RAF"
    },
    {
        isim: "Şeker Portakalı",
        yazar: "José Mauro de Vasconcelos",
        fiyat: 25,
        raf: "5.4.RAF"
    },
    {
        isim: "Beyaz Zambaklar Ülkesinde",
        yazar: "Grigory Petrov",
        fiyat: 30,
        raf: "5.3.RAF"
    },
    {
        isim: "Bilinmeyen Bir Kadının Mektubu",
        yazar: "Stefan Zweig",
        fiyat: 20,
        raf: "5.2.RAF"
    }
];

let raflar = [
    [
        { kod: "5.1.RAF", goster: false },
        { kod: "5.2.RAF", goster: false },
        { kod: "5.3.RAF", goster: false },
        { kod: "5.4.RAF", goster: false },
        { kod: "5.5.RAF", goster: false }
    ],
    [
        { kod: "4.1.RAF", goster: false },
        { kod: "4.2.RAF", goster: false },
        { kod: "4.3.RAF", goster: false },
        { kod: "4.4.RAF", goster: false },
        { kod: "4.5.RAF", goster: false }
    ],
    [
        { kod: "3.1.RAF", goster: false },
        { kod: "3.2.RAF", goster: false },
        { kod: "3.3.RAF", goster: false },
        { kod: "3.4.RAF", goster: false },
        { kod: "3.5.RAF", goster: false }
    ],
    [
        { kod: "2.1.RAF", goster: false },
        { kod: "2.2.RAF", goster: false },
        { kod: "2.3.RAF", goster: false },
        { kod: "2.4.RAF", goster: false },
        { kod: "2.5.RAF", goster: false }
    ],
    [
        { kod: "1.1.RAF", goster: false },
        { kod: "1.2.RAF", goster: false },
        { kod: "1.3.RAF", goster: false },
        { kod: "1.4.RAF", goster: false },
        { kod: "1.5.RAF", goster: false }
    ]
];
function rafOlustur() {
    console.clear();
    let satir = "";
    raflar.forEach(function (satirRaf) {
        satirRaf.forEach(function (raf) {
            satir += "|" + (raf.goster ? raf.kod : "------") + "|";
        });
        console.log(satir); // Satırı ekrana yazdır
        console.log("-".repeat(satir.length));
        satir = ""; // Bir sonraki satır için sıfırla
    });
}

function kodBul(kitapIsmi) {
    let bulunanRafKod = null;
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) {
            bulunanRafKod = kitap.raf;
        }
    });
    return bulunanRafKod;
}

function raftaGöster(rafKod) {
    raflar.forEach(function (satirRaf) {
        satirRaf.forEach(function (raf) {
            if (raf.kod === rafKod) {
                raf.goster = true;
            }
        });
    });
}

let kitapİsmi = prompt("Lütfen bir kitap ismi giriniz");
let rafKod = kodBul(kitapİsmi);

if (rafKod !== null) {
    raftaGöster(rafKod);
    rafOlustur();
} else {
    alert("Girdiğiniz kitap kütüphanede bulunmamaktadır");
}
/*
Ürün Arama Uygulaması

*/
let urunler = [
    {
        isim: "Acer Swift",
        kategori: "teklonoji",
        fiyat: 20.000
    },
    {
        isim: "Lenovo ThinkPad",
        kategori: "teknoloji",
        fiyat: 18.500
    },
    {
        isim: "Samsung Galaxy S21",
        kategori: "teknoloji",
        fiyat: 12.000
    },
    {
        isim: "Sony Bravia 55 inç",
        kategori: "elektronik",
        fiyat: 15.000
    },
    {
        isim: "Nike Air Max",
        kategori: "giyim",
        fiyat: 1.200
    },
    {
        isim: "Apple MacBook Pro",
        kategori: "teknoloji",
        fiyat: 32.000
    },
    {
        isim: "Canon EOS R5",
        kategori: "fotoğraf",
        fiyat: 25.000
    },
    {
        isim: "Rolex Submariner",
        kategori: "aksesuar",
        fiyat: 85.000
    },
    {
        isim: "Adidas Ultraboost",
        kategori: "giyim",
        fiyat: 900
    },
    {
        isim: "Dell XPS 13",
        kategori: "teknoloji",
        fiyat: 19.000
    },
    {
        isim: "Samsung QLED TV",
        kategori: "elektronik",
        fiyat: 22.000
    },
    {
        isim: "HP Envy",
        kategori: "teknoloji",
        fiyat: 16.000
    },
    {
        isim: "Bose QuietComfort 35",
        kategori: "elektronik",
        fiyat: 3.200
    },
    {
        isim: "Asus ROG Strix",
        kategori: "teknoloji",
        fiyat: 28.000
    },
    {
        isim: "Levi's 501 Jean",
        kategori: "giyim",
        fiyat: 450
    },
    {
        isim: "Sony WH-1000XM4",
        kategori: "elektronik",
        fiyat: 3.500
    },
    {
        isim: "Apple iPad Pro",
        kategori: "teknoloji",
        fiyat: 18.500
    },
    {
        isim: "LG OLED TV",
        kategori: "elektronik",
        fiyat: 26.000
    },
    {
        isim: "Apple Watch Series 6",
        kategori: "aksesuar",
        fiyat: 5.500
    },
    {
        isim: "Samsung Galaxy Tab S7",
        kategori: "teknoloji",
        fiyat: 10.000
    },
    {
        isim: "Nike Pro Tights",
        kategori: "giyim",
        fiyat: 300
    }
];


let kulaniciUrunIsmi = prompt("Bir ürün ismi giriniz:");
let FiltreliUrunler = [];

function FiltreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kulaniciUrunIsmi.toUpperCase())) {
            FiltreliUrunler.push(urun);
        }
    });
}

function FiltreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------");
        console.log("| " + urun.isim + " | " + urun.fiyat + " TL | " + urun.kategori + " |");
        console.log("----------------------------------------");
    });
}

FiltreliUrunleriDoldur(urunler);
FiltreliUrunleriYazdir(FiltreliUrunler);
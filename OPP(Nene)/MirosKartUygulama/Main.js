
let mesaj =
    `
Migrosa hoşgeldiniz 
Money kartınnız var mı?
1-Evet 
2- Hayır
`;

const urunler = [
    {
        urunİsmi: "süt",
        fiyat: 15
    },
    {
        urunİsmi: "ekmek",
        fiyat: 5
    },
    {
        urunİsmi: "peynir",
        fiyat: 30
    },
    {
        urunİsmi: "yumurta",
        fiyat: 12
    },
    {
        urunİsmi: "zeytin",
        fiyat: 20
    },
    {
        urunİsmi: "domates",
        fiyat: 8
    },
    {
        urunİsmi: "salatalık",
        fiyat: 7
    },
    {
        urunİsmi: "çay",
        fiyat: 25
    },
    {
        urunİsmi: "kahve",
        fiyat: 35
    },
    {
        urunİsmi: "yağ",
        fiyat: 40
    }
];



let sonuc = confirm(mesaj);
let ödenecekTutar;

if (sonuc) {
    //Money kartı vardır
    let isim = prompt("adını gir")
    let soyisim = prompt("soyadını gir")

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    ödenecekTutar = musteri.hesapla()
    alert(`müşteri bilgileri : ${isim} ${soyisim}
        ödenecek Tutar : ${ödenecekTutar}`)
} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    ödenecekTutar = musteri.hesapla()
    alert(` ödenecek tutuar : ${ödenecekTutar}`)
}
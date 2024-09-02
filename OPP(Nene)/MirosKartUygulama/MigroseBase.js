class MigrosBase {
    indirimOranı = 0.5;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let ödenecekTutar = 0;
        if (this.urunleriKontrolET(this.urunler)) {
            // Sepet doluysa
            if (this.kartVarmi) {
                // Kart varsa
                this.urunler.forEach((urun) => {
                    ödenecekTutar += urun.fiyat * this.indirimOranı;
                });
            } else {
                // Kart yoksa
                this.urunler.forEach((urun) => {
                    ödenecekTutar += urun.fiyat;
                });
            }
        } else {
            alert("Lütfen bir ürün satın alın");
        }
        return ödenecekTutar;
    }

    urunleriKontrolET(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}

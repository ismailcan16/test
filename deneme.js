// Bu örnek dosyada, basit bir Node.js komut dosyası oluşturacağız.
// Bir dosyadan metin okuyacak ve kelimelerin sayısını hesaplayacak.

// Gerekli modülleri dahil ediyoruz
const fs = require('fs');


const dosyaYolu = './ornek.txt';

// Dosyadan veriyi okuyan fonksiyon
function dosyadanOku(dosyaYolu, callback) {
    fs.readFile(dosyaYolu, 'utf8', (err, data) => {
        if (err) {
            console.error('Dosya okunurken bir hata oluştu:', err);
            return callback(err, null);
        }
        callback(null, data);
    });
}

// Kelime sayısını hesaplayan fonksiyonwertwrt
function kelimeSayisiHesapla(metin) {
    const kelimeler = metin.split(/\s+/); // Metni boşluklara göre böler
    return kelimeler.length;
}

// Ana işlemler
dosyadanOku(dosyaYolu, (err, veri) => {
    if (err) {
        console.error('Dosya okunurken bir hata oluştu:', err);
        return;
    }
    const kelimeSayisi = kelimeSayisiHesapla(veri);
    console.log('Dosyadaki toplam kelime sayısı:', kelimeSayisi);
});


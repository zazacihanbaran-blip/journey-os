# Journey OS

Kaynak odaklı kişisel araştırma, portföy ve öğrenme sistemi. Arayüz, gerçek veri bağlayıcıları, kalıcı araştırma programları ve açık kaynak geliştirme yapısıyla birlikte gelir.

## Çalıştırma

Windows'ta en kolay yol: `Journey-OS-Baslat.cmd` dosyasına çift tıklayın. Başlatıcı Node.js sunucusunu ve gerçek API katmanını çalıştırır, ardından tarayıcıyı açar.

Elle çalıştırmak isterseniz uygulama klasörünün içindeyken:

Node.js 20 veya üzeri gerekir:

```powershell
npm start
```

Ardından `http://localhost:4173` adresini açın. Sunucuyu kapatmak için terminalde `Ctrl+C` kullanın.

## İlk sürümde çalışanlar

- İlgi alanlarına göre sıralanan kişisel “Gazetem” akışı
- Google News RSS, OpenAlex, Yahoo Finance haberleri ve özel RSS / Atom kaynakları
- YouTube kanal RSS'i ve kullanıcı tarafından sağlanan X / sosyal RSS köprüleri
- Açılıp kapanabilen haber, finans, akademi, YouTube, RSS ve sosyal motorları
- Fildişi, beyaz ve gece baskısı; yazı, yoğunluk ve sütun kişiselleştirmesi
- Kâğıt kıvrımı ve ileri/geri sayfa çevirme hareketi
- Bugün görünümü ve günlük tercih seçimi
- İlgi yoğunluğuna göre düzenlenen kişisel konu rafı
- Portföy tezleri, gelişmeler ve dönemsel fiyat grafikleri
- YouTube bağlantı doğrulaması; boş, yükleniyor, hata ve başarı durumları
- Konuşmacı ayrımlı yazılı döküm, zaman kodu araması ve video soru-cevap
- Akademik makale, DOI, erişim durumu, kaynakça ve içerik okuyucu
- Her alana özel, açılabilir öneri kartları
- Kırmızı noktalı konu yoğunluğu ve konu bazlı tercih ayarları
- Sonlu günlük sayı ve çoklu içerik kararları
- 30 saniye / 3 dakika içerik özeti, iddia ve kaynak güveni
- Konu oluşturma, düşünce güncelleme, kanıt ve not ekleme
- Arşiv filtreleri, boş durum, içerik analizi ve konu bağlantıları
- Doğal dil tabanlı; doğrulama, yükleniyor, sonuç ve sonuçsuz durumları olan Keşfet akışı
- Konu, format, yenilik ve clickbait ayrımlı geri bildirim
- Düzenlenebilir profil, çıkarımsal hafıza ve bildirim tercihleri
- Global arama (`Ctrl/Cmd + K`)
- Profil görünümü ve JSON dışa aktarma
- Tarayıcı `localStorage` kalıcılığı
- Ayarlar altında bütün temel form ve ekran durumlarına götüren MVP test alanı
- Yerel denemeleri başlangıç verisine döndüren güvenli sıfırlama akışı
- Süre, yenilik, karşı görüş, biçim ve kaynak bazında özelleştirilebilir Seçkiler ekranı
- Reuters, FT, şirket açıklamaları, Nature, NBER ve IEA gibi hedef kaynak grupları
- Kâğıt değişimi hissi veren ileri/geri seçki incelemesi
- Etkileşimli grafik noktaları, tez/risk/karşılaştırma sekmeleri bulunan modern portföy ekranı
- Saatlik, günlük ve haftalık araştırma programları; anında rapor ve tarayıcı bildirimi denemesi

## MVP'yi test etme

Uygulamayı açtıktan sonra sağ üstteki profil düğmesine basın. Sayfanın altındaki “MVP test alanı” kartları video, okuma, arşiv, konu, geri bildirim ve içerik bağlama akışlarını doğrudan açar. “Başlangıç verisine dön” düğmesi bütün yerel denemeleri sıfırlar.

## Gerçek servisler

- Kişisel gazete, etkin motorları tek içerik biçiminde birleştirir ve ilgi yoğunluğuna göre puanlar.
- Haberler Google News RSS üzerinden; özel kaynaklar güvenli HTTPS RSS / Atom adreslerinden alınır.
- X doğrudan anahtarsız okunmaz; kullanıcı kendi RSS köprüsünü ekleyebilir. Repoya API anahtarı yazılmaz.
- Akademik arama OpenAlex üzerinden DOI, yazar, atıf ve açık erişim bağlantılarıyla; öneriler OpenAlex ve Crossref üzerinden alınır.
- Portföy geçmişi ve son piyasa bilgisi Yahoo Finance chart verisinden, şirket haberleri Yahoo Finance aramasından alınır.
- Bugün ekranı, kişisel gazetenin gerçek ve güncel kaynak seçkisinden beslenir.
- Görünür portföy ekranı dakikada bir, kişisel akış beş dakikada bir, akademik sonuçlar on beş dakikada bir yenilenir; tümünde elle yenileme ve alınma zamanı görünür.
- Ücretsiz piyasa sağlayıcısı borsa gerçek zamanı garantisi vermez; arayüz veriyi “son piyasa verisi” olarak ve zaman damgasıyla gösterir.
- Video dökümü, YouTube videosunda erişilebilir altyazı varsa alınır.
- Araştırma programları Node.js sunucusunda kalıcı çalışır.

İsteğe bağlı anahtarlar için `.env.example` dosyasını `.env` olarak kopyalayın. Mimari ayrıntıları [docs/architecture.md](docs/architecture.md) içinde bulabilirsiniz.

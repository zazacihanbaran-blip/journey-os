# Journey OS mimarisi

## Katmanlar

- `index.html`, `app.js`, `styles.css`: tarayıcı arayüzü ve cihazdaki kişisel tercihler.
- `server/index.js`: HTTP API, veri kaynağı adaptörleri, dosya tabanlı kalıcı kayıt ve zamanlayıcı.
- `data/runtime.json`: yerel çalışma verisi. Git'e eklenmez.
- `tests/`: birim testleri ve isteğe bağlı canlı bağlayıcı testleri.

## Gerçek veri kaynakları

- OpenAlex ve Crossref: akademik çalışma, DOI, yayın, atıf ve açık erişim bilgisi.
- Yahoo Finance chart endpoint: portföy fiyat geçmişi.
- YouTube timed-text: videoda erişilebilir altyazı varsa gerçek döküm.

Her adaptör başarısız olduğunda API açık bir hata döndürür; sahte başarı veya uydurma tam metin üretmez.

## Zamanlanmış araştırma

Programlar `data/runtime.json` içinde kalıcıdır. Node sunucusu açıkken her dakika süresi gelen işleri kontrol eder, gerçek kaynakları tarar ve rapor kaydeder. Bilgisayar kapalıyken de çalışması için aynı sunucu bir VPS, container veya serverless cron ortamına taşınmalıdır.

## Sonraki üretim adımları

1. Dosya deposunu PostgreSQL veya SQLite ile değiştirmek.
2. Kullanıcı hesabı ve şifreli gizli anahtar kasası eklemek.
3. E-posta/push sağlayıcılarını bağlamak.
4. Veri kaynağı kullanım şartları ve hız sınırları için kuyruk/cache katmanı eklemek.
5. Arka plan görevlerini ayrı worker sürecine ayırmak.

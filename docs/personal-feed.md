# Kişisel akış motorları

`POST /api/feed`, farklı sağlayıcıları ortak bir içerik modeline dönüştürür. Arayüz sağlayıcıya göre değil kullanıcının açtığı motorlara göre şekillenir.

## Hazır motorlar

- `news`: İlgi alanı sorgularıyla Google News RSS
- `finance`: İzlenen semboller için Yahoo Finance haber araması
- `academic`: OpenAlex akademik çalışmaları
- `youtube`: Two Minute Papers ve Computerphile başlangıç kanalları; kullanıcının eklediği kanal RSS adresleriyle genişler
- `rss`: Nature ve Ars Technica başlangıç akışları; özel RSS / Atom kaynaklarıyla genişler
- `hackernews`: Hacker News güncel teknoloji bağlantıları
- `social`: Kullanıcının eklediği X veya sosyal ağ RSS köprüsü; kaynak yoksa motor kurulum gerektiğini bildirir

## Motor sağlığı

Her motor API yanıtında `ready`, `setup`, `empty`, `error`, `off` durumlarından birini; ürettiği içerik sayısını ve kullanıcıya gösterilecek kısa açıklamayı döndürür. Arayüz yalnızca gerçekten veri getiren motorları “çalışıyor” sayar.

## Kişiselleştirme

Her ilgi alanında 1-5 yoğunluk, isteğe bağlı anahtar kelimeler ve açık/kapalı durumu bulunur. Sıralama ilgi eşleşmesi, güncellik ve motor güven sinyalini birlikte kullanır. Finans sembolleri de ilgi sinyali olarak değerlendirilir.

## Güvenlik

Özel kaynaklar yalnızca HTTPS kabul eder. Localhost, özel IP aralıkları, `.local` / `.internal` alanları, kimlik bilgisi içeren URL'ler ve standart dışı portlar reddedilir. API anahtarları istemci durumuna veya repoya yazılmaz.

X'in resmi API'si kimlik doğrulaması gerektirdiği için uygulama public repoda anahtar taşımaz. Kullanıcı kendi yetkili RSS köprüsünü kaynak olarak ekleyebilir.

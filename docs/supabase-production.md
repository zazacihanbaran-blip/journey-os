# Supabase üretim kurulumu

Journey OS prod'da iki parçadan oluşur: statik web arayüzü ve `journey-api` Edge Function. Veritabanı kullanıcı tercihlerini, özel kaynakları, arşivi ve araştırma programlarını tutar.

## Güvenlik modeli

- Authentication > Providers > Anonymous Sign-ins etkin olmalıdır.
- `supabase/migrations/20260722000100_journey_os.sql` bütün kullanıcı tablolarında RLS'yi etkinleştirir.
- Ön yüz yalnızca proje URL'sini ve publishable key'i kullanır. Bunlar `config.js` içine yazılır.
- `service_role`, database password ve Supabase access token yalnızca güvenli dağıtım ortamında tutulur; Git'e eklenmez.

## Dağıtım

```powershell
npx supabase login
npx supabase link --project-ref PROJE_REF
npx supabase db push
npx supabase functions deploy journey-api
```

Ardından `config.js` içindeki iki boş değer projenin URL'si ve publishable key'i ile doldurulur. Yerel geliştirmede değerler boş tutulursa mevcut Node.js API çalışmaya devam eder.

## Ücretsiz bağlayıcılar

Edge Function Google News RSS, OpenAlex, Crossref, Hacker News, Yahoo Finance, YouTube altyazı/RSS ve kullanıcı RSS/Atom kaynaklarını tek biçime getirir. Yahoo Finance herkese açık uç noktası resmi bir üretim SLA'sı sunmadığından deneysel sağlayıcı olarak kabul edilir. X'in resmi API erişimi ücretsiz ve anahtarsız olmadığı için yalnızca kullanıcının yetkilendirdiği RSS köprüsü kullanılabilir.

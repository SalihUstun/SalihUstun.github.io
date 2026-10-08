# Kişisel Kartvizit Sayfası

Muhammed Salih Üstün için tek sayfalık, mobil uyumlu landing page. Düz HTML/CSS/JS, GitHub Pages ile yayınlanır.

```
.
├── index.html                    # Sayfanın kendisi
├── Muhammed-Salih-Ustun-CV.pdf   # Güncel CV, adı ASLA değişmez
├── Muhammed-Salih-Ustun.vcf      # "Rehbere Ekle" kartı (telefon/e-posta değişirse güncelle)
├── cv/index.html                 # Kısa link /cv, CV dosyasına yönlendirir (QR buraya)
├── 404.html                      # Bulunamayan sayfalar için
├── .nojekyll                     # GitHub Pages'in Jekyll işlemesini kapatır
└── assets/
    ├── style.css                 # Tema (vurgu rengi --accent)
    ├── main.js                   # Tema butonu
    ├── favicon.svg
    └── apple-touch-icon.png      # iPhone ana ekran simgesi
```

## Yayınlama (ilk kez)

1. GitHub'da **`SalihUstun.github.io`** adında public bir repo oluştur.
   Bu ad sayesinde site doğrudan `https://salihustun.github.io/` adresinde açılır.
2. Bu klasörü repoya gönder:
   ```bash
   git init
   git add .
   git commit -m "İlk sürüm"
   git branch -M main
   git remote add origin https://github.com/SalihUstun/SalihUstun.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → *Source: Deploy from a branch* → `main` / `/ (root)` → **Save**.
4. 1–2 dakika sonra site yayında:
   - Sayfa: `https://salihustun.github.io/`
   - CV kısa linki: `https://salihustun.github.io/cv` ← **QR kodu bu adrese** (ya da ana sayfaya) yönlendir.
   - CV dosyası: `https://salihustun.github.io/Muhammed-Salih-Ustun-CV.pdf` (indirilince bu adla kaydedilir)

## CV'yi güncelleme

Link hiç değişmez; sadece dosyanın içeriği değişir. Yeni PDF'i **aynı adla** üzerine kopyala ve gönder:

```bash
cp ~/yol/cv-dosyan.pdf Muhammed-Salih-Ustun-CV.pdf
git add Muhammed-Salih-Ustun-CV.pdf
git commit -m "CV güncellendi"
git push
```

awesome-cv'yi doğrudan bu ada derlemek için: `xelatex -jobname=Muhammed-Salih-Ustun-CV resume.tex` (çıktıyı bu klasöre kopyala).

> GitHub Pages dosyaları ~10 dakika önbellekte tutar; güncel CV bazı cihazlarda birkaç dakika gecikmeyle görünebilir.

## Düzenleme

İçerik (unvan, tanıtım, iletişim, projeler) doğrudan `index.html` içinde.
Vurgu rengi `assets/style.css` başındaki `--accent` değişkeninden değiştirilir (awesome-cv renkleri yorum satırında).
Projeyi kullanıcı sitesi yerine başka adlı bir repoda yayınlarsan, `index.html`'deki `og:url` ve `canonical` adreslerini de güncelle.

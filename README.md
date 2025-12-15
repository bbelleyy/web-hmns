<div align="center">
  
  <br />
  <br />
  
  <h1>✨ HMNS ✨</h1>
  <h3>Premium Perfume E-Commerce Website</h3>
  
  <p>Website e-commerce parfum HMNS yang fully responsive, dibangun dengan HTML, CSS, dan JavaScript.</p>

  <br />

</div>

---

## 📋 Deskripsi

**HMNS** adalah website e-commerce untuk produk parfum brand **HMNS (Humans)** Indonesia. Website ini menampilkan 15 produk parfum premium dengan fitur:

- 🛍️ Katalog produk dengan filter berdasarkan gender dan tipe aroma
- 📱 Fully responsive untuk semua device (desktop, tablet, mobile)
- 🎬 Galeri produk dengan dukungan video
- 🔗 Integrasi langsung ke Shopee untuk pembelian
- 💬 Tombol WhatsApp untuk konsultasi

## 🏗️ Struktur Project

```
HMNS/
├── index.html              # Halaman utama (Home)
├── products.html           # Halaman koleksi produk dengan filter
├── detail.html             # Halaman detail produk
├── about.html              # Halaman tentang kami
├── assets/
│   ├── css/
│   │   ├── main.css        # Import aggregator
│   │   ├── base.css        # Variables, reset, typography
│   │   ├── navbar.css      # Navigasi
│   │   ├── hero.css        # Hero section
│   │   ├── products.css    # Product cards
│   │   ├── filter.css      # Sidebar filters
│   │   ├── detail.css      # Product detail page
│   │   ├── about.css       # About page
│   │   ├── footer.css      # Footer
│   │   └── responsive.css  # Media queries
│   ├── js/
│   │   ├── data.js         # Database 15 produk HMNS
│   │   ├── utils.js        # Helper functions
│   │   ├── filters.js      # Filter logic
│   │   ├── detail.js       # Detail page functions
│   │   └── app.js          # Main application
│   └── images/
│       ├── Parfum Pria/    # 7 produk pria
│       └── Parfum Wanita/  # 8 produk wanita
└── readme-images/
```

## 📦 Daftar Produk

### Parfum Pria (7 Produk)
| No | Nama | Kategori | Harga |
|----|------|----------|-------|
| 1 | HMNS Alpha | Fresh Aromatic | Rp 320.000 |
| 2 | HMNS Farhampton | Aromatic Fougere Fruity | Rp 369.000 |
| 3 | HMNS The Perfection | Spicy Fougere | Rp 398.000 |
| 4 | HMNS Untitled Humans | Fresh Woody | Rp 395.000 |
| 5 | HMNS Unpatched | Vanilla Woody | Rp 398.000 |
| 6 | HMNS Ambar Janma | Luxury Oriental | Rp 510.000 |
| 7 | HMNS The Prestige | Aromatic Spicy | Rp 398.000 |

### Parfum Wanita (8 Produk)
| No | Nama | Kategori | Harga |
|----|------|----------|-------|
| 8 | HMNS Philea | Floral Feminine | Rp 385.000 |
| 9 | HMNS O | Floral Gourmand | Rp 323.000 |
| 10 | HMNS Sore Eterna | Citrus Floral | Rp 385.000 |
| 11 | HMNS Essence of the Sun | Oriental Floral | Rp 369.000 |
| 12 | HMNS Unrosed | Floral Earthy | Rp 374.000 |
| 13 | HMNS ORGSM Melting Temptation | Fruity Gourmand | Rp 380.000 |
| 14 | HMNS Untitled Humans Aroma 02 | Floral Musk | Rp 385.000 |
| 15 | HMNS Darker Shade of ORGSM | Smoky Oriental | Rp 380.000 |

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan CSS Variables & Flexbox/Grid
- **JavaScript (ES6)** - Interaktivitas dan rendering dinamis
- **Google Fonts** - Poppins & Playfair Display
- **Font Awesome 6.4.0** - Icons

## 🎨 Color Palette

| Variabel | Warna | Kode |
|----------|-------|------|
| Primary | Dark Gray | `#2c2c2c` |
| Secondary | Gold | `#c9a86c` |
| Accent | Light Gold | `#d4b896` |
| Background | Off White | `#fafafa` |

## 📂 JavaScript Modules

### `data.js`
Database 15 produk HMNS dengan informasi lengkap (harga, deskripsi, fragrance notes, dll).

### `utils.js`
| Fungsi | Deskripsi |
|--------|-----------|
| `formatPrice(price)` | Format angka ke Rupiah |
| `getGenderLabel(gender)` | Konversi kode gender |
| `getProductById(id)` | Cari produk by ID |
| `goToDetail(id)` | Navigasi ke detail page |

### `filters.js`
| Fungsi | Deskripsi |
|--------|-----------|
| `filterProducts()` | Filter berdasarkan gender & type |
| `initFilters()` | Inisialisasi filter buttons |
| `initSidebarFilters()` | Setup sidebar dropdown filters |

### `detail.js`
| Fungsi | Deskripsi |
|--------|-----------|
| `renderProductDetail()` | Render halaman detail produk |
| `changeMainImage()` | Ganti gambar/video di gallery |
| `renderRelatedProducts()` | Tampilkan produk terkait |

### `app.js`
| Fungsi | Deskripsi |
|--------|-----------|
| `renderProductCard()` | Generate HTML product card |
| `renderProductsPage()` | Render grid produk dengan filter |
| `renderHomeProducts()` | Render 4 produk featured di home |
| `initMobileMenu()` | Setup hamburger menu |
| `initSmoothScroll()` | Smooth scroll anchor links |

## 🚀 Cara Menjalankan

### Prerequisites
- Web browser modern (Chrome, Firefox, Edge, Safari)

### Run Locally

**Cara Paling Mudah:**
```
Double-click file index.html → Website langsung terbuka di browser
```

**Atau dengan Local Server (opsional):**
```bash
# Python
python -m http.server 8080

# Node.js
npx serve

# Lalu buka http://localhost:8080
```

> 💡 **Note:** Project ini tidak memerlukan server karena tidak menggunakan ES6 modules atau Fetch API. Cukup buka `index.html` langsung.

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile | ≤ 768px |
| Tablet | 769px - 1024px |
| Desktop | > 1024px |

## ✨ Fitur

- ✅ Fully Responsive Design
- ✅ Filter Produk (Gender & Type)
- ✅ Galeri Gambar dengan Video Support
- ✅ Product Detail Page
- ✅ Related Products
- ✅ Integrasi Shopee
- ✅ WhatsApp Contact Button
- ✅ Smooth Scroll Navigation
- ✅ Mobile Hamburger Menu
- ✅ Modular CSS & JavaScript
- ✅ Kode Terdokumentasi dengan Baik

## 📄 License

Project ini bebas digunakan untuk pembelajaran.

---

<div align="center">
  <p>Made with ❤️ for HMNS Indonesia</p>
</div>

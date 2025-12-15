/**
 * ============================================================================
 * HMNS - Main Application (app.js)
 * ============================================================================
 * 
 * File ini adalah entry point utama aplikasi HMNS.
 * Berisi fungsi-fungsi rendering utama dan inisialisasi aplikasi.
 * 
 * Daftar Fungsi:
 * - renderProductCard(product)  : Generate HTML untuk satu product card
 * - renderProductsPage()        : Render grid produk di halaman koleksi (dengan filter)
 * - renderHomeProducts()        : Render preview produk di halaman home
 * - initMobileMenu()            : Inisialisasi toggle menu mobile/hamburger
 * - initSmoothScroll()          : Inisialisasi smooth scroll untuk anchor links
 * 
 * Dependencies:
 * - data.js (array products)
 * - utils.js (formatPrice, getGenderLabel, goToDetail)
 * - filters.js (filterProducts, initFilters)
 * - detail.js (renderProductDetail)
 * 
 * Lifecycle:
 * - Semua fungsi init dipanggil saat DOMContentLoaded event
 * ============================================================================
 */

/**
 * renderProductCard - Generate HTML Template untuk Satu Product Card
 * 
 * Fungsi ini menerima objek produk dan mengembalikan string HTML
 * untuk menampilkan produk dalam bentuk card. Card ini digunakan di:
 * - Halaman home (featured products)
 * - Halaman koleksi (products grid)
 * - Halaman detail (related products)
 * 
 * @param {Object} product - Objek produk dari data.js
 * @param {number} product.id - ID unik produk
 * @param {string} product.name - Nama produk
 * @param {string} product.image - Path gambar utama
 * @param {string} product.badge - Badge label (Best Seller, New, etc.)
 * @param {string} product.gender - Gender target (pria/wanita)
 * @param {string} product.category - Kategori aroma
 * @param {string} product.description - Deskripsi singkat
 * @param {number} product.price - Harga dalam Rupiah
 * @param {string} product.size - Ukuran produk (100ml, etc.)
 * @param {string} product.shopeeUrl - Link Shopee produk
 * @returns {string} - HTML string untuk product card
 * 
 * Struktur HTML:
 * - .product-card : Container utama
 *   - .product-image : Gambar dengan badge
 *   - .product-info : Informasi produk
 *     - .product-category, .product-name, .product-desc
 *     - .product-footer : Harga dan ukuran
 *     - .shopee-btn : Tombol beli
 * 
 * Event Handlers:
 * - onclick pada .product-image dan .product-name -> goToDetail(id)
 * - onclick pada .shopee-btn -> Open Shopee (event.stopPropagation() mencegah trigger goToDetail)
 */
function renderProductCard(product) {
    return `
        <div class="product-card">
            <!-- Gambar produk dengan badge -->
            <div class="product-image" onclick="goToDetail(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <!-- Badge produk (opsional) -->
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <!-- Badge gender dengan styling berbeda per gender -->
                <span class="product-gender-badge ${product.gender}">${getGenderLabel(product.gender)}</span>
            </div>
            <!-- Informasi produk -->
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name" onclick="goToDetail(${product.id})">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <!-- Footer dengan harga dan ukuran -->
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <span class="product-size">${product.size}</span>
                </div>
                <!-- Tombol Shopee (stopPropagation mencegah bubble ke parent onclick) -->
                <a href="${product.shopeeUrl}" target="_blank" class="shopee-btn" onclick="event.stopPropagation()">
                    <i class="fas fa-shopping-bag"></i>
                    Beli di Shopee
                </a>
            </div>
        </div>
    `;
}

/**
 * renderProductsPage - Render Grid Produk di Halaman Koleksi
 * 
 * Fungsi ini digunakan khusus untuk halaman products.html.
 * Menampilkan produk berdasarkan filter yang aktif dan update counter.
 * 
 * @returns {void}
 * 
 * Alur Kerja:
 * 1. Dapatkan container grid dan elemen counter
 * 2. Panggil filterProducts() untuk mendapatkan produk terfilter
 * 3. Update counter dengan jumlah produk
 * 4. Jika tidak ada produk, tampilkan pesan "tidak ditemukan"
 * 5. Jika ada produk, render semua product cards
 * 
 * Elemen DOM yang dibutuhkan:
 * - #productsGrid : Grid container untuk product cards
 * - #noProducts : Elemen pesan jika tidak ada produk
 * - #productCount : Elemen untuk menampilkan jumlah produk
 */
function renderProductsPage() {
    // Dapatkan referensi elemen DOM
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    const countElement = document.getElementById('productCount');
    
    // Guard clause: Jika grid tidak ada, bukan halaman products
    if (!grid) return;
    
    // Dapatkan produk yang sudah difilter
    const filtered = filterProducts();
    
    // Update counter produk
    if (countElement) {
        countElement.textContent = filtered.length;
    }
    
    // Handle case: tidak ada produk yang cocok dengan filter
    if (filtered.length === 0) {
        grid.style.display = 'none';
        if (noProducts) noProducts.style.display = 'block';
    } else {
        // Ada produk: tampilkan grid dan sembunyikan pesan kosong
        grid.style.display = 'grid';
        if (noProducts) noProducts.style.display = 'none';
        // Render semua product cards
        grid.innerHTML = filtered.map(renderProductCard).join('');
    }
}

/**
 * renderHomeProducts - Render Preview Produk di Halaman Home
 * 
 * Fungsi ini menangani rendering produk di halaman utama (index.html).
 * Di home page, hanya menampilkan 4 produk featured (yang memiliki badge).
 * Jika dipanggil di halaman products.html, akan redirect ke renderProductsPage().
 * 
 * @returns {void}
 * 
 * Alur Kerja:
 * 1. Cek apakah grid produk ada
 * 2. Cek apakah ada filter sidebar (indikator halaman products)
 * 3. Jika di halaman products, panggil renderProductsPage()
 * 4. Jika di halaman home, filter produk dengan badge dan ambil 4 pertama
 * 5. Render product cards
 * 
 * Elemen DOM yang dibutuhkan:
 * - #productsGrid : Grid container untuk product cards
 * - .filter-sidebar : Sidebar filter (hanya ada di products.html)
 */
function renderHomeProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    // Deteksi halaman berdasarkan keberadaan filter sidebar
    // Jika ada sidebar filter, berarti ini halaman products.html
    const filterSidebar = document.querySelector('.filter-sidebar');
    if (filterSidebar) {
        // Di halaman products, gunakan fungsi dengan filter
        renderProductsPage();
        return;
    }
    
    // Di halaman home: tampilkan 4 produk featured
    // Featured products = produk yang memiliki badge (Best Seller, New, etc.)
    const featuredProducts = products.filter(p => p.badge).slice(0, 4);
    grid.innerHTML = featuredProducts.map(renderProductCard).join('');
}

/**
 * initMobileMenu - Inisialisasi Toggle Menu Mobile (Hamburger Menu)
 * 
 * Fungsi ini menangani show/hide menu navigasi pada tampilan mobile.
 * Mengubah icon hamburger menjadi X saat menu terbuka dan sebaliknya.
 * 
 * @returns {void}
 * 
 * Event Handlers:
 * 1. Click pada hamburger button:
 *    - Toggle class 'active' pada mobile menu
 *    - Toggle icon antara fa-bars (☰) dan fa-times (×)
 * 
 * 2. Click pada menu link:
 *    - Tutup menu
 *    - Reset icon ke hamburger
 * 
 * Elemen DOM yang dibutuhkan:
 * - #mobileMenuBtn : Tombol hamburger menu
 * - #mobileMenu : Container menu navigasi mobile
 * 
 * CSS Classes:
 * - .active : Menampilkan menu mobile (display: block/flex)
 * - .fa-bars : Icon hamburger (☰)
 * - .fa-times : Icon close (×)
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        // === HANDLER: Toggle Menu saat Button Diklik ===
        menuBtn.addEventListener('click', () => {
            // Toggle visibility menu
            mobileMenu.classList.toggle('active');
            
            // Toggle icon hamburger <-> close
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                // Menu terbuka: ganti ke icon X
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                // Menu tertutup: ganti ke icon hamburger
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // === HANDLER: Tutup Menu saat Link Diklik ===
        // Untuk UX yang baik, menu otomatis tertutup setelah navigasi
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

/**
 * initSmoothScroll - Inisialisasi Smooth Scrolling untuk Anchor Links
 * 
 * Fungsi ini memberikan efek scroll yang halus (smooth) saat user
 * mengklik link dengan href yang mengarah ke elemen dengan ID (anchor links).
 * Contoh: <a href="#products"> akan scroll smooth ke element dengan id="products"
 * 
 * @returns {void}
 * 
 * Alur Kerja:
 * 1. Cari semua anchor links (href dimulai dengan #)
 * 2. Tambahkan event listener untuk setiap link
 * 3. Prevent default jump behavior
 * 4. Gunakan scrollIntoView dengan behavior 'smooth'
 * 
 * Browser Support:
 * - Modern browsers: Native smooth scroll
 * - Older browsers: Instant scroll (fallback)
 */
function initSmoothScroll() {
    // Cari semua link yang href-nya dimulai dengan #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault();
            
            // Dapatkan target element dari href attribute
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Scroll smooth ke target element
                target.scrollIntoView({
                    behavior: 'smooth',  // Animasi smooth
                    block: 'start'       // Align ke bagian atas viewport
                });
            }
        });
    });
}

/**
 * ============================================================================
 * APPLICATION INITIALIZATION
 * ============================================================================
 * 
 * Event listener untuk DOMContentLoaded - dipanggil saat HTML sudah
 * sepenuhnya di-load dan di-parse, tanpa menunggu stylesheet, images,
 * dan subframes selesai loading.
 * 
 * Urutan Inisialisasi:
 * 1. renderHomeProducts() - Render produk (home atau products page)
 * 2. renderProductDetail() - Render detail produk (jika di detail page)
 * 3. initFilters() - Inisialisasi sistem filter
 * 4. initMobileMenu() - Inisialisasi menu mobile
 * 5. initSmoothScroll() - Inisialisasi smooth scrolling
 * 
 * Catatan: Setiap fungsi memiliki guard clause sendiri untuk mengecek
 * apakah elemen DOM yang dibutuhkan ada, sehingga aman dipanggil
 * di semua halaman.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render produk (akan detect otomatis home vs products page)
    renderHomeProducts();
    
    // Render detail produk (hanya berjalan di detail.html)
    renderProductDetail();
    
    // Inisialisasi sistem filter (untuk products.html)
    initFilters();
    
    // Inisialisasi menu mobile (untuk semua halaman)
    initMobileMenu();
    
    // Inisialisasi smooth scroll (untuk semua halaman)
    initSmoothScroll();
});

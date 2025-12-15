/**
 * ============================================================================
 * HMNS - Product Detail Module (detail.js)
 * ============================================================================
 * 
 * File ini menangani semua fungsi terkait halaman detail produk.
 * Termasuk rendering informasi produk, galeri gambar/video, dan produk terkait.
 * 
 * Daftar Fungsi:
 * - renderProductDetail()                    : Render seluruh halaman detail produk
 * - changeMainImage(src, thumbElement, type) : Ganti gambar/video utama saat thumbnail diklik
 * - renderRelatedProducts(id, gender, type)  : Render produk terkait di bawah halaman
 * 
 * Dependencies:
 * - data.js (array products)
 * - utils.js (formatPrice, getGenderLabel, getProductById)
 * - app.js (renderProductCard)
 * 
 * URL Parameter:
 * - id : ID produk yang akan ditampilkan (contoh: detail.html?id=1)
 * ============================================================================
 */

/**
 * renderProductDetail - Render Seluruh Konten Halaman Detail Produk
 * 
 * Fungsi utama untuk menampilkan detail produk. Membaca ID dari URL parameter,
 * mencari data produk, dan menggenerate HTML lengkap termasuk:
 * - Galeri gambar dengan thumbnail
 * - Video produk (jika ada)
 * - Informasi produk (nama, harga, deskripsi)
 * - Spesifikasi produk
 * - Tombol pembelian (Shopee & WhatsApp)
 * - Produk terkait
 * 
 * @returns {void}
 * 
 * Alur Kerja:
 * 1. Ambil ID produk dari URL query parameter (?id=X)
 * 2. Cari produk di database menggunakan getProductById()
 * 3. Jika tidak ditemukan, tampilkan pesan error
 * 4. Jika ditemukan, generate HTML untuk semua section
 * 5. Update page title dengan nama produk
 * 6. Panggil renderRelatedProducts() untuk produk terkait
 * 
 * Elemen DOM yang dibutuhkan:
 * - #productDetail : Container utama untuk konten detail produk
 */
function renderProductDetail() {
    // === AMBIL ID PRODUK DARI URL ===
    // Contoh URL: detail.html?id=1 -> productId = "1"
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Dapatkan container untuk menampilkan detail
    const detailContainer = document.getElementById('productDetail');
    
    // Guard clause: Jika container tidak ada, fungsi berhenti
    if (!detailContainer) return;
    
    // === CARI DATA PRODUK ===
    const product = getProductById(productId);
    
    // === HANDLE PRODUK TIDAK DITEMUKAN ===
    if (!product) {
        detailContainer.innerHTML = `
            <div style="text-align: center; padding: 50px; grid-column: 1 / -1;">
                <h2>Produk tidak ditemukan</h2>
                <p>Silakan kembali ke halaman koleksi</p>
            </div>
        `;
        return;
    }
    
    // === UPDATE PAGE TITLE ===
    // Format: "HMNS Alpha - HMNS"
    document.title = `${product.name} - HMNS`;
    
    // === BUILD GALLERY THUMBNAILS HTML ===
    // Generate thumbnail untuk setiap gambar produk
    // Gambar pertama (idx=0) mendapat class 'active'
    const galleryThumbs = product.images ? product.images.map((img, idx) => `
        <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this, 'image')">
            <img src="${img}" alt="${product.name} ${idx + 1}">
        </div>
    `).join('') : '';
    
    // === BUILD VIDEO THUMBNAIL HTML ===
    // Hanya tampilkan jika produk memiliki video
    const videoThumb = product.video ? `
        <div class="gallery-thumb video-thumb" onclick="changeMainImage('${product.video}', this, 'video')">
            <i class="fas fa-play-circle"></i>
            <span>Video</span>
        </div>
    ` : '';
    
    // === GENERATE FULL HTML CONTENT ===
    detailContainer.innerHTML = `
        <!-- SECTION: Galeri Gambar & Video -->
        <div class="detail-image-section">
            <div class="detail-image-main">
                <!-- Gambar utama produk (default visible) -->
                <img src="${product.image}" alt="${product.name}" id="mainProductImage">
                <!-- Video produk (default hidden, tampil saat video thumb diklik) -->
                <video id="mainProductVideo" style="display: none; width: 100%; border-radius: 12px;" controls>
                    <source src="${product.video || ''}" type="video/mp4">
                </video>
                <!-- Badge produk (Best Seller, New, etc.) -->
                ${product.badge ? `<span class="detail-badge">${product.badge}</span>` : ''}
                <!-- Badge gender dengan warna berbeda per gender -->
                <span class="detail-gender-badge ${product.gender}">${getGenderLabel(product.gender)}</span>
            </div>
            <!-- Thumbnail gallery (gambar + video) -->
            ${product.images || product.video ? `<div class="detail-image-gallery">${galleryThumbs}${videoThumb}</div>` : ''}
        </div>
        
        <!-- SECTION: Informasi Produk -->
        <div class="detail-info">
            <p class="detail-category">${product.category}</p>
            <h1 class="detail-name">${product.name}</h1>
            <p class="detail-price">${formatPrice(product.price)}</p>
            <p class="detail-desc">${product.fullDescription}</p>
            
            <!-- SUBSECTION: Spesifikasi Produk -->
            <div class="detail-specs">
                <h3>Spesifikasi</h3>
                <div class="spec-item">
                    <span class="spec-label">Ukuran</span>
                    <span class="spec-value">${product.size}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Kategori</span>
                    <span class="spec-value">${product.category}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Gender</span>
                    <span class="spec-value">${getGenderLabel(product.gender)}</span>
                </div>
                <!-- Spec items opsional - hanya tampil jika data tersedia -->
                ${product.longevity ? `
                <div class="spec-item">
                    <span class="spec-label">Ketahanan</span>
                    <span class="spec-value">${product.longevity}</span>
                </div>
                ` : ''}
                ${product.sillage ? `
                <div class="spec-item">
                    <span class="spec-label">Sillage</span>
                    <span class="spec-value">${product.sillage}</span>
                </div>
                ` : ''}
                ${product.projection ? `
                <div class="spec-item">
                    <span class="spec-label">Projection</span>
                    <span class="spec-value">${product.projection}</span>
                </div>
                ` : ''}
                ${product.bpom ? `
                <div class="spec-item">
                    <span class="spec-label">No. BPOM</span>
                    <span class="spec-value">${product.bpom}</span>
                </div>
                ` : ''}
            </div>
            
            <!-- SUBSECTION: Tombol Aksi (Beli & WhatsApp) -->
            <div class="detail-buttons">
                <!-- Link ke Shopee dengan icon shopping bag -->
                <a href="${product.shopeeUrl}" target="_blank" class="shopee-btn-detail">
                    <i class="fas fa-shopping-bag"></i>
                    Beli di Shopee
                </a>
                <!-- Link WhatsApp dengan pesan pre-filled -->
                <a href="https://wa.me/6281413371321?text=Halo, saya tertarik dengan parfum ${encodeURIComponent(product.name)} (${formatPrice(product.price)})" target="_blank" class="contact-btn">
                    <i class="fab fa-whatsapp"></i>
                    Tanya via WhatsApp
                </a>
            </div>
        </div>
    `;
    
    // === RENDER PRODUK TERKAIT ===
    // Tampilkan produk lain dengan gender atau type yang sama
    renderRelatedProducts(product.id, product.gender, product.type);
}

/**
 * changeMainImage - Mengganti Gambar/Video Utama pada Gallery
 * 
 * Fungsi ini dipanggil saat user mengklik thumbnail di galeri.
 * Dapat menampilkan gambar atau video tergantung parameter type.
 * 
 * @param {string} src - URL/path dari gambar atau video yang akan ditampilkan
 * @param {HTMLElement} thumbElement - Elemen thumbnail yang diklik (untuk update class active)
 * @param {string} [type='image'] - Tipe konten: 'image' atau 'video'
 * @returns {void}
 * 
 * Alur Kerja untuk Video:
 * 1. Sembunyikan gambar utama
 * 2. Tampilkan video player
 * 3. Set source video dan mulai play
 * 
 * Alur Kerja untuk Gambar:
 * 1. Pause dan sembunyikan video (jika sedang play)
 * 2. Tampilkan gambar utama
 * 3. Update src gambar
 * 
 * Update Thumbnail:
 * - Hapus class 'active' dari semua thumbnail
 * - Tambahkan class 'active' ke thumbnail yang diklik
 * 
 * @example
 * // Klik thumbnail gambar
 * changeMainImage('assets/images/product/gambar2.webp', this, 'image')
 * 
 * // Klik thumbnail video
 * changeMainImage('assets/images/product/video1.mp4', this, 'video')
 */
function changeMainImage(src, thumbElement, type = 'image') {
    // Dapatkan referensi elemen gambar dan video utama
    const mainImage = document.getElementById('mainProductImage');
    const mainVideo = document.getElementById('mainProductVideo');
    
    if (type === 'video') {
        // === MODE VIDEO ===
        // Sembunyikan gambar, tampilkan video
        if (mainImage) mainImage.style.display = 'none';
        if (mainVideo) {
            mainVideo.style.display = 'block';
            mainVideo.src = src;  // Set source video baru
            mainVideo.play();     // Auto-play video
        }
    } else {
        // === MODE GAMBAR ===
        // Sembunyikan video (dan pause), tampilkan gambar
        if (mainVideo) {
            mainVideo.pause();    // Stop video jika sedang play
            mainVideo.style.display = 'none';
        }
        if (mainImage) {
            mainImage.style.display = 'block';
            mainImage.src = src;  // Update source gambar
        }
    }
    
    // === UPDATE ACTIVE STATE THUMBNAIL ===
    // Hapus class active dari semua thumbnail
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    // Tambahkan class active ke thumbnail yang diklik
    if (thumbElement) {
        thumbElement.classList.add('active');
    }
}

/**
 * renderRelatedProducts - Render Section Produk Terkait
 * 
 * Menampilkan maksimal 4 produk yang relevan dengan produk yang sedang dilihat.
 * Relevansi ditentukan berdasarkan kesamaan gender ATAU type parfum.
 * 
 * @param {number} currentId - ID produk yang sedang ditampilkan (untuk exclude dari hasil)
 * @param {string} gender - Gender produk saat ini ('pria' atau 'wanita')
 * @param {string} type - Type/kategori aroma produk saat ini ('fresh', 'woody', etc.)
 * @returns {void}
 * 
 * Algoritma:
 * 1. Filter semua produk yang bukan produk saat ini (exclude by ID)
 * 2. Filter produk yang memiliki gender ATAU type yang sama
 * 3. Ambil maksimal 4 produk pertama
 * 4. Render menggunakan renderProductCard() dari app.js
 * 
 * Elemen DOM yang dibutuhkan:
 * - #relatedProducts : Grid container untuk produk terkait
 * 
 * @example
 * // Produk HMNS Alpha (id:1, gender:pria, type:fresh)
 * renderRelatedProducts(1, 'pria', 'fresh')
 * // Akan menampilkan produk pria lain ATAU produk dengan type fresh
 */
function renderRelatedProducts(currentId, gender, type) {
    // Dapatkan container untuk produk terkait
    const relatedGrid = document.getElementById('relatedProducts');
    if (!relatedGrid) return;
    
    // Filter produk terkait:
    // 1. Bukan produk yang sedang dilihat (exclude currentId)
    // 2. Memiliki gender ATAU type yang sama
    const relatedProducts = products
        .filter(p => p.id !== parseInt(currentId) && (p.gender === gender || p.type === type))
        .slice(0, 4);  // Ambil maksimal 4 produk
    
    // Render setiap produk menggunakan template card dari app.js
    relatedGrid.innerHTML = relatedProducts.map(renderProductCard).join('');
}

/**
 * ============================================================================
 * HMNS - Filters Module (filters.js)
 * ============================================================================
 * 
 * File ini menangani semua logika filtering produk di halaman koleksi.
 * Filter memungkinkan pengguna untuk memfilter produk berdasarkan:
 * - Gender (Semua, Pria, Wanita)
 * - Type/Jenis Aroma (Semua, Fresh, Woody, Oriental, Floral, Gourmand)
 * 
 * Daftar Fungsi:
 * - filterProducts()       : Filter array products berdasarkan state filter aktif
 * - initFilters()          : Inisialisasi event listener untuk filter buttons
 * - initSidebarFilters()   : Inisialisasi sidebar dropdown filters
 * 
 * State Variables:
 * - currentGenderFilter    : Menyimpan filter gender yang aktif ('all', 'pria', 'wanita')
 * - currentTypeFilter      : Menyimpan filter type yang aktif ('all', 'fresh', etc.)
 * 
 * Dependencies: 
 * - data.js (array products)
 * - app.js (fungsi renderProductsPage)
 * ============================================================================
 */

/**
 * STATE VARIABLES - Variabel Global untuk Menyimpan Status Filter
 * 
 * Variabel ini menyimpan nilai filter yang sedang aktif.
 * Nilai default 'all' berarti menampilkan semua produk tanpa filter.
 */
let currentGenderFilter = 'all';  // Filter gender: 'all' | 'pria' | 'wanita'
let currentTypeFilter = 'all';    // Filter type: 'all' | 'fresh' | 'woody' | 'oriental' | 'floral' | 'gourmand'

/**
 * filterProducts - Memfilter array products berdasarkan filter yang aktif
 * 
 * Fungsi ini membaca state filter saat ini (currentGenderFilter & currentTypeFilter)
 * dan mengembalikan array products yang sudah difilter. Filter bersifat kumulatif,
 * artinya kedua filter akan diterapkan bersamaan jika keduanya tidak 'all'.
 * 
 * @returns {Array<Object>} - Array produk yang sudah difilter
 * 
 * @example
 * // Jika currentGenderFilter = 'pria' dan currentTypeFilter = 'all'
 * filterProducts() // Output: Array produk pria saja
 * 
 * // Jika currentGenderFilter = 'wanita' dan currentTypeFilter = 'floral'
 * filterProducts() // Output: Array produk wanita dengan type floral
 * 
 * Alur Kerja:
 * 1. Mulai dengan semua products
 * 2. Jika gender filter aktif (!= 'all'), filter berdasarkan gender
 * 3. Jika type filter aktif (!= 'all'), filter berdasarkan type
 * 4. Return hasil filter
 */
function filterProducts() {
    // Mulai dengan semua produk
    let filtered = products;
    
    // Filter berdasarkan gender jika bukan 'all'
    if (currentGenderFilter !== 'all') {
        filtered = filtered.filter(p => p.gender === currentGenderFilter);
    }
    
    // Filter berdasarkan type jika bukan 'all'
    if (currentTypeFilter !== 'all') {
        filtered = filtered.filter(p => p.type === currentTypeFilter);
    }
    
    return filtered;
}

/**
 * initFilters - Inisialisasi Event Listener untuk Filter Buttons (Legacy)
 * 
 * Fungsi ini menginisialisasi filter berbasis tombol (button-based filters).
 * Merupakan implementasi lama yang masih dipertahankan untuk backward compatibility.
 * Fungsi utama sekarang adalah memanggil initSidebarFilters() untuk filter sidebar.
 * 
 * @returns {void}
 * 
 * Event Handler:
 * - Click pada filter button akan:
 *   1. Menghapus class 'active' dari semua button dalam grup
 *   2. Menambah class 'active' pada button yang diklik
 *   3. Update state filter sesuai data-filter attribute
 *   4. Re-render halaman produk dengan filter baru
 * 
 * Elemen DOM yang dibutuhkan:
 * - #genderFilter : Container untuk tombol filter gender
 * - #typeFilter   : Container untuk tombol filter type
 */
function initFilters() {
    // Dapatkan elemen container filter
    const genderFilter = document.getElementById('genderFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    // Setup event listener untuk gender filter buttons
    if (genderFilter) {
        genderFilter.addEventListener('click', (e) => {
            // Pastikan yang diklik adalah filter button
            if (e.target.classList.contains('filter-btn')) {
                // Hapus class active dari semua button dalam grup
                genderFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // Tambah class active ke button yang diklik
                e.target.classList.add('active');
                // Update state filter dari data attribute
                currentGenderFilter = e.target.dataset.filter;
                // Re-render halaman produk
                renderProductsPage();
            }
        });
    }
    
    // Setup event listener untuk type filter buttons
    if (typeFilter) {
        typeFilter.addEventListener('click', (e) => {
            // Pastikan yang diklik adalah filter button
            if (e.target.classList.contains('filter-btn')) {
                // Hapus class active dari semua button dalam grup
                typeFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // Tambah class active ke button yang diklik
                e.target.classList.add('active');
                // Update state filter dari data attribute
                currentTypeFilter = e.target.dataset.filter;
                // Re-render halaman produk
                renderProductsPage();
            }
        });
    }
    
    // Inisialisasi sidebar dropdown filters (implementasi utama)
    initSidebarFilters();
}

/**
 * initSidebarFilters - Inisialisasi Sidebar Dropdown Filters
 * 
 * Fungsi ini menginisialisasi sistem filter menggunakan sidebar dengan dropdown.
 * Sidebar berisi radio buttons untuk setiap opsi filter, memberikan UX yang lebih
 * baik terutama untuk mobile view.
 * 
 * @returns {void}
 * 
 * Fitur yang diinisialisasi:
 * 1. Toggle dropdown gender - Buka/tutup dropdown filter gender
 * 2. Toggle dropdown type - Buka/tutup dropdown filter type  
 * 3. Radio button gender - Event listener untuk filter gender
 * 4. Radio button type - Event listener untuk filter type
 * 5. Reset button - Mengembalikan semua filter ke default ('all')
 * 6. Auto-open dropdowns - Membuka dropdown secara default saat page load
 * 
 * Elemen DOM yang dibutuhkan:
 * - #genderToggle      : Tombol toggle dropdown gender
 * - #typeToggle        : Tombol toggle dropdown type
 * - #resetFilter       : Tombol reset semua filter
 * - input[name="gender"] : Radio buttons untuk filter gender
 * - input[name="type"]   : Radio buttons untuk filter type
 * - .filter-dropdown   : Container dropdown filter
 */
function initSidebarFilters() {
    // === DAPATKAN REFERENSI ELEMEN DOM ===
    const genderToggle = document.getElementById('genderToggle');      // Tombol toggle gender dropdown
    const typeToggle = document.getElementById('typeToggle');          // Tombol toggle type dropdown
    const genderDropdown = genderToggle?.closest('.filter-dropdown');  // Container dropdown gender
    const typeDropdown = typeToggle?.closest('.filter-dropdown');      // Container dropdown type
    const resetBtn = document.getElementById('resetFilter');           // Tombol reset filter
    
    // === SETUP TOGGLE DROPDOWN GENDER ===
    // Menambah/menghapus class 'open' untuk show/hide dropdown content
    if (genderToggle && genderDropdown) {
        genderToggle.addEventListener('click', () => {
            genderDropdown.classList.toggle('open');
        });
    }
    
    // === SETUP TOGGLE DROPDOWN TYPE ===
    // Menambah/menghapus class 'open' untuk show/hide dropdown content
    if (typeToggle && typeDropdown) {
        typeToggle.addEventListener('click', () => {
            typeDropdown.classList.toggle('open');
        });
    }
    
    // === SETUP GENDER FILTER RADIO BUTTONS ===
    // Setiap perubahan pada radio button akan update state dan re-render
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Update state filter gender dengan nilai radio yang dipilih
            currentGenderFilter = radio.value;
            // Re-render halaman produk dengan filter baru
            renderProductsPage();
        });
    });
    
    // === SETUP TYPE FILTER RADIO BUTTONS ===
    // Setiap perubahan pada radio button akan update state dan re-render
    const typeRadios = document.querySelectorAll('input[name="type"]');
    typeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Update state filter type dengan nilai radio yang dipilih
            currentTypeFilter = radio.value;
            // Re-render halaman produk dengan filter baru
            renderProductsPage();
        });
    });
    
    // === SETUP RESET FILTER BUTTON ===
    // Mengembalikan semua filter ke kondisi default ('all')
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Reset state filter ke default
            currentGenderFilter = 'all';
            currentTypeFilter = 'all';
            
            // Reset tampilan radio buttons ke 'all'
            const genderAll = document.querySelector('input[name="gender"][value="all"]');
            const typeAll = document.querySelector('input[name="type"][value="all"]');
            if (genderAll) genderAll.checked = true;
            if (typeAll) typeAll.checked = true;
            
            // Re-render halaman produk dengan semua produk
            renderProductsPage();
        });
    }
    
    // === AUTO-OPEN DROPDOWNS SAAT PAGE LOAD ===
    // Membuka kedua dropdown secara default untuk UX yang lebih baik
    if (genderDropdown) genderDropdown.classList.add('open');
    if (typeDropdown) typeDropdown.classList.add('open');
}

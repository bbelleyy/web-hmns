/**
 * ============================================================================
 * HMNS - Utility Functions (utils.js)
 * ============================================================================
 * 
 * File ini berisi kumpulan fungsi utilitas/helper yang digunakan di seluruh
 * aplikasi HMNS. Fungsi-fungsi ini bersifat reusable dan tidak terikat
 * pada komponen tertentu.
 * 
 * Daftar Fungsi:
 * - formatPrice(price)      : Format angka ke format mata uang Rupiah
 * - getGenderLabel(gender)  : Konversi kode gender ke label tampilan
 * - getProductById(id)      : Cari produk berdasarkan ID
 * - goToDetail(id)          : Navigasi ke halaman detail produk
 * 
 * Dependencies: data.js (untuk akses array products)
 * ============================================================================
 */

/**
 * formatPrice - Mengubah angka menjadi format mata uang Indonesia (Rupiah)
 * 
 * Fungsi ini menggunakan Intl.NumberFormat API untuk memformat angka
 * ke format mata uang Indonesia dengan format: Rp XXX.XXX
 * 
 * @param {number} price - Harga dalam bentuk angka (contoh: 320000)
 * @returns {string} - Harga terformat dalam Rupiah (contoh: "Rp 320.000")
 * 
 * @example
 * formatPrice(320000)  // Output: "Rp 320.000"
 * formatPrice(1500000) // Output: "Rp 1.500.000"
 */
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',        // Menggunakan format mata uang
        currency: 'IDR',          // Kode mata uang Indonesia
        minimumFractionDigits: 0  // Tidak menampilkan desimal (sen)
    }).format(price);
}

/**
 * getGenderLabel - Mengkonversi kode gender ke label yang user-friendly
 * 
 * Fungsi ini mengubah kode gender internal (lowercase) menjadi label
 * yang ditampilkan ke pengguna dengan kapitalisasi yang benar.
 * 
 * @param {string} gender - Kode gender ('pria', 'wanita', atau 'unisex')
 * @returns {string} - Label gender untuk ditampilkan ('Pria', 'Wanita', 'Unisex')
 * 
 * @example
 * getGenderLabel('pria')   // Output: "Pria"
 * getGenderLabel('wanita') // Output: "Wanita"
 * getGenderLabel('other')  // Output: "other" (fallback ke nilai asli)
 */
function getGenderLabel(gender) {
    // Mapping kode gender ke label tampilan
    const labels = {
        'unisex': 'Unisex',
        'pria': 'Pria',
        'wanita': 'Wanita'
    };
    // Return label yang sesuai, atau nilai asli jika tidak ditemukan
    return labels[gender] || gender;
}

/**
 * getProductById - Mencari dan mengembalikan objek produk berdasarkan ID
 * 
 * Fungsi ini melakukan pencarian dalam array products (dari data.js)
 * untuk menemukan produk dengan ID yang cocok. Digunakan terutama
 * di halaman detail untuk mendapatkan data produk yang ditampilkan.
 * 
 * @param {number|string} id - ID produk yang dicari (akan dikonversi ke integer)
 * @returns {Object|undefined} - Objek produk jika ditemukan, undefined jika tidak
 * 
 * @example
 * getProductById(1)   // Output: { id: 1, name: "HMNS Alpha", ... }
 * getProductById('5') // Output: { id: 5, name: "HMNS Unpatched", ... }
 * getProductById(99)  // Output: undefined (produk tidak ditemukan)
 */
function getProductById(id) {
    // Menggunakan Array.find() untuk mencari produk dengan ID yang cocok
    // parseInt() memastikan perbandingan selalu dalam bentuk integer
    return products.find(p => p.id === parseInt(id));
}

/**
 * goToDetail - Melakukan navigasi ke halaman detail produk
 * 
 * Fungsi ini mengubah URL browser untuk berpindah ke halaman detail
 * produk dengan menyertakan ID produk sebagai query parameter.
 * Digunakan sebagai onclick handler pada product card.
 * 
 * @param {number} id - ID produk yang akan ditampilkan detailnya
 * @returns {void}
 * 
 * @example
 * goToDetail(1) // Navigasi ke: detail.html?id=1
 * goToDetail(5) // Navigasi ke: detail.html?id=5
 * 
 * @usage HTML: onclick="goToDetail(${product.id})"
 */
function goToDetail(id) {
    // Redirect ke halaman detail dengan query parameter ID
    window.location.href = `detail.html?id=${id}`;
}

/**
 * Module Export (untuk kompatibilitas Node.js/testing)
 * 
 * Block ini memungkinkan fungsi-fungsi di file ini untuk digunakan
 * dalam environment Node.js (misalnya untuk unit testing).
 * Di browser, block ini akan diabaikan karena module tidak terdefinisi.
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatPrice, getGenderLabel, getProductById, goToDetail };
}

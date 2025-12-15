/**
 * ============================================================================
 * HMNS- Product Data (data.js)
 * ============================================================================
 * 
 * File ini berisi database produk parfum HMNS dalam bentuk array JavaScript.
 * Semua data produk disimpan dalam variabel global `products` yang dapat
 * diakses oleh modul lain.
 * 
 * Total Produk: 15
 * - Parfum Pria: 7 produk (ID 1-7)
 * - Parfum Wanita: 8 produk (ID 8-15)
 * 
 * Struktur Data Produk:
 * {
 *   id: number,           // ID unik produk (1-15)
 *   name: string,         // Nama lengkap produk (contoh: "HMNS Alpha")
 *   category: string,     // Kategori aroma (contoh: "Fresh Aromatic")
 *   type: string,         // Tipe parfum untuk filter (fresh/woody/oriental/floral/gourmand)
 *   gender: string,       // Target gender (pria/wanita)
 *   price: number,        // Harga dalam Rupiah tanpa titik (contoh: 320000)
 *   size: string,         // Ukuran botol (contoh: "100ml")
 *   badge: string,        // Label badge (Best Seller/New/Premium/etc.) atau kosong
 *   image: string,        // Path gambar utama untuk card
 *   images: string[],     // Array path gambar untuk gallery detail
 *   video: string,        // Path video produk (opsional, tidak semua produk punya)
 *   description: string,  // Deskripsi singkat untuk card
 *   fullDescription: string, // Deskripsi lengkap untuk halaman detail
 *   topNotes: string,     // Fragrance notes atas
 *   middleNotes: string,  // Fragrance notes tengah
 *   baseNotes: string,    // Fragrance notes bawah
 *   longevity: string,    // Ketahanan parfum (contoh: "6-8 jam")
 *   sillage: string,      // Kekuatan aroma (contoh: "Medium-Strong")
 *   projection: string,   // Jarak proyeksi aroma (contoh: "2-3 meter")
 *   bpom: string,         // Nomor registrasi BPOM
 *   shopeeUrl: string     // Link produk di Shopee
 * }
 * 
 * Catatan Harga:
 * - Semua harga sudah di-update sesuai harga resmi Shopee HMNS (Juni 2024)
 * - Format: angka bulat tanpa titik, contoh: 320000 (bukan 320.000)
 * 
 * Catatan Video:
 * - 10 dari 15 produk memiliki video
 * - Pria dengan video: Alpha, Farhampton, Unpatched, Ambar Janma, The Prestige
 * - Wanita dengan video: O, Essence of the Sun, Unrosed, Untitled Humans Aroma 02, Darker Shade of ORGSM
 * 
 * Dependencies: Tidak ada (file ini adalah data source)
 * Used by: utils.js, filters.js, detail.js, app.js
 * ============================================================================
 */

/**
 * products - Array Database Produk Parfum HMNS
 * 
 * @type {Array<Object>}
 * @description Menyimpan semua data produk parfum yang tersedia.
 *              Digunakan sebagai single source of truth untuk seluruh aplikasi.
 * 
 * Penggunaan:
 * - products.find(p => p.id === 1)  // Cari produk dengan ID 1
 * - products.filter(p => p.gender === 'pria')  // Filter produk pria
 * - products.length  // Total jumlah produk (15)
 */
const products = [
    // =========================================================================
    // PARFUM PRIA (7 produk, ID 1-7)
    // =========================================================================
    
    /**
     * Produk #1: HMNS Alpha
     * @description Best seller HMNS, fresh & calming character
     * @category Fresh Aromatic
     * @gender Pria
     */
    {
        id: 1,
        name: "HMNS Alpha",
        category: "Fresh Aromatic",
        type: "fresh",
        gender: "pria",
        price: 320000,
        size: "100ml",
        badge: "Best Seller",
        image: "assets/images/Parfum Pria/Alpha/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/Alpha/gambar1.webp",
            "assets/images/Parfum Pria/Alpha/gambar2.webp",
            "assets/images/Parfum Pria/Alpha/gambar3.webp",
            "assets/images/Parfum Pria/Alpha/gambar4.webp"
        ],
        video: "assets/images/Parfum Pria/Alpha/video1.mp4",
        description: "Formulasi best seller HMNS dengan karakter fresh & calming. The origin of HMNS.",
        fullDescription: "HMNS Alpha adalah formulasi best seller dari HMNS yang kini hadir dalam kemasan baru 100 ml dengan sentuhan lebih elegan, packaging lebih eksklusif dan lebih aman. Fragrance Alpha memiliki karakter yang fresh & calming, menjadikannya varian pertama yang menjadi the origin of HMNS.",
        topNotes: "Citrus, Grass",
        middleNotes: "Green Tea Essence",
        baseNotes: "Cedarwood",
        longevity: "Hingga 6 jam",
        sillage: "Medium-Strong",
        projection: "2-3 meter",
        bpom: "NA18220602555",
        shopeeUrl: "https://id.shp.ee/qp1Yjr8"
    },
    
    /**
     * Produk #2: HMNS Farhampton
     * @description Soulmate fragrance dengan extrait de parfum concentration
     * @category Aromatic Fougere Fruity
     * @gender Pria
     */
    {
        id: 2,
        name: "HMNS Farhampton",
        category: "Aromatic Fougere Fruity",
        type: "woody",
        gender: "pria",
        price: 369000,
        size: "100ml",
        badge: "Premium",
        image: "assets/images/Parfum Pria/Farhampton/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/Farhampton/gambar1.webp",
            "assets/images/Parfum Pria/Farhampton/gambar2.webp",
            "assets/images/Parfum Pria/Farhampton/gambar3.webp",
            "assets/images/Parfum Pria/Farhampton/gambar4.webp"
        ],
        video: "assets/images/Parfum Pria/Farhampton/video1.mp4",
        description: "Soulmate fragrance dengan konsentrasi extrait de parfum. Aromatic dan spicy.",
        fullDescription: "Farhampton is a soulmate. The one that you find along the journey. And the one that sticks with you until the end. Dengan konsentrasi pure fragrance tinggi (extrait de parfum), HMNS Farhampton mengandung bahan natural Lavender & Labdanum Amber.",
        topNotes: "Bergamot, Ripe Fruit",
        middleNotes: "Lavender, Orange Blossom",
        baseNotes: "Labdanum Amber, Cedarwood, Tonka Bean",
        longevity: "6-8 jam",
        sillage: "Moderate to Heavy",
        projection: "2 meter",
        bpom: "NA18200600774",
        shopeeUrl: "https://id.shp.ee/rHfdKxp"
    },
    
    /**
     * Produk #3: HMNS The Perfection
     * @description Kolaborasi dengan Christian Sugiono, 145 trials to perfection
     * @category Spicy Fougere
     * @gender Pria
     */
    {
        id: 3,
        name: "HMNS The Perfection",
        category: "Spicy Fougere",
        type: "oriental",
        gender: "pria",
        price: 398000,
        size: "100ml",
        badge: "Collab",
        image: "assets/images/Parfum Pria/The Perfection/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/The Perfection/gambar1.webp",
            "assets/images/Parfum Pria/The Perfection/gambar2.webp",
            "assets/images/Parfum Pria/The Perfection/gambar3.webp",
            "assets/images/Parfum Pria/The Perfection/gambar4.webp"
        ],
        description: "Kolaborasi HMNS & Christian Sugiono. Luxurious clean dengan kesan mass pleasing.",
        fullDescription: "The Perfection adalah varian terbaru yang dipersembahkan oleh HMNS & Christian Sugiono. Memiliki tipe Spicy–Fougere dengan kesan luxurious clean. Parfum ini didesain dengan karakter mass pleasing, versatile (cocok di berbagai occasion), namun tetap unik. 'Imagine doing something over and over again for a hundred times, that's what we've been through, to achieve the great, we did 145 trials. To find something we call: The Perfection.'",
        topNotes: "Spicy Notes",
        middleNotes: "Fougere Accord",
        baseNotes: "Clean Musk",
        longevity: "4-6 jam",
        sillage: "Medium",
        projection: "2 meter",
        bpom: "NA18210600743",
        shopeeUrl: "https://id.shp.ee/3Bnynay"
    },
    
    /**
     * Produk #4: HMNS Untitled Humans
     * @description Kolaborasi eksklusif dengan Maliq & D'Essentials
     * @category Fresh Woody
     * @gender Pria
     */
    {
        id: 4,
        name: "HMNS Untitled Humans",
        category: "Fresh Woody",
        type: "woody",
        gender: "pria",
        price: 395000,
        size: "100ml",
        badge: "Exclusive",
        image: "assets/images/Parfum Pria/Untitled Humans/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/Untitled Humans/gambar1.webp",
            "assets/images/Parfum Pria/Untitled Humans/gambar2.webp",
            "assets/images/Parfum Pria/Untitled Humans/gambar3.webp",
            "assets/images/Parfum Pria/Untitled Humans/gambar4.webp"
        ],
        description: "Kolaborasi eksklusif HMNS x Maliq & D'Essentials. Merayakan keunikan tanpa label.",
        fullDescription: "'Because you are too complex to be labeled' - Dalam kolaborasi eksklusif antara HMNS dan Maliq & D'Essentials, parfum ini mengajak kamu merayakan keunikan diri—tanpa label. Manusia adalah makhluk kompleks, dan parfum ini adalah bentuk kebebasan ekspresi diri.",
        topNotes: "Coriander, Violet Leaves, Ambrette",
        middleNotes: "Figolide, Velvet Note, Rose Absolute",
        baseNotes: "Sandalwood, Cypriol, Vanilla Jungle Essence",
        longevity: "5-7 jam",
        sillage: "Medium",
        projection: "2 meter",
        bpom: "NA18230603848",
        shopeeUrl: "https://id.shp.ee/QVhZHE1"
    },
    
    /**
     * Produk #5: HMNS Unpatched
     * @description Bio-engineered perfume dengan Vanilla Madagascar
     * @category Vanilla Woody
     * @gender Pria
     */
    {
        id: 5,
        name: "HMNS Unpatched",
        category: "Vanilla Woody",
        type: "gourmand",
        gender: "pria",
        price: 398000,
        size: "100ml",
        badge: "New",
        image: "assets/images/Parfum Pria/Unpatched/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/Unpatched/gambar1.webp",
            "assets/images/Parfum Pria/Unpatched/gambar2.webp",
            "assets/images/Parfum Pria/Unpatched/gambar3.webp",
            "assets/images/Parfum Pria/Unpatched/gambar4.webp"
        ],
        video: "assets/images/Parfum Pria/Unpatched/video1.mp4",
        description: "Bio-engineered perfume dengan Vanilla Madagascar. Sweet yet smoky character.",
        fullDescription: "The premier bio-engineered perfume crafted with modern science and the art of perfumery. Dengan Unpatched, kamu sweet yet smoky, perpaduan terang dan gelap—seseorang yang dipandang sebagai 'the thinker, the dreamer, the endlessly transforming puzzle.'",
        topNotes: "Vanilla Madagascar",
        middleNotes: "Akigalawood",
        baseNotes: "Rose",
        longevity: "5-7 jam",
        sillage: "Medium-Strong",
        projection: "2-3 meter",
        bpom: "NA18230606374",
        shopeeUrl: "https://id.shp.ee/Qu8eNeB"
    },
    
    /**
     * Produk #6: HMNS Ambar Janma
     * @description Fragrance internasional pertama dengan The Impossible Scent™ technology
     * @category Luxury Oriental
     * @gender Pria
     * @note Ukuran 2x100ml (dual layer system)
     */
    {
        id: 6,
        name: "HMNS Ambar Janma",
        category: "Luxury Oriental",
        type: "oriental",
        gender: "pria",
        price: 510000,
        size: "2x100ml",
        badge: "Luxury",
        image: "assets/images/Parfum Pria/Ambar Janma/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/Ambar Janma/gambar1.webp",
            "assets/images/Parfum Pria/Ambar Janma/gambar2.webp",
            "assets/images/Parfum Pria/Ambar Janma/gambar3.webp",
            "assets/images/Parfum Pria/Ambar Janma/gambar4.webp"
        ],
        video: "assets/images/Parfum Pria/Ambar Janma/video1.mp4",
        description: "Fragrance internasional pertama HMNS dengan teknologi The Impossible Scent™.",
        fullDescription: "Experience the scent of Ambar Janma 'Manusia Harum'. Ambar Janma adalah fragrance internasional pertama HMNS yang dibuat dengan teknologi paten The Impossible Scent™—yang pertama dan satu-satunya di dunia. Terdiri dari 2 layer: Ambar (karakter elegan) dan Janma (harmonisasi aroma).",
        topNotes: "Bulgarian Rose, Neroli, Pink Pepper, Black Tea",
        middleNotes: "Gayo Patchouli",
        baseNotes: "Sandalwood, Amber, Suede",
        longevity: "7-8 jam",
        sillage: "Strong",
        projection: "4-6 meter",
        bpom: "NA18210602363",
        shopeeUrl: "https://id.shp.ee/morMFGt"
    },
    
    /**
     * Produk #7: HMNS The Prestige
     * @description Limited Edition dengan bold opening dan warm base
     * @category Aromatic Spicy
     * @gender Pria
     */
    {
        id: 7,
        name: "HMNS The Prestige",
        category: "Aromatic Spicy",
        type: "oriental",
        gender: "pria",
        price: 398000,
        size: "100ml",
        badge: "Limited",
        image: "assets/images/Parfum Pria/The Prestige/gambar1.webp",
        images: [
            "assets/images/Parfum Pria/The Prestige/gambar1.webp",
            "assets/images/Parfum Pria/The Prestige/gambar2.webp",
            "assets/images/Parfum Pria/The Prestige/gambar3.webp",
            "assets/images/Parfum Pria/The Prestige/gambar4.webp"
        ],
        video: "assets/images/Parfum Pria/The Prestige/video1.mp4",
        description: "Limited Edition. Bold opening dengan base yang hangat dan menenangkan.",
        fullDescription: "Bayangkan setiap kali kamu menyemprotkan parfum ini, seolah kamu sedang melangkah ke atas panggung, dengan sorot cahaya yang merayakan setiap tantangan yang sudah kamu lewati. The Prestige mengingatkan kamu bahwa kamu sudah melakukan yang terbaik.",
        topNotes: "Grapefruit, Tobacco Leaves, Pink Pepper",
        middleNotes: "Patchouli, Geranium, Orris",
        baseNotes: "Tolu, Vetiver, Labdanum",
        longevity: "±5 jam",
        sillage: "Medium",
        projection: "1.5-2 meter",
        bpom: "NA18230606620",
        shopeeUrl: "https://id.shp.ee/qUFq2Cd"
    },
    
    // =========================================================================
    // PARFUM WANITA (8 produk, ID 8-15)
    // =========================================================================
    
    /**
     * Produk #8: HMNS Philea
     * @description Evolusi dari Elea, wangi feminin dengan Magnolia & Mimosa
     * @category Floral Feminine
     * @gender Wanita
     */
    {
        id: 8,
        name: "HMNS Philea",
        category: "Floral Feminine",
        type: "floral",
        gender: "wanita",
        price: 385000,
        size: "100ml",
        badge: "New",
        image: "assets/images/Parfum Wanita/Philea/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/Philea/gambar1.webp",
            "assets/images/Parfum Wanita/Philea/gambar2.webp",
            "assets/images/Parfum Wanita/Philea/gambar3.webp",
            "assets/images/Parfum Wanita/Philea/gambar4.webp"
        ],
        description: "Wangi Magnolia, Mimosa, dan Cashmeran yang feminin, lembut, dewasa, dan elegan.",
        fullDescription: "Elea selalu menjadi temanmu. Namun ketika dunia berubah, kita bertumbuh bersama mimpi baru. Bersama Tsana, HMNS menemukan bunga Mimosa yang lembut dan Magnolia yang menenangkan—mewakili perjalananmu merayakan versi terbaik diri sendiri. Perkenalkan, Elea EDP—atau kamu bisa memanggilnya… Philea.",
        topNotes: "Citrus, Segar",
        middleNotes: "Magnolia, Mimosa",
        baseNotes: "Cashmeran",
        longevity: "6-8 jam",
        sillage: "Cukup Kuat",
        projection: "1.5-2 meter",
        bpom: "NA18250605978",
        shopeeUrl: "https://id.shp.ee/MPgWwUy"
    },
    
    /**
     * Produk #9: HMNS O
     * @description Parfum feminin pertama HMNS, terinspirasi notes best-seller dunia
     * @category Floral Gourmand
     * @gender Wanita
     */
    {
        id: 9,
        name: "HMNS O",
        category: "Floral Gourmand",
        type: "floral",
        gender: "wanita",
        price: 323000,
        size: "100ml",
        badge: "Limited",
        image: "assets/images/Parfum Wanita/O/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/O/gambar1.webp",
            "assets/images/Parfum Wanita/O/gambar2.webp",
            "assets/images/Parfum Wanita/O/gambar3.webp",
            "assets/images/Parfum Wanita/O/gambar4.webp"
        ],
        video: "assets/images/Parfum Wanita/O/video1.mp4",
        description: "Parfum feminin pertama HMNS yang irresistible dengan sentuhan manis, floral, dan sensual.",
        fullDescription: "HMNS 'O' adalah parfum feminin pertama HMNS, terinspirasi dari notes best-seller dunia. Parfum ini membuat pemakainya irresistible dengan sentuhan manis, floral, dan sensual. Gen XX – Feminine edition.",
        topNotes: "Red Apple",
        middleNotes: "Rose, Jasmine, Peony",
        baseNotes: "Vanilla Beans, Amber",
        longevity: "±6 jam",
        sillage: "Medium",
        projection: "±2 meter",
        bpom: "NA18230607598",
        shopeeUrl: "https://id.shp.ee/Vh2DnQL"
    },
    
    /**
     * Produk #10: HMNS Sore Eterna
     * @description Kolaborasi dengan film "Sore: Istri dari Masa Depan"
     * @category Citrus Floral
     * @gender Wanita
     */
    {
        id: 10,
        name: "HMNS Sore Eterna",
        category: "Citrus Floral",
        type: "fresh",
        gender: "wanita",
        price: 385000,
        size: "100ml",
        badge: "Collab",
        image: "assets/images/Parfum Wanita/SORE Eterna/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/SORE Eterna/gambar1.webp",
            "assets/images/Parfum Wanita/SORE Eterna/gambar2.webp",
            "assets/images/Parfum Wanita/SORE Eterna/gambar3.webp",
            "assets/images/Parfum Wanita/SORE Eterna/gambar4.webp"
        ],
        description: "Kolaborasi khusus bersama film Sore: Istri dari Masa Depan. Citrus cerah yang romantic.",
        fullDescription: "HMNS Sore Eterna—kolaborasi khusus bersama film Sore: Istri dari Masa Depan. Dibuka dengan wangi citrus cerah dari Bergamot, Orange, Petit Grain, kemudian masuk ke floral yang lembut dan ditutup aroma woody yang menenangkan.",
        topNotes: "Bergamot, Orange, Petit Grain",
        middleNotes: "Ylang-ylang, Rose, Peach",
        baseNotes: "Cedarwood, Musk, Sandalwood",
        longevity: "6-8 jam",
        sillage: "Medium-Strong",
        projection: "1.5-2 meter",
        bpom: "NA18250604969",
        shopeeUrl: "https://id.shp.ee/dF9pJij"
    },
    
    /**
     * Produk #11: HMNS Essence of the Sun
     * @description Solar accord yang unik, "What if we extract the sun?"
     * @category Oriental Floral
     * @gender Wanita
     */
    {
        id: 11,
        name: "HMNS Essence of the Sun",
        category: "Oriental Floral",
        type: "oriental",
        gender: "wanita",
        price: 369000,
        size: "100ml",
        badge: "Exclusive",
        image: "assets/images/Parfum Wanita/Essence of the Sun EOS/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/Essence of the Sun EOS/gambar1.webp",
            "assets/images/Parfum Wanita/Essence of the Sun EOS/gambar2.webp",
            "assets/images/Parfum Wanita/Essence of the Sun EOS/gambar3.webp",
            "assets/images/Parfum Wanita/Essence of the Sun EOS/gambar4.webp"
        ],
        video: "assets/images/Parfum Wanita/Essence of the Sun EOS/video1.mp4",
        description: "Solar accord yang radiant & hangat khas sinar matahari. What if we extract the sun?",
        fullDescription: "'What if we extract the sun?' Essence of the Sun memperkenalkan solar accord, aroma radiant & hangat khas sinar matahari. Parfum dengan karakter oriental floral yang creamy dan warm.",
        topNotes: "Bergamot, Coriander Seeds, Pink Pepper",
        middleNotes: "Jasmine Sambac, Turkish Rose, Tiare Flower, Solar Accord",
        baseNotes: "Vanilla, Tonka Bean, Ambrette, Cedarwood",
        longevity: "7 jam",
        sillage: "Moderate-Heavy",
        projection: "2 meter",
        bpom: "NA18200601223",
        shopeeUrl: "https://id.shp.ee/z73KRoA"
    },
    
    /**
     * Produk #12: HMNS Unrosed
     * @description Teknik Soliflore - aroma mawar tanpa mawar asli
     * @category Floral Earthy
     * @gender Wanita
     */
    {
        id: 12,
        name: "HMNS Unrosed",
        category: "Floral Earthy",
        type: "floral",
        gender: "wanita",
        price: 374000,
        size: "100ml",
        badge: "",
        image: "assets/images/Parfum Wanita/Unrosed/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/Unrosed/gambar1.webp",
            "assets/images/Parfum Wanita/Unrosed/gambar2.webp",
            "assets/images/Parfum Wanita/Unrosed/gambar3.webp",
            "assets/images/Parfum Wanita/Unrosed/gambar4.webp"
        ],
        video: "assets/images/Parfum Wanita/Unrosed/video1.mp4",
        description: "Teknik Soliflore—aroma mawar tanpa mawar asli. Modern, sensual, dan earthy.",
        fullDescription: "Dibuat dengan teknik Soliflore, Unrosed membangun aroma bunga mawar tanpa menggunakan mawar asli. Parfum ini menggunakan Palmarosa dan berbagai blend lain untuk menciptakan versi mawar yang berbeda—lebih modern, sensual, dan earthy.",
        topNotes: "Fresh Notes",
        middleNotes: "Palmarosa, Rose Accord",
        baseNotes: "Earthy Musk",
        longevity: "5-7 jam",
        sillage: "Medium",
        projection: "1-1.5 meter",
        bpom: "NA18220602555",
        shopeeUrl: "https://id.shp.ee/5wzYN9r"
    },
    
    /**
     * Produk #13: HMNS ORGSM Melting Temptation
     * @description Dari ORGSM Series dengan gourmand notes yang irresistible
     * @category Fruity Gourmand
     * @gender Wanita
     */
    {
        id: 13,
        name: "HMNS ORGSM Melting Temptation",
        category: "Fruity Gourmand",
        type: "gourmand",
        gender: "wanita",
        price: 380000,
        size: "100ml",
        badge: "Popular",
        image: "assets/images/Parfum Wanita/ORGSM Melting Temptation/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/ORGSM Melting Temptation/gambar1.webp",
            "assets/images/Parfum Wanita/ORGSM Melting Temptation/gambar2.webp",
            "assets/images/Parfum Wanita/ORGSM Melting Temptation/gambar3.webp",
            "assets/images/Parfum Wanita/ORGSM Melting Temptation/gambar4.webp"
        ],
        description: "Dari ORGSM Series—caramel lembut, apel segar, pir juicy, dan coklat pekat.",
        fullDescription: "Dari ORGSM Series—lebih sulit ditolak. Imagine caramel lembut yang meleleh, disusul apel segar & pir juicy. Aroma mendalamnya diperkaya coklat pekat, ditutup kesan creamy dari vanilla, amber, dan musk.",
        topNotes: "Apple, Pear",
        middleNotes: "Caramel, Chocolate",
        baseNotes: "Vanilla, Amber, Musk",
        longevity: "5-6 jam",
        sillage: "Medium",
        projection: "1.5 meter",
        bpom: "NA18250601097",
        shopeeUrl: "https://id.shp.ee/17ivJwE"
    },
    
    /**
     * Produk #14: HMNS Untitled Humans Aroma 02
     * @description Kolaborasi dengan Maliq & D'Essentials versi feminin
     * @category Floral Musk
     * @gender Wanita
     */
    {
        id: 14,
        name: "HMNS Untitled Humans Aroma 02",
        category: "Floral Musk",
        type: "floral",
        gender: "wanita",
        price: 385000,
        size: "100ml",
        badge: "Collab",
        image: "assets/images/Parfum Wanita/Untitled Humans Aroma/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/Untitled Humans Aroma/gambar1.webp",
            "assets/images/Parfum Wanita/Untitled Humans Aroma/gambar2.webp",
            "assets/images/Parfum Wanita/Untitled Humans Aroma/gambar3.webp",
            "assets/images/Parfum Wanita/Untitled Humans Aroma/gambar4.webp"
        ],
        video: "assets/images/Parfum Wanita/Untitled Humans Aroma/video1.mp4",
        description: "Kolaborasi HMNS × Maliq & D'Essentials. Aroma yang membuatmu merasa cantik.",
        fullDescription: "Aroma yang membuatmu merasa cantik. Kolaborasi HMNS × Maliq & D'Essentials dengan wangi lembut dari Absolute Rose dan Musk Milk, disempurnakan sentuhan Anise, Violet, Orris, Cashmere.",
        topNotes: "Anise, Violet",
        middleNotes: "Absolute Rose, Orris",
        baseNotes: "Musk Milk, Cashmere",
        longevity: "4-5 jam",
        sillage: "Medium-Strong",
        projection: "1.5-2 meter",
        bpom: "NA18230603848",
        shopeeUrl: "https://id.shp.ee/NYRuKqa"
    },
    
    /**
     * Produk #15: HMNS Darker Shade of ORGSM
     * @description Versi smoky dari ORGSM Series yang lebih bold
     * @category Smoky Oriental
     * @gender Wanita
     */
    {
        id: 15,
        name: "HMNS Darker Shade of ORGSM",
        category: "Smoky Oriental",
        type: "oriental",
        gender: "wanita",
        price: 380000,
        size: "100ml",
        badge: "Premium",
        image: "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/gambar1.webp",
        images: [
            "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/gambar1.webp",
            "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/gambar2.webp",
            "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/gambar3.webp",
            "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/gambar4.webp"
        ],
        video: "assets/images/Parfum Wanita/Darker Shade of Orgsm Eau De Parfum/video1.mp4",
        description: "Versi smoky dari HMNS ORGSM. Misterius, elegan, dan memikat.",
        fullDescription: "Versi smoky dari HMNS ORGSM. Aroma smoky yang misterius, elegan, dan memikat—cocok untuk kamu yang ingin tampil berbeda dengan karakter yang lebih bold dan sophisticated.",
        topNotes: "Orange Blossom, Apple, Pepper",
        middleNotes: "Cypriol, Caramel, Patchouli",
        baseNotes: "Vanilla Beans, Cedarwood, Amber, Vetiver",
        longevity: "5-6 jam",
        sillage: "Medium",
        projection: "1.5 meter",
        bpom: "NA18220603562",
        shopeeUrl: "https://id.shp.ee/p5xDDr9"
    }
];

/**
 * Module Export (untuk kompatibilitas Node.js/testing)
 * 
 * Block ini memungkinkan array products untuk digunakan dalam
 * environment Node.js (misalnya untuk unit testing atau build process).
 * Di browser, block ini akan diabaikan karena module tidak terdefinisi.
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
}

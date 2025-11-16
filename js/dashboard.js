// =========================================================
// Dashboard JS
// =========================================================

// Tombol "Lihat Data Produk" agar langsung menuju halaman product
const viewProductsBtn = document.getElementById("viewProductsBtn");

if (viewProductsBtn) {
    viewProductsBtn.addEventListener("click", function() {
        // Ganti sesuai nama file halaman produk
        window.location.href = "products.html";
    });
}

// Contoh tambahan: update nilai card secara dinamis
// Jika nanti mau ambil data dari API atau database
const totalProducts = document.getElementById("totalProducts");
const totalSales = document.getElementById("totalSales");
const totalRevenue = document.getElementById("totalRevenue");

// Misal data dinamis (saat ini manual)
if (totalProducts) totalProducts.textContent = 120;
if (totalSales) totalSales.textContent = 80;
if (totalRevenue) totalRevenue.textContent = "Rp 12.500.000";

// =========================================================
// Kamu bisa menambahkan fungsi interaktif lain di sini
// Misal filter, chart, notifikasi, dsb.
// =========================================================

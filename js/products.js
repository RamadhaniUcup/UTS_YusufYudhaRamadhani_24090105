// ===================================================
// UTILITIES
// ===================================================
function formatRupiah(number) {
    if (typeof number !== 'number') return number; 
    const numberString = number.toString();
    const formatted = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return 'Rp ' + formatted;
}

// ===================================================
// LOGIN FORM (index.html)
// ===================================================
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (emailInput === '' || passwordInput === '') {
        errorMessage.textContent = 'Email dan Password (NIM) tidak boleh kosong.';
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none'; 
        alert('Login berhasil! Selamat datang di Dashboard.');
        window.location.href = 'dashboard.html';
    }
});

// ===================================================
// DASHBOARD DATA (dashboard.html)
// ===================================================
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000 
};

window.addEventListener('load', function() {
    const totalProductsElement = document.getElementById('totalProducts');
    if (totalProductsElement) {
        document.getElementById('totalProducts').textContent = summary.totalProducts;
        document.getElementById('totalSales').textContent = summary.totalSales;
        document.getElementById('totalRevenue').textContent = formatRupiah(summary.totalRevenue);

        const viewProductsBtn = document.getElementById('viewProductsBtn');
        if (viewProductsBtn) {
            viewProductsBtn.addEventListener('click', function() {
                window.location.href = 'products.html';
            });
        }
    }
});

// ===================================================
// HALAMAN PRODUK (products.html)
// ===================================================
let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
    { id: 4, name: "Jahe Merah", price: 15000, stock: 65 },
    { id: 5, name: "Kopi Toraja", price: 35000, stock: 40 }
];

const productTableBody = document.getElementById('productTableBody');

// Fungsi Hapus Produk
function deleteProduct(rowElement, productId, productName) {
    if (confirm(`Yakin hapus produk "${productName}" ini?`)) { 
        rowElement.remove(); 
        products = products.filter(p => p.id !== productId);
        alert(`Produk ${productName} berhasil dihapus!`);
    }
}

// Render Produk
function renderProducts() {
    if (!productTableBody) return; 
    productTableBody.innerHTML = '';

    products.forEach((product, index) => {
        const row = productTableBody.insertRow();
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = formatRupiah(product.price);
        row.insertCell().textContent = product.stock;

        const actionCell = row.insertCell();
        actionCell.className = 'action-cell';

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit-btn';
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = () => alert(`Edit produk ${product.name}`);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.onclick = () => deleteProduct(row, product.id, product.name);

        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
    });
}

window.addEventListener('load', renderProducts);

// ===================================================
// LOGOUT BUTTON
// ===================================================
window.addEventListener('load', function() {
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm("Yakin ingin keluar dari sesi ini?")) {
                window.location.href = 'index.html';
            }
        });
    }
});

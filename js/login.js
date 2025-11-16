document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Mencegah form untuk melakukan submit standar (reload halaman)
    event.preventDefault();

    // Mengambil nilai input
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim(); // Password diisi NIM
    const errorMessage = document.getElementById('errorMessage');

    // 1. Validasi bahwa email dan password tidak boleh kosong [cite: 38]
    if (emailInput === '' || passwordInput === '') {
        // Jika salah satu kosong -> tampilkan pesan error [cite: 39]
        errorMessage.textContent = 'Email dan Password (NIM) tidak boleh kosong.';
        errorMessage.style.display = 'block'; // Tampilkan pesan error
        
        // Opsional: Tampilkan alert juga
        alert('Validasi gagal: Email dan Password (NIM) harus diisi!');
    } else {
        // Jika semua terisi
        errorMessage.style.display = 'none'; // Sembunyikan pesan error

        // Tampilkan pesan "Login berhasil" [cite: 40]
        alert('Login berhasil! Selamat datang di Dashboard.');

        // Redirect ke dashboard.html [cite: 40, 41, 43]
        window.location.href = 'dashboard.html';
    }
});

// Catatan: Anda tidak perlu koneksi ke backend; simulasikan login ini menggunakan JavaScript[cite: 43].
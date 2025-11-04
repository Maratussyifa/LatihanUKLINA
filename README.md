Penjelasan singkat fungsi & cara kerja program

Framework: Next.js (Pages Router) dengan TypeScript, styling di styles/globals.css.

Halaman utama (Login): /pages/index.tsx

Menampilkan form email & password di atas background sekolah (/public/mokletfront.jpg).

Validasi sederhana: jika dua input terisi, tombol Login akan mengalihkan ke /dashboard (dummy login—tanpa backend).

Dashboard: /pages/dashboard.tsx

Menampilkan Status Kehadiran, Guru Piket, Rekap Kehadiran Bulanan, dan Leaderboard.

Warna/aksen selaras: hijau (#28a745) untuk kehadiran, biru (#17a2b8) untuk piket, kuning (#ffc107) untuk rekap, abu (#6c757d) untuk leaderboard.

Layout pakai CSS Grid (2 kolom desktop, 1 kolom mobile), kartu punya hover effect & box-shadow.

Scroll diaktifkan pada konten dashboard (overflow-y: auto; flex-grow: 1;) sehingga saat konten panjang, halaman tetap bisa digulir penuh.

Aset: Gambar diletakkan di public/mokletfront.jpg dan dipanggil via CSS background: url('/mokletfront.jpg').

Struktur inti

/pages/_app.tsx        // import '../styles/globals.css'
/pages/index.tsx       // login<img width="1920" height="1008" alt="Screenshot 2025-11-04 153913" src="https://github.com/user-attachments/assets/e9aff2ca-56f7-4189-a920-98182899aee0" />

/pages/dashboard.tsx   // dashboard<img width="1920" height="1008" alt="Screenshot 2025-11-04 153936" src="https://github.com/user-attachments/assets/0d751bf6-b1cf-471e-8e3b-ad119d743957" />

/styles/globals.css    // semua style, termasuk perbaikan scroll
/public/mokletfront.jpg

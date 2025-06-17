# 🌐 Cont Solution Indonesia — Website Profil Perusahaan

Selamat datang di repositori resmi situs web *Single Page Application (SPA)* untuk **Cont Solution Indonesia**.

Repositori ini menyimpan kode sumber aplikasi web interaktif dan modern yang menyajikan informasi lengkap tentang perusahaan kami — mulai dari layanan, portofolio, tim, hingga formulir kontak.

---

## 🚀 Tentang Proyek

Aplikasi ini dirancang menggunakan React + Vite dengan arsitektur berbasis komponen, dan ditujukan untuk:

* Menyediakan tampilan profesional bagi pengunjung.
* Memperkenalkan layanan dan solusi inovatif dari Cont Solution Indonesia.
* Membangun citra digital perusahaan dengan antarmuka interaktif dan elegan.

---

## 🎯 Fitur Unggulan

* ✅ **Desain Responsif** — Ditenagai Tailwind CSS untuk pengalaman optimal di semua perangkat.
* 🧩 **Komponen Modular** — Struktur yang terorganisir: `common/`, `sections/`, `ui/`.
* 🎞️ **Animasi Halus** — Implementasi GSAP + React hooks kustom.
* 🌗 **Mode Terang & Gelap** — Ganti tema dengan satu klik.
* 📑 **Navigasi Terstruktur** — Halaman utama seperti Beranda, Tentang Kami, Layanan, Portofolio, Tim, dan Kontak.
* ✉️ **Formulir Kontak Aktif** — Validasi sisi klien untuk pengalaman mengirim pesan yang mulus.

---

## 🛠️ Teknologi yang Digunakan

| Kategori   | Teknologi                           |
| ---------- | ----------------------------------- |
| Framework  | React 18                            |
| Build Tool | Vite                                |
| Bahasa     | TypeScript                          |
| Styling    | Tailwind CSS                        |
| Animasi    | GreenSock Animation Platform (GSAP) |
| Ikon       | Lucide React                        |
| Linting    | ESLint                              |
| Testing    | Vitest                              |

---

## 📦 Instalasi Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal.

1. **Kloning Repositori**

```bash
git clone https://github.com/farelabid/cont-solutions-vite.git
cd cont-solutions-vite
```

2. **Instalasi Dependensi**

```bash
npm install
# atau jika menggunakan yarn:
# yarn install
```

3. **Menjalankan Server Pengembangan**

```bash
npm run dev
```

Akses aplikasi melalui `http://localhost:5173`

---

## 🧪 Skrip yang Tersedia

| Perintah          | Fungsi                                        |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Memulai server pengembangan                   |
| `npm run build`   | Membuat build produksi ke folder `dist`       |
| `npm run preview` | Melihat build produksi secara lokal           |
| `npm run lint`    | Menjalankan analisis kode dengan ESLint       |
| `npm run test`    | Menjalankan pengujian unit menggunakan Vitest |

---

## 🗂️ Struktur Proyek

```
/
├── public/                 # Aset statis (favicon, gambar)
├── src/
│   ├── components/
│   │   ├── common/         # Komponen umum (Button, Footer, dsb)
│   │   ├── sections/       # Komponen tiap bagian halaman (Hero, About, dst)
│   │   └── ui/             # Elemen UI kecil seperti Card, Tooltip
│   ├── data/               # Data statis (daftar tim, portofolio, dsb)
│   ├── hooks/              # Custom hooks React
│   ├── styles/             # File CSS global
│   ├── types/              # Definisi tipe TypeScript
│   ├── utils/              # Fungsi utilitas bersama
│   ├── App.tsx             # Komponen root
│   └── main.tsx            # Entry point aplikasi
├── vite.config.ts          # Konfigurasi Vite
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── tsconfig.json           # Konfigurasi TypeScript
└── package.json            # Dependensi dan skrip
```

---

## 🤝 Kontribusi

Kami terbuka terhadap kontribusi dari siapa pun. Jika Anda ingin membantu:

1. Fork repositori ini.
2. Buat branch baru:

```bash
git checkout -b fitur-anda
```

3. Lakukan perubahan, lalu commit dan push:

```bash
git commit -m "Menambahkan fitur baru"
git push origin fitur-anda
```

4. Buka Pull Request di GitHub dan jelaskan perubahan Anda.

---

## 📄 Lisensi

MIT License © 2023 Cont Solution Indonesia

---

## 📬 Kontak

* 🐙 GitHub: [farelabid](https://github.com/farelabid)
* 📧 Email: farelabid@gmail.com

---

> Dibuat dengan ❤️ oleh Tim Developer Cont Solution Indonesia

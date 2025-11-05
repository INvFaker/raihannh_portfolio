// data/projects.ts
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM ISP – Website (proyek pribadi)",
    description:
      "Mengembangkan dan mengimplementasikan sistem Customer Relationship Management (CRM) untuk Internet Service Provider (ISP) dengan tujuan meningkatkan efisiensi operasional dan kualitas layanan pelanggan. Sistem ini, dibangun menggunakan Next.js untuk frontend dan FastAPI untuk backend, mendukung empat peran utama yaitu Customer, Customer Service, Technician, dan Admin yang mengintegrasikan pengelolaan data pelanggan, sistem tiket, pembayaran dan otomatisasi alur kerja lainnya dalam satu sistem.",
    techStack: ["Next.js", "FastAPI"],
    imageUrl: "/images/projects/project1.png",
    link: "https://yourportfolio.vercel.app",
  },
  {
    id: 2,
    title: "Fajar Indo Rubber – Website (freelance)",
    description:
      "Mengembangkan website company profile untuk Fajar Indo Rubber, perusahaan spesialis cetak karet berkualitas tinggi untuk kebutuhan industri. Website ini dibangun menggunakan Laravel dan Tailwind CSS dengan tampilan responsif dan modern. Sistem dilengkapi dengan dashboard manajemen konten yang memungkinkan pengelolaan informasi layanan, produk seperti seal karet, gasket, serta produk custom sesuai spesifikasi pelanggan.",
    techStack: ["Laravel", "Tailwind CSS"],
    imageUrl: "/images/projects/project2.png",
    link: "https://github.com/username/fajar-indo-rubber",
  },
  {
    id: 3,
    title: "PusGo (Pusat Gempa Online) – Website (proyek sertifikasi)",
    description:
      "Mengembangkan sistem informasi gempa bumi berbasis web yang memanfaatkan laporan dari pengguna dan integrasi data real-time melalui API BMKG. Proyek ini terdiri dari frontend berbasis React.js dan backend menggunakan Node.js dengan Express.js, serta memanfaatkan MySQL dan Prisma sebagai ORM. Peta interaktif dibangun dengan React Leaflet untuk menampilkan lokasi gempa.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "React Leaflet",
    ],
    imageUrl: "/images/projects/project3.png",
    link: "https://github.com/username/pusgo",
  },
  {
    id: 4,
    title: "Thread – Website (proyek sertifikasi)",
    description:
      "Membangun aplikasi web Thread App, platform media sosial sederhana seperti Twitter yang memungkinkan pengguna membuat thread, memberikan balasan, serta memberikan like atau dislike pada postingan. Aplikasi ini dikembangkan menggunakan React dan Redux untuk pengelolaan state, dengan pengujian otomatis menggunakan Cypress serta dokumentasi UI dengan Storybook.",
    techStack: ["React", "Redux", "Cypress", "Storybook"],
    imageUrl: "/images/projects/project4.png",
    link: "https://github.com/username/thread-app",
  },
  {
    id: 5,
    title: "UI MBKM Kampus Widyatama – Design (proyek kampus)",
    description:
      "Mengembangkan user interface dalam pengembangan website pengelolaan program MBKM Universitas Widyatama. Perancangan dilakukan secara menyeluruh menggunakan Figma, dimulai dari pembuatan design system untuk memastikan konsistensi visual, kemudian dilanjutkan dengan rancangan antarmuka dashboard untuk tiga peran utama pengguna: Dosen, Mahasiswa, dan Program Studi (Prodi). Desain difokuskan pada kemudahan navigasi, aksesibilitas, dan pengalaman pengguna yang optimal.",
    techStack: ["Figma", "UI/UX Design"],
    imageUrl: "/images/projects/project5.png",
    link: "https://github.com/username/ui-mbkm",
  },
];


export interface Eskul {
  id: number;
  name: string;
  description: string;
  category: string;
  schedule: {
    day: string;
    time: string;
  }[];
  image: string;
  coach: string;
  location: string;
}

export const eskulData: Eskul[] = [
  {
    id: 1,
    name: "Basket",
    description: "Kembangkan kemampuan bermain basket dan sportivitas dalam tim. Eskul basket menawarkan pelatihan teknik dasar dan lanjutan, serta kesempatan untuk berpartisipasi dalam kompetisi antar sekolah.",
    category: "Olahraga",
    schedule: [
      { day: "Senin", time: "15:00 - 17:00" },
      { day: "Kamis", time: "15:30 - 17:30" }
    ],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    coach: "Coach Ahmad",
    location: "Lapangan Basket Utama"
  },
  {
    id: 2,
    name: "Robotik",
    description: "Pelajari teknologi robotik dan pemrograman dengan peralatan modern. Siswa akan belajar tentang elektronika dasar, pemrograman, dan mekanika untuk membuat robot fungsional.",
    category: "Teknologi",
    schedule: [
      { day: "Selasa", time: "15:00 - 17:00" },
      { day: "Jumat", time: "14:00 - 16:00" }
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    coach: "Pak Budi",
    location: "Lab Komputer 2"
  },
  {
    id: 3,
    name: "Fotografi",
    description: "Ekspresikan kreativitasmu melalui lensa kamera dan teknik fotografi. Belajar tentang komposisi, pencahayaan, dan pengeditan foto untuk menghasilkan karya visual yang menarik.",
    category: "Seni",
    schedule: [
      { day: "Rabu", time: "15:00 - 17:00" }
    ],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
    coach: "Ibu Diana",
    location: "Studio Foto"
  },
  {
    id: 4,
    name: "Paduan Suara",
    description: "Kembangkan bakat vokal dan tampil dalam berbagai acara sekolah. Siswa akan belajar teknik vokal, harmonisasi, dan pembacaan not balok.",
    category: "Seni",
    schedule: [
      { day: "Senin", time: "15:30 - 17:00" },
      { day: "Rabu", time: "15:30 - 17:00" }
    ],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
    coach: "Pak Denny",
    location: "Ruang Musik"
  },
  {
    id: 5,
    name: "Pramuka",
    description: "Bentuk karakter, kepemimpinan, dan keterampilan bertahan hidup melalui kegiatan kepramukaan. Kegiatan meliputi morse, pioneering, dan kemah.",
    category: "Kepemimpinan",
    schedule: [
      { day: "Jumat", time: "15:00 - 17:30" }
    ],
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=800&q=80",
    coach: "Kak Nita & Kak Rudi",
    location: "Lapangan Utama"
  },
  {
    id: 6,
    name: "Futsal",
    description: "Kembangkan kemampuan bermain futsal dan kerja sama tim. Siswa akan belajar teknik dasar, strategi, dan taktik permainan.",
    category: "Olahraga",
    schedule: [
      { day: "Selasa", time: "15:30 - 17:30" },
      { day: "Kamis", time: "15:30 - 17:30" }
    ],
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80",
    coach: "Coach Dika",
    location: "Lapangan Futsal"
  },
  {
    id: 7,
    name: "Jurnalistik",
    description: "Belajar menulis, melaporkan, dan menerbitkan berita sekolah. Siswa akan terlibat dalam penerbitan majalah dinding dan majalah sekolah.",
    category: "Akademik",
    schedule: [
      { day: "Rabu", time: "15:00 - 16:30" }
    ],
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
    coach: "Ibu Sari",
    location: "Ruang Media"
  },
  {
    id: 8,
    name: "Tari Tradisional",
    description: "Pelajari berbagai tarian tradisional Indonesia dan tampil di acara sekolah dan kompetisi. Siswa akan belajar gerak dasar dan filosofi tari.",
    category: "Seni",
    schedule: [
      { day: "Selasa", time: "15:00 - 17:00" },
      { day: "Jumat", time: "14:30 - 16:30" }
    ],
    image: "https://images.unsplash.com/photo-1504699570390-3cb588fd5e6b?auto=format&fit=crop&w=800&q=80",
    coach: "Ibu Maya",
    location: "Aula Pertunjukan"
  }
];

export const categories = [...new Set(eskulData.map(item => item.category))];

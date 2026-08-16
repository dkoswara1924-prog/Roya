// ==========================================
// 1. DATA HIMPUNAN LAGU NAHWIYAH (BAB 1 - 42)
// ==========================================
const dataLagu = [
  // --- LEVEL 1 (BAB 1 - 19) ---
  {
    level: 1,
    bab: 1,
    judul: "Haraf Jar",
    arab: "مِنْ ، فِيْ ، إِلَى ، عَلَى ، كَـ ، لِـ ، بِـ ، عَنْ ، حَتَّى ، مُذْ ، مُنْذُ ، رُبَّ ، وَ (قَسَم) ، بِ (قَسَم) ، تَ (قَسَم) ، خَلَا ، عَدَا ، حَاشَا",
    irama: "Mustaf'ilun (3x)",
    lirik: "min fii ilaa ‘alaa ka li bi an hatta,\nmudz mundzu rubba qasam dengan wa bi ta\nkhalaa ‘adaa lafazh haasya selanjutnya\nitu haraf jar ulama menyebutnya"
  },
  {
    level: 1,
    bab: 2,
    judul: "Haraf Nawasikh Inna",
    arab: "إِنَّ ، أَنَّ ، لَكِنَّ ، لَيْتَ ، لَعَلَّ ، كَأَنَّ ، لَا (نَافِيَةٌ لِلْجِنْسِ)",
    irama: "Balonku Ada Lima / Sedang Apa",
    lirik: "inna anna dan lakinna, laita kaanna la’alla,\ndan la nafiyah lil jinsi, nashabkan isim setelahnya."
  },
  {
    level: 1,
    bab: 3,
    judul: "Haraf Athaf",
    arab: "وَ ، فَـ ، ثُمَّ ، أَوْ ، أَمْ ، لَكِنْ ، لَا ، بَلْ ، حَتَّى ، إِمَّا",
    irama: "Dua Mata Saya",
    lirik: "wa fa tsumma aw am, lakin laa bal hatta,\nimmaa ikut serta, haraf athaf namanya."
  },
  {
    level: 1,
    bab: 4,
    judul: "Haraf Nawashib Mudhari",
    arab: "أَنْ ، لَنْ ، إِذَنْ ، كَيْ ، لِـ (كَيْ) ، لِـ (جُحُوْد) ، حَتَّى ، أَوْ ، فَـ ، وَ (مَعِيَّة)",
    irama: "Lagu Raja / Ya Rabbi Bil Musthafa",
    lirik: "an lan idzan kai, li wa hatta aw fa,\nnashabkan mudhari yang ada setelahnya (2x)"
  },
  {
    level: 1,
    bab: 5,
    judul: "Haraf Jawazim Mudhari",
    arab: "لَمْ ، أَلَمْ ، لَمَّا ، أَلَمَّا ، إِنْ ، لِـ (لَامُ الْأَمْرِ) ، إِذْمَا ، لَا (نَاهِيَة)",
    irama: "Lagu Raja",
    lirik: "lam alam lamma in, alamma lamul amri,\ndan idzma laa nahi, jawazim fiil mudhari."
  },
  {
    level: 1,
    bab: 8,
    judul: "Isim Isyarah (Kata Tunjuk)",
    arab: "هٰذَا ، هٰذَانِ ، هٰؤُلَاءِ | هٰذِهِ ، هَاتَانِ ، هٰؤُلَاءِ | ذٰلِكَ ، ذَانِكَ ، أُولٰئِكَ | تِلْكَ ، تَانِكَ ، أُولٰئِكَ | هُنَا ، هُنَاكَ ، هُنَالِكَ",
    irama: "Anak Gembala",
    lirik: "hadza hadzani haulai, hadzihi hatani haulai,\ndzalika dzanika ulaika, tilka tanika ulaika,\nhuna hunaka hunalika, tsamma tsammata isyarah namanya."
  },
  {
    level: 1,
    bab: 9,
    judul: "Isim Dhamir Munfashil Rafa'",
    arab: "هُوَ ، هُمَا ، هُمْ | هِيَ ، هُمَا ، هُنَّ | أَنْتَ ، أَنْتُمَا ، أَنْتُمْ | أَنْتِ ، أَنْتُمَا ، أَنْتُنَّ | أَنَا ، نَحْنُ",
    irama: "Lagu Raja / Ya Thayba",
    lirik: "huwa huma hum, hiya huma hunna,\nanta antuma antum, anti antuma antuna,\nana dan nahnu begitu bunyinya,\ndhamir munfashil rofa ulama menyebutnya."
  },

  // --- LEVEL 2 (BAB 20 - 33) ---
  {
    level: 2,
    bab: 20,
    judul: "Wazan Fi'il Madhi (Tsulatsi, Ruba'i, Khumasi, Sudasi)",
    arab: "فَعَلَ فَعِلَ فَعُلَ | أَفْعَلَ فَعَّلَ فَاعَلَ | تَفَعَّلَ تَفَاعَلَ اِنْفَعَلَ اِفْتَعَلَ اِفْعَلَّ | اِسْتَفْعَلَ",
    irama: "Pelangi-Pelangi / Mustaf'ilun",
    lirik: "Fa’ala, fa’ila fa’ula tsulatsi,\nAf’ala, fa’’ala, faa’ala ruba’iy,\nTafa’’ala, tafaa’ala, infa’ala, ifta’ala,\nif’alla khumasi Istaf’ala sudasi."
  },
  {
    level: 2,
    bab: 26,
    judul: "Kaidah Fi'il Madhi & Mudhari Majhul (Bentuk Pasif)",
    arab: "مَاضِي مَجْهُوْل: ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ (نُصِرَ ، خُلِقَ)\nمُضَارِع مَجْهُوْل: ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ (يُنْصَرُ ، يُخْلَقُ)",
    irama: "Kaidah Langsung",
    lirik: "Madhi majhul: Dhommahkan awalnya, kasrahkan sebelum akhirnya.\nMudhari majhul: Dhommahkan awalnya, fathahkan sebelum akhirnya."
  },
  {
    level: 2,
    bab: 29,
    judul: "Wazan Isim Fa'il (Pelaku)",
    arab: "فَاعِل ، مُفْعِل ، مُفَعِّل ، مُفَاعِل ، مُتَفَعِّل ، مُتَفَاعِل ، مُنْفَعِل ، مُفْتَعِل ، مُسْتَفْعِل",
    irama: "Irama Wazan",
    lirik: "Fa'ilun muf'ilun mufa''ilun mufaa'ilun,\nmutafa''ilun mutafaa'ilun munfa'ilun mufta'ilun mustaf'ilun."
  },

  // --- LEVEL 3 (BAB 34 - 42) ---
  {
    level: 3,
    bab: 36,
    judul: "7 Marfu'at al-Asma (Isim yang Dibaca Rafa')",
    arab: "الفَاعِل ، نَائِبُ الفَاعِل ، المُبْتَدَأ ، الخَبَر ، اِسْمُ كَانَ ، خَبَرُ إِنَّ ، التَّوَابِعُ لِلْمَرْفُوْعِ (نَعْت ، عَطْف ، تَوْكِيْد ، بَدَل)",
    irama: "Irama Jurumiyah",
    lirik: "Fa'il, naibul fa'il, mubtada dan khabar,\nisim kaana khabar inna dan tawabi' yang menyertai."
  },
  {
    level: 3,
    bab: 37,
    judul: "13 Manshubat al-Asma (Isim yang Dibaca Nashab)",
    arab: "مَفْعُوْل بِهِ ، مَفْعُوْل فِيْهِ ، مَفْعُوْل مُطْلَق ، مَفْعُوْل مَعَهُ ، مَفْعُوْل لِأَجْلِهِ ، الحَال ، التَّمْيِيْز ، المُنَادَى ، المُسْتَثْنَى ، خَبَرُ كَانَ ، اِسْمُ إِنَّ ، اِسْمُ لَا ، التَّوَابِعُ لِلْمَنْصُوْبِ",
    irama: "Irama Jurumiyah",
    lirik: "Maf'ul yang lima (bih, fih, muthlaq, ma'ah, liajlih),\nhal tamyiz munada istisna, khabar kana isim inna, isim laa dan tawabi'."
  },
  {
    level: 3,
    bab: 42,
    judul: "Rumus Lambang Makna Gandul / Nyoret Pegon",
    arab: "م (مبتدأ) | خ (خبر) | ف (فاعل) | نف (نائب الفاعل) | نص (نعت/صفة) | مف (مفعول به) | مط (مفعول مطلق) | هـ (حال) | مل (مفعول لأجله)",
    irama: "Metode Pesantren",
    lirik: "Mim = Adapun (Mubtada), Kha = Itu adalah (Khabar), Fa = Siapa/Apa (Fa'il), Na-Fa = Naibul Fa'il, Nun-Shad = Yang (Na'at), Mim-Fa = Terhadap (Maf'ul Bih), Haa = Keadaan (Hal)."
  }
];

// ==========================================
// 2. DATA LATIHAN BACA BANGUNAN KALIMAH
// ==========================================
const dataLatihan = [
  {
    kategori: "Fi'il Shahih Tsulatsi Mujarrad",
    wazan: "فَعَلَ - يَفْعُلُ",
    contoh: "نَصَرَ يَنْصُرُ ، خَلَقَ يَخْلُقُ ، رَزَقَ يَرْزُقُ ، قَتَلَ يَقْتُلُ ، سَلَكَ يَسْلُكُ ، كَتَبَ يَكْتُبُ ، حَكَمَ يَحْكُمُ ، ذَكَرَ يَذْكُرُ"
  },
  {
    kategori: "Fi'il Shahih Tsulatsi Mazid (Af'ala)",
    wazan: "أَفْعَلَ - يُفْعِلُ - إِفْعَالًا",
    contoh: "أَكْرَمَ يُكْرِمُ إِكْرَامًا ، أَحْسَنَ يُحْسِنُ إِحْسَانًا ، أَرْسَلَ يُرْسِلُ إِرْسَالًا ، أَسْلَمَ يُسْلِمُ إِسْلَامًا ، أَخْرَجَ يُخْرِجُ إِخْرَاجًا"
  },
  {
    kategori: "Fi'il Shahih Tsulatsi Mazid (Fa''ala)",
    wazan: "فَعَّلَ - يُفَعِّلُ - تَفْعِيْلًا",
    contoh: "عَلَّمَ يُعَلِّمُ تَعْلِيْمًا ، قَدَّمَ يُقَدِّمُ تَقْدِيْمًا ، سَهَّلَ يُسَهِّلُ تَسْهِيْلًا ، عَظَّمَ يُعَظِّمُ تَعْظِيْمًا ، نَفَّذَ يُنَفِّذُ تَنْفِيْذًا"
  },
  {
    kategori: "Bina Ajwaf (Tengah Huruf 'Illat)",
    wazan: "قَالَ - يَقُوْلُ - قُلْ",
    contoh: "قَالَ يَقُوْلُ قُلْ | بَاعَ يَبِيْعُ بِعْ | خَافَ يَخَافُ خَفْ | صَامَ يَصُوْمُ صُمْ | زَارَ يَزُوْرُ زُرْ | اِسْتَقَامَ يَسْتَقِيْمُ اِسْتَقِمْ"
  },
  {
    kategori: "Bina Naqish (Akhir Huruf 'Illat)",
    wazan: "دَعَا - يَدْعُوْ - اُدْعُ",
    contoh: "دَعَا يَدْعُوْ اُدْعُ | رَمَى يَرْمِي اِرْمِ | سَعَى يَسْعَى اِسْعَ | قَضَى يَقْضِي اِقْضِ | رَضِيَ يَرْضَى اِرْضَ"
  },
  {
    kategori: "Bina Mitsal (Awal Wawu / Ya)",
    wazan: "وَجَدَ - يَجِدُ - جِدْ",
    contoh: "وَجَدَ يَجِدُ جِدْ | وَعَدَ يَعِدُ عِدْ | وَقَفَ يَقِفُ قِفْ | وَصَفَ يَصِفُ صِفْ | وَضَعَ يَضَعُ ضَعْ"
  },
  {
    kategori: "Bina Mudha'af (Huruf Kembar / Tasydid)",
    wazan: "مَدَّ - يَمُدُّ - مُدَّ",
    contoh: "مَدَّ يَمُدُّ مُدَّ | شَدَّ يَشُدُّ شُدَّ | رَدَّ يَرُدُّ رُدَّ | فَرَّ يَفِرُّ فِرَّ | ضَلَّ يَضِلُّ ضِلَّ"
  }
];

// ==========================================
// 3. DATA NAZHAM JURUMIYAH BAHASA INDONESIA
// ==========================================
const dataNazham = [
  {
    bab: "Mukaddimah & Bab Kalam",
    bait: "Bait 1 - 10",
    syair: `Ubaid Rabbih Muhammad telah bertutur # Pujian bagi Allah Maha Pengatur
Shalawat pada nabi dan keluarga # Serta sahabatnya yang ikhlas terjaga
Selanjutnya maksud dari nazham kami # Memudahkan natsar Ibnu Ajurumi
Bagi syapa yang ingin menghafalkannya # Tapi kesulitan menghafal natsarnya

[BAB KALAM]
Sesungguhnya had kalam menurut kami # Lafaz murakkab mufid wadha’ arabi
Pembagian kalam ada tiga warna # Isim, fiil kemudian haraf makna
Isim dikenal dengan khafadl dan tanwin # Kemasukan alif lam dengannya mungkin
Dengan huruf khafadl yakni min dan ilaa # ‘An, fii dan rubba, serta ba juga ‘alaa
Kaf, lam dan mudz mundzu juga huruf qasam # Jangan lupa hatta disbagian maqam`
  },
  {
    bab: "Bab I'rab & Alamat I'rab",
    bait: "Bait 11 - 25",
    syair: `I’rab itu perubahan ujung kalim # Taqdiran lafzhan dengannya harus yakin
Perubahan kalim mu’rab diujungnya # Karna amil berbeda memasukinya
I’rab dibagi jadi empat warnanya # Rafa, nashab, khafadl, jazm istilahnya
Rafa nashab tidak bisa dipungkiri # Hanya dalam isim dan fiil mudhari
Khafadl hanya untuk isim lain tidak # Sedang jazm untuk mudhari semata

[ALAMAT RAFA']
Dhammah dan wawu juga alif serta nun # Tanda rafa dengannya umdah tersusun
Isim mufrad dirofakan dengan dommah # Jaa’a zaydun contoh yang kokoh tak lemah
Yang dengannya jamak taksir dirofakan # Jamak muanats salim pun disertakan`
  },
  {
    bab: "Bab Kaana & Inna",
    bait: "Bait 31 - 45",
    syair: `Isim dirofakan khobar dinasabkan # Dengan af’al naqish harap perhatikan
Kaana ashbaha amsa zhalla dan adhhaa # Baata shaara laisa juga maa bariha
Maa zala maa infakka maa fati'a maa daam # Ikut beramal tanpa ragu dan bimbang

Kebalikan kaana berlaku tuk inna # Anna lakinna layta la’alla ka’anna
Contohnya inna malikan la alimu # Semisalnya laytal habiba qadimu`
  }
];
// ==============================================================
// 1. DATA HIMPUNAN LAGU NAHWIYAH - IDENTIFIKASI KALIMAH LEVEL 1
// ==============================================================
const dataLagu = [
  // --- BAB 1 ---
  {
    level: 1,
    bab: 1,
    judul: "Haraf Jar",
    arab: "مِنْ ، فِيْ ، إِلَى ، عَلَى ، كَـ... ، لِـ... ، بِـ... ، عَنْ ، حَتَّى ، مُذْ ، مُنْذُ ، رُبَّ ، وَ ، بِـ... ، تَـ... ، خَلَا ، عَدَا ، حَاشَا",
    irama: "mustafilun 3x",
    lirik: "min fii ilaa ‘alaa ka li bi an hatta,\nmudz mundzu rubba qasam dengan wa bi ta\nkhalaa ‘adaa lafazh haasya selanjutnya\nitu haraf jar ulama menyebutnya\n(mustafilun3x)"
  },

  // --- BAB 2 ---
  {
    level: 1,
    bab: 2,
    judul: "Haraf Nawasikh Inna",
    arab: "إِنَّ ، أَنَّ ، لَكِنَّ ، لَيْتَ ، لَعَلَّ ، كَأَنَّ ، لَا",
    irama: "Balonku Ada Lima / Aku Pergi ke Mekkah / Sedang Apa",
    lirik: "• Versi 1 (balonku ada lima):\ninna anna lakinna\nlaita laalla kaanna\ndan la nafiyah lil jinsi\nnashabkan isim setelahnya\n\n• Versi 2 (aku pergi ke mekkah):\ninna anna lakinna, laalla dan kaanna,\nlaita dan la nafi lil jinsi ikut serta\ninna anna lakinna, laalla dan kaanna,\nnashabkan isim yang ada setelahnya\n\n• Versi 3 (sedang apa):\ninna anna dan lakinna, laita kaanna la’alla,\ndan la nafiyah lil jinsi, nashabkan isim setelahnya"
  },

  // --- BAB 3 ---
  {
    level: 1,
    bab: 3,
    judul: "Haraf Athaf",
    arab: "وَ ، فَـ... ، ثُمَّ ، أَوْ ، أَمْ ، لَكِنْ ، لَا ، بَلْ ، حَتَّى ، إِمَّا",
    irama: "Dua Mata Saya",
    lirik: "wa fa tsumma aw am, lakin laa bal hatta,\nimmaa ikut serta, haraf athaf namanya\n(dua mata saya)"
  },

  // --- BAB 4 ---
  {
    level: 1,
    bab: 4,
    judul: "Haraf Nawashib al Mudhari",
    arab: "أَنْ ، لَنْ ، إِذَنْ ، كَيْ ، لِـ... ، وَ ، فَـ... ، أَوْ ، حَتَّى ، لِـ (لِلْجُحُوْد)",
    irama: "Raja",
    lirik: "an lan idzan kai, li wa hatta aw fa,\nnashabkan mudhari yang ada setelahnya 2x\n(raja)"
  },

  // --- BAB 5 ---
  {
    level: 1,
    bab: 5,
    judul: "Haraf Jawazim",
    arab: "لَمْ ، أَلَمْ ، لَمَّا ، أَلَمَّا ، إِنْ ، لَا ، لِـ... ، إِذْمَا",
    irama: "Ya Rabbi Bil Musthafa",
    lirik: "lam alam lamma in, alamma lamul amri\ndan idzma laa nahi, jawazim fiil mudhari\n(ya rabbi bil musthafa)"
  },

  // --- BAB 6 ---
  {
    level: 1,
    bab: 6,
    judul: "Haraf Nida, Haraf Istisna dan Haraf Istifham",
    arab: "• Haraf Nida: يَا ، أَيْ ، آ ، يَا أَيَّتُهَا ، يَا أَيُّهَا\n• Haraf Istisna: إِلَّا ، خَلَا ، عَدَا ، حَاشَا\n• Haraf Istifham: أَ ، هَلْ",
    irama: "Apuse Kokondao",
    lirik: "yaa ay aa, yaa ayyatuha, ya ayyuha haraf nida\nilla khala ‘adaa hasya huruf istisna\nhamzah dan hal haraf tanya\n(apuse kokondao)"
  },

  // --- BAB 7 ---
  {
    level: 1,
    bab: 7,
    judul: "Haraf yang Menjadi Tanda Fiil & Catatan Kaidah",
    arab: "• Haraf Jawab: نَعَمْ ، لَا ، بَلَى ، أَجَلْ ، جَيْرِ\n• Haraf yang Lain: لَوْ ، لَوْلَا ، لَوْمَا ، أَمَّا ، كَلَّا ، أَلَا\n• Tanda Fiil: قَدْ ، لَقَدْ ، سَـ ، سَوْفَ ، تْ (تَاءُ التَّأْنِيْثِ السَّاكِنَةِ) ، لَمْ ، لَا نَافِي ، لَا نَاهِي\n• Haraf Lain: إِنَّمَا ، لَا ، مَا ، لَاتَ",
    irama: "Kaidah / Catatan Pembelajaran",
    lirik: "Catatan Pembelajaran:\n1. Haraf Tafsir: (ai)\n2. Haraf Alamat Fiil: (qad, laqad, sa, saufa, ta tanits yang sukun, lam, laa nafi, laa nahi)\n3. Haraf yang lain: lau laulaa dan laumaa, innamaa, haraf nasakh selain inna yaitu laa, maa dan laata, juga ada haraf ammaa, kalla dan alaa\n4. Haraf jawab: na’am, bala, ajal, jairi, laa"
  },

  // --- MATERI SISIPAN: CIRI KALIMAH ISIM ---
  {
    level: 1,
    bab: "Kaidah",
    judul: "Mengenal Kalimah Isim Melalui Tandanya dan Beberapa Jenisnya",
    arab: "مَـ | مِـ | مُـ | أَلْ | التَّنْوِيْن | حُرُوْف النِّدَاء | حُرُوْف النَّصْب وَالْجَرّ | الْإِضَافَة | التَّاء المَرْبُوْطَة",
    irama: "Lagu Qaidaty",
    lirik: "Tanda isim jumlahnya ada delapan\nma mi mu al tanwin dan nida di depan\nHaraf nashab haraf jar serta idhofah\njangan lupa yang terakhir ta marbuthoh\n(lagu qaidaty)"
  },

  // --- BAB 8 ---
  {
    level: 1,
    bab: 8,
    judul: "Isim Isyarah",
    arab: "هٰذَا ، هٰذَانِ ، هٰؤُلَاءِ | هٰذِهِ ، هَاتَانِ ، هٰؤُلَاءِ | ذٰلِكَ ، ذَانِكَ ، أُولٰئِكَ | تِلْكَ ، تَانِكَ ، أُولٰئِكَ | هُنَا ، ثَمَّ ، هُنَاكَ ، هُنَالِكَ",
    irama: "Anak Gembala",
    lirik: "hadza hadzani haulai, hadzihi hatani haulai,\ndzalika dzanika ulaika, tilka tanika ulaika,\nhuna hunaka hunalika, tsamma tsammata isyarah namanya 2x\n(anak gembala)"
  },

  // --- BAB 9 ---
  {
    level: 1,
    bab: 9,
    judul: "Isim Dhomir Munfashil Rofa",
    arab: "هُوَ ، هُمَا ، هُمْ | هِيَ ، هُمَا ، هُنَّ | أَنْتَ ، أَنْتُمَا ، أَنْتُمْ | أَنْتِ ، أَنْتُمَا ، أَنْتُنَّ | أَنَا ، نَحْنُ",
    irama: "Lagu Raja",
    lirik: "huwa huma hum, hiya huma hunna,\nanta antuma antum, anti antuma antuna,\nana dan nahnu, begitu bunyinya,\ndhamir munfashil rofa, ulama menyebutnya\n(lagu raja)"
  },

  // --- BAB 10 ---
  {
    level: 1,
    bab: 10,
    judul: "Isim Dhomir Munfashil Nashab",
    arab: "إِيَّاهُ ، إِيَّاهُمَا ، إِيَّاهُمْ | إِيَّاهَا ، إِيَّاهُمَا ، إِيَّاهُنَّ | إِيَّاكَ ، إِيَّاكُمَا ، إِيَّاكُمْ | إِيَّاكِ ، إِيَّاكُمَا ، إِيَّاكُنَّ | إِيَّايَ ، إِيَّانَا",
    irama: "Ya Thayba",
    lirik: "iyyahu iyaahuma iyyaahum\niyyaha iyuhaama iyahunna\niyyaka iyyakuma iyaakum\niyyaaki iyakuma iyaakunna\niyyaya iyaana\n(ya thayba)"
  },

  // --- BAB 11 ---
  {
    level: 1,
    bab: 11,
    judul: "Isim Dhomir Muttashil Rofa (Taiwan)",
    arab: "ـتَ... ، ـتُمَا... ، ـتُمْ... ، ـتُ... ، ـتِ... ، ـتُنَّ... | نَا... ، نَ... ، وا... ، يْ...",
    irama: "Sedang Apa",
    lirik: "ta tuma tum, tu ti tunna,\nalif nun dan waw ya,\ndhamir taiwan muttashil rofa\ndengan fiil nempelnya\n(sedang apa)"
  },

  // --- BAB 12 ---
  {
    level: 1,
    bab: 12,
    judul: "Isim Dhomir Muttashil Nashab/Jar (Haik)",
    arab: "ـهُ... ، ـهُمَا... ، ـهُمْ... ، ـهَا... ، ـهُمَا... ، ـهُنَّ... | ـكَ... ، ـكُمَا... ، ـكُمْ... ، ـكِ... ، ـكُمَا... ، ـكُنَّ... | ـيْ / ـنِيْ... ، ـنَا...",
    irama: "Sedang Apa",
    lirik: "hu humaa hum, ha huma hunna,\nka kuma kum ki kuma kunna,\nii ya nii na dhamir muttashil,\nnashab dan jar hukumnya\n(sedang apa)"
  },

  // --- BAB 13 ---
  {
    level: 1,
    bab: 13,
    judul: "Isim Maushul",
    arab: "الَّذِيْ ، اللَّذَانِ ، الَّذِيْنَ ، الَّتِيْ ، اللَّتَانِ ، اللَّائِيْ | اللَّاتِيْ ، أَيُّ ، ذَا ، مَا ، مَنْ",
    irama: "Aku Pergi ke Mekkah",
    lirik: "alladzi alladani dan juga alladzina,\nallati allatani allaa`i dan allaatii\njangan lupa sertakan ayu dza juga ma man\nisim maushul jadi penyambung kalam\n(aku pergi ke mekkah)"
  },

  // --- BAB 14 ---
  {
    level: 1,
    bab: 14,
    judul: "Isim Istifham",
    arab: "مَا ، مَنْ ، أَيْنَ ، أَيُّ ، أَنَّى ، كَيْفَ | كَمْ ، مَتَى ، أَيَّانَ",
    irama: "Sedang Apa",
    lirik: "ma man aina, ayyu annaa, kaifa kam mataa ayyana\nma man aina, ayu annaa, isim istifham disebutnya\n(sedang apa)"
  },

  // --- BAB 15 ---
  {
    level: 1,
    bab: 15,
    judul: "Isim Syarat",
    arab: "مَا ، مَنْ ، أَيْنَمَا ، أَيُّ ، أَنَّى ، كَيْفَمَا | مَهْمَا ، مَتَى ، أَيَّانَ ، حَيْثُمَا",
    irama: "Dimana Dimana Anak Kambing Saya",
    lirik: "ma man ainama, mataa mahma ayyaana,\nhaitsuma kaifama ayyun dan juga anna 2x\ningat itu semua, isim syarat namanya,\njazmkan dua mudhari setelahnya\n(dimana dimana anak kambing saya)"
  },

  // --- BAB 16 ---
  {
    level: 1,
    bab: 16,
    judul: "Zharaf (Makan Zaman)",
    arab: "خَلْفَ ، أَمَامَ ، فَوْقَ ، تَحْتَ ، يَمِيْنَ ، شِمَالَ | قَبْلَ ، بَعْدَ ، دُوْنَ ، جَانِبَ ، عِنْدَ ، بَيْنَ | لَدُنْ ، لَدَى ، إِذَا ، لَمَّا ، مَعَ ، حَوْلَ | كُلَّمَا ، حَيْثُ",
    irama: "Bila Kau Senang Hati Tepuk Tangan",
    lirik: "Haula khalfa amama fawqa tahta,\nyamiina syimaala qabla ba’da,\nduuna janiba inda, baina ladun ladaa,\nidza lamma kullama haitsu ma’a\n(bila kau senang hati tepuk tangan)"
  },

  // --- BAB 17 ---
  {
    level: 1,
    bab: 17,
    judul: "Lagu Isim Idhofah",
    arab: "جَمِيْع ، بَعْض ، كُلّ ، غَيْر ، كِلَا | كِلْتَا ، حَسْب ، سُبْحَانَ ، سِوَى ، مِائَة | أَلْف ، اِبْن ، بِنْت ، وِفْق ، ذُوْ | مِثْل ، أَبُوْ ، أَخُوْ ، نَحْو ، فُوْ",
    irama: "Pelangi-Pelangi",
    lirik: "Jamiu badhu kullu ghairu dan kila\nKilta hasba subhaana dan juga siwa\nMiatu alfu ibnu bintu wifqa dan dzu\nMitslu abu akhu hamuu dan juga nahwu\n(pelangi-pelangi)"
  },

  // --- BAB 18 ---
  {
    level: 1,
    bab: 18,
    judul: "Isim Fiil",
    arab: "أُفٍّ ، قَطْ ، وَيْ (وَيْكَأَنَّهُ) ، صَهْ / صَهٍ | هَيَّا ، هَيْتَ ، هَلُمَّ إِلَى ، هَاكَ | رُوَيْدَكَ ، فَعَالِ ، آمِيْنَ ، حَيَّ | إِلَيْكَ عَنْ ، مَهْ",
    irama: "mustaf’ilun fa’ilun",
    lirik: "qath, way, mah, hayya dan uffin\nhayyaa, haita laka, aamiin\nhalumma ila, haaka, shahin 2x\nruwaidaka, ilaika annii\njuga ada wazan fa’aali\nitu Isim akan tetapi\njadi fiil dimaknai\n(mustaf’ilun fa’ilun)"
  }
];

// --- BAB 19 ---
  {
    level: 1,
    bab: 19,
    judul: "Tanda Fiil Madhi dan Mudhari",
    arab: "• Tanda Madhi: ...تْ | لَقَدْ | قَدْ | ...تُ | ...تَ | ...تِ\n• Tanda Mudhari: سَوْفَ | ...سَـ | أَلَمْ | لَمْ | أَنَيْتَ",
    irama: "Qaidaty",
    lirik: "Tanda madhi tiga mari kita susun,\nTa fail qad laqad ta tanits yang sukun\nAnita lam alam qad sa dan saufa\nItu tanda mudhari janganlah lupa\n(qaidaty)"
  }

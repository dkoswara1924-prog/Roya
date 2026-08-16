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

// ==============================================================
      // IDENTIFIKASI KALIMAH LEVEL 2 (MENGENAL BACAAN BANGUNAN KALIMAH)
      // ==============================================================
      
      // --- BAB 20 ---
      {
        level: 2,
        bab: 20,
        judul: "Lagu Fiil Madhi Tsulatsi plus Rubaiy Mujarrod",
        arab: "فَاعَلَ | فَعَّلَ | أَفْعَلَ | فَعُلَ | فَعِلَ | فَعَلَ\nاِسْتَفْعَلَ | اِفْعَلَّ | اِفْتَعَلَ | اِنْفَعَلَ | تَفَاعَلَ | تَفَعَّلَ\nفَعْلَلَ",
        irama: "Pelangi-pelangi / Mustaf'ilun 6x / Mustafilun Failun",
        lirik: "• Versi 1 (pelangi-pelangi alangkah indahmu):\nFa’ala, fa’ila fa’ula tsulatsi\nAf’ala, fa’’ala, faa’ala ruba’iy\nTafa’’ala, tafaa’ala, infa’ala, ifta’ala\nif’alla khumasi Istaf’ala sudasi\n\n• Versi 2 (mustaf’ilun6x):\nTsulatsi fa’ala, fa’ila fa’ula\nRuba’iy af’ala, fa’’ala, faa’ala\nKhumasinya infa’ala ifta’ala\nIf’alla dan tafa’’ala tafaa’ala\nLafazh Istaf’ala itu sudasinya\nFa’lala untuk ruba’i mujarrodnya\nPerhatikan fa ain serta huruf lamnya\nAgar tidak salah mengeja mawzunnya\n\n• Versi 3 (mustafilun failun):\nFa’ala dan fa’ila fa’ula madhi tsulatsi\nAf’ala, fa’’ala, faa’ala itu madhi ruba’iy\nTafa’’ala, tafaa’ala, infa’ala ifta’ala\nif’alla itu khumasi dan Istaf’ala sudasy"
      },

      // --- BAB 21 ---
      {
        level: 2,
        bab: 21,
        judul: "Lagu Fiil Mudhari Tsulatsi",
        arab: "يُفَاعِلُ | يُفَعِّلُ | يُفْعِلُ | يَفْعِلُ | يَفْعَلُ | يَفْعُلُ\nيَسْتَفْعِلُ | يَفْعَلُّ | يَفْتَعِلُ | يَنْفَعِلُ | يَتَفَاعَلُ | يَتَفَعَّلُ\nيُفَعْلِلُ",
        irama: "Mustafilun Failun 2x / Mustaf'ilun 6x",
        lirik: "• Versi 1 (mustafilun failun2):\nYaf’ulu, yaf’alu dan yaf’ilu itu tsulatsi\nYuf’ilu dan yufa’’ilu yufaa’ilu itu rubaiy\nYatafa’’alu yatafaa’alu, yanfa’ilu yafta’ilu\nYaf’allu itu khumasi, yastaf’ilu nya sudasi\n\n• Versi 2 (mustaf’ilun6x):\nLafazh Yaf’ulu, yaf’alu dan yaf’ilu\nItu mudhari tsulatsi jangan kelu\nYuf’ilu dan yufa’’ilu yufaa’ilu\nItu mudhari ruba’iy ingat s’lalu\nyanfa’ilu yafta’ilu dan yaf’allu\ndan yatafa’’alu wa yatafaa’alu\ntu khumasi dan sudasi yastaf’ilu\ntuk rubai mujarrodnya yufa’lilu"
      },

      // --- BAB 22 ---
      {
        level: 2,
        bab: 22,
        judul: "Lagu Wazan Fiil Amar Tsulatsi",
        arab: "فَاعِلْ | فَعِّلْ | أَفْعِلْ | اِفْعِلْ | اِفْعَلْ | اُفْعُلْ\nاِسْتَفْعِلْ | اِفْعَلَّ | اِفْتَعِلْ | اِنْفَعِلْ | تَفَاعَلْ | تَفَعَّلْ\nفَعْلِلْ",
        irama: "Dimana-dimana Anak Kambing Saya / Mustafilun 6x",
        lirik: "• Versi 1 (dimana-dimana anak kambing saya):\nUf’ul, if’al, if’ilitu amr tsulatsi\nAf’il, fa’’il, faa’il itu amr rubaiy\nTafa’’al dan tafaa’al, infa’il ifta’il\nIf’alil khumasi istaf’il sudasi\nTiga tsultasi hey hey, empat rubaiy hey hey\nLima khumasi dan enam sudasi\n\n• Versi 2 (mustafilun6x):\nUf’ul, if’al dan if’il amr tsulatsi\nAf’il, fa’’il, faa’il itu amr rubai\ninfa’il ifta’il if’alil khumasi\nTafa’’al dan tafaa’al juga khumasi\nistaf’il amr untuk yang sudasi-nya\nfa’lil amr di mujarrod rubaiy-nya\nmesti dihafalkan semua wazannya\nagar tidak salah baca dan fahamnya"
      },

      // --- BAB 23 ---
      {
        level: 2,
        bab: 23,
        judul: "Lagu Tashrifan Fiil Madhi",
        arab: "فَعَلْنَ | فَعَلَتَا | فَعَلَتْ | فَعَلُوْا | فَعَلَا | فَعَلَ\nفَعَلْتُنَّ | فَعَلْتُمَا | فَعَلْتِ | فَعَلْتُمْ | فَعَلْتُمَا | فَعَلْتَ\nفَعَلْنَا | فَعَلْتُ",
        irama: "Bahar / Melodi Tashrif Lughawi 14 Dhamir",
        lirik: "Fa’ala fa’alaa fa’aluu fa’alat\nFa’alataa fa’alna jangan dilewat\nFa’alta fa’altuma fa’altum lana\nFa’alti fa’altuma dan fa’altunna\nFa’altu dan yang terakhirnya fa’alnaa\nSemwa empat belas jangan kau terlena\nHarus jeli Fiil madhi ditashrifnya\nAgar faham dan ahli engkau akhirnya"
      },

      // --- BAB 24 ---
      {
        level: 2,
        bab: 24,
        judul: "Lagu Tashrifan Fiil Mudhari",
        arab: "يَفْعُلْنَ | تَفْعُلَانِ | تَفْعُلُ | يَفْعُلُوْنَ | يَفْعُلَانِ | يَفْعُلُ\nتَفْعُلْنَ | تَفْعُلَانِ | تَفْعُلِيْنَ | تَفْعُلُوْنَ | تَفْعُلَانِ | تَفْعُلُ\nنَفْعُلُ | أَفْعُلُ",
        irama: "mustafilun 3x",
        lirik: "Yaf’ulu yaf’ulani dan yaf’uluuna\ntaf’ulu taf’ulani dan yaf’ulna\ntaf’ulu taf’ulani dan taf’uluuna\ntaf’uliina taf’ulani taf’ulna\nana af’ulu juga nahnu naf’ulu\ntashrif fiil mudhari tadi berlalu\nada empatbelas berlagu tak jemu\ndemi citaku jadi muslim berilmu\n(mustafilun3)"
      },

      // --- BAB 25 ---
      {
        level: 2,
        bab: 25,
        judul: "Tashrifan Wazan Fiil Amar",
        arab: "اُفْعُلْنَ | اُفْعُلَا | اُفْعُلِيْ | اُفْعُلُوْا | اُفْعُلَا | اُفْعُلْ",
        irama: "mustafilun 3x",
        lirik: "Uf’ul uf’ulaa uf’uluu dan uf’ulii\nuf’ulaa uf’ulna engkau mesti jeli\ntashrif fiil amar dengan berurutan\nfailnya isim dhamir ada lekatkan\n(mustafilun3x)"
      },

      // --- BAB 26 ---
      {
        level: 2,
        bab: 26,
        judul: "Fiil Madhi dan Mudhari Majhul",
        arab: "• مَاضِي مَجْهُوْل: ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ (خُلِقَ ، نُصِرَ ، ذُكِرَ)\n• مُضَارِع مَجْهُوْل: ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ (يُخْلَقُ ، يُنْصَرُ ، يُذْكَرُ)",
        irama: "Kaidah / Nadhom Majhul",
        lirik: "Fiil Madhi majhul itu bermakna di\nDidhommahkan huruf awalnya menjadi\nKasrohkan huruf sebelum terakhirnya\nkhuliqa nushira dzukira contohnya\n\nFiil Mudhari majhul dimaknai di\nDidhommahkan huruf awalnya menjadi\nFathahkan huruf sebelum terakhirnya\nYukhlaqu yunsharu yudzkaru contohnya"
      },

      // --- BAB 27 ---
      {
        level: 2,
        bab: 27,
        judul: "‘Asaa, bi’sa, ni’ma, haati, ta’aala",
        arab: "تَعَالَ (Kemarilah) | هَاتِ (Tunjukkan/berikan) | نِعْمَ (Sebaik-baiknya) | بِئْسَ (Seburuk-buruknya) | عَسَى (Semoga)",
        irama: "Kaidah Kosakata Jamid",
        lirik: "‘Asaa = Semoga\nbi’sa = Seburuk-buruknya\nni’ma = Sebaik-baiknya\nhaati = Tunjukkan / berikan\nta’aala = Kemarilah"
      },

      // --- BAB 28 ---
      {
        level: 2,
        bab: 28,
        judul: "Mashdar Tsulatsi Mazid",
        arab: "فَعَّلَ > تَفْعِيْلًا | أَفْعَلَ > إِفْعَالًا\nتَفَعَّلَ > تَفَعُّلًا | فَاعَلَ > مُفَاعَلَةً وَفِعَالًا\nاِنْفَعَلَ > اِنْفِعَالًا | تَفَاعَلَ > تَفَاعُلًا\nاِفْعَلَّ > اِفْعِلَالًا | اِفْتَعَلَ > اِفْتِعَالًا\nاِسْتَفْعَلَ > اِسْتِفْعَالًا",
        irama: "Pada Hari Minggu Kuturut Ayah ke Kota",
        lirik: "Af’ala if’aalan, fa’’ala taf’iilan\nFaa’ala mufaa’alatan dan juga fi’aalan\nTafa’’ala tafa’’ulan, tafaa’ala tafaa’ulan\nInfa’ala infi’aalan ifta’ala ifti’aalan\nUntuk If’alla mashdarnya tu if’ilalan\nSedang istaf’ala mashdarnya tu istif’alan\n\nAkrama ikraaman hassana tahsiinan\nJaahada mujaahadatan dan juga jihaadan\nTajamma’a tajammu’an tabaa’ada tabaa’udan\nInfashala infishaalan iqtashada iqtishaadan\nUntuk ihmarra mashdarnya tu ihmiraaran\nSedang istaghfara mashdarnya tu istighfaaran\n(pada hari minggu kuturut ayah ke kota)"
      },

      // --- BAB 29 ---
      {
        level: 2,
        bab: 29,
        judul: "Wazan Isim Fail Tsulatsi",
        arab: "مُتَفَاعِلٌ | مُتَفَعِّلٌ | مُفَاعِلٌ | مُفَعِّلٌ | مُفْعِلٌ | فَاعِلٌ\nمُسْتَفْعِلٌ | مُفْعَلٌّ | مُفْتَعِلٌ | مُنْفَعِلٌ",
        irama: "mustafilun failun 2x",
        lirik: "failun muf’ilun dan mufa’’ilun mufaa’ilun,\nmutafa’’ilun mutafaa’ilun munfa’ilun mufta’ilun\nkemudian lafazh muf’allun, yang terakhir mustaf’ilun\nisim fail dalam tashrifan, yang harus engkau bedakan\n(mustafilun failun2x)"
      },

      // --- BAB 30 ---
      {
        level: 2,
        bab: 30,
        judul: "Wazan Isim Maf’ul Tsulatsi",
        arab: "مُتَفَاعَلٌ | مُتَفَعَّلٌ | مُفَاعَلٌ | مُفَعَّلٌ | مُفْعَلٌ | مَفْعُوْلٌ\nمُسْتَفْعَلٌ | مُفْعَلٌّ | مُفْتَعَلٌ | مُنْفَعَلٌ",
        irama: "mustafilun failun 2x",
        lirik: "Maf’uulun, muf’alun dan mufa’’alun mufaa’alun,\nmutafa’’alun mutafaa’alun munfa’alun mufta’alun\nkemudian lafazh muf’allun, yang terakhir mustaf’alun\nisim maful dalam tashrifan, mesti engkau perhatikan\n(mustafilun failun2x)"
      },

      // --- BAB 31 ---
      {
        level: 2,
        bab: 31,
        judul: "Wazan Mubalaghah Isim Fail",
        arab: "فَعَّالٌ | مِفْعَالٌ | فِعِّيْلٌ | فَعَّالَةٌ | مِفْعِيْلٌ | فَعُوْلٌ\nفَعِيْلٌ | فَعِلٌ | فُعَّالٌ | فُعُّوْلٌ | فَيْعُوْلٌ",
        irama: "Kaidah Wazan Shighah Mubalaghah",
        lirik: "Fa’’aalun, mif’aalun, fi’’iilun, mif’iilun,\nfa’uulun, fu’’uulun, fa’iilun fa’ilun\nfu’’aalun fai’ulun serta fa’’aalah\nisim fail dalam shighah mubalaghah\n\nContohnya:\nqohhaarun midraarun shiddiiyun miskiinun\nghafuurun qudduusun samii’un farihun\nkubbarun qayyumun allaamah fahhaamah"
      },

      // --- BAB 32 ---
      {
        level: 2,
        bab: 32,
        judul: "Beberapa Bentuk Mashdar Tsulatsi Yang Populer",
        arab: "فَعْلًا : فَهْمًا ، فَتْحًا ، لَفْظًا ، صَبْرًا ، نَصْرًا\nفِعْلًا : عِلْمًا ، وِتْرًا ، حِمْلًا ، ذِكْرًا ، رِزْقًا\nفِعَالَة : تِلَاوَة ، رِوَايَة ، رِعَايَة\nفَعَالَة : نَظَافَة ، عَظَامَة ، كَرَامَة\nفُعُوْلًا : سُجُوْدًا ، قُعُوْدًا ، جُلُوْسًا\nفَعَلًا : شَبَعًا ، مَرَحًا ، فَرَحًا\nفُعُوْلَة : عُذُوْبَة ، صُعُوْبَة ، سُهُوْلَة",
        irama: "Pada Hari Minggu Kuturut Ayah ke Kota",
        lirik: "Fa’lan nashran shabran lafzhan fathan dan fahman\nFi’lan rizqan dzikran himlan witran dan ilman\nFi’aalatun ri’aayatun qiraa’atun kitaabatun\nFa’aalatun karaamatun ‘azhaamatun nazhaafatun\nFu’uulan juluusan qu’uudan serta rukuu’an\nFa’alan farahan marahan juga syaba’an\nFu’uulatan suhulatan su’uubatan ‘udzubatan\nMashdar tsulatsi yang simaiy tanpa qiyasan\n(pada hari minggu kuturut ayah ke kota)"
      },

      // --- BAB 33 ---
      {
        level: 2,
        bab: 33,
        judul: "Wazan Sifat Musyabbahah",
        arab: "فَعِلَ - أَفْعَلُ (حَمِرَ أَحْمَرُ)\nفَعِلَ - فَعِلٌ (فَرِحَ فَرِحٌ)\nفَعِلَ - فَعْلَانُ (عَطِشَ عَطْشَانُ)\nفَعُلَ - فَعْلٌ (سَهْلٌ)\nفَعُلَ - فُعْلٌ (شُلْبٌ)\nفَعُلَ - فَعَلٌ (حَسَنٌ)\nفَعُلَ - فُعَالٌ (شُجَاعٌ)\nفَعُلَ - فَعَالٌ (حَصَانٌ)\nفَعُلَ - فَعِيْلٌ (كَرِيْمٌ)",
        irama: "Kaidah Rumus Sifat Musyabbahah",
        lirik: "fa’ila-af’alu rumus pertamanya\nfa’ila-fa’ilun macam keduanya\nfa’ila-fa’laanu itu ketiganya\nfa’ula-fa’lun juga fa’ula fu’lun\nselanjutnya ada fa’ula-fa’alun\nlalu ada juga fa’ula-fu’aalun\nfa’ula-fa’aalun faula-fa’iilun,\nhamira ahmaru fariha farihun"
      }

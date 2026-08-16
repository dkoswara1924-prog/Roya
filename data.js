// ==============================================================
// 1. DATA HIMPUNAN LAGU NAHWIYAH (LEVEL 1, 2, & 3 LENGKAP)
// ==============================================================
const dataLagu = [
  // --- LEVEL 1: IDENTIFIKASI KALIMAH (BAB 1 - 19) ---
  {
    level: 1,
    bab: 1,
    judul: "Haraf Jar",
    arab: "مِنْ ، فِيْ ، إِلَى ، عَلَى ، كَـ... ، لِـ... ، بِـ... ، عَنْ ، حَتَّى ، مُذْ ، مُنْذُ ، رُبَّ ، وَ ، بِـ... ، تَـ... ، خَلَا ، عَدَا ، حَاشَا",
    irama: "mustafilun 3x",
    lirik: "min fii ilaa ‘alaa ka li bi an hatta,\nmudz mundzu rubba qasam dengan wa bi ta\nkhalaa ‘adaa lafazh haasya selanjutnya\nitu haraf jar ulama menyebutnya\n(mustafilun3x)"
  },
  {
    level: 1,
    bab: 2,
    judul: "Haraf Nawasikh Inna",
    arab: "إِنَّ ، أَنَّ ، لَكِنَّ ، لَيْتَ ، لَعَلَّ ، كَأَنَّ ، لَا",
    irama: "Balonku Ada Lima / Aku Pergi ke Mekkah / Sedang Apa",
    lirik: "• Versi 1 (balonku ada lima):\ninna anna lakinna\nlaita laalla kaanna\ndan la nafiyah lil jinsi\nnashabkan isim setelahnya\n\n• Versi 2 (aku pergi ke mekkah):\ninna anna lakinna, laalla dan kaanna,\nlaita dan la nafi lil jinsi ikut serta\ninna anna lakinna, laalla dan kaanna,\nnashabkan isim yang ada setelahnya\n\n• Versi 3 (sedang apa):\ninna anna dan lakinna, laita kaanna la’alla,\ndan la nafiyah lil jinsi, nashabkan isim setelahnya"
  },
  {
    level: 1,
    bab: 3,
    judul: "Haraf Athaf",
    arab: "وَ ، فَـ... ، ثُمَّ ، أَوْ ، أَمْ ، لَكِنْ ، لَا ، بَلْ ، حَتَّى ، إِمَّا",
    irama: "Dua Mata Saya",
    lirik: "wa fa tsumma aw am, lakin laa bal hatta,\nimmaa ikut serta, haraf athaf namanya\n(dua mata saya)"
  },
  {
    level: 1,
    bab: 4,
    judul: "Haraf Nawashib al Mudhari",
    arab: "أَنْ ، لَنْ ، إِذَنْ ، كَيْ ، لِـ... ، وَ ، فَـ... ، أَوْ ، حَتَّى ، لِـ (لِلْجُحُوْد)",
    irama: "Raja",
    lirik: "an lan idzan kai, li wa hatta aw fa,\nnashabkan mudhari yang ada setelahnya 2x\n(raja)"
  },
  {
    level: 1,
    bab: 5,
    judul: "Haraf Jawazim",
    arab: "لَمْ ، أَلَمْ ، لَمَّا ، أَلَمَّا ، إِنْ ، لَا ، لِـ... ، إِذْمَا",
    irama: "Ya Rabbi Bil Musthafa",
    lirik: "lam alam lamma in, alamma lamul amri\ndan idzma laa nahi, jawazim fiil mudhari\n(ya rabbi bil musthafa)"
  },
  {
    level: 1,
    bab: 6,
    judul: "Haraf Nida, Haraf Istisna dan Haraf Istifham",
    arab: "• Haraf Nida: يَا ، أَيْ ، آ ، يَا أَيَّتُهَا ، يَا أَيُّهَا\n• Haraf Istisna: إِلَّا ، خَلَا ، عَدَا ، حَاشَا\n• Haraf Istifham: أَ ، هَلْ",
    irama: "Apuse Kokondao",
    lirik: "yaa ay aa, yaa ayyatuha, ya ayyuha haraf nida\nilla khala ‘adaa hasya huruf istisna\nhamzah dan hal haraf tanya\n(apuse kokondao)"
  },
  {
    level: 1,
    bab: 7,
    judul: "Haraf yang Menjadi Tanda Fiil & Catatan Kaidah",
    arab: "• Haraf Jawab: نَعَمْ ، لَا ، بَلَى ، أَجَلْ ، جَيْرِ\n• Haraf yang Lain: لَوْ ، لَوْلَا ، لَوْمَا ، أَمَّا ، كَلَّا ، أَلَا\n• Tanda Fiil: قَدْ ، لَقَدْ ، سَـ ، سَوْفَ ، تْ (تَاءُ التَّأْنِيْثِ السَّاكِنَةِ) ، لَمْ ، لَا نَافِي ، لَا نَاهِي\n• Haraf Lain: إِنَّمَا ، لَا ، مَا ، لَاتَ",
    irama: "Kaidah / Catatan Pembelajaran",
    lirik: "Catatan Pembelajaran:\n1. Haraf Tafsir: (ai)\n2. Haraf Alamat Fiil: (qad, laqad, sa, saufa, ta tanits yang sukun, lam, laa nafi, laa nahi)\n3. Haraf yang lain: lau laulaa dan laumaa, innamaa, haraf nasakh selain inna yaitu laa, maa dan laata, juga ada haraf ammaa, kalla dan alaa\n4. Haraf jawab: na’am, bala, ajal, jairi, laa"
  },
  {
    level: 1,
    bab: "Kaidah",
    judul: "Mengenal Kalimah Isim Melalui Tandanya dan Beberapa Jenisnya",
    arab: "مَـ | مِـ | مُـ | أَلْ | التَّنْوِيْن | حُرُوْف النِّدَاء | حُرُوْف النَّصْب وَالْجَرّ | الْإِضَافَة | التَّاء المَرْبُوْطَة",
    irama: "Lagu Qaidaty",
    lirik: "Tanda isim jumlahnya ada delapan\nma mi mu al tanwin dan nida di depan\nHaraf nashab haraf jar serta idhofah\njangan lupa yang terakhir ta marbuthoh\n(lagu qaidaty)"
  },
  {
    level: 1,
    bab: 8,
    judul: "Isim Isyarah",
    arab: "هٰذَا ، هٰذَانِ ، هٰؤُلَاءِ | هٰذِهِ ، هَاتَانِ ، هٰؤُلَاءِ | ذٰلِكَ ، ذَانِكَ ، أُولٰئِكَ | تِلْكَ ، تَانِكَ ، أُولٰئِكَ | هُنَا ، ثَمَّ ، هُنَاكَ ، هُنَالِكَ",
    irama: "Anak Gembala",
    lirik: "hadza hadzani haulai, hadzihi hatani haulai,\ndzalika dzanika ulaika, tilka tanika ulaika,\nhuna hunaka hunalika, tsamma tsammata isyarah namanya 2x\n(anak gembala)"
  },
  {
    level: 1,
    bab: 9,
    judul: "Isim Dhomir Munfashil Rofa",
    arab: "هُوَ ، هُمَا ، هُمْ | هِيَ ، هُمَا ، هُنَّ | أَنْتَ ، أَنْتُمَا ، أَنْتُمْ | أَنْتِ ، أَنْتُمَا ، أَنْتُنَّ | أَنَا ، نَحْنُ",
    irama: "Lagu Raja",
    lirik: "huwa huma hum, hiya huma hunna,\nanta antuma antum, anti antuma antuna,\nana dan nahnu, begitu bunyinya,\ndhamir munfashil rofa, ulama menyebutnya\n(lagu raja)"
  },
  {
    level: 1,
    bab: 10,
    judul: "Isim Dhomir Munfashil Nashab",
    arab: "إِيَّاهُ ، إِيَّاهُمَا ، إِيَّاهُمْ | إِيَّاهَا ، إِيَّاهُمَا ، إِيَّاهُنَّ | إِيَّاكَ ، إِيَّاكُمَا ، إِيَّاكُمْ | إِيَّاكِ ، إِيَّاكُمَا ، إِيَّاكُنَّ | إِيَّايَ ، إِيَّانَا",
    irama: "Ya Thayba",
    lirik: "iyyahu iyaahuma iyyaahum\niyyaha iyuhaama iyahunna\niyyaka iyyakuma iyaakum\niyyaaki iyakuma iyaakunna\niyyaya iyaana\n(ya thayba)"
  },
  {
    level: 1,
    bab: 11,
    judul: "Isim Dhomir Muttashil Rofa (Taiwan)",
    arab: "ـتَ... ، ـتُمَا... ، ـتُمْ... ، ـتُ... ، ـتِ... ، ـتُنَّ... | نَا... ، نَ... ، وا... ، يْ...",
    irama: "Sedang Apa",
    lirik: "ta tuma tum, tu ti tunna,\nalif nun dan waw ya,\ndhamir taiwan muttashil rofa\ndengan fiil nempelnya\n(sedang apa)"
  },
  {
    level: 1,
    bab: 12,
    judul: "Isim Dhomir Muttashil Nashab/Jar (Haik)",
    arab: "ـهُ... ، ـهُمَا... ، ـهُمْ... ، ـهَا... ، ـهُمَا... ، ـهُنَّ... | ـكَ... ، ـكُمَا... ، ـكُمْ... ، ـكِ... ، ـكُمَا... ، ـكُنَّ... | ـيْ / ـنِيْ... ، ـنَا...",
    irama: "Sedang Apa",
    lirik: "hu humaa hum, ha huma hunna,\nka kuma kum ki kuma kunna,\nii ya nii na dhamir muttashil,\nnashab dan jar hukumnya\n(sedang apa)"
  },
  {
    level: 1,
    bab: 13,
    judul: "Isim Maushul",
    arab: "الَّذِيْ ، اللَّذَانِ ، الَّذِيْنَ ، الَّتِيْ ، اللَّتَانِ ، اللَّائِيْ | اللَّاتِيْ ، أَيُّ ، ذَا ، مَا ، مَنْ",
    irama: "Aku Pergi ke Mekkah",
    lirik: "alladzi alladani dan juga alladzina,\nallati allatani allaa`i dan allaatii\njangan lupa sertakan ayu dza juga ma man\nisim maushul jadi penyambung kalam\n(aku pergi ke mekkah)"
  },
  {
    level: 1,
    bab: 14,
    judul: "Isim Istifham",
    arab: "مَا ، مَنْ ، أَيْنَ ، أَيُّ ، أَنَّى ، كَيْفَ | كَمْ ، مَتَى ، أَيَّانَ",
    irama: "Sedang Apa",
    lirik: "ma man aina, ayyu annaa, kaifa kam mataa ayyana\nma man aina, ayu annaa, isim istifham disebutnya\n(sedang apa)"
  },
  {
    level: 1,
    bab: 15,
    judul: "Isim Syarat",
    arab: "مَا ، مَنْ ، أَيْنَمَا ، أَيُّ ، أَنَّى ، كَيْفَمَا | مَهْمَا ، مَتَى ، أَيَّانَ ، حَيْثُمَا",
    irama: "Dimana Dimana Anak Kambing Saya",
    lirik: "ma man ainama, mataa mahma ayyaana,\nhaitsuma kaifama ayyun dan juga anna 2x\ningat itu semua, isim syarat namanya,\njazmkan dua mudhari setelahnya\n(dimana dimana anak kambing saya)"
  },
  {
    level: 1,
    bab: 16,
    judul: "Zharaf (Makan Zaman)",
    arab: "خَلْفَ ، أَمَامَ ، فَوْقَ ، تَحْتَ ، يَمِيْنَ ، شِمَالَ | قَبْلَ ، بَعْدَ ، دُوْنَ ، جَانِبَ ، عِنْدَ ، بَيْنَ | لَدُنْ ، لَدَى ، إِذَا ، لَمَّا ، مَعَ ، حَوْلَ | كُلَّمَا ، حَيْثُ",
    irama: "Bila Kau Senang Hati Tepuk Tangan",
    lirik: "Haula khalfa amama fawqa tahta,\nyamiina syimaala qabla ba’da,\nduuna janiba inda, baina ladun ladaa,\nidza lamma kullama haitsu ma’a\n(bila kau senang hati tepuk tangan)"
  },
  {
    level: 1,
    bab: 17,
    judul: "Lagu Isim Idhofah",
    arab: "جَمِيْع ، بَعْض ، كُلّ ، غَيْر ، كِلَا | كِلْتَا ، حَسْب ، سُبْحَانَ ، سِوَى ، مِائَة | أَلْف ، اِبْن ، بِنْت ، وِفْق ، ذُوْ | مِثْل ، أَبُوْ ، أَخُوْ ، نَحْو ، فُوْ",
    irama: "Pelangi-Pelangi",
    lirik: "Jamiu badhu kullu ghairu dan kila\nKilta hasba subhaana dan juga siwa\nMiatu alfu ibnu bintu wifqa dan dzu\nMitslu abu akhu hamuu dan juga nahwu\n(pelangi-pelangi)"
  },
  {
    level: 1,
    bab: 18,
    judul: "Isim Fiil",
    arab: "أُفٍّ ، قَطْ ، وَيْ (وَيْكَأَنَّهُ) ، صَهْ / صَهٍ | هَيَّا ، هَيْتَ ، هَلُمَّ إِلَى ، هَاكَ | رُوَيْدَكَ ، فَعَالِ ، آمِيْنَ ، حَيَّ | إِلَيْكَ عَنْ ، مَهْ",
    irama: "mustaf’ilun fa’ilun",
    lirik: "qath, way, mah, hayya dan uffin\nhayyaa, haita laka, aamiin\nhalumma ila, haaka, shahin 2x\nruwaidaka, ilaika annii\njuga ada wazan fa’aali\nitu Isim akan tetapi\njadi fiil dimaknai\n(mustaf’ilun fa’ilun)"
  },
  {
    level: 1,
    bab: 19,
    judul: "Tanda Fiil Madhi dan Mudhari",
    arab: "• Tanda Madhi: ...تْ | لَقَدْ | قَدْ | ...تُ | ...تَ | ...تِ\n• Tanda Mudhari: سَوْفَ | ...سَـ | أَلَمْ | لَمْ | أَنَيْتَ",
    irama: "Qaidaty",
    lirik: "Tanda madhi tiga mari kita susun,\nTa fail qad laqad ta tanits yang sukun\nAnita lam alam qad sa dan saufa\nItu tanda mudhari janganlah lupa\n(qaidaty)"
  },

  // --- LEVEL 2: MENGENAL BACAAN BANGUNAN KALIMAH (BAB 20 - 33) ---
  {
    level: 2,
    bab: 20,
    judul: "Lagu Fiil Madhi Tsulatsi plus Rubaiy Mujarrod",
    arab: "فَاعَلَ | فَعَّلَ | أَفْعَلَ | فَعُلَ | فَعِلَ | فَعَلَ\nاِسْتَفْعَلَ | اِفْعَلَّ | اِفْتَعَلَ | اِنْفَعَلَ | تَفَاعَلَ | تَفَعَّلَ\nفَعْلَلَ",
    irama: "Pelangi-pelangi / Mustaf'ilun 6x / Mustafilun Failun",
    lirik: "• Versi 1 (pelangi-pelangi alangkah indahmu):\nFa’ala, fa’ila fa’ula tsulatsi\nAf’ala, fa’’ala, faa’ala ruba’iy\nTafa’’ala, tafaa’ala, infa’ala, ifta’ala\nif’alla khumasi Istaf’ala sudasi\n\n• Versi 2 (mustaf’ilun6x):\nTsulatsi fa’ala, fa’ila fa’ula\nRuba’iy af’ala, fa’’ala, faa’ala\nKhumasinya infa’ala ifta’ala\nIf’alla dan tafa’’ala tafaa’ala\nLafazh Istaf’ala itu sudasinya\nFa’lala untuk ruba’i mujarrodnya\nPerhatikan fa ain serta huruf lamnya\nAgar tidak salah mengeja mawzunnya\n\n• Versi 3 (mustafilun failun):\nFa’ala dan fa’ila fa’ula madhi tsulatsi\nAf’ala, fa’’ala, faa’ala itu madhi ruba’iy\nTafa’’ala, tafaa’ala, infa’ala ifta’ala\nif’alla itu khumasi dan Istaf’ala sudasy"
  },
  {
    level: 2,
    bab: 21,
    judul: "Lagu Fiil Mudhari Tsulatsi",
    arab: "يُفَاعِلُ | يُفَعِّلُ | يُفْعِلُ | يَفْعِلُ | يَفْعَلُ | يَفْعُلُ\nيَسْتَفْعِلُ | يَفْعَلُّ | يَفْتَعِلُ | يَنْفَعِلُ | يَتَفَاعَلُ | يَتَفَعَّلُ\nيُفَعْلِلُ",
    irama: "Mustafilun Failun 2x / Mustaf'ilun 6x",
    lirik: "• Versi 1 (mustafilun failun2):\nYaf’ulu, yaf’alu dan yaf’ilu itu tsulatsi\nYuf’ilu dan yufa’’ilu yufaa’ilu itu rubaiy\nYatafa’’alu yatafaa’alu, yanfa’ilu yafta’ilu\nYaf’allu itu khumasi, yastaf’ilu nya sudasi\n\n• Versi 2 (mustaf’ilun6x):\nLafazh Yaf’ulu, yaf’alu dan yaf’ilu\nItu mudhari tsulatsi jangan kelu\nYuf’ilu dan yufa’’ilu yufaa’ilu\nItu mudhari ruba’iy ingat s’lalu\nyanfa’ilu yafta’ilu dan yaf’allu\ndan yatafa’’alu wa yatafaa’alu\ntu khumasi dan sudasi yastaf’ilu\ntuk rubai mujarrodnya yufa’lilu"
  },
  {
    level: 2,
    bab: 22,
    judul: "Lagu Wazan Fiil Amar Tsulatsi",
    arab: "فَاعِلْ | فَعِّلْ | أَفْعِلْ | اِفْعِلْ | اِفْعَلْ | اُفْعُلْ\nاِسْتَفْعِلْ | اِفْعَلَّ | اِفْتَعِلْ | اِنْفَعِلْ | تَفَاعَلْ | تَفَعَّلْ\nفَعْلِلْ",
    irama: "Dimana-dimana Anak Kambing Saya / Mustafilun 6x",
    lirik: "• Versi 1 (dimana-dimana anak kambing saya):\nUf’ul, if’al, if’ilitu amr tsulatsi\nAf’il, fa’’il, faa’il itu amr rubaiy\nTafa’’al dan tafaa’al, infa’il ifta’il\nIf’alil khumasi istaf’il sudasi\nTiga tsultasi hey hey, empat rubaiy hey hey\nLima khumasi dan enam sudasi\n\n• Versi 2 (mustafilun6x):\nUf’ul, if’al dan if’il amr tsulatsi\nAf’il, fa’’il, faa’il itu amr rubai\ninfa’il ifta’il if’alil khumasi\nTafa’’al dan tafaa’al juga khumasi\nistaf’il amr untuk yang sudasi-nya\nfa’lil amr di mujarrod rubaiy-nya\nmesti dihafalkan semua wazannya\nagar tidak salah baca dan fahamnya"
  },
  {
    level: 2,
    bab: 23,
    judul: "Lagu Tashrifan Fiil Madhi",
    arab: "فَعَلْنَ | فَعَلَتَا | فَعَلَتْ | فَعَلُوْا | فَعَلَا | فَعَلَ\nفَعَلْتُنَّ | فَعَلْتُمَا | فَعَلْتِ | فَعَلْتُمْ | فَعَلْتُمَا | فَعَلْتَ\nفَعَلْنَا | فَعَلْتُ",
    irama: "Bahar / Melodi Tashrif Lughawi 14 Dhamir",
    lirik: "Fa’ala fa’alaa fa’aluu fa’alat\nFa’alataa fa’alna jangan dilewat\nFa’alta fa’altuma fa’altum lana\nFa’alti fa’altuma dan fa’altunna\nFa’altu dan yang terakhirnya fa’alnaa\nSemwa empat belas jangan kau terlena\nHarus jeli Fiil madhi ditashrifnya\nAgar faham dan ahli engkau akhirnya"
  },
  {
    level: 2,
    bab: 24,
    judul: "Lagu Tashrifan Fiil Mudhari",
    arab: "يَفْعُلْنَ | تَفْعُلَانِ | تَفْعُلُ | يَفْعُلُوْنَ | يَفْعُلَانِ | يَفْعُلُ\nتَفْعُلْنَ | تَفْعُلَانِ | تَفْعُلِيْنَ | تَفْعُلُوْنَ | تَفْعُلَانِ | تَفْعُلُ\nنَفْعُلُ | أَفْعُلُ",
    irama: "mustafilun 3x",
    lirik: "Yaf’ulu yaf’ulani dan yaf’uluuna\ntaf’ulu taf’ulani dan yaf’ulna\ntaf’ulu taf’ulani dan taf’uluuna\ntaf’uliina taf’ulani taf’ulna\nana af’ulu juga nahnu naf’ulu\ntashrif fiil mudhari tadi berlalu\nada empatbelas berlagu tak jemu\ndemi citaku jadi muslim berilmu\n(mustafilun3)"
  },
  {
    level: 2,
    bab: 25,
    judul: "Tashrifan Wazan Fiil Amar",
    arab: "اُفْعُلْنَ | اُفْعُلَا | اُفْعُلِيْ | اُفْعُلُوْا | اُفْعُلَا | اُفْعُلْ",
    irama: "mustafilun 3x",
    lirik: "Uf’ul uf’ulaa uf’uluu dan uf’ulii\nuf’ulaa uf’ulna engkau mesti jeli\ntashrif fiil amar dengan berurutan\nfailnya isim dhamir ada lekatkan\n(mustafilun3x)"
  },
  {
    level: 2,
    bab: 26,
    judul: "Fiil Madhi dan Mudhari Majhul",
    arab: "• مَاضِي مَجْهُوْل: ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ (خُلِقَ ، نُصِرَ ، ذُكِرَ)\n• مُضَارِع مَجْهُوْل: ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ (يُخْلَقُ ، يُنْصَرُ ، يُذْكَرُ)",
    irama: "Kaidah / Nadhom Majhul",
    lirik: "Fiil Madhi majhul itu bermakna di\nDidhommahkan huruf awalnya menjadi\nKasrohkan huruf sebelum terakhirnya\nkhuliqa nushira dzukira contohnya\n\nFiil Mudhari majhul dimaknai di\nDidhommahkan huruf awalnya menjadi\nFathahkan huruf sebelum terakhirnya\nYukhlaqu yunsharu yudzkaru contohnya"
  },
  {
    level: 2,
    bab: 27,
    judul: "‘Asaa, bi’sa, ni’ma, haati, ta’aala",
    arab: "تَعَالَ (Kemarilah) | هَاتِ (Tunjukkan/berikan) | نِعْمَ (Sebaik-baiknya) | بِئْسَ (Seburuk-buruknya) | عَسَى (Semoga)",
    irama: "Kaidah Kosakata Jamid",
    lirik: "‘Asaa = Semoga\nbi’sa = Seburuk-buruknya\nni’ma = Sebaik-baiknya\nhaati = Tunjukkan / berikan\nta’aala = Kemarilah"
  },
  {
    level: 2,
    bab: 28,
    judul: "Mashdar Tsulatsi Mazid",
    arab: "فَعَّلَ > تَفْعِيْلًا | أَفْعَلَ > إِفْعَالًا\nتَفَعَّلَ > تَفَعُّلًا | فَاعَلَ > مُفَاعَلَةً وَفِعَالًا\nاِنْفَعَلَ > اِنْفِعَالًا | تَفَاعَلَ > تَفَاعُلًا\nاِفْعَلَّ > اِفْعِلَالًا | اِفْتَعَلَ > اِفْتِعَالًا\nاِسْتَفْعَلَ > اِسْتِفْعَالًا",
    irama: "Pada Hari Minggu Kuturut Ayah ke Kota",
    lirik: "Af’ala if’aalan, fa’’ala taf’iilan\nFaa’ala mufaa’alatan dan juga fi’aalan\nTafa’’ala tafa’’ulan, tafaa’ala tafaa’ulan\nInfa’ala infi’aalan ifta’ala ifti’aalan\nUntuk If’alla mashdarnya tu if’ilalan\nSedang istaf’ala mashdarnya tu istif’alan\n\nAkrama ikraaman hassana tahsiinan\nJaahada mujaahadatan dan juga jihaadan\nTajamma’a tajammu’an tabaa’ada tabaa’udan\nInfashala infishaalan iqtashada iqtishaadan\nUntuk ihmarra mashdarnya tu ihmiraaran\nSedang istaghfara mashdarnya tu istighfaaran\n(pada hari minggu kuturut ayah ke kota)"
  },
  {
    level: 2,
    bab: 29,
    judul: "Wazan Isim Fail Tsulatsi",
    arab: "مُتَفَاعِلٌ | مُتَفَعِّلٌ | مُفَاعِلٌ | مُفَعِّلٌ | مُفْعِلٌ | فَاعِلٌ\nمُسْتَفْعِلٌ | مُفْعَلٌّ | مُفْتَعِلٌ | مُنْفَعِلٌ",
    irama: "mustafilun failun 2x",
    lirik: "failun muf’ilun dan mufa’’ilun mufaa’ilun,\nmutafa’’ilun mutafaa’ilun munfa’ilun mufta’ilun\nkemudian lafazh muf’allun, yang terakhir mustaf’ilun\nisim fail dalam tashrifan, yang harus engkau bedakan\n(mustafilun failun2x)"
  },
  {
    level: 2,
    bab: 30,
    judul: "Wazan Isim Maf’ul Tsulatsi",
    arab: "مُتَفَاعَلٌ | مُتَفَعَّلٌ | مُفَاعَلٌ | مُفَعَّلٌ | مُفْعَلٌ | مَفْعُوْلٌ\nمُسْتَفْعَلٌ | مُفْعَلٌّ | مُفْتَعَلٌ | مُنْفَعَلٌ",
    irama: "mustafilun failun 2x",
    lirik: "Maf’uulun, muf’alun dan mufa’’alun mufaa’alun,\nmutafa’’alun mutafaa’alun munfa’alun mufta’alun\nkemudian lafazh muf’allun, yang terakhir mustaf’alun\nisim maful dalam tashrifan, mesti engkau perhatikan\n(mustafilun failun2x)"
  },
  {
    level: 2,
    bab: 31,
    judul: "Wazan Mubalaghah Isim Fail",
    arab: "فَعَّالٌ | مِفْعَالٌ | فِعِّيْلٌ | فَعَّالَةٌ | مِفْعِيْلٌ | فَعُوْلٌ\nفَعِيْلٌ | فَعِلٌ | فُعَّالٌ | فُعُّوْلٌ | فَيْعُوْلٌ",
    irama: "Kaidah Wazan Shighah Mubalaghah",
    lirik: "Fa’’aalun, mif’aalun, fi’’iilun, mif’iilun,\nfa’uulun, fu’’uulun, fa’iilun fa’ilun\nfu’’aalun fai’ulun serta fa’’aalah\nisim fail dalam shighah mubalaghah\n\nContohnya:\nqohhaarun midraarun shiddiiyun miskiinun\nghafuurun qudduusun samii’un farihun\nkubbarun qayyumun allaamah fahhaamah"
  },
  {
    level: 2,
    bab: 32,
    judul: "Beberapa Bentuk Mashdar Tsulatsi Yang Populer",
    arab: "فَعْلًا : فَهْمًا ، فَتْحًا ، لَفْظًا ، صَبْرًا ، نَصْرًا\nفِعْلًا : عِلْمًا ، وِتْرًا ، حِمْلًا ، ذِكْرًا ، رِزْقًا\nفِعَالَة : تِلَاوَة ، رِوَايَة ، رِعَايَة\nفَعَالَة : نَظَافَة ، عَظَامَة ، كَرَامَة\nفُعُوْلًا : سُجُوْدًا ، قُعُوْدًا ، جُلُوْسًا\nفَعَلًا : شَبَعًا ، مَرَحًا ، فَرَحًا\nفُعُوْلَة : عُذُوْبَة ، صُعُوْبَة ، سُهُوْلَة",
    irama: "Pada Hari Minggu Kuturut Ayah ke Kota",
    lirik: "Fa’lan nashran shabran lafzhan fathan dan fahman\nFi’lan rizqan dzikran himlan witran dan ilman\nFi’aalatun ri’aayatun qiraa’atun kitaabatun\nFa’aalatun karaamatun ‘azhaamatun nazhaafatun\nFu’uulan juluusan qu’uudan serta rukuu’an\nFa’alan farahan marahan juga syaba’an\nFu’uulatan suhulatan su’uubatan ‘udzubatan\nMashdar tsulatsi yang simaiy tanpa qiyasan\n(pada hari minggu kuturut ayah ke kota)"
  },
  {
    level: 2,
    bab: 33,
    judul: "Wazan Sifat Musyabbahah",
    arab: "فَعِلَ - أَفْعَلُ (حَمِرَ أَحْمَرُ)\nفَعِلَ - فَعِلٌ (فَرِحَ فَرِحٌ)\nفَعِلَ - فَعْلَانُ (عَطِشَ عَطْشَانُ)\nفَعُلَ - فَعْلٌ (سَهْلٌ)\nفَعُلَ - فُعْلٌ (شُلْبٌ)\nفَعُلَ - فَعَلٌ (حَسَنٌ)\nفَعُلَ - فُعَالٌ (شُجَاعٌ)\nفَعُلَ - فَعَالٌ (حَصَانٌ)\nفَعُلَ - فَعِيْلٌ (كَرِيْمٌ)",
    irama: "Kaidah Rumus Sifat Musyabbahah",
    lirik: "fa’ila-af’alu rumus pertamanya\nfa’ila-fa’ilun macam keduanya\nfa’ila-fa’laanu itu ketiganya\nfa’ula-fa’lun juga fa’ula fu’lun\nselanjutnya ada fa’ula-fa’alun\nlalu ada juga fa’ula-fu’aalun\nfa’ula-fa’aalun faula-fa’iilun,\nhamira ahmaru fariha farihun"
  },

  // --- LEVEL 3: IDENTIFIKASI KALIMAH (BAB 34 - 42) ---
  {
    level: 3,
    bab: 34,
    judul: "Isim Muannats",
    arab: "فَاطِمَةُ | مَدْرَسَةٌ | رَابِطَةٌ | عَيْنٌ | يَدٌّ | رِجْلٌ\nأُذُنٌ | حُبْلَى | حُسْنَى | سَكْرَى | صَحْرَاءُ | فُقَهَاءُ\nشَمْسٌ | نَارٌ | دَارٌ | جَهَنَّمُ | نَفْسٌ | أَرْضٌ\nسَمَاءٌ | حَائِضٌ | طَالِقٌ | حَامِلٌ",
    irama: "mustafilun 3x",
    lirik: "nama wanita dan yang ber ta marbuthah\nfathimatu madrasatun dan rabithah\nanggota badan sepasang telah lumrah\n‘aynun yadun rijlun udzunun ingatlah\nberujung alif ta’nits seperti hubla\nhusna sakra dzikra shahraa’u fuqaha\njuga kalimah yang dianggap muannats\noleh bangsa arab yang dikenal cerdas\nsyamsun narun daarun jahanamu serta\nnafsun ardhun samaaun jangan dilupa\njuga sifat untuk perempuan saja,\nhaidhun, thaliqun, hamilun contohnya"
  },
  {
    level: 3,
    bab: 35,
    judul: "Lagu Isim Marifah dan Nakirah",
    arab: "نُوْحٌ | اليَدُ | ..هُ\nالَّذِيْنَ | ذَاكَ | وَلَدُ نُوْحٍ\nوَلَدُنَا | وَلَدُ الرَّجُلِ | بَابُ هٰذَا البِنَاءِ\nوَلَدُ الَّذِيْ يَتَعَلَّمُ مَعَنَا",
    irama: "mustafilun 3x",
    lirik: "• Syarat & Kaidah Ma'rifah:\nIsim marifah menurut ahli nahwu\nAda enam itu semwa harus tahu\nIsim dhamir kemudian isim alam\nIsim yang beralif lam dan isim mubham\nYakni isim maushul yang butuh shilah\nItu pertama dan kedwanya isyarah\nSelanjutnya isim yang diidhafatkan\nPada salah satu yang lima contohkan\nAna wa hindun wal ghulamu dzalika\nAlladzi dan terakhir ibnu ‘ammika\n\n• Irama Lagu & Kaidah Nakirah:\nIsim marifah menurut ahli nahwu\nItu ada enam semua harus tahu\nAlam ber-AL dhamir maushul isyarah\nYang terakhir mudhaf kepada marifah\nContoh nuuhun, al yadu, huu, alladzina\nDzaka, waladu nuuhin dan waladuna\nWaladurrajuli, babu hadzal bina\nWaladulladzi yata’allam ma’anaa\nJika kau lihat isim dalam jenisnya\nBelum tertentu nakirah disebutnya\nJika ingin dita’rifi lebih mudah\nTuk pemula hadnya lebih jelas sudah\nisim yang bisa menerima alif lam\nfarasun baladun baitun dan Ghulam\ndan mudhaf pada nakiroh terakhirnya\nghulamurajulin menjadi contohnya"
  },
  {
    level: 3,
    bab: 36,
    judul: "Lagu Marfu'at al-Asma",
    arab: "الفَاعِلُ | نَائِبُ الفَاعِلِ | المُبْتَدَأُ | الخَبَرُ | اِسْمُ كَانَ | خَبَرُ إِنَّ | التَّوَابِعُ لِلْمَرْفُوْعِ (النَّعْتُ ، العَطْفُ ، التَّوْكِيْدُ ، البَدَلُ)",
    irama: "Bahar / Melodi Jurumiyah",
    lirik: "Rofakan tujuh rupa didalam jumlah\nFail naibul fail jumlah fi’liyah\nMubtada khabar dalam jumlah ismiyah\nDengan kana dan inna telah dinasakh\nYakni isim kaana wa akhawatiha\nLalu khabar inna wa akhawatiha\nDan tawabi lil marfu’i mengikuti\nNaat athaf taukid badal menuruti"
  },
  {
    level: 3,
    bab: 37,
    judul: "Lagu Manshubat al-Asma",
    arab: "مَفْعُوْل بِهِ | مَفْعُوْل فِيْهِ | مَفْعُوْل مُطْلَق | مَفْعُوْل مَعَهُ | مَفْعُوْل لِأَجْلِهِ | الحَال | التَّمْيِيْز | المُنَادَى | المُسْتَثْنَى | خَبَر كَانَ | اِسْم إِنَّ | اِسْم لَا نَافِيَة لِلْجِنْس | التَّوَابِع لِلْمَنْصُوْب",
    irama: "Bahar / Melodi Jurumiyah",
    lirik: "Isim dinashabkan jika menempati\nSalah satu dari 13 pasti\nJika ada salah satu maful lima\nBih fih muthlak ma’ah liajlih utama\nHal dan tamyiz serta munada istisna\nJuga khabar kana serta isim inna\nLa nafiyah lil jinsi dan at-tawabi’\nNaat athaf taukid badal lil manshubi"
  },
  {
    level: 3,
    bab: 38,
    judul: "Kaana dan Saudara-Saudaranya (Kaana dkk)",
    arab: "أَمْسَى | ظَلَّ | أَضْحَى | أَصْبَحَ | كَانَ\nمَا بَرِحَ | مَا دَامَ | لَيْسَ | صَارَ | بَاتَ\nمَا انْفَكَّ | مَا زَالَ | مَا فَتِئَ",
    irama: "mustafilun 3x",
    lirik: "Isim dirofakan khobar dinasabkan\nDengan af’al naqish harap perhatikan\nKaana ashbaha amsa zhalla dan adhhaa\nBaata shaara laisa juga maa bariha\nMaa zaala manfakka serta maa fatia\n\nJuga dengan tashrifan salah satunya\nDalam jumlah kaana zaidun nashiran\nJuga kun barran serta ashbih shaaiman"
  },
  {
    level: 3,
    bab: 39,
    judul: "Bab Inna dan Saudara-Saudaranya",
    arab: "لَعَلَّ | لَيْتَ | لٰكِنَّ | أَنَّ | إِنَّ\nكَأَنَّ",
    irama: "mustafilun 3x",
    lirik: "Kebalikan kaana berlaku tuk inna\nAnna lakinn layta la’alla ka’anna\nContohnya inna malikan la ‘aalimun\nSemisalnya laytal habiba qadimun"
  },
  {
    level: 3,
    bab: 40,
    judul: "I'rab Isim Mu'rab",
    arab: "رَجُلٌ | رَجُلًا | رَجُلٍ | رِجَالٌ | رِجَالًا | رِجَالٍ\nأَحْمَدُ | أَحْمَدَ | أَحْمَدَ | أَبُوْكَ | أَبَاكَ | أَبِيْكَ\nزَيْدَانِ | زَيْدَيْنِ | زَيْدَيْنِ\nالمُسْلِمُوْنَ | إِنَّ المُسْلِمِيْنَ | مِنَ المُسْلِمِيْنَ\nالمُسْلِمَاتُ | إِنَّ المُسْلِمَاتِ | مِنَ المُسْلِمَاتِ",
    irama: "Kaidah I'rab Isim Mu'rab",
    lirik: "Akhir isim mufrod u-un a-an i-in\nRajulun inna rajulan min rajulin\nAkhir jamak taksir u-un a-an i-in\nRijaalun inna rijaalan min rijaalin\n\nUjung Isim Ghoir munshorif u a a\nAhmadu inna ahmada min ahmada\nAkhir Asmaul khomsah waw uu alif aa\nYaa-nya ii abuuka abaaka abiika\n\nAkhir mutsanna aani aini aini\nZaidaani inna wa min zaidaini\nJamak mudzakkar salim berujung uuna\niina dan iina contoh al-muslimuuna\nDinashabkan jadi innal muslimiina\nDikhafadlkan maka minal muslimina\n\nUntuk Jamak muannats salim akhirin\nAatu aatun aati aatin aati aatin\nalmuslimatu muslimatun contohnya\ninna muslimatin di irab nashabnya\nmin muslimatin ketika dikhafadlkan\nnashab khafadl diujungnya kasrahkan"
  },
  {
    level: 3,
    bab: 41,
    judul: "Lagu Isim Mabni",
    arab: "اللَّذَانِ | اللَّتَانِ | أَيُّ | هٰذَانِ | هَاتَانِ | ذَانِكَ\nتَانِكَ | اِثْنَا عَشَرَ | اِثْنَتَا عَشْرَةَ",
    irama: "mustafilun 3x",
    lirik: "Isim mabni tu ada bermacam-macam\nAda isim Dhamir maushul istifham\nIsim fiil, Syarat dan juga isyaroh\nMabni sukun fathah dhommah juga kasroh\nadad murakkab dan waih di ujungnya\nsemwa itu tidak berubah akhirnya\n\nkecuali alladzani allataani\nayyun juga lafazh hadzaani haataani\ndzanika taanika itsnata asyarah\nitsna asyara tadi semwa mu’rabah"
  },
  {
    level: 3,
    bab: 42,
    judul: "Lagu Rumus Nyoret (Makna Pegon / Gandul)",
    arab: "م (مُبْتَدَأ) | خ (خَبَر) | ف (فَاعِل) | نف (نَائِبُ الفَاعِل)\nنص (نَعْت / صِفَة) | مط (مَفْعُوْل مُطْلَق) | مف (مَفْعُوْل بِهِ)\nبد (بَدَل) | هـ (حَال)",
    irama: "mustafilun failun 3x",
    lirik: "‘adapun’ mim untuk mubtada\n‘itu adalah’ kha khabar\n‘siapa apa’ fa’nya fail\njika majhul naibul fail\n‘yang’ nun shad untuk naatnya\n‘dengan’ mim tha maful muthlaqnya\n‘terhadap’ mim fa maful bih\nsemua baca tidak berlebih\n\n‘yaitu’ ba dan dal badal\n‘secara’ haa tuk tanda hal\ntanda dibawah dhomirnya\nsama dengan diatas marjanya\n(mustafilun failun3x)"
  }
];

// ==============================================================
// 2. DATA LATIHAN MEMBACA BANGUNAN KALIMAH (ARAB GUNDUL)
// ==============================================================
const dataLatihan = [
  // ------------------------------------------------------------
  // BAGIAN 1: FI'IL MADHI MA'LUM
  // ------------------------------------------------------------
  {
    kategori: "Fi'il Madhi Tsulatsi Mujarrad (Wazan Fa'ala)",
    wazan: "فعل",
    contoh: "نصر ، خلق ، رزق ، رفع ، صنع ، سلك ، ستر ، قتل ، ضرب ، لفظ ، عرف ، قرأ ، ربط ، منع ، فتح ، سأل ، نهض ، جنح ، خدم ، خضع ، دفع ، سكن ، شرح ، شعر ، صرف ، طرح ، عدل ، عرض ، غلب ، قبض ، نطق ، نظر ، منع ، هرب ، فقد ، كذب ، ترك ، عبد ، سبق ، حضر ، خلط ، صدر ، عقد ، حكم"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mujarrad (Wazan Fa'ila)",
    wazan: "فعل",
    contoh: "علم ، فهم ، رحم ، سمع ، رغب ، سهر ، عجب ، عهد ، لزم ، مرض ، اذن ، شهد ، حمد ، عطش ، شبع ، غرق ، سهر ، صحب ، حفظ ، تعب ، حرص ، فخر ، جهل ، نضج"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mujarrad (Wazan Fa'ula)",
    wazan: "فعل",
    contoh: "حسن ، صعب ، كبر ، صغر ، سهل ، صلح ، ضعف ، كثر ، بعد ، قرب ، ثقل ، كرم ، جمل"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Af'ala)",
    wazan: "أفعل",
    contoh: "أكرم ، أحسن ، ادرك ، أخرج ، أعلم ، ألزم ، أشرف ، أدبر ، اقبل ، اكره ، امسك ، ابعد ، انقذ ، انصف ، اخطأ ، اتقن ، اجمع ، اخلف ، ارهب ، اطلع ، اظهر ، اغلق ، انكر ، امهل ، اخبر ، ادخل ، ارسل ، اسلم ، افسد ، انزل ، انصت ، انفق ، اكمل ، افهم ، اطعم ، ابدع ، اطلق ، اوجد ، اعجب"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Fa''ala)",
    wazan: "فعل",
    contoh: "نفذ ، طبق ، كبر ، عظم ، رتل ، حسن ، حرر ، شرف ، علم ، جود ، نبه ، سبح ، غير ، دبر ، ركز ، نظم ، شغل ، ذكر ، شكل ، قسم ، لخص ، مرن ، خلف ، بشر ، درب ، جرب ، عرف ، ثقف ، سهل ، كلم ، جرد ، بدل ، قصر ، ثبت"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Faa'ala)",
    wazan: "فاعل",
    contoh: "قاتل ، شاور ، شارك ، صاحب ، جالس ، عامل ، طالع ، دارس ، حاول ، خالف ، عالج ، حافظ ، حافظ ، صالح ، رافق ، طالب ، عاهد ، قارن ، لازم ، لاحظ ، عاقب ، عارض ، فارق ، جادل ، بارز ، باعد ، حاسب ، مجامل ، جاهد ، صارع ، حارب ، عاشر ، صافح ، ذاكر"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Infa'ala)",
    wazan: "انفعل",
    contoh: "انكسر ، انسجم ، انفتح ، انبسط ، انفصل ، انعقد ، انخفض ، انقلب ، انشرح ، انفطر ، انقطع ، انحرف ، انعزل ، انغمس ، انفجر ، انقسم ، انفرد ، انسحب ، انتقل ، انطلق ، انحصر ، انزلق ، انخفض ، انخزل ، انصرف ، انشغل ، انقطع ، انبثق"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Ifta'ala)",
    wazan: "افتعل",
    contoh: "اجتمع ، احترم ، اقتصد ، اجتهد ، اختلف ، اشتمل ، انتخب ، اعتبر ، امتثل ، اعترض ، احتسب ، اعتمد ، احتكر ، استلم ، اشتغل ، اعتدل ، اعتقد ، اقتحم ، افتتح ، اختتم ، التصف ، امتزج ، انتفع ، انتقل ، اعتصم ، اعتكف ، ابتسم ، التفت ، انتبه ، احترق ، اشتهر ، افترق ، اكتشف ، احتفل ، انتشر ، اغتسل ، اختمر ، احتمل ، اخترع ، ارتبط ، اشترط ، اشتبه ، اعترف ، اعتنق ، انتهز ، امتنع ، انتصر ، استمع ، اعتزل ، التحم ، اختلط ، ارتفع ، اقترب ، اعتمر ، اشترك"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan If'alla)",
    wazan: "افعل",
    contoh: "احمر ، اصفر ، اسود ، احضر"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Tafa''ala)",
    wazan: "تفعل",
    contoh: "تحدث ، تكلم ، تقيد ، تعلق ، تخرج ، تقدم ، تدبر ، تفكر ، تبخر ، تتبع ، تصرف ، تحمل ، تدخل ، تسلط ، تطرق ، تطلع ، تعلم ، تعمق ، تقدم ، تفرق ، تكلف ، تنزل ، تفقد ، تعدد ، تأثر ، تذكر ، تعبد ، تعرف ، تقرب ، تخلف ، تكبر ، تكسر ، تخلص ، تجمع ، تحرك ، تعجب ، تقطع ، تهذب ، تأثر ، تثقف ، تبرج ، تألف ، تحقق ، تعرض ، تكفل ، تأمل ، تمسك ، تمكن ، تغلب"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Tafaa'ala)",
    wazan: "تفاعل",
    contoh: "تقاتل ، تنازع ، تناقض ، تخاصم ، تراسل ، تضارب ، تفائل ، تشائم ، تعاون ، تباغض ، تنازل ، تراجع ، تعامل ، تكافل ، تدافع ، تساقط ، تبادل"
  },
  {
    kategori: "Fi'il Madhi Tsulatsi Mazid (Wazan Istaf'ala)",
    wazan: "استفعل",
    contoh: "استخلف ، استغفر ، استسلم ، استنبط ، استأذن ، استأنف ، استهزأ ، استخدم ، استعمر ، استظهر ، استفهم ، استحسن ، استكشف ، استطلع ، استعبد ، استلزم ، استمتع ، استذكر ، استغرق ، استعمل ، استمسك ، استحضر ، استطعم ، استشهد ، استرجع ، استرشد ، استخلص ، استدرك ، استكبر ، استقرأ ، استحضر ، استقبل ، استبشر ، استشكل"
  },

  // ------------------------------------------------------------
  // BAGIAN 2: FI'IL MUDHARI' MA'LUM
  // ------------------------------------------------------------
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mujarrad (Wazan Yaf'ulu)",
    wazan: "يفعل",
    contoh: "ينصر ، يخلق ، يرزق ، يحضر ، يعبد ، يسلك ، يستر ، يقتل ، يسكن ، يخرج ، يدخل ، يشعر ، ينظر ، يحكم ، يبعد ، يقرب ، يحسن ، يصعب ، يكبر ، يصغر ، يسهل ، يصلح ، يضعف ، يكثر ، يترك ، يعبد ، يصدر ، يثقل ، يجمل"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mujarrad (Wazan Yaf'alu)",
    wazan: "يفعل",
    contoh: "يعلم ، يفهم ، يرحم ، يسمع ، يرغب ، يسهر ، يعجب ، يعهد ، يلزم ، يطرح ، ياذن ، يشهد ، يحمد ، يصحب ، يشبع ، يقرأ ، يسهر ، ينهض ، يحفظ ، يتعب ، يرفع ، يجنح ، يفتح ، يسأل ، يشرح ، يدفع ، يخضع ، يفخر ، يجهل ، يمنع ، يصنع"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mujarrad (Wazan Yaf'ilu)",
    wazan: "يفعل",
    contoh: "يضرب ، يغرق ، يسبق ، يربط ، ينضج ، يلفظ ، يعرف ، يخدم ، يغلب ، يقبض ، ينطق ، يصرف ، يكذب ، يحرص ، يعرض ، يعدل ، يعقد ، يفقد ، يعطش"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yuf'ilu)",
    wazan: "يفعل",
    contoh: "يكرم ، يحسن ، يدرك ، يخرج ، يعلم ، يلزم ، يشرف ، يدبر ، يقبل ، يكره ، يمسك ، يبعد ، ينقذ ، ينصف ، يخطأ ، يتقن ، يجمع ، يخلف ، يرهب ، يطلع ، يظهر ، يغلق ، ينكر ، يمهل ، يخبر ، يدخل ، يرسل ، يسلم ، يفسد ، ينزل ، ينصت ، ينفق ، يكمل ، يفهم ، يطعم ، يبدع ، يطلق ، يوجد ، يعجب"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yufa''ilu)",
    wazan: "يفعل",
    contoh: "ينفذ ، يطبق ، يكبر ، يعظم ، يرتل ، يحسن ، يحرر ، يشرف ، يعلم ، يجود ، ينبه ، يسبح ، يغير ، يدبر ، يركز ، ينظم ، يشغل ، يذكر ، يشكل ، يقسم ، يلخص ، يمرن ، يخلف ، يبشر ، يدرب ، يجرب ، يعرف ، يثقف ، يسهل ، يكلم ، يجرد ، يبدل ، يقصر ، يثبت"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yufaa'ilu)",
    wazan: "يفاعل",
    contoh: "يقاتل ، يشاور ، يشارك ، يصاحب ، يجالس ، يعامل ، يطالع ، يدارس ، يحاول ، يخالف ، يعالج ، يحافظ ، يحافظ ، يصالح ، يرافق ، يطالب ، يعاهد ، يقارن ، يلازم ، يلاحظ ، يعاقب ، يعارض ، يفارق ، يجادل ، يبارز ، يباعد ، يحاسب ، يجامل ، يجاهد ، يصارع ، يحارب ، يعاشر ، يصافح ، يذاكر"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yanfa'ilu)",
    wazan: "ينفعل",
    contoh: "ينكسر ، ينسجم ، ينفتح ، ينبسط ، ينفصل ، ينعقد ، ينخفض ، ينقلب ، ينشرح ، ينفطر ، ينقطع ، ينحرف ، ينعزل ، ينغمس ، ينفجر ، ينقسم ، ينفرد ، ينسحب ، ينتقل ، ينطلق ، ينحصر ، ينزلق ، ينخفض ، ينخذل ، ينصرف ، ينشغل ، ينقطع ، ينبثق"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yafta'ilu)",
    wazan: "يفتعل",
    contoh: "يجتمع ، يحترم ، يقتصد ، يجتهد ، يختلف ، يشتمل ، ينتخب ، يعتبر ، يمتثل ، يعترض ، يحتسب ، يعتمد ، يحتكر ، يستلم ، يشتغل ، يعتدل ، يعتقد ، يقتحم ، يفتتح ، يختتم ، يلتصق ، يمتزج ، ينتفع ، ينتقل ، يعتصم ، يعتكف ، يبتسم ، يلتفت ، ينتبه ، يحترق ، يشتهر ، يفترق ، يكتشف ، يحتفل ، ينتشر ، يغتسل ، يختمر ، يحتمل ، يخترع ، يرتبط ، يشترط ، يشتبه ، يعترف ، يعتنق ، ينتهز ، يمتنع ، ينتصر ، يستمع ، يعتزل ، يلتحم ، يختلط ، يرتفع ، يقترب ، يعتمر ، يشترك"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yaf'allu)",
    wazan: "يفعل",
    contoh: "يحمر ، يصفر ، يسود ، يحضر"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yatafa''alu)",
    wazan: "يتفعل",
    contoh: "يتحدث ، يتكلم ، يتقيد ، يتعلق ، يتخرج ، يتقدم ، يتدبر ، يتفكر ، يتبخر ، يتتبع ، يتصرف ، يتحمل ، يتدخل ، يتسلط ، يتطرق , يتطلع ، يتعلم ، يتعمق ، يتقدم ، يتفرق ، يتكلف ، يتنزل ، يتفقد ، يتعدد ، يتأثر ، يتذكر ، يتعبد ، يتعرف ، يتقرب ، يتخلف ، يتكبر ، يتكسر ، يتخلص ، يتجمع ، يتحرك ، يتعجب ، يتقطع ، يتهذب ، يتأثر ، يتثقف ، يتبرج ، يتألف ، يتحقق ، يتعرض ، يتكفل ، يتأمل ، يتمسك ، يتمكن ، يتغلب"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yatafaa'alu)",
    wazan: "يتفاعل",
    contoh: "يتقاتل ، يتنازع ، يتناقض ، يتخاصم ، يتراسل ، يتضارب ، يتفائل ، يتشائم ، يتعاون ، يتباغض ، يتنازل ، يتراجع ، يتعامل ، يتكافل ، يتدافع ، يتساقط ، يتبادل"
  },
  {
    kategori: "Fi'il Mudhari' Tsulatsi Mazid (Wazan Yastaf'ilu)",
    wazan: "يستفعل",
    contoh: "يستخلف ، يستغفر ، يستسلم ، يستنبط ، يستأذن ، يستأنف ، يستهزأ ، يستخدم ، يستعمر ، يستظهر ، يستفهم ، يستحسن ، يستكشف ، يستطلع ، يستعبد ، يستلزم ، يستمتع ، يستذكر ، يستغرق ، يستعمل ، يستمسك ، يستحضر ، يستطعم ، يستبشر ، يسترجع ، يسترشد ، يستخلص ، يستدرك ، يستكبر ، يستقرأ ، يستقبل ، يستشهد ، يستشكل"
  }
];

// ==============================================================
// 3. DATA BUKU NAZHAM JURUMIYAH BAHASA INDONESIA (2015)
// ==============================================================
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
Isim dikenal dengan khafadl dan tanwin # Kemasukan alif lam dengannya mungkin`
  },
  {
    bab: "Bab I'rab & Alamat I'rab",
    bait: "Bait 11 - 25",
    syair: `I’rab itu perubahan ujung kalim # Taqdiran lafzhan dengannya harus yakin
Perubahan kalim mu’rab diujungnya # Karna amil berbeda memasukinya
I’rab dibagi jadi empat warnanya # Rafa, nashab, khafadl, jazm istilahnya
Rafa nashab tidak bisa dipungkiri # Hanya dalam isim dan fiil mudhari
Khafadl hanya untuk isim lain tidak # Sedang jazm untuk mudhari semata`
  }
];

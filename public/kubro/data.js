const data = [
    {
        "id" : 1,
        "title" : "Ta'awudz",
        "repeat" : 1, 
        "core" : "اَعُوذُ بِااللهِ السَّمِيْعِ الْعَلِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْم",
        "latin" : "A'udzubillahissami'il 'aliimi minassyaithonirrojiim",
        "terjemah" : "Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha Mengetetahui dari godaan setan yang terkutuk."
    },
    {
        "id" : 2,
        "title" : "Surat Al - Fatihah",
        "repeat" : 1, 
        "core" : "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَـٰنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧) أمين",
        "latin" : "Bismillahirrohmaanirrohiim (1) Alhamdulillaahirobbil 'aalamiin (2) Ar rohmaanir rohiim (3) Maaliki yaumid diin (4) Iyyaka na'budu wa iyyaka nasta 'iin (5) Iihdinash shiroothol mustaqiim (6) Shirootol ladzina an'amta 'alaihim ghoiril magh dhuubi 'alaihim waladhdhoolliin (7)",
        "terjemah" : "(1) Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (2) Segala puji bagi Allah, Tuhan semesta alam. (3) Maha Pemurah lagi Maha Penyayang. (4) Yang menguasai di Hari Pembalasan. (5) Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan. (6) Tunjukilah kami jalan yang lurus, (7) (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat."
    },
    {
        "id" : 3,
        "title" : "Surat Al - Baqarah Ayat 1-5",
        "repeat" : 1, 
        "core" : "الٓمٓ (١) ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ (٢) ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ (٣) وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ (٤) أُو۟لَـٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ (٥)",
        "latin" : "Alif Laam Miim (1) Dza likal kitaabu laaroi bafiihi hudal lilmuttaqiin (2) Al ladziina yu’minuna bil ghoibi wa yuqiimunassholaata wa mimma rozaqnaahum yum fiquun (3) Walladziina yu’ minuuna bimaa unzila ilaika wa maa unzila ming qoblika wa bil aakhiroti hum yuu qinuun (4) Ulaa ika ‘ala hudam mir robbihim wa ulaa ika humul muflihuun (5)",
        "terjemah" : "(1) Alif Laam Miim. (2) Kitab (Al Qur’an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa, (3) (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka, (4) dan mereka yang beriman kepada Kitab (Al Qur’an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. (5) Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung."
    },
    {
        "id" : 4,
        "title" : "Surat Al-Baqarah Ayat 255-257",
        "repeat" : 1, 
        "core" : "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ (٢٥٥) لَآ إِكْرَاهَ فِى ٱلدِّينِ ۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ ٱلْغَىِّ ۚ فَمَن يَكْفُرْ بِٱلطَّـٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ لَهَا ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ (٢٥٦) ٱللَّهُ وَلِىُّ ٱلَّذِينَ ءَامَنُوا۟ يُخْرِجُهُم مِّنَ ٱلظُّلُمَـٰتِ إِلَى ٱلنُّورِ ۖ وَٱلَّذِينَ كَفَرُوٓا۟ أَوْلِيَآؤُهُمُ ٱلطَّـٰغُوتُ يُخْرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَـٰتِ ۗ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ (٢٥٧)",
        "latin" : "Alloohu laa ilaaha illa huwal hayyul qoyyuumu laa ta’khuzuhuu sinatuw walaa naumun lahuu maa fissamaawaati wa maa fil ardhi man dzalladzii yasyfa’u ‘indahu illa bi idznihi ya’lamu maa baina aidiihim wa maa kholfahum wa laa yuhiithuuna bisyai-in min ‘ilmihi illaa bi maa syaa-a wasi’a kursiyyuhus- samawaati wal ardhi wa laa yauuduhu hifzuhuma wahuwal ‘aliyyul ‘azhiim. (255) La ikroha fid-diini qot tabayyanar-rusydu minal ghoyyi famay yakfur bith- thooghuuti wa yu’ minu billahi faqodis tamsaka bil ‘urwatil wutsqoo lan fishooma laha wallohu samii’un aliim.(256) Allohu waliyyul ladziina aamanuu yukhrijuhum minazh-zhulumaati ilan-nuuri walladziina kafaruu awliyaa-u humuth-thooghutu yukhri-juunahum minan-nuuri ilazh-zhulumaati ulaa-ika ash-haabun-naarihum fiihaa khooliduun (257)",
        "terjemah" : "(255) Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. \n Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa- apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. (256) Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhul tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui. (257) Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung- pelindungnya ialah syaithan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya."
    },
    {
        "id" : 5,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 6,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 7,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 8,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 9,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 10,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 11,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 12,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 13,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 14,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 15,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 16,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 17,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 18,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 19,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 20,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 21,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 22,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 23,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 24,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 25,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 26,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 27,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 28,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 29,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 40,
        "title" : "",
        "repeat" : 1, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    }
]

module.exports = data;
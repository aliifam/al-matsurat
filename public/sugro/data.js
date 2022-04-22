const data = [
    {
        "id" : 1,
        "title" : "Ta'awudz",
        "repeat" : 1, 
        "core" : "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        "latin" : "A'udzubillahissami'il 'aliimi minassyaithonirrojiim",
        "terjemah" : "Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha Mengetetahui dari godaan setan yang terkutuk."
    },
    {
        "id" : 2,
        "title" : "Surat Al - Fatihah",
        "repeat" : 1, 
        "core" : "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ١ ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣ مَٰلِكِ يَوۡمِ ٱلدِّينِ ٤ إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ٥ ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ٦ صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ٧",
        "latin" : "Bismillahirrohmaanirrohiim (1) Alhamdulillaahirobbil 'aalamiin (2) Ar rohmaanir rohiim (3) Maaliki yaumid diin (4) Iyyaka na'budu wa iyyaka nasta 'iin (5) Iihdinash shiroothol mustaqiim (6) Shirootol ladzina an'amta 'alaihim ghoiril magh dhuubi 'alaihim waladhdhoolliin (7)",
        "terjemah" : "(1) Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (2) Segala puji bagi Allah, Tuhan semesta alam. (3) Maha Pemurah lagi Maha Penyayang. (4) Yang menguasai di Hari Pembalasan. (5) Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan. (6) Tunjukilah kami jalan yang lurus, (7) (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat."
    },
    {
        "id" : 3,
        "title" : "Surat Al - Baqarah Ayat 1-5",
        "repeat" : 1, 
        "core" : "الٓمٓ ١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ٢ ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ۙ ٣ وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ٤ أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ٥",
        "latin" : "Alif Laam Miim (1) Dza likal kitaabu laaroi bafiihi hudal lilmuttaqiin (2) Al ladziina yu’minuna bil ghoibi wa yuqiimunassholaata wa mimma rozaqnaahum yum fiquun (3) Walladziina yu’ minuuna bimaa unzila ilaika wa maa unzila ming qoblika wa bil aakhiroti hum yuu qinuun (4) Ulaa ika ‘ala hudam mir robbihim wa ulaa ika humul muflihuun (5)",
        "terjemah" : "(1) Alif Laam Miim. (2) Kitab (Al Qur’an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa, (3) (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka, (4) dan mereka yang beriman kepada Kitab (Al Qur’an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. (5) Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung."
    },
    {
        "id" : 4,
        "title" : "Surat Al-Baqarah Ayat 255",
        "repeat" : 1, 
        "core" : "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَايَئُودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
        "latin" : "Alloohu laa ilaaha illa huwal hayyul qoyyuumu laa ta’khuzuhuu sinatuw walaa naumun lahuu maa fissamaawaati wa maa fil ardhi man dzalladzii yasyfa’u ‘indahu illa bi idznihi ya’lamu maa baina aidiihim wa maa kholfahum wa laa yuhiithuuna bisyai-in min ‘ilmihi illaa bi maa syaa-a wasi’a kursiyyuhus- samawaati wal ardhi wa laa yauuduhu hifzuhuma wahuwal ‘aliyyul ‘azhiim.",
        "terjemah" : "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar"
    },
    {
        "id" : 5,
        "title" : "Surat Al-Baqarah Ayat 256",
        "repeat" : 1, 
        "core" : "لَآ إِكۡرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ فَمَن يَكۡفُرۡ بِٱلطَّٰغُوتِ وَيُؤۡمِنۢ بِٱللَّهِ فَقَدِ ٱسۡتَمۡسَكَ بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
        "latin" : " La ikroha fid-diini qot tabayyanar-rusydu minal ghoyyi famay yakfur bith- thooghuuti wa yu’ minu billahi faqodis tamsaka bil ‘urwatil wutsqoo lan fishooma laha wallohu samii’un aliim",
        "terjemah" : "Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui."
    },
    {
        "id" : 6,
        "title" : "Surat Al-Baqarah Ayat 257",
        "repeat" : 1, 
        "core" : "ٱللَّهُ وَلِيُّ ٱلَّذِينَ ءَامَنُواْ يُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِۖ وَٱلَّذِينَ كَفَرُوٓاْ أَوۡلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخۡرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِۗ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ",
        "latin" : " Allohu waliyyul ladziina aamanuu yukhrijuhum minazh-zhulumaati ilan-nuuri walladziina kafaruu awliyaa-u humuth-thooghutu yukhri-juunahum minan-nuuri ilazh-zhulumaati ulaa-ika ash-haabun-naarihum fiihaa khooliduun",
        "terjemah" : "Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya."
    },
    {
        "id" : 7,
        "title" : "Surat Al-Baqarah Ayat 284",
        "repeat" : 1, 
        "core" : "لِّلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَإِن تُبۡدُواْ مَا فِيٓ أَنفُسِكُمۡ أَوۡ تُخۡفُوهُ يُحَاسِبۡكُم بِهِ ٱللَّهُۖ فَيَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ",
        "latin" : "Lillahi maa fis-samawaati wa maa fil ardhi wa in tubduu ma fii anfusikum aw tukhfuuhu yuhaasibkum bihillaahu fayaghfiru limay-yasyaa-u wa yu’adzibu may-yasyaa-u wallohu ‘alaa kulli syai-in qodiir.",
        "terjemah" : "Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu"
    },
    {
        "id" : 8,
        "title" : "Surat Al-Baqarah Ayat 285",
        "repeat" : 1, 
        "core" : "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ",
        "latin" : "",
        "terjemah" : "Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\""
    },
    {
        "id" : 9,
        "title" : "Surat Al-Baqarah Ayat 286",
        "repeat" : 1, 
        "core" : "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
        "latin" : "Laa yukallifullohu nafsan illa wus’ahaa lahaa maa kasabat wa ‘alaiha maktasabat, robbana laa tuaakhidznaa in nasiina aw akhtho’naa, robbana walaa tahmil ‘alainaa ishron kama hamaltahu ‘alal-ladziina min qoblinaa, robbana wa laa tuhammilnaa maa laa thooqotalanaa bihi wa’fu ‘annaa waghfirlanaa warhamnaa anta maulaanaa fanshurnaa ‘alal-qoumil-kaafiriin.",
        "terjemah" : "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\""
    },
    {
        "id" : 10,
        "title" : "Surat Al-Ikhlas",
        "repeat" : 3, 
        "core" : "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ ٢ لَمۡ يَلِدۡ وَلَمۡ يُولَ ٣ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ ٤",
        "latin" : "Qul huwalloohu ahad (1) Alloohush-shomad (2) Lam yalid walam yuulad (3) Walam yakul-lahuu kufuwan ahad (4)",
        "terjemah" : "(1) Katakanlah: “Dia-lah Allah, Yang Maha Esa, (2) Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. (3) Dia tiada beranak dan tiada pula diperanakkan, (4) dan tidak ada seorang pun yang setara dengan Dia”."
    },
    {
        "id" : 11,
        "title" : "Surat Al-Falaq",
        "repeat" : 3, 
        "core" : "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ١ مِن شَرِّ مَا خَلَقَ ٢ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٣ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ ٤ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ٥",
        "latin" : "Qul a’uudzu birobbil-falaq (1) Min syarri maa kholaq (2) Wamin syarri ghoosiqin idzaa waqob (3) Wamin Syarrin naffaatsaati fil ‘uqod (4) Wamin syarri haasidin idzaa hasad (5)",
        "terjemah" : " (1) Katakanlah: “Aku berlindung kepada Tuhan Yang Menguasai subuh, (2) dari kejahatan makhluk-Nya, (3) dan dari kejahatan malam apabila telah gelap gulita, (4) dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul, (5) dan dari kejahatan orang yang dengki apabila ia dengki”."
    },
    {
        "id" : 12,
        "title" : "Surat An-Nas",
        "repeat" : 3, 
        "core" : "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ١ مَلِكِ ٱلنَّاسِ ٢ إِلَـٰهِ ٱلنَّاسِ ٣ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ٤ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ٥ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ ٦",
        "latin" : "Qul a’uudzu birobbin-naas (1) Malikin-naas (2) Ilaahin-naas (3) Minsyarril-waswaasil-khon-naas (4) Alladzii yuwaswisu fii shuduurin-naas (5) Minal-jinnati wan-nas (6)",
        "terjemah" : "(1) Katakanlah: “Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia. (2) Raja manusia. (3) Sembahan manusia. (4) dari kejahatan (bisikan) syaithan yang biasa bersembunyi,(5) yang membisikkan (kejahatan) ke dalam dada manusia. (6) dari (golongan) jin dan manusia."
    },
    {
        "id" : 13,
        "title" : "Do'a Al-Matsurat Pagi",
        "repeat" : 3, 
        "core" : "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلّهَِ وَلْحَمْدُ لِلّهَِ لاَ شَرِيكَ لَهُ لَا إِلَهَ إِلَّاهُوَ وَإِلَيْهِ النُّشُوْرُ",
        "latin" : "Ash-bahnaa wa ash-bahal mulku lillaahi walhamdu lillaahi la syariika lahu laa ilaaha ilaa huwa wa ilaihi-nusyuur",
        "terjemah" : "Kami berpagi hari dan berpagi hari pula kerjaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali."
    },
    {
        "id" : 14,
        "title" : "Do'a Al-Matsurat Sore",
        "repeat" : 3, 
        "core" : "أَمْسَيْنَا وَ أَمْسَ الْمُلْكُ لِلَّهِ وَلْحَمْدُ لِلهِ لَا شَرِيْكَ لَهُ لَا إِلَهَ إِلَّاهُوَ وَإِلَيْهِ الْمَصِيْرُ",
        "latin" : "amsainaa wa amsa mulku lillaahi walhamdu lillaahi la syariika lahu laa ilaaha ilaa huwa wa ilaihil-mashiir",
        "terjemah" : "Kami bersore hari dan bersore hari pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali."
    },
    {
        "id" : 15,
        "title" : "Do'a Al-Matsurat Pagi",
        "repeat" : 3, 
        "core" : "أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
        "latin" : "Ash-bahnaa ‘alaa fithrotil islaami wakalimatil ikhlaashi wa ‘alaa diini nabiyyinaa muhammadin shollallohu ‘alaihi wa sallama wa ‘alaa millati abiinaa ibroohiima haniifaw wa maa kaana minal musyrikiin",
        "terjemah" : "Di waktu pagi kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik."
    },
    {
        "id" : 16,
        "title" : "Do'a Al-Matsurat Sore",
        "repeat" : 3, 
        "core" : " أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
        "latin" : "amsainaa ‘alaa fithrotil islaami wakalimatil ikhlaashi wa ‘alaa diini nabiyyinaa muhammadin shollallohu ‘alaihi wa sallama wa ‘alaa millati abiinaa ibroohiima haniifaw wa maa kaana minal musyrikiin",
        "terjemah" : "Di waktu sore kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik."
    },
    {
        "id" : 17,
        "title" : "Do'a Al-Matsurat Pagi",
        "repeat" : 3, 
        "core" : "اللَّهُمَّ إِنِّي أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَة",
        "latin" : "Alloohumma innii ash-bahtu minka fii ni’matin wa ‘aafiyatin wa sitrin, fa atimma ‘alayya ni’mataka wa ‘aafiyataka wa sitroka fid-dunyaa wal- aakhiroh",
        "terjemah" : "Ya Allah, sesungguhnya aku berpagi hari dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat."
    },
    {
        "id" : 18,
        "title" : "Do'a Al-Matsurat Sore",
        "repeat" : 3, 
        "core" : "اللَّهُمَّ إِنِّي أَمْسَيتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَة",
        "latin" : "Alloohumma innii amsaitu minka fii ni’matin wa ‘aafiyatin wa sitrin, fa atimma ‘alayya ni’mataka wa ‘aafiyataka wa sitroka fid-dunyaa wal- aakhiroh",
        "terjemah" : "Ya Allah, sesungguhnya aku bersore hari dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat."
    },
    {
        "id" : 19,
        "title" : "Do'a Al-Matsurat Pagi",
        "repeat" : 3, 
        "core" : "اللَّهُمَّ مَا أَصْبَحَ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        "latin" : "Alloohumma maa ashbaha bii min ni’matin aw bi ahadin min kholqika faminka wahdaka laa syariika laka falakal-hamdu walakasy-syukr",
        "terjemah" : "Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur."
    },
    {
        "id" : 20,
        "title" : "Do'a Al-Matsurat Sore",
        "repeat" : 3, 
        "core" : "اللَّهُمَّ مَا أَمْسَ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        "latin" : "Alloohumma maa amsaa bii min ni’matin aw bi ahadin min kholqika faminka wahdaka laa syariika laka falakal-hamdu walakasy-syukr",
        "terjemah" : "Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu bersore hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur."
    },
    {
        "id" : 21,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "يَا رَبِّي لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ",
        "latin" : "Yaa Robbi lakal hamdu kamaa yambaghii lijalaali wajhika wa ‘azhiimi sulthonik",
        "terjemah" : "Ya Tuhanku, Segala puji bagiMu sebagaimana seyogyanya kemuliaan wajahMu dan keagungan kekuasaanMu."
    },
    {
        "id" : 22,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا",
        "latin" : "Rodhitu billahi robba wabil islaamidiinaa wabi Muhammadin nabiyya warosuula",
        "terjemah" : "Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul."
    },
    {
        "id" : 23,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
        "latin" : "Subhaanalloohi wabihamdihi ‘adada kholqihi wa ridhoo nafsihi wazinata ‘arsyihi wa midaada kalimaatih",
        "terjemah" : "Maha Suci Allah dan Segala Puji bagiNya, sebanyak bilangan makhlukNya, seridha diriNya, setimbangan ‘arsy-Nya, dan sebanyak tinta dari kata-kataNya."
    },
    {
        "id" : 24,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        "latin" : "Bismillaahilladzii laa yadhurru ma’asmihi syaiun fil ardhi walaa fissamaa-i wahuwassamii’ul ‘aliim",
        "terjemah" : "Dengan nama Allah Yang bersama NamaNya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Medengar lagi maha Mengetahui."
    },
    {
        "id" : 25,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 26,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 27,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
        "core" : "",
        "latin" : "",
        "terjemah" : ""
    },
    {
        "id" : 28,
        "title" : "Do'a Al-Matsurat",
        "repeat" : 3, 
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

export { data };
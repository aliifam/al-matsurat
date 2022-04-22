import { data } from './data.js';

console.log(data.length);

var content = document.getElementById('isi');

for (const object of data) {
    for (const item in object) {
        if (Object.hasOwnProperty.call(object, item)) {
            var element = document.createElement("div");
            element.classList.add("wow");
            element.innerHTML = object[item];
            content.appendChild(element);
        }
    }
}

var item = '' + 
'<div class="m-4 mt-8 border-b-2 border-green-600">' + 
'    <div class="flex justify-between p-4 bg-green-600 text-white">' + 
'        <p>Surat Sesuatu ayat 100</p>' + 
'        <p>1 repetisi</p>' + 
'    </div>' + 
'    <p class="text-2xl font-arab my-6" dir="rtl"> الٓمٓ (١) ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ (٢) ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ (٣) وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ (٤) أُو۟لَـٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ (٥)"</p>' + 
'    <p class=" mb-6">(1) Alif Laam Miim.  (2) Kitab (Al Qur’an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa, (3) (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka, (4) dan mereka yang beriman kepada Kitab (Al Qur’an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. (5) Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung.</p>' + 
'</div>' + 
'<div class="m-4 mt-8 border-b-2 border-green-600">' + 
'    <div class="flex justify-between p-4 bg-green-600 text-white">' + 
'        <p>Surat Sesuatu ayat 100</p>' + 
'        <p>1 repetisi</p>' + 
'    </div>' + 
'    <p class="text-2xl font-arab my-6" dir="rtl"> الٓمٓ (١) ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ (٢) ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ (٣) وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ (٤) أُو۟لَـٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ (٥)"</p>' + 
'    <p class=" mb-6">(1) Alif Laam Miim.  (2) Kitab (Al Qur’an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa, (3) (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka, (4) dan mereka yang beriman kepada Kitab (Al Qur’an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. (5) Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung.</p>' + 
'</div>' + 
'';

//var content = document.getElementById('isi').innerHTML = item;
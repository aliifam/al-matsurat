import { data } from './data.js';

var content = document.getElementById('isi');

var itemList = "";

for (let index = 0; index < data.length; index++) {
    const item = data[index];
    itemList += `<div class="m-4 mt-8 border-b-2 border-green-600">
                    <div class="flex justify-between p-4 bg-green-600 text-white">
                        <p>${item.title}</p>
                        <p>${item.repeat} repetisi</p>
                    </div>
                    <p class="text-3xl text-justify leading-relaxed font-['fontArab'] my-6" dir="rtl">${item.core}</p> 
                    <p class="text-justify mb-6">${item.terjemah}</p>
                </div>`;
}

content.innerHTML = itemList
var dynamicBrowser = document.getElementById('judul_browser');
var dynamicTitle = document.getElementById('judul_main');
var dynamicDescription = document.getElementById('deskripsi_main');
var dynamicView = document.getElementById('content');
var backbutton = document.getElementById('back-button');
var doaView = document.getElementById('doa');

var itemList = "";
var doaList = "";

var clean = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-4">
                <a onclick="createViewSupag()">
                    <div class="flex cursor-pointer justify-center items-center h-28 border border-gray-400 hover:shadow-xl">
                        <p class="text-2xl">Sugro Pagi</p>
                     </div>
                </a>
                <a onclick="createViewSupet()">
                    <div class="flex cursor-pointer justify-center items-center h-28 border border-gray-400 hover:shadow-xl">
                        <p class="text-2xl">Sugro Petang</p>
                     </div>
                </a>
                <a onclick="createViewKupag()">
                    <div class="flex cursor-pointer justify-center items-center h-28 border border-gray-400 hover:shadow-xl">
                        <p class="text-2xl">Kubro Pagi</p>
                     </div>
                </a>
                <a onclick="createViewKupet()">
                    <div class="flex cursor-pointer justify-center items-center h-28 border border-gray-400 hover:shadow-xl">
                        <p class="text-2xl">Kubro Petang</p>
                     </div>
                </a>
            </div>`;

var doaClean = `<div><div>`

function createViewSupag() {

    sessionStorage.setItem('mode', 'sugro-pagi');

    let loader = `<div class="flex w-max justify-center items-center">
                  <svg role="status" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                  </svg>
                  <div>
                  `;
    dynamicView.innerHTML = loader;
    doaView.innerHTML = loader;

    fetch('./data/sugro.json')
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                const item = data[index];
                if (item.id === 14 || item.id === 16 || item.id === 18 || item.id === 20) {
                    continue;
                }
                itemList += `<div class="m-4 mt-8 border-b-2 border-zinc-700">
                                <div class="flex justify-between p-4 bg-zinc-700 text-white">
                                    <p>${item.title}</p>
                                    <p>${item.repeat} repetisi</p>
                                </div>
                                <p class="text-3xl text-justify leading-relaxed font-['fontArab'] my-6" dir="rtl">${item.core}</p> 
                                <p class="text-justify mb-6">${item.terjemah}</p>
                            </div>`;
            }
            dynamicView.innerHTML = itemList
        });

    fetch('./data/doa.json')
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                const doa = data[index];
                // console.log(doa)
                doaList += `<div class="m-4 mt-8 border-b-2 border-green-600">
                                <div class="flex justify-between p-4 bg-green-600 text-white">
                                    <p>${doa.title}</p>
                                    <p>${doa.repeat} repetisi</p>
                                </div>
                                <p class="text-3xl text-justify leading-relaxed font-['fontArab'] my-6" dir="rtl">${doa.core}</p> 
                                <p class="text-justify mb-6">${doa.terjemah}</p>
                            </div>`;
            }
            doaView.innerHTML = doaList
        });

    backbutton.className = "sticky top-0 cursor-pointer";
    dynamicBrowser.innerText = "Al - Matsurat Sugro Pagi";
    dynamicTitle.innerText = "Al - Matsurat Sugro Pagi";
    dynamicDescription.innerText = "Biasakan membaca Al - Matsurat sugro setiap pagi";
}

function createViewSupet() {

    sessionStorage.setItem('mode', 'sugro-petang');

    let loader = `<div class="flex w-max justify-center items-center">
                  <svg role="status" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                  </svg>
                  <div>
                  `;
    dynamicView.innerHTML = loader;
    doaView.innerHTML = loader;

    fetch('./data/sugro.json')
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                const item = data[index];
                if (item.id === 13 || item.id === 15 || item.id === 17 || item.id === 19) {
                    continue;
                }
                itemList += `<div class="m-4 mt-8 border-b-2 border-zinc-700">
                                <div class="flex justify-between p-4 bg-zinc-700 text-white">
                                    <p>${item.title}</p>
                                    <p>${item.repeat} repetisi</p>
                                </div>
                                <p class="text-3xl text-justify leading-relaxed font-['fontArab'] my-6" dir="rtl">${item.core}</p> 
                                <p class="text-justify mb-6">${item.terjemah}</p>
                            </div>`;
            }
            dynamicView.innerHTML = itemList
        });

    fetch('./data/doa.json')
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                const doa = data[index];
                // console.log(doa)
                doaList += `<div class="m-4 mt-8 border-b-2 border-green-600">
                                <div class="flex justify-between p-4 bg-green-600 text-white">
                                    <p>${doa.title}</p>
                                    <p>${doa.repeat} repetisi</p>
                                </div>
                                <p class="text-3xl text-justify leading-relaxed font-['fontArab'] my-6" dir="rtl">${doa.core}</p> 
                                <p class="text-justify mb-6">${doa.terjemah}</p>
                            </div>`;
            }
            doaView.innerHTML = doaList
        });

    backbutton.className = "sticky top-0 cursor-pointer";
    dynamicBrowser.innerText = "Al - Matsurat Sugro Petang";
    dynamicTitle.innerText = "Al - Matsurat Sugro Petang";
    dynamicDescription.innerText = "Biasakan membaca Al - Matsurat sugro setiap petang";
}

function createViewKupag() {
    alert("sorry but still under developmet")
}

function createViewKupet() {
    alert("sorry but still under developmet")
}


function resetViewBack() {
    dynamicBrowser.innerText = "Al - Matsurat Online | Kubro dan Sugro";
    dynamicTitle.innerText = "Al - Matsurat Online";
    dynamicDescription.innerText = "biasakan membaca almatsurat setiap pagi dan petang";
    dynamicView.innerHTML = clean;
    doaView.innerHTML = "";
    backbutton.className = "hidden";

    sessionStorage.clear();
}

function adaptiveView() {
    let nowview = sessionStorage.getItem('mode');

    if (nowview === 'sugro-pagi') {
        createViewSupag();
    }

    if (nowview === 'sugro-petang') {
        createViewSupet();
    }

    console.log(nowview)
}
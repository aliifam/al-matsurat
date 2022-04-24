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

    let loader = `<p class="text-center">Loading...<p/>`;
    dynamicView.innerHTML = loader;

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

    sessionStorage.setItem('mode', 'sugro-pagi');
}

function createViewSupet() {

    let loader = `<p class="text-center">Loading...<p/>`;
    dynamicView.innerHTML = loader;
    
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

    sessionStorage.setItem('mode', 'sugro-petang');
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

    sessionStorage.removeItem('mode');
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
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    doc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



const data = [
    {
        "title": "Echo-Ads Free Music Listen",
        "image": "images/echo.png",
        "downloadUrl": "https://drive.google.com/file/d/1BD2eDLj888DI32r8pUt1oYp9ZPHh-sYZ/view?usp=drivesdk"
    },
    {
        "title": "GTA-5 Game Android Edition",
        "image": "images/Gta-5.jpg",
        "downloadUrl": "https://drive.google.com/file/d/1KplTYgrpK99dSu2Y-x7OzIcPhk8OR_Un/view?usp=drivesdk"
    },
    {
        "title": "Capcut Pro-2026",
        "image": "images/capcut app.jpg",
        "downloadUrl": "https://drive.google.com/file/d/1DElZXMHgP-ia_EpmWZaBxepBsxRqtmji/view?usp=drivesdk"
    },
    {
        "title": "Proton VPN Pro-2026",
        "image": "images/vpn.jpg",
        "downloadUrl": "https://t.me/madxedits20/126"
    },
    {
        "title": "Alight Motion Pro Mod-2026",
        "image": "images/1alightmotion.png",
        "downloadUrl": "https://t.me/madxedits20/128"
    },
    {
        "title": "Horizon Driving Ultra-Mod",
        "image": "images/HorizonDrivingSimulator.png",
        "downloadUrl": "https://drive.google.com/file/d/1v7SUzijiqA5jsTaYek7nrf1IN_yp4yTH/view?usp=drivesdk"
    },
    {
        "title": "LightRoom Premieum-Mod Apk",
        "image": "images/LR.jpg",
        "downloadUrl": "https://t.me/madxedits20/127"
    },
    {
        "title": "Open Camera Apk",
        "image": "images/open camera.jpg",
        "downloadUrl": "https://play.google.com/store/apps/details?id=net.sourceforge.opencamera"

    },
{
        "title": "SpiderMan Marve-Elite",
        "image": "images/spiderman.jpg",
        "downloadUrl": "https://www.mediafire.com/file/epszkj2fggrtw30/Spiderman_Miles_Morales_Fanmade.7z/file"
},

{
 "title": "Ben-10 Galvan Alien-Hero",
        "image": "images/ben-10.jpg",
        "downloadUrl": "https://drive.google.com/file/d/1efquDHduAxKYxsaly22JsqSpx7sg7QFq/view?usp=drivesdk"
},
]

const container = document.getElementById('appContainer')

data.map((e, i) => {

   container.innerHTML += `
<div class="card">
    <img src="${e.image}" width="600" height="300" alt="Upload App Image">
    <div class="card-content">
        <h2>${e.title}</h2>

        <a href="javascript:void(0)" class="btn" onclick="countDownload('${e.downloadUrl}')">
            Download
        </a>
    </div>
</div>
`;
})

const firebaseConfig = {
    apiKey: "AIzaSyDT-_43lioLSjZXTNlDDLKYzxXMJw3q3sk",
    authDomain: "whotfx-madx.firebaseapp.com",
    projectId: "whotfx-madx",
    storageBucket: "whotfx-madx.firebasestorage.app",
    messagingSenderId: "645364810465",
    appId: "1:645364810465:web:8358bb8e3a446a685ceda0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Connected!");


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const search = this.value.toLowerCase().trim();

    document.querySelectorAll(".card").forEach((card) => {

        const appName = card.querySelector("h2").textContent.toLowerCase();

        card.style.display = appName.includes(search) ? "" : "none";

    });

});

window.enterSite = function () {

    document.getElementById("followPopup").style.display = "none";

};

window.openMenu = function () {

    document.getElementById("sideMenu").style.left = "0";

};

window.closeMenu = function () {

    document.getElementById("sideMenu").style.left = "-250px";

};

window.showAbout = function () {

    window.closeMenu();

    document.getElementById("aboutBox").style.display = "block";

};

window.hideAbout = function () {

    document.getElementById("aboutBox").style.display = "none";

};


window.countDownload = async function (link) {

    try {

        const statsRef = doc(db, "website", "stats");

        await updateDoc(statsRef, {

            totalDownloads: increment(1)

        });

    } catch (err) {

        console.error(err);

    }

    window.open(link, "_blank");

};


const followBtn = document.getElementById("followbtnId");
const youtubeBtn = document.getElementById("youtubeBtnId");
const enterBtn = document.getElementById("enterbtnId");
const followPopup = document.getElementById("followPopup");

enterBtn.style.display = "none";

function updateUI() {

    const youtubeDone = localStorage.getItem("youtube") === "1";
    const instagramDone = localStorage.getItem("flag") === "1";

    if (youtubeDone && instagramDone) {
        enterBtn.style.display = "inline-block";
    } else {
        enterBtn.style.display = "none";
    }
}

updateUI();

window.addEventListener("pageshow", updateUI);
window.addEventListener("focus", updateUI);

youtubeBtn.addEventListener("click", () => {

    localStorage.setItem("youtube", "1");

    window.open("https://youtube.com/@madzpov?si=EC2vVLfZUcjlFe9I", "_blank");

});

followBtn.addEventListener("click", () => {

    localStorage.setItem("flag", "1");

    window.location.href = "https://www.instagram.com/whotfx_madx?igsh=MWdrN2dreTl4aGE3MQ==";

});

enterBtn.addEventListener("click", () => {

    followPopup.style.display = "none";

    localStorage.removeItem("youtube");
    localStorage.removeItem("flag");

});
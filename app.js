import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    doc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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


document.getElementById("searchInput").addEventListener("keyup", function () {

    let search = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        let name = card.querySelector("h2").textContent.toLowerCase();

        card.style.display = name.includes(search) ? "" : "none";

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
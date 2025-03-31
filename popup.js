import { getRandomTip } from './prompt.js';

console.log("This is a popup!")

// followed this YouTube tutorial: https://www.youtube.com/watch?v=GGi7Brsf7js&ab_channel=TrainToCode
// async function petMe() {
//     let[tab] = await chrome.tabs.query({ active: true });
//     let message = "Yay! Thank you for petting me! 💚\nTip: " + getRandomTip();
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: (message) => {
//             alert(message);
//         },
//         args: [message]
//     });
// }

// async function feedMe() {
//     let[tab] = await chrome.tabs.query({ active: true });
//     let message = "Yum! Thank you for feeding me! 😋\nTip: " + getRandomTip();
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: (message) => {
//             alert(message);
//         },
//         args: [message]
//     });
// }

// document.getElementById("petButton").addEventListener("click", petMe);
// document.getElementById("feedButton").addEventListener("click", feedMe);

document.addEventListener("DOMContentLoaded", function () {
    const happinessMeter = document.getElementById("happiness");
    const petButton = document.getElementById("petButton");
    const feedButton = document.getElementById("feedButton");
    const pettingText = document.querySelector(".pettingtext");
    const feedingText = document.querySelector(".feedingtext");
    const randomTip = document.querySelector("p");

    // Function to change happiness
    function changeHappiness(amount) {
        let currentValue = parseInt(happinessMeter.value);
        let newValue = Math.max(0, Math.min(currentValue + amount, 100));
        happinessMeter.value = newValue;
    }

    // listeners for increasing happiness
    petButton.addEventListener("click", function () {
        changeHappiness(5);
    });

    feedButton.addEventListener("click", function () {
        changeHappiness(10);
    });

    // decrease happiness over time automatically
    setInterval(function () {
        changeHappiness(-1); // Decrease happiness
    }, 4000);

    // petting speech bubble
    pettingText.style.display = "none"; // initially hide the floating text
    petButton.addEventListener("click", () => {
        pettingText.style.display = "block"; // toggle visibility

        // the text box will disappear after 3 seconds
        setTimeout(() => {
            pettingText.style.display = "none";
        }, 3000);
    })

    // make the speech for feeding appear + auto disappear
    feedingText.style.display = "none"; // initially hide the floating text
    feedButton.addEventListener("click", () => {
        feedingText.style.display = "block"; // toggle visibility

        // the text box will disappear after 3 seconds
        setTimeout(() => {
            feedingText.style.display = "none";
        }, 3000);
    })

    // create a dedicated random tip box
    const randomTipBox = document.createElement("div");
    randomTipBox.classList.add("floatingtext", "randomtip");
    randomTipBox.style.display = "none";
    document.body.appendChild(randomTipBox);

    // function to show random tips
    function showRandomTip() {
        randomTipBox.textContent = getRandomTip();
        randomTipBox.style.display = "block";

        // hide after 7 seconds
        setTimeout(() => {
            randomTipBox.style.display = "none";
        }, 7000);
    }

    // schedule random tips
    function scheduleRandomTips() {
        setInterval(() => {
            if (Math.random() < 0.5) { // 50% chance
                showRandomTip();
            }
        // I left the interval at 1-3 seconds for testing!
        }, Math.floor(Math.random() * (3000 - 1000) + 1000)); // 1s - 3s interval
    }

    scheduleRandomTips();
});
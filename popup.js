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
    const pixelPom = document.getElementById("pixelPom");

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

    // function for petting action
    function petMe() {
        changeHappiness(5);
        
        // Hide the feeding text if it's visible
        feedingText.style.display = "none";

        pettingText.style.display = "block";
        setTimeout(() => {
            pettingText.style.display = "none";
        }, 3000);
    }

    // function for feeding action
    function feedMe() {
        changeHappiness(10);

        // Hide the petting text if it's visible (difference)
        pettingText.style.display = "none";
        
        // Show feeding text
        feedingText.style.display = "block";
        
        setTimeout(() => {
            feedingText.style.display = "none"; // Hide after 3 seconds
        }, 3000);
    }

    // petting speech bubble
    pettingText.style.display = "none"; // initially hide the floating text
    petButton.addEventListener("click", () => {
        petMe();
    })

    // feeding speech bubble
    feedingText.style.display = "none"; // initially hide the floating text
    feedButton.addEventListener("click", () => {
        feedMe();
    })

    // create a dedicated random tip box
    const randomTipBox = document.createElement("div");
    randomTipBox.classList.add("floatingtext", "randomtip");
    randomTipBox.style.display = "none";
    document.body.appendChild(randomTipBox);

    // function to show random tips
    function showRandomTip() {
        if (randomTipBox.style.display === "block") return; //if a tip is showing next will only appear after that disappears
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
            if (randomTipBox.style.display === "none" && Math.random() < 0.6) { // 60% chance
                showRandomTip();
            }
        // I left the interval at 1-3 seconds for testing!
        }, Math.floor(Math.random() * (3000 - 1000) + 1000)); // 1s - 3s interval
    }

    scheduleRandomTips();

    pixelPom.addEventListener("click", petMe);
});
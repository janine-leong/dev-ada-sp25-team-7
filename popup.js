import { getRandomTip } from './prompt.js';

console.log("This is a popup!")

// followed this YouTube tutorial: https://www.youtube.com/watch?v=GGi7Brsf7js&ab_channel=TrainToCode
async function petMe() {
    let[tab] = await chrome.tabs.query({ active: true });
    let message = "Yay! Thank you for petting me! 💚\nTip: " + getRandomTip();
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (message) => {
            alert(message);
        },
        args: [message]
    });
}

async function feedMe() {
    let[tab] = await chrome.tabs.query({ active: true });
    let message = "Yum! Thank you for feeding me! 😋\nTip: " + getRandomTip();
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (message) => {
            alert(message);
        },
        args: [message]
    });
}

document.getElementById("petButton").addEventListener("click", petMe);
document.getElementById("feedButton").addEventListener("click", feedMe);
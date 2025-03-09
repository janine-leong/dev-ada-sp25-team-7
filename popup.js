console.log("This is a popup!")

// followed this YouTube tutorial: https://www.youtube.com/watch?v=GGi7Brsf7js&ab_channel=TrainToCode
async function petMe() {
    let[tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert("Yay! Thank you for petting me! 💚");
        }
    });
}

async function feedMe() {
    let[tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert("Yum! Thank you for feeding me! 😋");
        }
    });
}

document.getElementById("petButton").addEventListener("click", petMe);
document.getElementById("feedButton").addEventListener("click", feedMe);
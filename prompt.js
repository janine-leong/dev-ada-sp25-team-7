export function getRandomTip() {
    const tips = [
        "Please clear out your emails! Delete spam and old unwanted inbox messages. 📨",
        "Don’t leave your devices plugged in overnight! Charge them during the day for shorter periods. 🔅",
        "Enable low battery mode to let your devices last longer before needing a recharge. 🔋",
        "Try searching on your web browser instead of using AI. 🔍",
        "Hold on to your devices for as long as you can rather than replacing them when fashion changes. 🦾",
        "If you must purchase a new electronic device, try to look for ones with low energy consumption. ⚡️",
        "Broken chargers, keyboards, or other tech accessories? Look for a local e-waste bin to recycle them! ♻️",
        "Turn your devices off when not in use for a long time. 💤",
        "Opt for lower resolution settings when streaming - even better, download content instead of streaming! 📺",
        "Declutter your digital space; regularly delete unwanted and unused files and apps. 🧹",
        "Don’t doomscroll! Take a digital detox to reduce your digital carbon footprint and practice being present. 🪷",
        "Periodically clear your web browser’s cache and cookies to free up storage space. 🍪",
        "Try to compress (.zip) large files before sending them. 🤏",
        "Please close unused tabs in your web browser! ❎",
        "Check Activity Monitor for things consuming your battery power! 📈"
    ];

    const night_tips = [
        "Close unused tabs and apps before the end of the day! 🌐",
        "Time to sleep and let your devices do the same ... 💤",
        "Good Night! 💤",
        "PixelPom is sleepy ... 🐶"
    ];

    const morning_tips = [
        "PixelPom is ready to start the day with full battery! 🔋",
        "Don't forget to feed PixelPom breakfast! 🦴"
    ];

    let display_tip = tips;
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour > 20) {
        display_tip = tips.concat(night_tips);
    } else if (currentHour < 12) {
        display_tip = tips.concat(morning_tips);
    }

    return display_tip[Math.floor(Math.random() * display_tip.length)];
}
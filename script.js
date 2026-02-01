(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const bgMusic = document.getElementById("bgMusic");
const params = new URLSearchParams(window.location.search);

if (params.get("from") === "welcome") {
  bgMusic.play().catch(() => {});
}


const messages = [
    "MARIOOOOOOOO",
    "Are you sure?",
    "Hot.",
    "Look at the pug??",
    "You are saying no to the pug???????",
    "Pookie please...",
    "But Poopppppie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes Habibi! "
];

let messageIndex = 0;

const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const padding = 20;
    noBtn.style.position = "fixed";

    const rect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function handleNoClick() {
    const yesButton = document.querySelector('.yes-button');

    // Update message on the No button
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;


    // Run away
    moveNoButton();
}

// Desktop: run away when mouse gets near
noBtn.addEventListener("mouseenter", handleNoClick);

// Mobile: run away when user tries to tap
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handleNoClick();
}, { passive: false });

// Optional: if user somehow clicks it, still run away
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleNoClick();
});


function handleYesClick() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
    window.location.href = "yes_page.html";
}

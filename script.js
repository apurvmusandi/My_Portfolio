document.addEventListener('DOMContentLoaded', () => {

    // --- BOOT SCREEN LOGIC ---

    const bootScripts = [
        [
            "[BOOT] Initializing system...",
            "[OK] Kernel modules loaded",
            "[OK] Network drivers initialized",
            "[OK] Connecting to Apurv Portfolio v1.0...",
            "[OK] Fetching personal data from /home/apurv",
            "[OK] Name: Apurv Musandi",
            "[OK] Skills: AI, PC Building, Health-Tech, Web Dev",
            "[OK] Status: Ready for innovation",
            "[DONE] Boot sequence completed."
        ],
        [
            "[BOOT] Initializing system...",
            "[OK] Kernel modules loaded",
            "[ERROR] GPU driver failed to load (ignored)",
            "[WARNING] Low memory detected — continuing...",
            "[OK] Connecting to Apurv Portfolio v1.0...",
            "[OK] Fetching personal data from /home/apurv",
            "[OK] Name: Apurv Musandi",
            "[OK] Skills: AI, PC Building, Health-Tech, Web Dev",
            "[DONE] Boot sequence completed."
        ],
        [
            "[BOOT] Initializing system...",
            "[OK] Kernel modules loaded",
            "[OK] Network stack configured",
            "[FAIL] DNS lookup failed — switching to offline mode",
            "[OK] Connecting to Apurv Portfolio v1.0...",
            "[WARNING] Bluetooth module unresponsive",
            "[OK] Name: Apurv Musandi",
            "[OK] Skills: AI, PC Building, Health-Tech, Web Dev",
            "[DONE] Status: Ready for innovation."
        ],
        [
            "[BOOT] Initializing system...",
            "[WARNING] Time sync failed — using local clock",
            "[OK] Loading kernel modules...",
            "[OK] Network drivers initialized",
            "[ERROR] AI module overheating — throttling performance",
            "[OK] Connecting to Apurv Portfolio v1.0...",
            "[OK] Name: Apurv Musandi",
            "[OK] Skills: AI, PC Building, Health-Tech, Web Dev",
            "[DONE] Boot sequence completed."
        ]
    ];

    const bootTextEl = document.getElementById("boot-text");
    const bootScreenEl = document.getElementById("boot-screen");
    const mainContentEl = document.getElementById("main-content");
    let lineIndex = 0;

    // Pick a random boot script
    const bootLines = bootScripts[Math.floor(Math.random() * bootScripts.length)];

    function typeLine() {
        if (lineIndex < bootLines.length) {
            let line = bootLines[lineIndex];
            
            if (line.includes("[OK]") || line.includes("[DONE]")) {
                bootTextEl.innerHTML += `<span class="ok">${line}</span>\n`;
            } else if (line.includes("[WARNING]")) {
                bootTextEl.innerHTML += `<span class="warning">${line}</span>\n`;
            } else if (line.includes("[ERROR]") || line.includes("[FAIL]")) {
                bootTextEl.innerHTML += `<span class="error">${line}</span>\n`;
            } else {
                bootTextEl.innerHTML += line + "\n";
            }

            lineIndex++;
            // Scroll to the bottom of the boot text
            bootScreenEl.scrollTop = bootScreenEl.scrollHeight;
            setTimeout(typeLine, Math.random() * 200 + 50); // Randomized typing speed
        } else {
            // Finished typing, now transition to main content
            setTimeout(() => {
                bootScreenEl.classList.add("fade-out");
                
                // After fade-out animation completes, show main content
                bootScreenEl.addEventListener('animationend', () => {
                    bootScreenEl.style.display = "none";
                    mainContentEl.style.display = "block";
                    mainContentEl.classList.add("fade-in");
                    // IMPORTANT: Initialize portfolio scripts AFTER content is visible
                    initializePortfolioScripts();
                }, { once: true });

            }, 1000); // Wait 1 second after last line
        }
    }

    // --- PORTFOLIO INITIALIZATION LOGIC ---

    // REPLACE your old initializePortfolioScripts function with this new one

function initializePortfolioScripts() {
    // --- Typing Effect Initialization ---
    const typed = new Typed('#hero-typing', {
        strings: [
            "A passionate BTech student.",
            "A tech enthusiast",
            "A passionate Software Developer.",
            "A problem solver.",
            "Hardware Enthusiast.",
            "A CSE Student."
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

    // --- START THE BOOT SEQUENCE ---
    typeLine();

});
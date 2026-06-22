document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active Class updates on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 2. Project Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to current
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const projectTags = card.getAttribute('data-tags').split(' ');
                if (filterValue === 'all' || projectTags.includes(filterValue)) {
                    card.style.display = 'flex';
                    // Trigger a small animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.4s ease';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Mock Interactive Terminal / Chart Simulation
    const terminalLines = [
        { text: 'import pandas as pd', type: 'code' },
        { text: 'import numpy as np', type: 'code' },
        { text: 'df = pd.read_csv("market_trends.csv")', type: 'code' },
        { text: 'df.dropna(inplace=True)', type: 'code' },
        { text: 'df.groupby("segment").mean()', type: 'code' },
        { text: '>> Segment analysis computed successfully.', type: 'output' },
        { text: 'SELECT SUM(sales) FROM transactions WHERE year = 2026;', type: 'sql' },
        { text: '>> €2,481,950 total revenue retrieved.', type: 'output' }
    ];

    const terminalBody = document.querySelector('.terminal-body');
    let lineIndex = 0;

    function typeTerminalLine() {
        if (lineIndex < terminalLines.length) {
            const lineData = terminalLines[lineIndex];
            const div = document.createElement('div');
            div.className = 'terminal-line';

            if (lineData.type === 'code') {
                div.innerHTML = `<span class="prompt">angsukan@analytics:~$</span> ${lineData.text}`;
            } else if (lineData.type === 'sql') {
                div.innerHTML = `<span class="prompt">SQL></span> <span class="sql-keyword">SELECT</span> <span class="sql-keyword">SUM</span>(sales) <span class="sql-keyword">FROM</span> transactions;`;
            } else {
                div.innerHTML = `<span style="color: var(--accent-primary);">${lineData.text}</span>`;
            }

            terminalBody.appendChild(div);
            lineIndex++;
            
            // Auto scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;

            // Trigger stat counters to update dynamically as terminal "processes"
            updateMockStats();

            setTimeout(typeTerminalLine, 1500);
        } else {
            // Loop code input
            setTimeout(() => {
                terminalBody.innerHTML = '';
                lineIndex = 0;
                typeTerminalLine();
            }, 5000);
        }
    }

    // Dynamic stats randomizer to simulate real-time operations
    const statRows = document.getElementById('stat-rows');
    const statAccuracy = document.getElementById('stat-accuracy');
    const statQueries = document.getElementById('stat-queries');

    function updateMockStats() {
        if (statRows) {
            const currentRows = parseInt(statRows.innerText.replace(/,/g, ''));
            const newRows = currentRows + Math.floor(Math.random() * 1250);
            statRows.innerText = newRows.toLocaleString();
        }
        if (statAccuracy) {
            const currentAcc = parseFloat(statAccuracy.innerText);
            const delta = (Math.random() - 0.5) * 0.1;
            const newAcc = Math.min(99.9, Math.max(92.0, currentAcc + delta));
            statAccuracy.innerText = newAcc.toFixed(2) + '%';
        }
        if (statQueries) {
            const currentQueries = parseInt(statQueries.innerText);
            statQueries.innerText = currentQueries + 1;
        }
    }

    // Initialize terminal simulation
    if (terminalBody) {
        typeTerminalLine();
    }

    // 4. Contact Form Simulated Action
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Message Sent! ✓';
                btn.style.background = 'linear-gradient(135deg, #27c93f, #2ecc71)';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1200);
        });
    }
});

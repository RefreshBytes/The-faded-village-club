document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const title = document.getElementById('game-title');
    const characterDisplay = document.getElementById('character-display');
    
    // Create medical monitor line
    const monitorLine = document.createElement('div');
    monitorLine.className = 'monitor-line';
    document.body.appendChild(monitorLine);

    // Enhanced medical-themed glitch function
    function triggerMedicalGlitch() {
        const duration = Math.random() * 0.5 + 0.2;
        const delay = Math.random() * 15000 + 8000;

        // Add multiple glitch effects
        body.classList.add('glitch-active');
        
        // Show monitor line during glitch
        monitorLine.style.opacity = '1';
        monitorLine.style.animation = 'none';
        monitorLine.offsetHeight; // Trigger reflow
        monitorLine.style.animation = `pulse ${duration * 1000}ms ease-in-out`;

        setTimeout(() => {
            body.classList.remove('glitch-active');
            monitorLine.style.opacity = '0';
            
            setTimeout(triggerMedicalGlitch, delay);
        }, duration * 1000);
    }

    // Typewriter effect for title
    function typeWriterEffect() {
        const originalTitle = "THE FADED REALITY";
        title.textContent = "";
        title.classList.add('typewriter');
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < originalTitle.length) {
                title.textContent += originalTitle.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                setTimeout(() => {
                    title.classList.remove('typewriter');
                }, 2000);
            }
        }, 100);
    }

    // Medical-themed hover effects
    characterDisplay.addEventListener('mouseenter', () => {
        characterDisplay.style.boxShadow = '0 0 40px rgba(0, 255, 255, 0.4)';
        characterDisplay.style.borderColor = 'var(--glitch-blue)';
        characterDisplay.classList.add('heartbeat');
    });
    
    characterDisplay.addEventListener('mouseleave', () => {
        characterDisplay.style.boxShadow = '0 0 20px rgba(139, 0, 0, 0.3)';
        characterDisplay.style.borderColor = 'var(--blood-red)';
        characterDisplay.classList.remove('heartbeat');
    });

    // Character card effects with medical theme
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 30px rgba(139, 0, 0, 0.5)';
            card.style.borderColor = 'var(--glitch-blue)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 20px rgba(139, 0, 0, 0.2)';
            card.style.borderColor = 'var(--blood-red)';
        });
    });

    // Feature card effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Download button with medical theme
    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('mouseenter', () => {
        downloadButton.style.letterSpacing = '3px';
        downloadButton.style.background = 'linear-gradient(to bottom, var(--dark-red), #002a3a)';
        downloadButton.style.borderColor = 'var(--glitch-blue)';
    });
    
    downloadButton.addEventListener('mouseleave', () => {
        downloadButton.style.letterSpacing = '1px';
        downloadButton.style.background = 'linear-gradient(to bottom, var(--dark-red), #3a0000)';
        downloadButton.style.borderColor = 'var(--blood-red)';
    });

    // Start effects
    setTimeout(typeWriterEffect, 1000);
    setTimeout(triggerMedicalGlitch, 5000);
    
    // Regular title glitches
    setInterval(() => {
        if (!title.classList.contains('typewriter')) {
            title.classList.add('glitch-active');
            setTimeout(() => {
                title.classList.remove('glitch-active');
            }, 300);
        }
    }, 12000);

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 0; transform: translateX(-100%); }
            50% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(100%); }
        }
    `;
    document.head.appendChild(style);
});
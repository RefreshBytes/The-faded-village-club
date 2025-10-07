document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const title = document.getElementById('game-title');
    const characterDisplay = document.getElementById('character-display');
    
    const monitorLine = document.createElement('div');
    monitorLine.className = 'monitor-line';
    document.body.appendChild(monitorLine);

    function triggerMedicalGlitch() {
        const duration = Math.random() * 0.5 + 0.2;
        const delay = Math.random() * 15000 + 8000;

        body.classList.add('glitch-active');
        
        monitorLine.style.opacity = '1';
        monitorLine.style.animation = 'none';
        monitorLine.offsetHeight; 
        monitorLine.style.animation = `pulse ${duration * 1000}ms ease-in-out`;

        setTimeout(() => {
            body.classList.remove('glitch-active');
            monitorLine.style.opacity = '0';
            
            setTimeout(triggerMedicalGlitch, delay);
        }, duration * 1000);
    }

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


    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

const embedContainer = document.querySelector('.embed-container');
if (embedContainer) {
    embedContainer.addEventListener('mouseenter', () => {
        embedContainer.style.boxShadow = '0 0 50px rgba(139, 0, 0, 0.8)';
        embedContainer.style.borderColor = 'var(--glitch-blue)';
    });
    
    embedContainer.addEventListener('mouseleave', () => {
        embedContainer.style.boxShadow = '0 0 40px rgba(139, 0, 0, 0.6)';
        embedContainer.style.borderColor = 'var(--blood-red)';
    });
}

const embedPlayButton = document.querySelector('.embed-play-button');
if (embedPlayButton) {
    embedPlayButton.addEventListener('mouseenter', () => {
        embedPlayButton.style.letterSpacing = '2px';
    });
    
    embedPlayButton.addEventListener('mouseleave', () => {
        embedPlayButton.style.letterSpacing = '1px';
    });
}


    setTimeout(typeWriterEffect, 1000);
    setTimeout(triggerMedicalGlitch, 5000);
    
    
    setInterval(() => {
        if (!title.classList.contains('typewriter')) {
            title.classList.add('glitch-active');
            setTimeout(() => {
                title.classList.remove('glitch-active');
            }, 300);
        }
    }, 12000);

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

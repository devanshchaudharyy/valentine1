// Randomly position photos on load
document.querySelectorAll('.floating-img').forEach(img => {
    img.style.top = Math.random() * 80 + "vh";
    img.style.left = Math.random() * 80 + "vw";
    img.style.animationDuration = (Math.random() * 10 + 15) + "s";
});

function showValentine() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
}

function showVideo() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('videoSection').classList.remove('hidden');
    const video = document.getElementById('myVideo');
    video.play();
}

// The "No" button run-away logic
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
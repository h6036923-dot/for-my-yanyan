// ⭐ Twinkling Stars
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        a: Math.random()
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.a})`;
        ctx.fill();

        star.a += Math.random() * 0.02 - 0.01;

        if (star.a < 0) star.a = 0;
        if (star.a > 1) star.a = 1;
    });

    requestAnimationFrame(animateStars);
}

animateStars();

// ❤️ Falling Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 350);

// 💌 Love Letter
function openHeart() {
    alert("My Dearest Babii ❤️\n\nEvery day with you feels like a beautiful blessing.\n\nThank you for loving me, believing in me, and staying by my side through everything.\n\nYou are my safe place, my happiness, and my favorite person.\n\nNo matter what happens, I will always choose you.\n\nI love you more than words can ever express.\n\nForever Yours,\nYour Babii ❤️");
}

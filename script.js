// 1. 生成雨滴
const container = document.getElementById("rainContainer");
const rainAmount = 120; // 雨絲數量

for (let i = 0; i < rainAmount; i++) {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  // 隨機屬性
  const left = Math.random() * 100 + "%";
  const duration = Math.random() * 0.5 + 0.5 + "s"; // 0.5s ~ 1s 下落速度
  const delay = Math.random() * -2 + "s";
  const height = Math.random() * 100 + 50 + "px"; // 雨絲長度 50px ~ 150px
  const opacity = Math.random() * 0.2; // 透明度

  drop.style.left = left;
  drop.style.animationDuration = duration;
  drop.style.animationDelay = delay;
  drop.style.height = height;
  drop.style.opacity = opacity;

  container.appendChild(drop);
}

// 2. 倒數計時器
const targetDate = new Date("2026-04-04T00:00:00").getTime();
const timerDisplay = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    timerDisplay.innerText = "活動雨中展開";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n) => n.toString().padStart(2, "0");
  timerDisplay.innerText = `${d}天 ${pad(h)}:${pad(m)}:${pad(s)}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const buttons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach((el) => {
    const nextText = el.getAttribute(`data-${lang}`);
    if (nextText) el.textContent = nextText;
  });

  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage('en');

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let width = 0;
let height = 0;
const count = 42;

function resizeCanvas(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = Array.from({length: count}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2.2 + 1.1,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22
  }));
}

function draw(){
  ctx.clearRect(0,0,width,height);

  for(const p of particles){
    p.x += p.vx;
    p.y += p.vy;

    if(p.x < -20) p.x = width + 20;
    if(p.x > width + 20) p.x = -20;
    if(p.y < -20) p.y = height + 20;
    if(p.y > height + 20) p.y = -20;

    ctx.beginPath();
    ctx.fillStyle = 'rgba(142,190,255,0.28)';
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 125){
        const alpha = (1 - dist/125) * 0.12;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(150,195,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
draw();

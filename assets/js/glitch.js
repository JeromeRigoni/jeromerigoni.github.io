(function () {
  // === RGB split glitch on hero name ===
  const heroName = document.querySelector(".hero-name[data-glitch]");

  if (heroName && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    function triggerGlitch() {
      heroName.classList.add("glitching");
      setTimeout(() => heroName.classList.remove("glitching"), 300);
    }
    function scheduleNext() {
      const delay = 7000 + Math.random() * 3500;
      setTimeout(() => {
        triggerGlitch();
        scheduleNext();
      }, delay);
    }
    setTimeout(triggerGlitch, 1800);
    scheduleNext();
  }

  // === Scramble text on .scramble elements when they appear ===
  const chars = "!<>-_\\/[]{}=+*^?#01";

  function scrambleEl(el) {
    const target = el.dataset.text || el.textContent;
    const queue = [];
    for (let i = 0; i < target.length; i++) {
      const from = "";
      const to = target[i];
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 25) + 10;
      queue.push({ from, to, start, end, char: null });
    }
    let frame = 0;
    function update() {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (frame >= item.end) {
          complete++;
          output += item.to;
        } else if (frame >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += '<span style="color:var(--cyan-dark)">' + item.char + "</span>";
        } else {
          output += item.from;
        }
      }
      el.innerHTML = output;
      if (complete < queue.length) {
        frame++;
        requestAnimationFrame(update);
      }
    }
    update();
  }

  const scrambleEls = document.querySelectorAll(".scramble");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrambleEl(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  scrambleEls.forEach((el) => observer.observe(el));
})();
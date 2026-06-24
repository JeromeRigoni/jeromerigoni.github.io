(function () {
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const tmp = document.createElement("textarea");
      tmp.value = text;
      tmp.setAttribute("readonly", "");
      tmp.style.position = "fixed";
      tmp.style.top = "0";
      tmp.style.left = "0";
      tmp.style.width = "1px";
      tmp.style.height = "1px";
      tmp.style.opacity = "0";
      document.body.appendChild(tmp);
      tmp.focus();
      tmp.select();
      tmp.setSelectionRange(0, text.length);
      try {
        const ok = document.execCommand("copy");
        document.body.removeChild(tmp);
        ok ? resolve() : reject(new Error("execCommand failed"));
      } catch (e) {
        document.body.removeChild(tmp);
        reject(e);
      }
    });
  }

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      if (!value) return;
      const feedback = btn.querySelector(".copy-feedback");
      const lang = document.documentElement.lang === "en" ? "en" : "fr";
      const done = { fr: "[copié ✓]", en: "[copied ✓]" };
      const fail = { fr: "[échec — copie manuelle]", en: "[failed — copy manually]" };
      const idle = { fr: "[clic pour copier]", en: "[click to copy]" };
      try {
        await copyText(value);
        btn.classList.add("copied");
        if (feedback) feedback.textContent = done[lang];
      } catch (e) {
        console.warn("[copy] failed:", e);
        if (feedback) feedback.textContent = fail[lang];
      }
      setTimeout(() => {
        btn.classList.remove("copied");
        if (feedback) feedback.textContent = idle[lang];
      }, 1800);
    });
  });

  const ascii = [
    "",
    "      ██╗██████╗ ",
    "      ██║██╔══██╗",
    "      ██║██████╔╝",
    " ██   ██║██╔══██╗",
    " ╚█████╔╝██║  ██║",
    "  ╚════╝ ╚═╝  ╚═╝",
    ""
  ].join("\n");

  const cCyan = "color:#00e5ff;font-family:monospace;font-size:12px;line-height:1.2;";
  const cText = "color:#e8e8e8;font-family:monospace;font-size:12px;";
  const cMute = "color:#6a6a6a;font-family:monospace;font-size:11px;";
  const cLink = "color:#00e5ff;font-family:monospace;font-size:11px;";

  console.log("%c" + ascii, cCyan);
  console.log("%cHey, curieux", cText);
  console.log("%cSi tu lis ça, t'as ouvert la console.", cMute);
  console.log("%cCode source : %chttps://github.com/JeromeRigoni", cMute, cLink);
  console.log("%cBesoin d'un alternant motivé en IA & Data ? %cblackdroby@gmail.com", cMute, cLink);
  console.log("%cstatus: open to work", cLink);
})();
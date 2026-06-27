(function () {
  const dropzone = document.getElementById("vc-dropzone");
  const fileInput = document.getElementById("vc-file");
  const status = document.getElementById("vc-status");
  const statusText = status ? status.querySelector(".vc-status-text") : null;
  const result = document.getElementById("vc-result");
  const img = document.getElementById("vc-img");
  const filename = document.getElementById("vc-filename");
  const predList = document.getElementById("vc-predictions");
  const resetBtn = document.getElementById("vc-reset");

  if (!dropzone || !fileInput || !status) return;

  let model = null;
  let loading = false;
  let currentObjectUrl = null;

  function t(key) {
    const lang = document.documentElement.lang === "en" ? "en" : "fr";
    const dict = {
      fr: {
        "idle": "[idle — en attente d'une image]",
        "loading": "[chargement du modèle ~14 Mo · une seule fois]",
        "ready": "[modèle prêt]",
        "analyzing": "[analyse en cours...]",
        "done": "[analyse terminée en {ms}ms]",
        "error": "[erreur : {msg}]",
        "invalid": "[fichier invalide — image attendue]"
      },
      en: {
        "idle": "[idle — waiting for an image]",
        "loading": "[loading model ~14 MB · one-time download]",
        "ready": "[model ready]",
        "analyzing": "[analyzing...]",
        "done": "[done in {ms}ms]",
        "error": "[error: {msg}]",
        "invalid": "[invalid file — image expected]"
      }
    };
    return (dict[lang] && dict[lang][key]) || key;
  }

  function setStatus(state, key, vars) {
    status.dataset.state = state;
    if (!statusText) return;
    let text = t(key);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.replace("{" + k + "}", vars[k]);
      });
    }
    statusText.textContent = text;
  }

  async function loadModel() {
    if (model) return model;
    if (loading) {
      while (loading) await new Promise((r) => setTimeout(r, 100));
      return model;
    }
    if (typeof mobilenet === "undefined") {
      setStatus("error", "error", { msg: "TensorFlow.js non chargé" });
      throw new Error("mobilenet undefined");
    }
    loading = true;
    setStatus("loading", "loading");
    try {
      model = await mobilenet.load({ version: 2, alpha: 1.0 });
      setStatus("ready", "ready");
      return model;
    } catch (e) {
      setStatus("error", "error", { msg: e.message || String(e) });
      throw e;
    } finally {
      loading = false;
    }
  }

  function renderPredictions(predictions) {
    predList.innerHTML = predictions
      .map((p, i) => {
        const pct = (p.probability * 100).toFixed(1);
        const rank = String(i + 1).padStart(2, "0");
        return (
          '<li class="vc-pred">' +
            '<span class="vc-pred-rank">' + rank + '</span>' +
            '<span class="vc-pred-label">' + p.className + '</span>' +
            '<span class="vc-pred-bar"><span style="width:' + pct + '%"></span></span>' +
            '<span class="vc-pred-pct">' + pct + '%</span>' +
          '</li>'
        );
      })
      .join("");
  }

  async function classify(file) {
    if (!file || !file.type || !file.type.startsWith("image/")) {
      setStatus("error", "invalid");
      return;
    }
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = URL.createObjectURL(file);
    img.src = currentObjectUrl;
    filename.textContent = file.name;
    result.hidden = false;
    predList.innerHTML = "";

    try {
      await img.decode();
      const m = await loadModel();
      setStatus("analyzing", "analyzing");
      const t0 = performance.now();
      const predictions = await m.classify(img, 5);
      const dt = Math.round(performance.now() - t0);
      renderPredictions(predictions);
      setStatus("done", "done", { ms: dt });
    } catch (e) {
      setStatus("error", "error", { msg: e.message || String(e) });
    }
  }

  dropzone.addEventListener("click", (e) => {
    if (e.target.tagName !== "INPUT") fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) classify(f);
  });

  ["dragenter", "dragover"].forEach((ev) => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("drag-over");
    });
  });
  ["dragleave", "dragend"].forEach((ev) => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("drag-over");
    });
  });
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove("drag-over");
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) classify(f);
  });

  resetBtn.addEventListener("click", () => {
    result.hidden = true;
    fileInput.value = "";
    if (currentObjectUrl) {
      URL.revokeObjectURL(currentObjectUrl);
      currentObjectUrl = null;
    }
    img.removeAttribute("src");
    setStatus(model ? "ready" : "idle", model ? "ready" : "idle");
  });

  window.addEventListener("langchange", () => {
    const state = status.dataset.state;
    if (["idle", "ready", "loading", "analyzing"].includes(state)) {
      setStatus(state, state);
    }
  });

  setStatus("idle", "idle");
})();
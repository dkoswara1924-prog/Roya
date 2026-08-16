const steps = [
  {
    title: "Pilih Fokus Pembelajaran Anda",
    subtitle: "Pilih materi utama yang ingin Anda pelajari bersama AHMAD ZAKIN JAISYURROYA:",
    type: "options",
    targetKey: "targetMateri",
    options: [
      {
        icon: "🎵",
        title: "Himpunan Lagu Nahwiyah",
        desc: "Hafalan mudah tanda Isim, Haraf & Wazan dengan irama lagu yang mengasyikkan",
        targetTab: "lvl1"
      },
      {
        icon: "📖",
        title: "Latihan Teks Arab Tanpa Syakal",
        desc: "Praktik membaca pola bangunan kalimah fi'il & isim musytaq (Arab Gundul)",
        targetTab: "latihan"
      },
      {
        icon: "📜",
        title: "Nazham Jurumiyah Bahasa Indonesia",
        desc: "Bait-bait nadhom terjemah puitis memudahkan natsar Ibnu Ajurrumi",
        targetTab: "nazham"
      }
    ]
  },
  {
    title: "Tingkat Kemampuan Bahasa Arab Saat Ini",
    subtitle: "Bantu kami menyesuaikan tingkat bimbingan belajar Anda:",
    type: "options",
    targetKey: "levelSantri",
    options: [
      {
        icon: "🌱",
        title: "Tingkat Pemula (Mubtadi')",
        desc: "Baru mengenal jenis kata isim, fi'il, dan haraf",
        targetTab: null
      },
      {
        icon: "🌿",
        title: "Tingkat Menengah (Mutawassith)",
        desc: "Sudah hafal wazan tsulatsi dan ingin melancarkan tashrif",
        targetTab: null
      },
      {
        icon: "🌳",
        title: "Tingkat Lanjutan (Mutaqaddim)",
        desc: "Fokus mendalami i'rab kalimat dan membaca kitab kuning",
        targetTab: null
      }
    ]
  },
  {
    title: "Target Waktu Muraja'ah Harian",
    subtitle: "Konsistensi adalah kunci keberkahan ilmu:",
    type: "options",
    targetKey: "targetWaktu",
    options: [
      {
        icon: "⏳",
        title: "10 - 15 Menit / Hari",
        desc: "Santai, menghafal 1 bait lagu nahwiyah per hari",
        targetTab: null
      },
      {
        icon: "⚡",
        title: "20 - 30 Menit / Hari",
        desc: "Fokus membaca pola wazan dan latihan teks gundul",
        targetTab: null
      },
      {
        icon: "🔥",
        title: "Lebih dari 30 Menit / Hari",
        desc: "Intensif mengkaji bait nazham dan latihan i'rab",
        targetTab: null
      }
    ]
  },
  {
    title: "Biodata Santri Pembelajar",
    subtitle: "Silakan masukkan nama Anda untuk membuka modul materi:",
    type: "input_name"
  }
];

let currentStep = 0;
let userChoices = {
  targetTab: "lvl1",
  levelSantri: "",
  targetWaktu: "",
  namaSantri: ""
};

function renderStep() {
  const step = steps[currentStep];
  const total = steps.length;
  const progressPercent = ((currentStep + 1) / total) * 100;

  const progressBar = document.getElementById('progressBar');
  const stepIndicator = document.getElementById('stepIndicator');
  const btnBack = document.getElementById('btnBack');
  const questionTitle = document.getElementById('questionTitle');
  const questionSub = document.getElementById('questionSub');
  const container = document.getElementById('optionsContainer');

  if (progressBar) progressBar.style.width = progressPercent + '%';
  if (stepIndicator) stepIndicator.innerText = `Langkah ${currentStep + 1} / ${total}`;
  if (btnBack) btnBack.style.visibility = currentStep > 0 ? "visible" : "hidden";
  if (questionTitle) questionTitle.innerText = step.title;
  if (questionSub) questionSub.innerText = step.subtitle;

  if (!container) return;
  container.innerHTML = "";

  if (step.type === "options") {
    step.options.forEach(opt => {
      const card = document.createElement('div');
      card.className = "option-card";
      card.innerHTML = `
        <div class="option-left">
          <div class="option-icon">${opt.icon}</div>
          <div class="option-text">
            <h4>${opt.title}</h4>
            <p>${opt.desc}</p>
          </div>
        </div>
        <div class="option-arrow">→</div>
      `;
      card.onclick = () => selectOption(opt);
      container.appendChild(card);
    });
  } else if (step.type === "input_name") {
    container.innerHTML = `
      <form onsubmit="handleFinalSubmit(event)">
        <div class="input-name-group">
          <label for="inputNama">Nama Lengkap Santri</label>
          <input type="text" id="inputNama" placeholder="Tuliskan nama Anda..." required autofocus>
        </div>
        <button type="submit" class="btn-submit-name">Mulai Belajar Sekarang ✨</button>
      </form>
    `;
  }
}

function selectOption(opt) {
  if (opt.targetTab) {
    userChoices.targetTab = opt.targetTab;
  }
  currentStep++;
  if (currentStep < steps.length) {
    renderStep();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function handleFinalSubmit(event) {
  event.preventDefault();
  const inputEl = document.getElementById('inputNama');
  const nama = inputEl ? inputEl.value.trim() : "";

  if (nama !== "") {
    localStorage.setItem('namaSantri', nama);
    localStorage.setItem('targetTabAwal', userChoices.targetTab || "lvl1");

    const quizArea = document.getElementById('quizArea');
    if (quizArea) {
      quizArea.innerHTML = `
        <div class="question-header" style="padding: 20px 0;">
          <span class="bismillah-mini">بَارَكَ اللَّهُ فِيْكُمْ</span>
          <h2 class="question-title" style="color:var(--gold-glow); margin-top:10px;">Ahlan wa Sahlan, ${nama}!</h2>
          <p class="question-sub" style="font-size:0.95rem; margin-top:8px;">Modul pembelajaran interaktif Anda sedang disiapkan...</p>
        </div>
      `;
    }

    setTimeout(() => {
      window.location.href = "materi.html";
    }, 1200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderStep();
});

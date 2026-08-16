// Struktur Pertanyaan & Pilihan Funnel Belajar
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
  targetMateri: "lvl1",
  levelSantri: "",
  targetWaktu: "",
  namaSantri: ""
};

// Render Langkah Saat Ini
function renderStep() {
  const step = steps[currentStep];
  const total = steps.length;
  const progressPercent = ((currentStep + 1) / total) * 100;

  // Update Progress & Indikator
  document.getElementById('progressBar').style.width = progressPercent + '%';
  document.getElementById('stepIndicator').innerText = `Langkah ${currentStep + 1} / ${total}`;

  // Tombol Kembali
  const btnBack = document.getElementById('btnBack');
  btnBack.style.visibility = currentStep > 0 ? "visible" : "hidden";

  // Update Judul
  document.getElementById('questionTitle').innerText = step.title;
  document.getElementById('questionSub').innerText = step.subtitle;

  // Update Pilihan
  const container = document.getElementById('optionsContainer');
  container.innerHTML = "";
  container.className = "options-container slide-in";

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
      card.onclick = () => handleSelectOption(step.targetKey, opt);
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

// Handler Saat Pilihan Diklik
function handleSelectOption(key, opt) {
  userChoices[key] = opt.title;
  if (opt.targetTab) {
    userChoices.targetTab = opt.targetTab;
  }

  currentStep++;
  if (currentStep < steps.length) {
    renderStep();
  }
}

// Handler Tombol Kembali
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

// Handler Selesai & Pindah ke Materi
function handleFinalSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById('inputNama').value.trim();
  if (nama !== "") {
    userChoices.namaSantri = nama;
    localStorage.setItem('namaSantri', nama);
    localStorage.setItem('targetTabAwal', userChoices.targetTab || "lvl1");

    const quizArea = document.getElementById('quizArea');
    quizArea.innerHTML = `
      <div class="question-header slide-in" style="padding: 20px 0;">
        <span class="bismillah-mini">بَارَكَ اللَّهُ فِيْكُمْ</span>
        <h2 class="question-title" style="color:var(--gold-glow); margin-top:10px;">Ahlan wa Sahlan, ${nama}!</h2>
        <p class="question-sub" style="font-size:0.95rem; margin-top:8px;">Modul pembelajaran interaktif Anda sedang disiapkan...</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = "materi.html";
    }, 1200);
  }
}

// Jalankan langkah pertama saat web dibuka
renderStep();

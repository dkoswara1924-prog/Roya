// Ambil Nama Santri yang tersimpan dari Halaman Depan
window.addEventListener('DOMContentLoaded', () => {
  // Ambil Nama Santri
  const savedNama = localStorage.getItem('namaSantri');
  if (savedNama) {
    const userDisplay = document.getElementById('userNamaDisplay');
    if (userDisplay) {
      userDisplay.innerText = savedNama;
    }
  }

  // Buka otomatis Tab sesuai pilihan di Funnel (Lagu / Teks Gundul / Nazham)
  const targetTab = localStorage.getItem('targetTabAwal');
  if (targetTab) {
    const targetBtn = document.querySelector(`button[onclick="switchTab('${targetTab}')"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  }
});
// Pergantian Tab Level, Latihan, Nazham, dan Kuis
function switchTab(tabId) {
  // Sembunyikan semua tab pane
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  // Nonaktifkan semua status tombol tab
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => btn.classList.remove('active'));

  // Tampilkan tab yang dipilih
  const targetPane = document.getElementById(tabId);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  // Aktifkan styling tombol yang diklik
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
}

// Buka/Tutup Tampilan Irama Lagu
function toggleMelody(btn) {
  const melodyBox = btn.nextElementSibling;
  if (!melodyBox) return;

  if (melodyBox.style.display === 'block') {
    melodyBox.style.display = 'none';
    btn.innerText = '🎵 Irama Lagu';
  } else {
    melodyBox.style.display = 'block';
    btn.innerText = '🔼 Sembunyikan Irama';
  }
}

// Logika Kuis Evaluasi
let currentScore = 0;
let answeredCount = 0;

function checkAnswer(questionNum, isCorrect, btnElement) {
  const card = document.getElementById(`q${questionNum}`);
  if (!card) return;

  const feedback = card.querySelector('.feedback');
  const allButtons = card.querySelectorAll('.options button');

  // Kunci semua tombol pada pertanyaan ini
  allButtons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    btnElement.style.background = '#27ae60';
    btnElement.style.borderColor = '#2ecc71';
    feedback.innerHTML = '✨ <span style="color:#2ecc71">Mumtaz! Jawaban Anda Benar.</span>';
    currentScore += 33.3;
  } else {
    btnElement.style.background = '#c0392b';
    btnElement.style.borderColor = '#e74c3c';
    feedback.innerHTML = '❌ <span style="color:#e74c3c">Afwan, jawaban kurang tepat. Terus semangat!</span>';
  }

  answeredCount++;

  // Jika ketiga soal telah dijawab
  if (answeredCount === 3) {
    const scoreBox = document.getElementById('scoreResult');
    const scoreText = document.getElementById('scoreText');
    if (scoreBox && scoreText) {
      scoreBox.style.display = 'block';
      const finalScore = Math.round(currentScore);
      scoreText.innerText = `Skor akhir: ${finalScore}/100. Barakallahu fiik atas kesungguhannya belajar bersama AHMAD ZAKIN JAISYURROYA!`;
    }
  }
}

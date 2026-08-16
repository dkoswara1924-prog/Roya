// Ambil Nama Santri dari Pendaftaran Halaman Depan
window.addEventListener('DOMContentLoaded', () => {
  const savedNama = localStorage.getItem('namaSantri');
  if (savedNama) {
    document.getElementById('userNamaDisplay').innerText = savedNama;
  }
});

// Pindah Antar-Tab Level & Nazham
function switchTab(tabId) {
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => btn.classList.remove('active'));

  const targetPane = document.getElementById(tabId);
  if (targetPane) {
    targetPane.classList.add('active');
  }
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

// Buka/Tutup Lirik Lagu
function toggleMelody(btn) {
  const melodyBox = btn.nextElementSibling;
  if (melodyBox.style.display === 'block') {
    melodyBox.style.display = 'none';
    btn.innerText = '🎵 Irama Lagu';
  } else {
    melodyBox.style.display = 'block';
    btn.innerText = '🔼 Sembunyikan Irama';
  }
}

// Logika Kuis
let currentScore = 0;
let answeredCount = 0;

function checkAnswer(questionNum, isCorrect, btnElement) {
  const card = document.getElementById(`q${questionNum}`);
  const feedback = card.querySelector('.feedback');
  const allButtons = card.querySelectorAll('.options button');

  allButtons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    btnElement.style.background = '#27ae60';
    btnElement.style.borderColor = '#2ecc71';
    feedback.innerHTML = '✨ <span style="color:#2ecc71">Mumtaz! Jawaban Anda Benar.</span>';
    currentScore += 33.3;
  } else {
    btnElement.style.background = '#c0392b';
    btnElement.style.borderColor = '#e74c3c';
    feedback.innerHTML = '❌ <span style="color:#e74c3c">Afwan, jawaban kurang tepat. Terus semangat mengulang!</span>';
  }

  answeredCount++;

  if (answeredCount === 3) {
    const scoreBox = document.getElementById('scoreResult');
    const scoreText = document.getElementById('scoreText');
    scoreBox.style.display = 'block';
    
    const finalScore = Math.round(currentScore);
    scoreText.innerText = `Skor akhir: ${finalScore}/100. Barakallahu fiik atas kesungguhannya belajar bersama AHMAD ZAKIN JAISYURROYA!`;
  }
}

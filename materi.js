// Ambil Nama Santri yang didaftarkan di Halaman Depan
window.addEventListener('DOMContentLoaded', () => {
  const savedNama = localStorage.getItem('namaSantri');
  if (savedNama) {
    document.getElementById('userNamaDisplay').innerText = savedNama;
  }
});

// Sistem Pergantian Tab Level
function switchTab(tabId) {
  // Matikan semua tab pane
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  // Matikan active button
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => btn.classList.remove('active'));

  // Aktifkan tab yang dipilih
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// Toggle Tampilkan Lirik & Melodi Lagu
function toggleMelody(btn) {
  const melodyBox = btn.nextElementSibling;
  if (melodyBox.style.display === 'block') {
    melodyBox.style.display = 'none';
    btn.innerText = '🎵 Tampilkan Irama Lagu';
  } else {
    melodyBox.style.display = 'block';
    btn.innerText = '🔼 Sembunyikan Irama Lagu';
  }
}

// Logika Kuis Interaktif
let currentScore = 0;
let answeredCount = 0;

function checkAnswer(questionNum, isCorrect, btnElement) {
  const card = document.getElementById(`q${questionNum}`);
  const feedback = card.querySelector('.feedback');
  const allButtons = card.querySelectorAll('.options button');

  // Kunci tombol agar tidak bisa klik berkali-kali
  allButtons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    btnElement.style.background = '#27ae60';
    btnElement.style.borderColor = '#2ecc71';
    feedback.innerHTML = '✨ <span style="color:#2ecc71">Mumtaz! Jawaban Anda Benar.</span>';
    currentScore += 33;
  } else {
    btnElement.style.background = '#c0392b';
    btnElement.style.borderColor = '#e74c3c';
    feedback.innerHTML = '❌ <span style="color:#e74c3c">Afwan, jawaban kurang tepat. Terus semangat belajar!</span>';
  }

  answeredCount++;

  // Jika semua soal selesai dikerjakan
  if (answeredCount === 3) {
    const scoreBox = document.getElementById('scoreResult');
    const scoreText = document.getElementById('scoreText');
    scoreBox.style.display = 'block';
    
    if (currentScore > 90) currentScore = 100;
    scoreText.innerText = `Skor akhir Anda: ${currentScore}/100. Barakallahu fiik atas semangat belajarnya bersama AHMAD ZAKIN JAISYURROYA!`;
  }
}
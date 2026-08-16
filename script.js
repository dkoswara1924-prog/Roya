let count = 1452;

function bukaModal() {
  const modal = document.getElementById('modalDialog');
  modal.style.display = 'flex';
  
  const btn = document.getElementById('btnKlik');
  if (btn) {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  }
}

function tutupModal() {
  const modal = document.getElementById('modalDialog');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modalDialog');
  if (event.target === modal) {
    tutupModal();
  }
};

function handleDaftar(event) {
  event.preventDefault();
  const namaInput = document.getElementById('nama').value;
  
  if (namaInput.trim() !== "") {
    localStorage.setItem('namaSantri', namaInput);
    window.location.href = "materi.html";
  }
}

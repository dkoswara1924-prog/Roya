let count = 1452;

function bukaModal() {
  const modal = document.getElementById('modalDialog');
  modal.style.display = 'flex';
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
    count++;
    document.getElementById('santriCount').innerText = count.toLocaleString('id-ID');
    
    alert(`Barakallahu fiik, ${namaInput}! Selamat bergabung dalam pembelajaran Bahasa Arab bersama AHMAD ZAKIN JAISYURROYA ✨`);
    
    document.getElementById('daftarForm').reset();
    tutupModal();
  }
}
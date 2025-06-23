const resep = [
  { judul: "Nasi Goreng Spesial", kategori: "Makanan Utama", tingkat: "Mudah", deskripsi: "Nasi goreng dengan telur dan ayam." },
  { judul: "Sate Ayam", kategori: "Lauk", tingkat: "Sedang", deskripsi: "Sate ayam dengan bumbu kacang." },
  { judul: "Pancake", kategori: "Dessert", tingkat: "Mudah", deskripsi: "Pancake manis dengan sirup maple." },
];

function tampilkanResep(data) {
  const container = document.getElementById("daftar-resep");
  container.innerHTML = "";
  data.forEach((r, i) => {
    container.innerHTML += `
      <div class="card">
        <h2>${r.judul}</h2>
        <p><strong>Kategori:</strong> ${r.kategori}</p>
        <p><strong>Tingkat:</strong> ${r.tingkat}</p>
        <p>${r.deskripsi}</p>
        <button onclick="bookmark(${i})">Bookmark</button>
        <button onclick="bagikan('${r.judul}')">Bagikan</button>
      </div>`;
  });
}

function bookmark(i) {
  alert("Resep dibookmark: " + resep[i].judul);
}
function bagikan(judul) {
  if (navigator.share) {
    navigator.share({ title: "Lihat Resep", text: judul, url: window.location.href });
  } else alert("Browser ini tidak mendukung fitur share.");
}

document.getElementById("cari").addEventListener("input", function() {
  tampilkanResep(resep.filter(r => r.judul.toLowerCase().includes(this.value.toLowerCase())));
});

tampilkanResep(resep);

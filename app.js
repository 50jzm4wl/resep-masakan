const resep = [
  {
    judul: "Nasi Goreng Spesial",
    kategori: "Makanan Utama",
    tingkat: "Mudah",
    deskripsi: "Nasi goreng dengan telur dan ayam.",
    gambar: "assets/nasi-goreng.jpg",
    rating: 0,
    ulasan: []
  },
  {
    judul: "Sate Ayam",
    kategori: "Lauk",
    tingkat: "Sedang",
    deskripsi: "Sate ayam dengan bumbu kacang.",
    gambar: "assets/sate-ayam.jpg",
    rating: 0,
    ulasan: []
  },
  {
    judul: "Pancake",
    kategori: "Dessert",
    tingkat: "Mudah",
    deskripsi: "Pancake manis dengan sirup maple.",
    gambar: "assets/pancake.jpg",
    rating: 0,
    ulasan: []
  },
  {
    judul: "Rendang Padang",
    kategori: "Lauk",
    tingkat: "Sulit",
    deskripsi: "Daging sapi dimasak lama dengan bumbu rempah khas Minang.",
    gambar: "assets/rendang.jpg",
    rating: 0,
    ulasan: []
  },
  {
    judul: "Gado-Gado",
    kategori: "Sayuran",
    tingkat: "Sedang",
    deskripsi: "Sayuran segar dengan saus kacang dan kerupuk.",
    gambar: "assets/gado-gado.jpg",
    rating: 0,
    ulasan: []
  }
];

function tampilkanResep(data) {
  const container = document.getElementById("daftar-resep");
  container.innerHTML = "";
  data.forEach((r, i) => {
    let stars = "";
    for (let s = 1; s <= 5; s++) {
      stars += `<span class="star" onclick="beriRating(${i}, ${s})">${s <= r.rating ? "★" : "☆"}</span>`;
    }

    container.innerHTML += `
      <div class="card">
        <img src="${r.gambar}" alt="${r.judul}">
        <h2>${r.judul}</h2>
        <p><strong>Kategori:</strong> ${r.kategori}</p>
        <p><strong>Tingkat:</strong> ${r.tingkat}</p>
        <p>${r.deskripsi}</p>
        <div class="rating">Rating: ${stars}</div>
        <button onclick="bookmark(${i})">Bookmark</button>
        <button onclick="bagikan('${r.judul}')">Bagikan</button>
        <div class="ulasan">
          <input type="text" id="ulasan-${i}" placeholder="Tulis ulasan...">
          <button onclick="kirimUlasan(${i})">Kirim Ulasan</button>
          <ul>${r.ulasan.map(u => `<li>${u}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  });
}

function bookmark(i) {
  alert("Resep dibookmark: " + resep[i].judul);
}

function bagikan(judul) {
  if (navigator.share) {
    navigator.share({ title: "Lihat Resep", text: judul, url: window.location.href });
  } else {
    alert("Browser ini tidak mendukung fitur share.");
  }
}

function beriRating(index, rating) {
  resep[index].rating = rating;
  tampilkanResep(resep);
}

function kirimUlasan(i) {
  const input = document.getElementById(`ulasan-${i}`);
  if (input.value.trim() !== "") {
    resep[i].ulasan.push(input.value.trim());
    input.value = "";
    tampilkanResep(resep);
  }
}

document.getElementById("cari").addEventListener("input", function () {
  tampilkanResep(resep.filter(r => r.judul.toLowerCase().includes(this.value.toLowerCase())));
});

tampilkanResep(resep);

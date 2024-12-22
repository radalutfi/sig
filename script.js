// script.js
// Fungsi untuk menampilkan data JSON dalam tabel HTML
function displayData(data) {
  const tbody = document.getElementById("data-body");
  tbody.innerHTML = ""; // Menghapus konten lama jika ada

  // Menambahkan baris untuk setiap item dalam data
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.No}</td>
        <td>${item.Kecamatan}</td>
        <td>${item.Kebakaran}</td>
        <td>${item.Longsor}</td>
        <td>${item.Angin}</td>
        <td>${item.Jumlah}</td>
      `;
    tbody.appendChild(row);
  });
}

// Memanggil fungsi displayData setelah file data.js dimuat
window.onload = function () {
  displayData(data); // Memanggil data yang telah didefinisikan dalam file data.js
};

function displayData(data) {
  const tbody = document.getElementById("data-body");
  tbody.innerHTML = ""; 

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

window.onload = function () {
  displayData(data); 
};

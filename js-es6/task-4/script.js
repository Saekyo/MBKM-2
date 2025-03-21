class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }
}

class SistemTransportasi {
  constructor() {
    this.pelangganList = [];
  }

  tambahPelanggan(pelanggan) {
    this.pelangganList.push(pelanggan);
  }

  tampilkanPelanggan() {
    const tableBody = document.querySelector("#pelangganTable tbody");
    tableBody.innerHTML = "";

    this.pelangganList.forEach((pelanggan, index) => {
      const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${pelanggan.nama}</td>
                    <td>${pelanggan.nomorTelepon}</td>
                    <td>${pelanggan.kendaraanDisewa}</td>
                </tr>
            `;
      tableBody.innerHTML += row;
    });
  }
}

const sistem = new SistemTransportasi();

document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const kendaraan = document.getElementById("kendaraan").value;

  if (nama && telepon && kendaraan) {
    const pelangganBaru = new Pelanggan(nama, telepon, kendaraan);
    sistem.tambahPelanggan(pelangganBaru);
    sistem.tampilkanPelanggan();

    this.reset();
  }
});

// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Monitor", harga: 2000000 },
    { id: 5, nama: "Keyboard", harga: 500000 },
  ];
  
  // **Event Handler**
  const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (...id) => hapusProduk(...id),
    tampil: () => tampilkanProduk(),
  };
  
  // **Menambahkan Produk dengan Spread Operator**
  function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
  }
  
  // **Menghapus Produk dengan Rest Parameter**
  function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
  }
  
  // **Menampilkan Produk dengan Destructuring**
  function tampilkanProduk() {
    console.log("=== Daftar Produk ===");
    produkList.forEach(({ id, nama, harga }) => {
      console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
    });
  }
  
  // Simulasi interaksi
  tampilkanProduk(); // Awal
  tambahProduk(6, "Tablet", 7000000); // Tambah
  tampilkanProduk(); // Setelah tambah
  hapusProduk(2); // Hapus ID 2
  tampilkanProduk(); // Setelah hapus
  
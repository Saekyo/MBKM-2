import users from './data.mjs';

const index = () => {
  console.log("=== Daftar Pengguna ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = (user) => {
  users.push(user);
};

const destroy = () => {
  users.pop();
};

export { index, store, destroy };

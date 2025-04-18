function BestSeller() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Buku Terlaris</h1>
            <p className="lead text-body-secondary">
              Temukan buku-buku pilihan yang paling banyak diminati pembaca.
              Cocok untuk dijadikan referensi bacaanmu selanjutnya!
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">
                Lihat Detail
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Koleksi Lainnya
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSeller;

export default class HomePage {
  async render() {
    return `

    <!-- Section -->
    <section class="land">
      <section class="py-5 text-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 text-start">
              <h1 class="display-5 fw-bold text-dark">Rekomendasi <span class="text-warning">HP</span></h1>
              <p class="lead">Temukan smartphone terbaik sesuai kebutuhanmu hanya dengan satu klik!</p>
              <a href="#/input" class="btn btn-gold land btn-lg mt-3">Coba Sekarang</a>
            </div>
            <div class="col-lg-6">
              <img src="./images/hp1.png" class="hero-image land" alt="Smartphone">
            </div>
          </div>
        </div>
    </section>


      <!-- FITUR -->
      <section class="py-5" id="fitur" style="background: linear-gradient(135deg, #fff 0%, #F6EBDA 100%);">
        <div class="container text-center">
          <h2 class="section-title land mb-5 fw-bold">Bagaimana Cara Kerjanya?</h2>
          <div class="row g-4 justify-content-center">

            <!-- Step 1 -->
            <div class="col-md-4">
              <div class="p-4 rounded-4 shadow-lg bg-white position-relative h-100 hover-scale land transition" style="backdrop-filter: blur(8px);">
                <img src="https://cdn-icons-png.flaticon.com/512/2089/2089791.png" class="mb-3 step-icon land animated-icon land" alt="Input" style="width: 70px;">
                <h5 class="fw-bold">Input Kebutuhan</h5>
                <p class="text-muted">Isi kebutuhan seperti budget, kamera, baterai, dan performa.</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="col-md-4">
              <div class="p-4 rounded-4 shadow-lg bg-white position-relative h-100 hover-scale land transition" style="backdrop-filter: blur(8px);">
                <img src="https://cdn-icons-png.flaticon.com/512/3838/3838673.png" class="mb-3 step-icon land animated-icon land" alt="ML" style="width: 70px;">
                <h5 class="fw-bold">Proses ML Cerdas</h5>
                <p class="text-muted">Algoritma machine learning kami akan mencari HP paling cocok.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="col-md-4">
              <div class="p-4 rounded-4 shadow-lg bg-white position-relative h-100 hover-scale land transition" style="backdrop-filter: blur(8px);">
                <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" class="mb-3 step-icon land animated-icon land" alt="Rekomendasi" style="width: 70px;">
                <h5 class="fw-bold">Rekomendasi & Review</h5>
                <p class="text-muted">Tampilkan HP terbaik dengan ulasan dari Tokopedia & YouTube.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <!-- REKOMENDASI -->
      <section class="py-5" id="rekomendasi">
        <div class="container">
          <h2 class="text-center section-title land mb-5">Contoh Rekomendasi</h2>
          <div class="container p-4 rounded-4 shadow-lg" style="background: linear-gradient(to right, #F6EBDA 60%, #F9D9AA 100%);">
            <div class="row align-items-center">
              <!-- Gambar HP -->
              <div class="col-lg-5 text-center">
                <img src="./images/hp2.png" alt="Phone Model A" class="img-fluid rounded-4 shadow-sm" style="max-height: 360px;">
              </div>

              <!-- Informasi & Review -->
              <div class="col-lg-7">
                <h3 class="fw-bold text-dark">Phone Model A</h3>
                <h5 class="text-danger mb-4">Rp. 2.600.000</h5>

                <div class="row mb-3">
                  <div class="col-6 mb-2">
                    <i class="fa fa-microchip me-2" style="color:#FF902A;"></i> RAM: <b>4GB</b>
                  </div>
                  <div class="col-6 mb-2">
                    <i class="fa fa-hdd me-2" style="color:#FFD28F;"></i> Storage: <b>128GB</b>
                  </div>
                  <div class="col-6 mb-2">
                    <i class="fa fa-camera me-2"></i> Kamera: <b>12MP</b>
                  </div>
                  <div class="col-6 mb-2">
                    <i class="fa fa-battery-full me-2"></i> Baterai: <b>4000mAh</b>
                  </div>
                </div>

                <hr>
                <p class="text-muted fst-italic">“Smartphone ini cocok untuk pelajar dan pekerja kantoran yang butuh performa cukup dengan harga terjangkau. Baterainya tahan lama, desainnya elegan, dan cukup oke untuk foto-foto sehari-hari.”</p>

                <p class="fw-semibold mb-0">– xxx, Tech Reviewer YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- TESTIMONI -->
      <section class="py-5 bg-white">
        <div class="container">
          <h2 class="section-title land text-center mb-5">Apa Kata Mereka?</h2>

          <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner text-center">

              <!-- Testimoni 1 -->
              <div class="carousel-item active">
                <blockquote class="blockquote">
                  <p class="fs-5 fst-italic">"Sangat membantu! Sekali input, langsung dapet rekomendasi HP yang pas banget buat aku."</p>
                  <footer class="blockquote-footer">xxx, Mahasiswa</footer>
                </blockquote>
              </div>

              <!-- Testimoni 2 -->
              <div class="carousel-item">
                <blockquote class="blockquote">
                  <p class="fs-5 fst-italic">"Fitur machine learning-nya canggih! Rekomendasinya akurat, dan review dari YouTube sangat membantu sebelum beli."</p>
                  <footer class="blockquote-footer">xxx, Karyawan Swasta</footer>
                </blockquote>
              </div>

              <!-- Testimoni 3 -->
              <div class="carousel-item">
                <blockquote class="blockquote">
                  <p class="fs-5 fst-italic">"Desain website-nya elegan, user friendly banget. Gak nyangka bisa nemu HP sesuai budget dan kebutuhan."</p>
                  <footer class="blockquote-footer">xxx, Content Creator</footer>
                </blockquote>
              </div>

            </div>

            <!-- Nav -->
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span class="visually-hidden">Sebelumnya</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span class="visually-hidden">Berikutnya</span>
            </button>
          </div>
        </div>

      <section class="container">
        <h1>Home Page</h1>
        <br>
        <p>ini adalah menu home.....</p>
        <br>
        <a href="#/result">Menu result</a>
        <br><br>
        <a href="#/review">Menu Review</a>
        <br><br>
        <a href="#/brandharga">filter brand harga</a>
        <br><br>
        <a href="#/confirmation">Confirmation page</a>
        <br><br>
        <a href="#/input">Input page</a>

      </section>
    </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}

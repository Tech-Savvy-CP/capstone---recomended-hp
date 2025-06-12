export default class InputPage {
  async render() {
    return `
        <section class="hero-keren">
            <div class="container">
                <div class="hero-content-keren">
                    <h1 class="animate-hero-title">Smartphone Impianmu, Selangkah Lagi!</h1>
                    <p class="lead animate-hero-subtitle">Mulai dengan ceritakan apa yang kamu cari, biarkan kami memandu menemukan yang paling pas dan paling <span class="text-highlight-gold">WOW</span> untukmu!</p>
                </div>
                <div class="hero-image-container-3d">
                    <img src="./images/ponsel.png" alt="Smartphone Unggulan" class="hero-image-3d-effect">
                    <img src="./images/ponsel.png" alt="Deco 1" class="hero-image-deco" style="--i:1;">
                    <img src="./images/ponsel.png" alt="Deco 2" class="hero-image-deco" style="--i:2;">
                </div>
            </div>
        </section>

        <section class="deskripsi-pengguna-section-keren py-5">
            <div class="container">
                <div class="deskripsi-form-box">
                    <div class="text-center mb-4">
                        <i class="fas fa-lightbulb fa-3x mb-3 icon-motivasi-keren"></i>
                        <h2>Langkah Awal: Apa Smartphone Idamanku?</h2>
                        <p class="text-muted lead-sm">Semakin detail kamu bercerita, semakin akurat kami membantu.</p>
                    </div>
                    
                    <form id="formDeskripsiPenggunaDiIndex">
                        <div class="row g-lg-4 g-3">
                            <div class="col-md-6 mb-3">
                                <label for="kegunaanUtama" class="form-label-keren"><i class="fas fa-tasks me-2"></i>Untuk Apa Smartphone-mu Nanti?</label>
                                <select class="form-select form-select-lg input-keren" id="kegunaanUtama" name="kegunaan_utama_deskripsi" required>
                                    <option value="" selected disabled>-- Pilih Kegunaan Utama --</option>
                                    <option value="fotografi">Fotografi & Videografi Profesional</option>
                                    <option value="gaming">Gaming Berat & Kompetitif</option>
                                    <option value="produktivitas">Produktivitas & Kerja Mobile</option>
                                    <option value="media_sosial">Konten Kreator & Media Sosial</option>
                                    <option value="sehari_hari">Aktivitas Sehari-hari & Komunikasi</option>
                                    <option value="lainnya_kegunaan">Lainnya (Jelaskan)</option>
                                </select>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="prioritasFitur" class="form-label-keren"><i class="fas fa-star me-2"></i>Fitur Apa yang Paling Penting?</label>
                                <select class="form-select form-select-lg input-keren" id="prioritasFitur" name="prioritas_fitur_deskripsi" required>
                                    <option value="" selected disabled>-- Pilih Prioritas Fitur --</option>
                                    <option value="kamera">Kualitas Kamera Juara</option>
                                    <option value="performa">Performa Anti Lemot</option>
                                    <option value="baterai">Baterai Awet Seharian Penuh</option>
                                    <option value="layar">Layar Jernih Memanjakan Mata</option>
                                    <option value="desain">Desain Mewah & Build Kokoh</option>
                                </select>
                            </div>
                            
                            <div class="col-12 mb-3">
                                <label for="deskripsiDetail" class="form-label-keren"><i class="fas fa-comment-dots me-2"></i>Cerita Tambahan (Opsional, tapi membantu!)</label>
                                <textarea class="form-control form-control-lg input-keren" id="deskripsiDetail" name="deskripsi_detail_pengguna" rows="3" placeholder="Misal: Sering dipakai outdoor jadi butuh layar cerah, suka brand X karena..." required></textarea>
                            </div>
                            
                            <div class="col-12 mt-3 text-center">
                                <button type="submit" id="tombolLanjutkanKeFilterDariIndex" class="btn btn-primary btn-lg btn-keren-submit">
                                    <i class="fas fa-arrow-circle-right me-2"></i>Langkah Berikutnya: Atur Filter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section class="brands-keren py-5">
            <div class="container">
                <h2 class="text-center mb-5 section-title-keren-alt">Brand Terpercaya Pilihan Pengguna</h2>
                <div class="brand-logos-keren">
                    <div class="brand-logo-item"><img src="./images/samsung-logo.jpg" alt="Logo Samsung"></div>
                    <div class="brand-logo-item"><img src="./images/ipon.png" alt="Logo Apple iPhone"></div>
                    <div class="brand-logo-item"><img src="./images/xiaomi.png" alt="Logo Xiaomi"></div>
                    <div class="brand-logo-item"><img src="./images/oppo.webp" alt="Logo Oppo"></div>
                </div>
            </div>
        </section>

        <style>
          /* CSS Reset & Font Global */
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          body {
              font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
              background-color: #FDFBF5; 
              color: #4A3B31; 
              line-height: 1.7; 
              padding-top: 75px; 
              display: flex; 
              flex-direction: column; 
              min-height: 100vh; 
          }
          main {
              flex-grow: 1; 
              width: 100%;
          }
          footer {
              flex-shrink: 0; 
          }

          .container {
              width: 90%;
              max-width: 1140px; 
              margin: 0 auto;
              padding: 0 15px;
          }

          /* --- UTILITIES & ANIMATIONS --- */
          .text-highlight-gold {
              color: #B08D57;
              font-weight: 600;
          }
          .icon-motivasi-keren {
              color: #8B4513; 
              opacity: 0.9;
              margin-bottom: 0.75rem !important;
          }
          .btn-keren-submit {
              background-image: linear-gradient(to right, #8B4513 0%, #A0522D 50%, #8B4513 100%);
              background-size: 200% auto; 
              border: none;
              color: white;
              padding: 14px 35px; 
              font-size: 1.1rem;
              font-weight: 600; 
              letter-spacing: 0.5px;
              border-radius: 50px; 
              box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3); 
              transition: all 0.4s ease-out;
              text-transform: uppercase;
          }
          .btn-keren-submit:hover, .btn-keren-submit:focus {
              transform: translateY(-4px) scale(1.02); 
              box-shadow: 0 8px 20px rgba(139, 69, 19, 0.4);
              background-position: right center; 
              color: white; 
          }
          .btn-keren-submit i { 
              transition: transform 0.3s ease;
              margin-right: 8px; 
          }
          .btn-keren-submit:hover i {
              transform: translateX(4px) rotate(10deg); 
          }

          .input-keren {
              border-radius: 8px !important;
              border: 1px solid #D2B48C !important;
              padding-top: 0.75rem !important; 
              padding-bottom: 0.75rem !important;
              transition: all 0.3s ease;
              background-color: #fff; 
          }
          .input-keren:focus {
              border-color: #8B4513 !important;
              box-shadow: 0 0 0 0.25rem rgba(139, 69, 19, 0.15) !important;
              background-color: #fff !important; 
          }
          .form-label-keren {
              color: #6F4E37; 
              font-weight: 500;
              margin-bottom: 0.5rem;
          }
          .form-label-keren i {
              color: #A0522D; 
          }

          /* --- HEADER --- */
          header {
              background-color: #F6EBDA; 
              position: fixed;
              width: 100%;
              top: 0;
              left: 0;
              z-index: 1030; 
      
              box-shadow: 0 3px 8px rgba(0,0,0,0.1); 
          }
          .navbar {
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          .logo {
              font-size: 1.7rem; 
              font-weight: 700; 
              color: white;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 0.5px;
          }
          .logo i {
              margin-left: 5px;
              color: #FFD700; 
          }
          .menu {
              display: flex;         
              list-style-type: none; 
              margin: 0;             
              padding: 0;            
              align-items: center;   
          }
          .menu li {
              margin-left: 30px;     
          }
          .menu li:first-child {
              margin-left: 0;        
          }
          .menu a {
              text-decoration: none;       
              color: rgba(255, 255, 255, 0.85); 
              font-weight: 500;          
              font-size: 0.95rem;        
              transition: color 0.3s ease, opacity 0.3s ease; 
              text-transform: capitalize;  
              padding-bottom: 8px;       
              position: relative;        
          }
          .menu a::after { 
              content: '';
              position: absolute;
              bottom: 0;                 
              left: 0;
              width: 0;                  
              height: 2px;               
              background-color: #FFD700; 
              transition: width 0.3s ease-in-out; 
          }
          .menu a:hover, 
          .menu a.active { 
              color: white;              
              opacity: 1;
          }
          .menu a:hover::after,
          .menu a.active::after {
              width: 100%;               
          }

          /* --- HERO SECTION (INDEX.HTML) --- */
          .hero-keren {
              padding: 80px 0; 
              background: linear-gradient(135deg, #F6EBDA 0%, #EADDCA 100%);
              color: #3A2D27;
              overflow: hidden; 
              position: relative; 
          }
          .hero-keren .container {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative; 
              z-index: 2;
          }
          .hero-content-keren {
              flex-basis: 55%; 
              padding-right: 30px; 
          }
          .animate-hero-title { 
              font-size: 3.2rem; 
              font-weight: 800; 
              line-height: 1.15;
              color: #4A3B31;
              margin-bottom: 20px;
              animation: slideInFromLeft 1s ease-out;
          }
          .animate-hero-subtitle { 
              font-size: 1.2rem; 
              line-height: 1.8;
              color: #5a4a42;
              margin-bottom: 30px;
              animation: slideInFromLeft 1s ease-out 0.2s; 
              animation-fill-mode: backwards; 
          }
          .hero-image-container-3d {
              flex-basis: 40%;
              position: relative;
              perspective: 1000px; 
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 350px; 
          }
          .hero-image-3d-effect {
              max-width: 85%; 
              height: auto;
              border-radius: 25px; 
              box-shadow: 0 15px 35px rgba(74, 59, 49, 0.25);
              transform: rotateY(-15deg) rotateX(5deg); 
              transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); 
              position: relative; 
              z-index: 5; 
              animation: floatSlightly 8s ease-in-out infinite; 
          }
          .hero-image-container-3d:hover .hero-image-3d-effect {
              transform: rotateY(0deg) rotateX(0deg) scale(1.05); 
          }
          .hero-image-deco {
              position: absolute;
              opacity: 0.3;
              filter: blur(1px);
              transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .hero-image-deco[style*="--i:1"] { 
              width: 60%; 
              top: -10%;
              left: -15%;
              transform: translateZ(-80px) rotateY(-25deg);
              z-index: 1;
          }
          .hero-image-deco[style*="--i:2"] { 
              width: 50%;
              bottom: -12%;
              right: -10%;
              transform: translateZ(-50px) rotateY(20deg);
              z-index: 1;
          }
          .hero-image-container-3d:hover .hero-image-deco[style*="--i:1"] {
              transform: translateZ(-100px) rotateY(-30deg) translateX(-10px);
          }
          .hero-image-container-3d:hover .hero-image-deco[style*="--i:2"] {
              transform: translateZ(-70px) rotateY(25deg) translateX(10px);
          }

          @keyframes slideInFromLeft {
              0% { transform: translateX(-50px); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes floatSlightly { 
              0%, 100% { transform: translateY(0) rotateY(-15deg) rotateX(5deg); }
              50% { transform: translateY(-10px) rotateY(-12deg) rotateX(3deg); }
          }

          /* --- SECTION DESKRIPSI PENGGUNA (INDEX.HTML) --- */
          .deskripsi-pengguna-section-keren {
              background-color: #FFFFFF; 
              border-top: 1px solid #EADDCA;
              border-bottom: 1px solid #EADDCA;
              padding-top: 50px; 
              padding-bottom: 50px; 
          }
          .deskripsi-form-box { 
              background-color: #FDFBF5; 
              padding: 40px; 
              border-radius: 15px; 
              box-shadow: 0 8px 25px rgba(0,0,0,0.08);
              max-width: 800px; 
              margin: 0 auto; 
          }
          .deskripsi-form-box h2 {
              font-weight: 700;
              color: #4A3B31;
          }
          .deskripsi-form-box .lead-sm { 
              font-size: 1rem;
              color: #6F4E37;
          }

          /* --- BRANDS SECTION (INDEX.HTML) --- */
          .brands-keren {
              padding: 60px 0;
              background-color: #F6EBDA; 
          }
          .section-title-keren-alt { 
              font-weight: 700;
              color: #4A3B31;
              position: relative;
              display: inline-block;
              padding-bottom: 15px;
              font-size: 2rem;
          }
          .section-title-keren-alt::after { 
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 80px;
              height: 4px;
              background-image: linear-gradient(to right, #B08D57, #8B4513); 
              border-radius: 2px;
          }
          .brand-logos-keren {
              display: flex;
              align-items: center;
              justify-content: space-around; 
              gap: 20px; 
              flex-wrap: wrap; 
          }
          .brand-logo-item {
              padding: 15px;
              background-color: #fff;
              border-radius: 10px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.06);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              min-width: 120px; 
              text-align: center;
          }
          .brand-logo-item img {
              height: 45px; 
              object-fit: contain; 
              filter: grayscale(50%); 
              transition: filter 0.3s ease;
          }
          .brand-logo-item:hover {
              transform: translateY(-5px);
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .brand-logo-item:hover img {
              filter: grayscale(0%); 
          }
        </style>

      `;
  }

  async afterRender() {
    // const searchBtn = document.getElementById("searchBtn");
    // const exampleText = document.querySelector(".example-text");
    // const userInput = document.getElementById("userInput");

    // if (searchBtn && userInput) {
    //   searchBtn.addEventListener("click", () => {
    //     const inputText = userInput.value.trim();
    //     if (inputText) {
    //       console.log("Searching for:", inputText);
    //       // Add your search logic here
    //     }
    //   });
    // }

    // // Copy example text when clicked
    // if (exampleText && userInput) {
    //   exampleText.addEventListener("click", () => {
    //     userInput.value = exampleText.textContent;
    //     userInput.focus();
    //   });
    // }

    // if (searchBtn && userInput) {
    //   searchBtn.addEventListener("click", () => {
    //     const inputText = userInput.value.trim();
    //     if (inputText) {
    //       console.log("Searching for:", inputText);
    //       // Navigate to the next page
    //       window.location.hash = "/brandharga"; // Change the URL to /brandharga
    //     }
    //   });
    // }

    // // Copy example text when clicked
    // if (exampleText && userInput) {
    //   exampleText.addEventListener("click", () => {
    //     userInput.value = exampleText.textContent;
    //     userInput.focus();
    //   });
    // }

     // --- FUNGSI UTILITAS ---
    function formatKeRupiah(nilaiAngkaStr) {
        if (nilaiAngkaStr === null || nilaiAngkaStr === undefined || nilaiAngkaStr === "") return 'N/A';
        const nilaiAngka = parseFloat(nilaiAngkaStr);
        if (isNaN(nilaiAngka)) return 'N/A';
        
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(nilaiAngka);
    }

    // --- LOGIKA UNTUK HALAMAN INDEX.HTML (FORM DESKRIPSI) ---
    const formDeskripsiPenggunaIndex = document.getElementById('formDeskripsiPenggunaDiIndex');
    const tombolLanjutkanKeFilterIndex = document.getElementById('tombolLanjutkanKeFilterDariIndex');

    if (formDeskripsiPenggunaIndex && tombolLanjutkanKeFilterIndex) {
        tombolLanjutkanKeFilterIndex.addEventListener('click', function(event) {
            event.preventDefault(); 

            const kegunaanUtama = document.getElementById('kegunaanUtama').value;
            const prioritasFitur = document.getElementById('prioritasFitur').value;
            const deskripsiDetail = document.getElementById('deskripsiDetail').value;
            
            const queryParams = new URLSearchParams({
                kegunaan: kegunaanUtama,
                prioritas: prioritasFitur,
                detail: deskripsiDetail
            }).toString();

            // window.location.href = `pencarian.html?${queryParams}`;
            window.location.href = `#/brandharga`;
        });
    }
  }
}

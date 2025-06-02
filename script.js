document.addEventListener('DOMContentLoaded', function() {

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

            window.location.href = `pencarian.html?${queryParams}`;
        });
    }

    // --- LOGIKA UNTUK HALAMAN PENCARIAN.HTML (FILTER SMARTPHONE) ---
    const priceRangeSliderFilterPage = document.getElementById('priceRangeFilterPage'); 
    const selectedPriceDisplayFilterPage = document.getElementById('selectedPriceValueFilterPage');
    const selectAllPriceCheckbox = document.getElementById('selectAllPriceRange');

    if (priceRangeSliderFilterPage && selectedPriceDisplayFilterPage) {
        // Inisialisasi tampilan harga awal
        selectedPriceDisplayFilterPage.textContent = formatKeRupiah(priceRangeSliderFilterPage.value);
        
        // Event listener untuk slider
        priceRangeSliderFilterPage.addEventListener('input', function() {
            selectedPriceDisplayFilterPage.textContent = formatKeRupiah(this.value);
            // Jika slider digeser, uncheck checkbox "semua harga"
            if(selectAllPriceCheckbox && selectAllPriceCheckbox.checked) {
                selectAllPriceCheckbox.checked = false;
            }
            priceRangeSliderFilterPage.disabled = false; // Pastikan slider aktif
        });

        // Event listener untuk checkbox "Pilih Semua Rentang Harga"
        if(selectAllPriceCheckbox) {
            selectAllPriceCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    // Jika dicentang, set nilai slider ke min dan tampilkan rentang penuh
                    // atau nonaktifkan slider dan gunakan flag khusus
                    selectedPriceDisplayFilterPage.textContent = "Rp 1 JT - Rp 20 JT";
                    priceRangeSliderFilterPage.disabled = true; // Nonaktifkan slider
                } else {
                    // Jika tidak dicentang, aktifkan slider dan update nilai
                    priceRangeSliderFilterPage.disabled = false;
                    selectedPriceDisplayFilterPage.textContent = formatKeRupiah(priceRangeSliderFilterPage.value);
                }
            });
        }
    }

    // Menampilkan ringkasan deskripsi di halaman filter (pencarian.html)
    const ringkasanDeskripsiDivFilterPage = document.getElementById('ringkasanDeskripsiPenggunaFilterPage');
    if (ringkasanDeskripsiDivFilterPage && window.location.pathname.includes('pencarian.html')) {
        const params = new URLSearchParams(window.location.search);
        const kegunaan = decodeURIComponent(params.get('kegunaan') || '');
        const prioritas = decodeURIComponent(params.get('prioritas') || '');
        const detail = decodeURIComponent(params.get('detail') || '');

        let adaDataDeskripsi = false;
        const infoKegunaanEl = document.getElementById('infoKegunaanRingkasan');
        const infoPrioritasEl = document.getElementById('infoPrioritasRingkasan');
        const infoDetailEl = document.getElementById('infoDetailDeskripsiRingkasan');

        if (kegunaan && infoKegunaanEl) {
            infoKegunaanEl.innerHTML = `<strong>Kegunaan Utama:</strong> ${kegunaan}`;
            adaDataDeskripsi = true;
        } else if(infoKegunaanEl) { infoKegunaanEl.style.display = 'none';}

        if (prioritas && infoPrioritasEl) {
            infoPrioritasEl.innerHTML = `<strong>Prioritas Fitur:</strong> ${prioritas}`;
            adaDataDeskripsi = true;
        } else if(infoPrioritasEl) {infoPrioritasEl.style.display = 'none';}
        
        if (detail && infoDetailEl) {
            infoDetailEl.innerHTML = `<strong>Detail Tambahan:</strong> ${detail}`;
            adaDataDeskripsi = true;
        } else if (infoDetailEl) {infoDetailEl.style.display = 'none';}

        if (adaDataDeskripsi) {
            ringkasanDeskripsiDivFilterPage.style.display = 'block';
        }
    }
    
    // Tombol "Tampilkan Rekomendasi" di halaman filter (pencarian.html)
    const tombolSubmitFilterPage = document.getElementById('tombolSubmitFilterPage');
    const formFilterPonselPage = document.getElementById('formFilterSmartphonePage'); 

    if (tombolSubmitFilterPage && formFilterPonselPage) {
        tombolSubmitFilterPage.addEventListener('click', function(event) {
            event.preventDefault(); 

            const brandTerpilih = formFilterPonselPage.querySelector('select[name="brand_pilihan_filter"]').value;
            let hargaTerpilih;
            let hargaMin = "1000000", hargaMax = "20000000"; // Default untuk "semua harga"

            if(selectAllPriceCheckbox && selectAllPriceCheckbox.checked) {
                hargaTerpilih = "semua"; // Flag khusus
                // hargaMin dan hargaMax sudah di-set
            } else {
                hargaTerpilih = formFilterPonselPage.querySelector('input[name="price_range_pilihan_filter"]').value;
                hargaMin = hargaTerpilih; // Jika slider, min dan max sama dengan nilai slider
                hargaMax = hargaTerpilih;
            }
            
            const paramsDariDeskripsi = new URLSearchParams(window.location.search);
            const dataDeskripsi = {
                kegunaan: paramsDariDeskripsi.get('kegunaan') || '',
                prioritas: paramsDariDeskripsi.get('prioritas') || '',
                detail: paramsDariDeskripsi.get('detail') || ''
            };

            const dataGabungan = {
                filterBrand: brandTerpilih,
                filterHargaRaw: hargaTerpilih, // nilai asli slider atau "semua"
                filterHargaMin: hargaMin,
                filterHargaMax: hargaMax,
                deskripsi: dataDeskripsi
            };

            console.log("Data Gabungan Siap Diproses:", dataGabungan);
            
            const hasilRekomendasiDivPage = document.getElementById('hasilRekomendasiFinalDiPage');
            const outputRekomendasiDivPage = document.getElementById('outputRekomendasiDiPage');
            const pesanErrorRekomendasi = document.getElementById('pesanErrorRekomendasi');

            if(hasilRekomendasiDivPage && outputRekomendasiDivPage && pesanErrorRekomendasi) {
                // --- SIMULASI HASIL REKOMENDASI ---
                // Di aplikasi nyata, ini akan memanggil API atau fungsi filter data produk
                let htmlHasil = '';
                const contohProdukSimulasi = [
                    { id:1, nama: 'Galaxy SuperNova X', brand: 'samsung', harga: 15000000, fitur: 'Kamera 200MP, Super AMOLED 144Hz', kegunaan: 'fotografi', prioritas: 'kamera', gambar: 'images/samsung_contoh1.png' },
                    { id:2, nama: 'iPhone Vision Pro Max', brand: 'apple', harga: 18000000, fitur: 'Chipset A20 Bionic, Ecosystem Terbaik', kegunaan: 'produktivitas', prioritas: 'performa', gambar: 'images/iphone_contoh1.png' },
                    { id:3, nama: 'Xiaomi HyperBoost GT', brand: 'xiaomi', harga: 7000000, fitur: 'Snapdragon 8 Gen 4, Fast Charging 120W', kegunaan: 'gaming', prioritas: 'performa', gambar: 'images/xiaomi_contoh1.png' },
                    { id:4, nama: 'Oppo Reno Masterpiece', brand: 'oppo', harga: 9000000, fitur: 'Desain Elegan, Portrait Expert', kegunaan: 'media_sosial', prioritas: 'desain', gambar: 'images/oppo_contoh1.png' },
                    { id:5, nama: 'Vivo Xplore Ultimate', brand: 'vivo', harga: 12000000, fitur: 'Gimbal Stabilization, Zeiss Optics', kegunaan: 'fotografi', prioritas: 'kamera', gambar: 'images/vivo_contoh1.png' },
                    { id:6, nama: 'Realme Speedster Pro', brand: 'realme', harga: 5000000, fitur: 'Refresh Rate Tinggi, Baterai Besar', kegunaan: 'gaming', prioritas: 'baterai', gambar: 'images/realme_contoh1.png' },
                    { id:7, nama: 'Samsung Galaxy Z Fold Lite', brand: 'samsung', harga: 19000000, fitur: 'Layar Lipat Inovatif, Multitasking', kegunaan: 'produktivitas', prioritas: 'layar', gambar: 'images/samsung_contoh2.png' },
                ];

                let produkYangCocok = contohProdukSimulasi.filter(p => {
                    const cocokBrand = !dataGabungan.filterBrand || p.brand === dataGabungan.filterBrand;
                    const cocokHarga = dataGabungan.filterHargaRaw === "semua" || (p.harga >= parseFloat(dataGabungan.filterHargaMin) && p.harga <= parseFloat(dataGabungan.filterHargaMax));
                    // Logika pencocokan deskripsi bisa lebih kompleks, ini contoh sederhana:
                    const cocokKegunaan = !dataGabungan.deskripsi.kegunaan || p.kegunaan === dataGabungan.deskripsi.kegunaan;
                    const cocokPrioritas = !dataGabungan.deskripsi.prioritas || p.prioritas === dataGabungan.deskripsi.prioritas;
                    
                    return cocokBrand && cocokHarga && (cocokKegunaan || cocokPrioritas); // OR untuk kegunaan/prioritas agar lebih banyak hasil
                });
                
                if (produkYangCocok.length > 0) {
                    produkYangCocok.forEach(produk => {
                        htmlHasil += `
                            <div class="col">
                                <div class="card rekomendasi-card-keren">
                                    <div class="rasio-gambar-rekomendasi">
                                        <img src="${produk.gambar || 'https://via.placeholder.com/300x220?text='+encodeURIComponent(produk.nama)}" class="card-img-top" alt="${produk.nama}">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${produk.nama}</h5>
                                        <p class="card-text harga-rekomendasi-keren">${formatKeRupiah(produk.harga)}</p>
                                        <p class="card-text fitur-unggulan"><small><i class="fas fa-check-circle text-success me-1"></i>${produk.fitur}</small></p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-sm btn-outline-primary-keren w-100">Lihat Detail & Penawaran</a>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    outputRekomendasiDivPage.innerHTML = htmlHasil;
                    pesanErrorRekomendasi.style.display = 'none';
                } else {
                    outputRekomendasiDivPage.innerHTML = ''; // Kosongkan hasil sebelumnya
                    pesanErrorRekomendasi.style.display = 'block';
                }
                // --- AKHIR SIMULASI HASIL ---
                hasilRekomendasiDivPage.style.display = 'block';
                hasilRekomendasiDivPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                 alert(`Rekomendasi akan ditampilkan berdasarkan:\nBrand: ${dataGabungan.filterBrand}\nHarga: ${dataGabungan.filterHargaRaw === "semua" ? "Semua" : formatKeRupiah(dataGabungan.filterHargaRaw)}`);
            }
        });
    }

    // Smooth scroll (jika masih ada)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute && hrefAttribute.length > 1 && hrefAttribute !== "#") { 
                try {
                    const targetElement = document.querySelector(hrefAttribute);
                    if (targetElement) {
                        e.preventDefault(); 
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.warn("Smooth scroll error:", hrefAttribute, error);
                }
            }
        });
    });

});
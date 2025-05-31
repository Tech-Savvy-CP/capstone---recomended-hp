export default class BrandHargaPage {
  async render() {
    return `
        <section class="container filter-container">
          <div class="step" id="step2">
            <h2 class="filter-title">Sempurnakan Pencarian</h2>
            <div class="filter-content">
              <div class="filter-group">
                <label for="brandFilter">Brand:</label>
                <select id="brandFilter" class="filter-select">
                  <option value="">Semua Brand</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Vivo">Vivo</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="hargaFilter">Harga Minimal:</label>
                <select id="hargaFilter" class="filter-select">
                  <option value="0">Semua</option>
                  <option value="2">Rp.2.000.000</option>
                  <option value="5">Rp.5.000.000</option>
                  <option value="10">Rp.10.000.000</option>
                  <option value="20">Rp.20.000.000</option>
                </select>
              </div>
              
                <a href="#/confirmation"><button id="refineBtn" class="filter-button">Sempurnakan</button></a>
            </div>
          </div>
        </section>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .filter-container {
            width: 100%;
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          
          .filter-title {
            color: #2c3e50;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
            position: relative;
            display: inline-block;
          }
          
          .filter-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #3498db, #9b59b6);
            border-radius: 2px;
            animation: expandLine 0.8s 0.3s forwards;
            transform-origin: left;
            transform: scaleX(0);
          }
          
          .filter-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-align: left;
            animation: fadeIn 0.6s 0.2s forwards;
            opacity: 0;
          }
          
          .filter-group label {
            font-weight: 600;
            color: #34495e;
            font-size: 1rem;
          }
          
          .filter-select {
            padding: 0.8rem 1rem;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background-color: #f8f9fa;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            transform: translateY(-2px);
          }
          
          .filter-button {
            padding: 0.8rem 1.5rem;
            background: linear-gradient(135deg, #3498db, #9b59b6);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1rem;
            animation: fadeIn 0.6s 0.4s forwards;
            opacity: 0;
          }
          
          .filter-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
          }
          
          .filter-button:active {
            transform: translateY(-1px);
          }
          
          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          
          @keyframes expandLine {
            to {
              transform: scaleX(1);
            }
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .filter-container {
              padding: 1.5rem;
              margin: 1rem;
            }
            
            .filter-title {
              font-size: 1.5rem;
            }
          }
        </style>
      `;
  }

  async afterRender() {
    // Add event listeners here if needed
    const refineBtn = document.getElementById("refineBtn");
    if (refineBtn) {
      refineBtn.addEventListener("click", this.applyFilters);
    }
  }

  applyFilters() {
    // Filter logic implementation
    const brandFilter = document.getElementById("brandFilter").value;
    const hargaFilter = document.getElementById("hargaFilter").value;
    console.log("Applying filters:", { brandFilter, hargaFilter });
    // Implement your actual filter logic here
  }
}

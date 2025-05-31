export default class InputPage {
  async render() {
    return `
        <section class="input-page">
          <div class="input-container">
            <h1 class="input-title">Masukkan Kebutuhan Anda</h1>
            
            <div class="input-example-box">
              <div class="example-header">
                <span class="example-icon">📋</span>
                <span class="example-label">Contoh:</span>
              </div>
              <p class="example-text">Saya content creator butuh hp dengan RAM 8GB, kamera 48MP, baterai 5000mAh</p>
            </div>
            
            <div class="input-group">
              <textarea 
                id="userInput" 
                class="user-input" 
                placeholder="Tulis kebutuhan spesifikasi HP Anda di sini..."
                rows="3"
              ></textarea>
              <a href="#/brandharga"><button id="searchBtn" class="search-button">
                <span class="button-text">Cari Rekomendasi</span>
                <span class="button-icon">→</span>
              </button></a>
            </div>
            
            
          </div>
        </section>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          }
          
          .input-page {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            padding: 20px;
            background-color: #f8fafc;
          }
          
          .input-container {
            width: 100%;
            max-width: 650px;
            background: white;
            border-radius: 16px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            animation: fadeInUp 0.5s ease-out;
          }
          
          .input-title {
            color: #1e293b;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-weight: 600;
          }
          
          .input-example-box {
            background-color: #f1f5f9;
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid #3b82f6;
          }
          
          .example-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }
          
          .example-icon {
            font-size: 1.2rem;
          }
          
          .example-label {
            font-weight: 600;
            color: #334155;
          }
          
          .example-text {
            color: #475569;
            line-height: 1.5;
          }
          
          .input-group {
            margin-bottom: 1rem;
          }
          
          .user-input {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 1rem;
            resize: none;
            margin-bottom: 1rem;
            transition: all 0.2s ease;
            min-height: 120px;
          }
          
          .user-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
          }
          
          .user-input::placeholder {
            color: #94a3b8;
          }
          
          .search-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0.9rem;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .search-button:hover {
            background-color: #2563eb;
            transform: translateY(-2px);
          }
          
          .search-button:active {
            transform: translateY(0);
          }
          
          .button-icon {
            margin-left: 8px;
            transition: transform 0.2s ease;
          }
          
          .search-button:hover .button-icon {
            transform: translateX(3px);
          }
          
          .copy-hint {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #64748b;
            font-size: 0.9rem;
            margin-top: 1rem;
          }
          
          .copy-icon {
            font-size: 1.1rem;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            .input-container {
              padding: 1.5rem;
            }
            
            .input-title {
              font-size: 1.5rem;
            }
          }
        </style>
      `;
  }

  async afterRender() {
    const searchBtn = document.getElementById("searchBtn");
    const exampleText = document.querySelector(".example-text");
    const userInput = document.getElementById("userInput");

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

    if (searchBtn && userInput) {
      searchBtn.addEventListener("click", () => {
        const inputText = userInput.value.trim();
        if (inputText) {
          console.log("Searching for:", inputText);
          // Navigate to the next page
          window.location.hash = "/brandharga"; // Change the URL to /brandharga
        }
      });
    }

    // Copy example text when clicked
    if (exampleText && userInput) {
      exampleText.addEventListener("click", () => {
        userInput.value = exampleText.textContent;
        userInput.focus();
      });
    }
  }
}

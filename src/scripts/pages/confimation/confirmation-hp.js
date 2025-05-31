export default class ConfirmationPage {
  async render() {
    return `
        <section class="container confirmation-container">
          <div class="confirmation-content">
            <div class="confirmation-card">
              <h2 class="confirmation-title">Apakah rekomendasi sudah sesuai?</h2>
              <p class="confirmation-text">Dataset 1 mengenai data HP (nama, brand, ram dll)</p>
              <div class="confirmation-buttons">
                
                <a href="#/review"><button id="yesBtn" class="confirm-btn confirm-yes">Ya, Temukan Hanphone sekarang</button></a>
                
                <a href="#/brandharga"><button id="noBtn" class="confirm-btn confirm-no">Tidak, Sempurnakan Lagi</button></a>
              </div>
            </div>
          </div>
        </section>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .confirmation-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 70vh;
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .confirmation-content {
            width: 100%;
            max-width: 600px;
          }
          
          .confirmation-card {
            background: white;
            border-radius: 16px;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            transform: scale(0.95);
            animation: scaleUp 0.6s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          
          .confirmation-title {
            color: #2c3e50;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
          }
          
          .confirmation-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #3498db, #9b59b6);
            border-radius: 2px;
            animation: expandLine 0.8s 0.5s forwards;
            transform-origin: center;
            transform: scaleX(0);
          }
          
          .confirmation-text {
            color: #7f8c8d;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            animation: fadeInUp 0.6s 0.4s forwards;
            opacity: 0;
            transform: translateY(10px);
          }
          
          .confirmation-buttons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 2rem;
            flex-wrap: wrap;
          }
          
          .confirm-btn {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: fadeIn 0.6s 0.6s forwards;
            opacity: 0;
            min-width: 200px;
          }
          
          .confirm-yes {
            background: linear-gradient(135deg,rgb(205, 35, 253),rgb(109, 48, 184));
            color: white;
            box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
          }
          
          .confirm-no {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
          }
          
          .confirm-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
          
          .confirm-btn:active {
            transform: translateY(-1px);
          }
          
          /* Animations */
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleUp {
            to {
              transform: scale(1);
            }
          }
          
          @keyframes expandLine {
            to {
              transform: translateX(-50%) scaleX(1);
            }
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .confirmation-card {
              padding: 2rem 1.5rem;
            }
            
            .confirmation-title {
              font-size: 1.5rem;
            }
            
            .confirmation-text {
              font-size: 1rem;
            }
            
            .confirmation-buttons {
              flex-direction: column;
              gap: 1rem;
            }
            
            .confirm-btn {
              width: 100%;
            }
          }
          
          @media (max-width: 480px) {
            .confirmation-title {
              font-size: 1.3rem;
            }
            
            .confirmation-card {
              padding: 1.5rem 1rem;
            }
          }
        </style>
      `;
  }

  async afterRender() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (yesBtn) {
      yesBtn.addEventListener("click", () => {
        // Add your "Yes" button logic here
        console.log("User confirmed recommendation");
        // Example: navigate to next page
        // window.location.href = '/next-page';
      });
    }

    if (noBtn) {
      noBtn.addEventListener("click", () => {
        // Add your "No" button logic here
        console.log("User wants to refine again");
        // Example: navigate back to filter page
        // window.location.href = '/filter-page';
      });
    }

    if ("startViewTransition" in document) {
      this.setupViewTransitions();
    }
  }

  setupViewTransitions() {
    const card = document.querySelector(".confirmation-card");
    if (card) {
      card.style.viewTransitionName = "confirmation-card";
    }

    const title = document.querySelector(".confirmation-title");
    if (title) {
      title.style.viewTransitionName = "confirmation-title";
    }
  }
}

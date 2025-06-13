import Phones from "../../data/ex_api";
import ResultPresenter from "./presenter-review";
import {
  generatePhoneTemplate,
  generateCommentTemplate,
} from "../../templates";
import "bootstrap";

export default class ResultPage {
  #presenter;
  #selectedPhoneModel = null;
  #selectedBrand = null;

  async render() {
    return `
         <section class="hero">
            <div class="container">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6" style="text-align: center;">
                        <div style="width: 420px; height: 420px; overflow: hidden; border-radius: 50%; margin: auto;">
                            <img src="https://3.bp.blogspot.com/-YJVAl6dDV-4/W5PD8YIgSrI/AAAAAAAAAWU/q6mHui1I1jUaMR2UzAcmBd3aFJQv62i7ACK4BGAYYCw/s1600/6.jpg" 
                                class="d-block mx-lg-auto img-fluid" alt="Phones" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </div>


                    <div class="col-lg-6">
                        <h1 class="display-5 fw-semibold text-body-emphasis lh-1 mb-3">Find Your Perfect <span class="fw-semibold"
                                style="color: #FF902A;">Phone</span> <br>for Everyday Use</h1>
                        <p style="color: #7E7D7A;">Get the best features and performance to match your lifestyle with the latest smartphones</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 rounded-5"
                                style="background-color: #2F2105; border-color: #2F2105;" id="findNowButton">Find Now</button>
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 rounded-5"
                                style="background-color: #2F2105; border-color: #2F2105;" id="findReviewButton">Find Review</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="popular-now result" style="background-image: linear-gradient(to bottom, #F6EBDA 50%, #fff 50%);" id="result">
            <div class="container mb-5">
                <h4>Phone <span style="border-bottom: 3px solid #FF902A;">Result</span></h4>
                <p>Data set 1 => HP <span id="current-selection" class="text-muted"></span></p>
                <div class="container pb-5 mb-5"
                    style="background-image: linear-gradient(to bottom, #F6EBDA 30%, #F9D9AA 30%);">
                    <div class="row justify-content-center gap-5" id="phones">
                        
                    </div>
                    <div id="loading-container"></div>
                </div>
            </div>
        </section>

        <section>
            <div class="comment" id="review" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 3rem 0;">
                <div class="container mb-5 mt-5">
                    <!-- Header Section -->
                    <div class="text-center mb-4">
                        <h1 style="
                            font-size: 2.5rem;
                            font-weight: 700;
                            color: #2c3e50;
                            margin-bottom: 1rem;
                            position: relative;
                            display: inline-block;
                        ">
                            💬 Ulasan Pengguna
                            <div style="
                                position: absolute;
                                bottom: -10px;
                                left: 50%;
                                transform: translateX(-50%);
                                width: 60px;
                                height: 4px;
                                background: linear-gradient(90deg, #FF902A, #ff6b35);
                                border-radius: 2px;
                            "></div>
                        </h1>
                        <p style="
                            color: #6c757d;
                            font-size: 1.1rem;
                            margin-bottom: 0;
                            max-width: 600px;
                            margin-left: auto;
                            margin-right: auto;
                        ">
                            Data set 2 => review <span id="review-selection" style="
                                color: #FF902A;
                                font-weight: 600;
                            ">(Klik HP di atas untuk melihat review spesifik)</span>
                        </p>
                    </div>

                    <!-- Controls Section -->
                    <div class="controls-section" style="
                        background: white;
                        border-radius: 20px;
                        padding: 2rem;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        margin-bottom: 2rem;
                    ">
                        <!-- Review Source Toggle -->
                        <div class="review-source-toggle" style="
                            margin-bottom: 2rem;
                            display: flex;
                            gap: 0;
                            justify-content: center;
                            background: #f8f9fa;
                            border-radius: 15px;
                            padding: 5px;
                            max-width: 400px;
                            margin-left: auto;
                            margin-right: auto;
                        ">
                            <button id="ytReviewBtn" class="review-tab">
                                <i class="fa fa-youtube-play" style="margin-right: 8px;"></i>
                                <span class="tab-text">Review YouTube</span>
                            </button>
                            <button id="ecomReviewBtn" class="review-tab">
                                <i class="fa fa-shopping-cart" style="margin-right: 8px;"></i>
                                <span class="tab-text">Review E-Commerce</span>
                            </button>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons" style="
                            display: flex;
                            gap: 15px;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: wrap;
                        ">
                            <button id="toggleButton" class="action-button primary">
                                <i class="fa fa-eye" style="margin-right: 8px;"></i>
                                <span class="button-text">Tampilkan Review</span>
                            </button>
                            <button id="refreshReviewBtn" class="action-button secondary" style="display: none;">
                                <i class="fa fa-refresh" style="margin-right: 8px;"></i>
                                <span class="button-text">Refresh Review</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Reviews Container -->
                <div class="container mb-5 mt-5" id="comment" style="
                    min-height: 200px;
                    position: relative;
                "></div>
            </div>
            
            <style>
            /* Review Section Styling */
            .review-source-toggle {
                justify-content: center;
            }
            
            .review-tab {
                flex: 1;
                padding: 12px 20px;
                border: none;
                border-radius: 10px;
                background: transparent;
                color: #6c757d;
                font-weight: 600;
                font-size: 0.95rem;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                outline: none;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .review-tab.active {
                background: linear-gradient(135deg, #FF902A, #ff6b35);
                color: white;
                box-shadow: 0 4px 15px rgba(255, 144, 42, 0.3);
                transform: translateY(-1px);
            }
            
            .review-tab:not(.active):hover {
                background: #e9ecef;
                color: #FF902A;
                transform: translateY(-1px);
            }
            
            /* Action Buttons */
            .action-button {
                padding: 12px 24px;
                border: none;
                border-radius: 25px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 160px;
            }
            
            .action-button.primary {
                background: linear-gradient(135deg, #28a745, #20c997);
                color: white;
                box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
            }
            
            .action-button.primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
            }
            
            .action-button.secondary {
                background: linear-gradient(135deg, #6f42c1, #e83e8c);
                color: white;
                box-shadow: 0 4px 15px rgba(111, 66, 193, 0.3);
            }
            
            .action-button.secondary:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(111, 66, 193, 0.4);
            }
            
            /* Phone card hover effects */
            .phone-card:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 15px 35px rgba(255, 144, 42, 0.2);
                border-color: #FF902A !important;
            }
            
            .phone-card.selected {
                border-color: #FF902A !important;
                background: linear-gradient(145deg, #fff9f3, #ffffff);
                box-shadow: 0 8px 25px rgba(255, 144, 42, 0.3);
            }
            
            .phone-card:hover .card-body small {
                color: #FF902A !important;
                font-weight: 600;
            }
            
            /* Animasi hint untuk phone cards */
            @keyframes pulseHint {
                0%, 100% {
                    transform: scale(1);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                50% {
                    transform: scale(1.05);
                    box-shadow: 0 8px 25px rgba(255, 144, 42, 0.4);
                    border-color: #FF902A;
                }
            }
            
            /* Smooth transition untuk semua phone cards */
            .phone-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* Loading animation untuk comment section */
            #comment:empty::after {
                content: "🔍 Pilih handphone di atas untuk melihat review...";
                display: flex;
                align-items: center;
                justify-content: center;
                height: 200px;
                color: #6c757d;
                font-size: 1.2rem;
                font-style: italic;
                background: white;
                border-radius: 15px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .review-source-toggle {
                    flex-direction: column;
                    gap: 5px;
                    max-width: 300px;
                }
                
                .review-tab {
                    width: 100%;
                    border-radius: 10px;
                    padding: 10px 16px;
                    font-size: 0.9rem;
                }
                
                .action-button {
                    min-width: 140px;
                    font-size: 0.9rem;
                    padding: 10px 20px;
                }
                
                h1 {
                    font-size: 2rem !important;
                }
                
                .comment {
                    padding: 2rem 0 !important;
                }
                
                .container {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
                
                /* Controls section responsive */
                .controls-section {
                    padding: 1.5rem !important;
                    margin-bottom: 1.5rem !important;
                }
                
                /* Action buttons responsive */
                .action-buttons {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .action-button {
                    width: 100%;
                    max-width: 250px;
                }
            }
            
            @media (max-width: 576px) {
                h1 {
                    font-size: 1.8rem !important;
                }
                
                .review-source-toggle {
                    max-width: 280px;
                }
                
                .review-tab {
                    padding: 8px 12px;
                    font-size: 0.85rem;
                }
                
                .review-tab .tab-text {
                    display: none;
                }
                
                .action-button {
                    padding: 8px 16px;
                    font-size: 0.85rem;
                    min-width: 120px;
                }
                
                .action-button .button-text {
                    display: none;
                }
                
                #comment:empty::after {
                    font-size: 1rem;
                    padding: 1rem;
                    text-align: center;
                }
            }
            
            /* Tablet responsive */
            @media (min-width: 769px) and (max-width: 1024px) {
                .review-source-toggle {
                    max-width: 450px;
                }
                
                .action-button {
                    min-width: 180px;
                }
                
                h1 {
                    font-size: 2.2rem !important;
                }
            }
            
            /* Enhanced review cards styling */
            .review-section {
                margin-bottom: 1.5rem;
                animation: fadeInUp 0.5s ease-out forwards;
            }
            
            .review-section.show {
                display: block;
                opacity: 1;
                visibility: visible;
            }
            
            .review-section.hide {
                display: none;
                opacity: 0;
                visibility: hidden;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeOutDown {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(20px);
                }
            }
            </style>
        </section>

        <section class="delivery" id="delivery">
            <div class="container mt-5 mb-5">
                <h4><span style="border-bottom: 3px solid #FF902A;">service</span></h4>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 mt-3 mb-sm-0">
                            <div class="text-center">
                                <div class="card-body">
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/600/550/non_2x/handphone-telephone-icon-logo-design-vector.jpg" width="100px" alt="">
                                    <p><b>Choose your phone</b><br><span>Choose from top brands</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mt-3">
                            <div class="text-center">
                                <div class="card-body">
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/600/550/non_2x/handphone-telephone-icon-logo-design-vector.jpg" width="100px" alt="">
                                    <p><b>Enjoy your phone</b><br><span>Enjoy with your new phone</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </section>
    `;
  }

  async afterRender() {
    // Do your job here
    this.#presenter = new ResultPresenter({
      model: Phones,
      view: this,
    });

    // Ambil merk dari localStorage, default ke Samsung jika tidak ada
    this.#selectedBrand = localStorage.getItem("selectedBrand") || "Samsung";
    const selectedMaxPrice =
      parseInt(localStorage.getItem("selectedMaxPrice")) || 0;
    console.log("Selected brand from localStorage:", this.#selectedBrand);
    console.log(
      "Selected max price from localStorage:",
      selectedMaxPrice,
      "juta rupiah"
    );

    // Update current selection display
    document.getElementById("current-selection").textContent = `(Brand: ${
      this.#selectedBrand
    })`;

    // Tampilkan HP berdasarkan brand yang dipilih
    await this.#presenter.showPhonesByBrand(this.#selectedBrand);

    // Setup phone card click listeners
    this.setupPhoneCardListeners();

    // Default: tampilkan review untuk brand secara umum
    await this.#presenter.showCommentByBrand(this.#selectedBrand);

    // Setup review control listeners
    this.setupReviewControls();

    // Setup other button listeners
    this.setupOtherListeners();

    // Tambahkan hint untuk user bahwa HP bisa diklik
    this.showPhoneClickHint();
  }

  setupReviewControls() {
    // Toggle logic
    const ytBtn = document.getElementById("ytReviewBtn");
    const ecomBtn = document.getElementById("ecomReviewBtn");
    ytBtn.classList.add("active");
    ecomBtn.classList.remove("active");

    ytBtn.addEventListener("click", async () => {
      ytBtn.classList.add("active");
      ecomBtn.classList.remove("active");
      document.getElementById("refreshReviewBtn").style.display =
        "inline-block";

      if (this.#selectedPhoneModel) {
        await this.#presenter.showCommentByPhoneModel(
          this.#selectedBrand,
          this.#selectedPhoneModel
        );
      } else {
        await this.#presenter.showCommentByBrand(this.#selectedBrand);
      }

      // Force tampilkan review setelah load
      this.forceShowReviews();
    });

    ecomBtn.addEventListener("click", async () => {
      ytBtn.classList.remove("active");
      ecomBtn.classList.add("active");
      // Tampilkan refresh button untuk e-commerce juga
      document.getElementById("refreshReviewBtn").style.display =
        "inline-block";

      // Tampilkan review e-commerce
      if (this.#selectedPhoneModel) {
        await this.#presenter.showEcommerceReviewByPhoneModel(
          this.#selectedBrand,
          this.#selectedPhoneModel
        );
      } else {
        await this.#presenter.showEcommerceReviewByBrand(this.#selectedBrand);
      }

      // Force tampilkan review setelah load
      this.forceShowReviews();
    });

    // Refresh button logic - Updated untuk support kedua jenis review
    const refreshBtn = document.getElementById("refreshReviewBtn");
    refreshBtn.addEventListener("click", async () => {
      if (ytBtn.classList.contains("active")) {
        // Refresh YouTube reviews
        await this.#presenter.showRandomCommentByBrand(this.#selectedBrand);
      } else if (ecomBtn.classList.contains("active")) {
        // Refresh E-commerce reviews
        await this.#presenter.showRandomEcommerceReviewByBrand(
          this.#selectedBrand
        );
      }

      // Panggil forceShowReviews untuk memastikan tampil
      this.forceShowReviews();
    });

    // Show refresh button by default (YouTube is active)
    refreshBtn.style.display = "inline-block";
  }

  setupPhoneCardListeners() {
    // Tambahkan event listener untuk phone cards
    document.addEventListener("click", async (e) => {
      const phoneCard = e.target.closest(".phone-card");
      if (phoneCard) {
        // Remove previous selection
        document.querySelectorAll(".phone-card").forEach((card) => {
          card.classList.remove("selected");
        });

        // Add selection to clicked card
        phoneCard.classList.add("selected");

        // Get phone model from data attribute
        const phoneModel = phoneCard.dataset.phoneModel;
        this.#selectedPhoneModel = phoneModel;

        // Update selection display
        document.getElementById(
          "review-selection"
        ).innerHTML = `untuk <strong>${phoneModel}</strong>`;

        // Load reviews for this specific phone model based on active tab
        const ytBtn = document.getElementById("ytReviewBtn");
        const ecomBtn = document.getElementById("ecomReviewBtn");

        if (ytBtn.classList.contains("active")) {
          await this.#presenter.showCommentByPhoneModel(
            this.#selectedBrand,
            phoneModel
          );
        } else if (ecomBtn.classList.contains("active")) {
          await this.#presenter.showEcommerceReviewByPhoneModel(
            this.#selectedBrand,
            phoneModel
          );
        }

        // Auto scroll to review section
        document
          .getElementById("review")
          .scrollIntoView({ behavior: "smooth" });

        // Force tampilkan review dan update button state
        this.forceShowReviews();
      }
    });
  }

  forceShowReviews() {
    // Fungsi khusus untuk memastikan review tampil dan tidak hilang
    setTimeout(() => {
      const reviewSections = document.querySelectorAll(".review-section");
      const toggleButton = document.getElementById("toggleButton");

      console.log("Found review sections:", reviewSections.length);

      if (reviewSections.length > 0) {
        reviewSections.forEach(function (section) {
          section.classList.remove("hide");
          section.classList.add("show");
          // Backup dengan inline style juga
          section.style.display = "block";
          section.style.visibility = "visible";
          section.style.opacity = "1";
        });

        // Update tombol toggle
        toggleButton.innerHTML =
          '<i class="fa fa-eye-slash" style="margin-right: 8px;"></i><span class="button-text">Sembunyikan Review</span>';
        console.log("Reviews forced to show");
      } else {
        console.log("No reviews found yet, retrying...");
        // Retry setelah delay lebih lama jika belum ada review
        setTimeout(() => this.forceShowReviews(), 500);
      }
    }, 1000);
  }

  setupOtherListeners() {
    document
      .getElementById("toggleButton")
      .addEventListener("click", function () {
        const reviewSections = document.querySelectorAll(".review-section");
        const button = document.getElementById("toggleButton");

        let allVisible = Array.from(reviewSections).every(
          (section) =>
            section.classList.contains("show") ||
            section.style.display !== "none"
        );

        if (allVisible) {
          reviewSections.forEach(function (section) {
            section.classList.remove("show");
            section.classList.add("hide");
            section.style.display = "none";
          });
          button.innerHTML =
            '<i class="fa fa-eye" style="margin-right: 8px;"></i><span class="button-text">Tampilkan Review</span>';
        } else {
          reviewSections.forEach(function (section) {
            section.classList.remove("hide");
            section.classList.add("show");
            section.style.display = "block";
          });
          button.innerHTML =
            '<i class="fa fa-eye-slash" style="margin-right: 8px;"></i><span class="button-text">Sembunyikan Review</span>';
        }
      });

    // Menambahkan event listener untuk tombol
    document
      .getElementById("findNowButton")
      .addEventListener("click", function () {
        document
          .getElementById("result")
          .scrollIntoView({ behavior: "smooth" });
      });

    document
      .getElementById("findReviewButton")
      .addEventListener("click", function () {
        document
          .getElementById("review")
          .scrollIntoView({ behavior: "smooth" });
      });
  }

  showComment(comment) {
    const html = comment.reduce(
      (accumulator, currentValue) =>
        accumulator.concat(generateCommentTemplate(currentValue)),
      ""
    );
    document.getElementById("comment").innerHTML = html;
  }

  showPhones(phones) {
    const html = phones.reduce(
      (accumulator, currentValue) =>
        accumulator.concat(generatePhoneTemplate(currentValue)),
      ""
    );
    document.getElementById("phones").innerHTML = html;

    // Re-setup phone card listeners after phones are rendered
    setTimeout(() => {
      this.setupPhoneCardListeners();
    }, 100);
  }

  showLoading() {
    document.getElementById("loading-container").innerHTML = `
      <div class="loader"></div>
    `;
  }

  hideLoading() {
    document.getElementById("loading-container").innerHTML = "";
  }

  showPhoneClickHint() {
    // Tampilkan hint setelah HP cards loaded
    setTimeout(() => {
      const phoneCards = document.querySelectorAll(".phone-card");
      if (phoneCards.length > 0) {
        // Tambahkan efek pulse pada card pertama sebagai hint
        const firstCard = phoneCards[0];
        firstCard.style.animation = "pulseHint 2s ease-in-out 3";

        // Hapus animasi setelah selesai
        setTimeout(() => {
          firstCard.style.animation = "";
        }, 6000);
      }
    }, 1000);
  }
}

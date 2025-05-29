import Phones from '../../data/ex_api';
import ResultPresenter from './presenter-review';
import { generatePhoneTemplate, generateCommentTemplate } from '../../templates';
import 'bootstrap';

export default class ResultPage {
#presenter;
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
                <div class="container pb-5 mb-5"
                    style="background-image: linear-gradient(to bottom, #F6EBDA 30%, #F9D9AA 30%);">
                    <div class="row justify-content-center gap-5" id="phones">
                        
                    </div>
                    <div id="loading-container"></div>
                </div>
            </div>
        </section>

        <section>
            <div class="comment" id="review"  style="background-image: linear-gradient(to bottom, #F6EBDA 100%);">
                <div class="container mb-5 mt-5">
                    <h1 >Ulasan Pengguna</h1>
                    <button id="toggleButton" class="toggle-button">Tampilkan Review</button>
                </div>
                <div class="container mb-5 mt-5" id="comment">
                    
                    
                </div>
            </div>
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
        view : this,
    });

    await this.#presenter.showPhones();
   

    document.getElementById('toggleButton').addEventListener('click', function() {
    const reviewSections = document.querySelectorAll('.review-section');
    const button = document.getElementById('toggleButton');

    let allVisible = true;

    reviewSections.forEach(function(section) {
        if (section.style.display === "none" || section.style.display === "") {
        allVisible = false;
        }
    });

    if (allVisible) {
        reviewSections.forEach(function(section) {
        section.style.display = "none";
        });
        button.textContent = "Tampilkan Review";
    } else {
        reviewSections.forEach(function(section) {
        section.style.display = "block";
        });
        button.textContent = "Sembunyikan Review";
    }
    });

     // Menambahkan event listener untuk tombol
    document.getElementById('findNowButton').addEventListener('click', function() {
        // Menggunakan JavaScript untuk scroll ke elemen dengan ID 'result'
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('findReviewButton').addEventListener('click', function() {
        // Menggunakan JavaScript untuk scroll ke elemen dengan ID 'review'
        document.getElementById('review').scrollIntoView({ behavior: 'smooth' });
    });

     await this.#presenter.showComment();

  }
  showComment(comment){
        const html = comment.reduce(
        (accumulator, currentValue) => accumulator.concat(generateCommentTemplate(currentValue)),
        '',
    );
    document.getElementById('comment').innerHTML = html;
  }

  showPhones(phones){
        const html = phones.reduce(
        (accumulator, currentValue) => accumulator.concat(generatePhoneTemplate(currentValue)),
        '',
    );
    document.getElementById('phones').innerHTML = html;
  }

  showLoading() {
    document.getElementById('loading-container').innerHTML = `
      <div class="loader"></div>
    `;
  }
  //fungsi untuk mengosongkan isi dari loading-container yang sebelumnya di isi dengan class loader
  hideLoading() {
    document.getElementById('loading-container').innerHTML = '';
  }
}
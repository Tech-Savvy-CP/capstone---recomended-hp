export default class ResultPresenter {
  #model;
  #view;

  constructor({ model, view }) {
    this.#model = model;
    this.#view = view;
  }

  async showPhones() {
    //menampilkan loading dari view
    this.#view.showLoading();
    //mengisi chat dengan memanggil getAll cats dari model
    const phones = await this.#model.getPhone();
    //memunculkan phone dari view
    this.#view.showPhones(phones);
    //menyembunyikan loading dari view
    this.#view.hideLoading();
  }

  async showPhonesByBrand(brand) {
    this.#view.showLoading();
    const maxPrice = parseInt(localStorage.getItem("selectedMaxPrice")) || 0;
    const phones = await this.#model.getPhoneByBrand(brand, maxPrice);
    this.#view.showPhones(phones);
    this.#view.hideLoading();
  }

  async showComment() {
    this.#view.showLoading();
    //mengisi chat dengan memanggil getAll cats dari model
    const comment = await this.#model.getComment();
    //memunculkan phone dari view
    this.#view.showComment(comment);
    //menyembunyikan loading dari view
    this.#view.hideLoading();
  }

  async showCommentByBrand(brand) {
    this.#view.showLoading();
    const comment = await this.#model.getCommentByBrand(brand);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

  async showCommentByPhoneModel(brand, phoneModel) {
    this.#view.showLoading();
    const comment = await this.#model.getCommentByPhoneModel(brand, phoneModel);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

  async showRandomCommentByBrand(brand) {
    this.#view.showLoading();
    const comment = await this.#model.getRandomCommentByBrand(brand);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

  async showEcommerceReviewByBrand(brand) {
    try {
      this.#view.showLoading();
      const reviews = await this.#model.getEcommerceReviewByBrand(brand);

      if (reviews.length > 0) {
        this.#view.showComment(reviews);
      } else {
        this.#view.showComment([
          { coment: "Belum ada review e-commerce untuk brand ini.", nama: "-" },
        ]);
      }
    } catch (error) {
      console.error("Error showing e-commerce reviews by brand:", error);
      this.#view.showComment([
        { coment: "Gagal memuat review e-commerce.", nama: "-" },
      ]);
    } finally {
      this.#view.hideLoading();
    }
  }

  async showEcommerceReviewByPhoneModel(brand, phoneModel) {
    try {
      this.#view.showLoading();
      const reviews = await this.#model.getEcommerceReviewByPhoneModel(
        brand,
        phoneModel
      );

      if (reviews.length > 0) {
        this.#view.showComment(reviews);
      } else {
        this.#view.showComment([
          {
            coment: "Belum ada review e-commerce untuk model HP ini.",
            nama: "-",
          },
        ]);
      }
    } catch (error) {
      console.error("Error showing e-commerce reviews by phone model:", error);
      this.#view.showComment([
        { coment: "Gagal memuat review e-commerce.", nama: "-" },
      ]);
    } finally {
      this.#view.hideLoading();
    }
  }

  async showRandomEcommerceReviewByBrand(brand) {
    try {
      this.#view.showLoading();
      const reviews = await this.#model.getRandomEcommerceReviewByBrand(brand);

      if (reviews.length > 0) {
        this.#view.showComment(reviews);
      } else {
        this.#view.showComment([
          { coment: "Belum ada review e-commerce untuk brand ini.", nama: "-" },
        ]);
      }
    } catch (error) {
      console.error("Error showing random e-commerce reviews:", error);
      this.#view.showComment([
        { coment: "Gagal memuat review e-commerce random.", nama: "-" },
      ]);
    } finally {
      this.#view.hideLoading();
    }
  }
}

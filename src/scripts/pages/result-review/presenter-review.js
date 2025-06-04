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
    const maxPrice = parseInt(localStorage.getItem('selectedMaxPrice')) || 0;
    const phones = await this.#model.getPhoneByBrand(brand, maxPrice);
    this.#view.showPhones(phones);
    this.#view.hideLoading();
  }

  async showComment(){
      this.#view.showLoading();
    //mengisi chat dengan memanggil getAll cats dari model
    const comment = await this.#model.getComment();    
    //memunculkan phone dari view
    this.#view.showComment(comment);
    //menyembunyikan loading dari view
    this.#view.hideLoading();
  }

  async showCommentByBrand(brand){
    this.#view.showLoading();
    const comment = await this.#model.getCommentByBrand(brand);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

  async showCommentByPhoneModel(brand, phoneModel){
    this.#view.showLoading();
    const comment = await this.#model.getCommentByPhoneModel(brand, phoneModel);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

  async showRandomCommentByBrand(brand){
    this.#view.showLoading();
    const comment = await this.#model.getRandomCommentByBrand(brand);
    this.#view.showComment(comment);
    this.#view.hideLoading();
  }

}
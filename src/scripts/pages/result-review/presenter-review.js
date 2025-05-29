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

  async showComment(){
      this.#view.showLoading();
    //mengisi chat dengan memanggil getAll cats dari model
    const comment = await this.#model.getComment();    
    //memunculkan phone dari view
    this.#view.showComment(comment);
    //menyembunyikan loading dari view
    this.#view.hideLoading();
  }

}
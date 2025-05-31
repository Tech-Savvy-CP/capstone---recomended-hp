export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
        <br>
        <p>ini adalah menu home.....</p>
        <br>
        <a href="#/result">Menu result</a>
        <br><br>
        <a href="#/review">Menu Review</a>
        <br><br>
        <a href="#/brandharga">filter brand harga</a>
        <br><br>
        <a href="#/confirmation">Confirmation page</a>
        <br><br>
        <a href="#/input">Input page</a>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}

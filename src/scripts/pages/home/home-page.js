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
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}

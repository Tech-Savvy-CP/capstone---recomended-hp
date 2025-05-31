import HomePage from "../pages/home/home-page";
import AboutPage from "../pages/about/about-page";
import ResultPage from "../pages/result/result-page";
import ReviewPage from "../pages/result-review/result-review";
import BrandHargaPage from "../pages/filter-brand-harga/filter-brand-harga.page";
import ConfirmationPage from "../pages/confimation/confirmation-hp";
import InputPage from "../pages/input-handphones/input-hanphones";

const routes = {
  "/": new HomePage(),
  "/about": new AboutPage(),
  "/brandharga": new BrandHargaPage(),
  "/confirmation": new ConfirmationPage(),
  "/input": new InputPage(),
  "/result": new ResultPage(),
  "/review": new ReviewPage(),
};

export default routes;

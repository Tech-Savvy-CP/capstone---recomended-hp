import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import ResultPage from '../pages/result/result-page';
import ReviewPage from '../pages/result-review/result-review';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/result': new ResultPage(),
  '/review': new ReviewPage(),
};

export default routes;

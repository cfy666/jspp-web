import $ from 'jquery';

import '../styles/resets.css';
import '../styles/common.css';
import '../styles/iconfont.css';
import '../styles/ui.scss';
import '../styles/header.scss';
import '../styles/carousel.scss';
import '../styles/recomCourse.scss';
import '../styles/footer.scss';

import Carousel from '../modules/Carousel';

;(($) => {
  const init = () => {
    new Carousel().init();
  }

  init();
})($)
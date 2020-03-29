import { userConfig } from 'utils/store';
import Swiper from 'swiper';

export default {
  initCarousel: ({ currentSelectedIndex }) => () => {

    const element = document.querySelector(`[data-slide]`);
    new Swiper(element, {
      direction: 'vertical',
      freeMode: true,
      initialSlide: currentSelectedIndex
    });
  },
  onSelect: () => () => {
    console.log('Aaaaaaa');
  }
};

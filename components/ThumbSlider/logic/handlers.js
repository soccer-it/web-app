import { userConfig } from 'utils/store';
import Swiper from 'swiper';

export default {
  initCarousel: ({ handlers, setSlider }) => () => {
    const { currentSelectedIndex } = handlers;
    const slider = new Swiper(`[data-slide]`, {
      autoplay: false,
      slidesPerView: 4.5,
      spaceBetween: 10
    });

    slider.slideTo(currentSelectedIndex);

    setSlider(slider);
  },
  onSelect: ({ handlers }) => value => {
    const { onSwipe } = handlers;
    onSwipe(value);
  }
};

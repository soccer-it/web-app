export default (useEffect, { users, initCarousel, handlers, slider }) => {
  useEffect(() => {
    initCarousel();
  }, [users]);
  useEffect(() => {
    const { currentSelectedIndex } = handlers;

    if (slider) {
      slider.slideTo(currentSelectedIndex);
    }
  }, [handlers]);
};

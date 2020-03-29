const effects = (useEffect, { users, initCarousel, currentSelectedIndex }) => {
  useEffect(() => {
    console.log(currentSelectedIndex);
    
    initCarousel();
  }, [users, currentSelectedIndex]);
};

export default effects;

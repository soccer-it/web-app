module.exports = (useEffect, { setTriggerMotion, setCurrentStep, step = 'askName' }) => {
  useEffect(() => {
    setTriggerMotion(true);
    setCurrentStep(step);
  }, []);
};

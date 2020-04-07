module.exports = (useEffect, { setTriggerMotion, setCurrentStep, step }) => {
  useEffect(() => {
    setTriggerMotion(true);
    setCurrentStep(step || 'askName');
  }, []);
};

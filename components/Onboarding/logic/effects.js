module.exports = (
  useEffect,
  { setTriggerMotion, setCurrentStep }
) => {
  useEffect(() => {
    setTriggerMotion(true)
    setCurrentStep('askName')
  }, []);
};

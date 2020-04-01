module.exports = (
  useEffect,
  { setTriggerMotion, stepsHandlers }
) => {
  useEffect(() => {
    setTriggerMotion(true)
  }, []);
};

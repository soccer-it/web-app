module.exports = (
  useEffect,
  { setTriggerMotion }
) => {
  useEffect(() => {
    setTriggerMotion(true)
  }, []);
};

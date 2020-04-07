import dynamic from 'next/dynamic';

module.exports = (_) => {
  const stepsHandlers = {
    askName: dynamic(import('../Steps/AskName').then((m) => m.default)),
    askContact: dynamic(import('../Steps/AskContact').then((m) => m.default)),
    done: dynamic(import('../Steps/Done').then((m) => m.default))
  };
  return {
    stepsHandlers
  };
};

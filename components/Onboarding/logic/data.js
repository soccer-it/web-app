import dynamic from 'next/dynamic';

const stepsHandlers = {
  askName: dynamic(import('../Steps/AskName').then(m => m.default)),
  askContact: dynamic(import('../Steps/AskContact').then(m => m.default)),
  done: dynamic(import('../Steps/Done').then(m => m.default))
};

module.exports = _ => {
  return {
    stepsHandlers
  };
};

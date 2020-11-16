import TakeCounter from './takecounter/TakeCounter';

const app = new TakeCounter(
  {
    passContainer: document.querySelector('[data-tag="pass-container"]'),
    passElement: document.querySelector('[data-tag="pass-element"]'),
    takeContainer: document.querySelector('[data-tag="take-container"]'),
    takeElement: document.querySelector('[data-tag="take-element"]'),
    stateElement: document.querySelector('[data-tag="state-message"]'),
  },
  {
    hidePassOnStartup: false,
  },
);

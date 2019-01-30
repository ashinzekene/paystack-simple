const PAYSTACK_URL = 'https://js.paystack.co/v1/inline.js';

const paystackLoaded = () => window.PaystackPop && typeof window.PaystackPop.setup === 'function';

let globalConfig = {};
export const setGlobalConfig = (obj) => {
  globalConfig = { ...globalConfig, ...obj };
};

const Paystack = () => {
  let instanceOptions = {};
  const init = ({ timeout = 10000 } = {}) => new Promise((resolve, reject) => {
    if (paystackLoaded()) resolve();
    const rejectPromise = setTimeout(reject, timeout, new Error('Could not fetch Paystack script'));
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script);
    script.onload = () => {
      clearTimeout(rejectPromise);
      resolve();
    };
    script.src = PAYSTACK_URL;
  });

  const addOptions = (options) => {
    instanceOptions = { ...globalConfig, ...instanceOptions, ...options };
  };

  const pay = async () => {
    if (!paystackLoaded) await init();
    const instance = window.PaystackPop.setup(instanceOptions);
    if (!instanceOptions.container) instance.openIframe();
  };

  return {
    init,
    addOptions,
    pay,
  };
};

export default Paystack;

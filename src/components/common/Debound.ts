const Debound = (fn, delay) => {
  return (...args) => {
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default Debound;

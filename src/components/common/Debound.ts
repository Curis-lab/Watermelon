type AnyFunction = (...args: any[]) => void;

const Debound = (fn: AnyFunction, delay: number) => {
  return (...args: any[]) => {
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default Debound;

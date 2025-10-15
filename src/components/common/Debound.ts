type AnyFunction<T> = (...args: T[]) => void;

function Debound<T>(fn: AnyFunction<T>, delay: number) {
  return (...args: T[]) => {
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default Debound;

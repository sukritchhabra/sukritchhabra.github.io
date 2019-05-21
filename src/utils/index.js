/* eslint import/prefer-default-export: "off" */
export class utils {
  static debounce = (f, delay) => {
    let timeoutId;

    function debounced(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => f.call(this, ...args), delay);
    }

    return debounced;
  }
}

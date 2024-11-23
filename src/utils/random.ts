export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const range = (start: number, end?: number | undefined, step = 1) => {
  const output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

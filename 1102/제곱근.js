const arr = [1, 2, 3, 4, 5];

const f1 = v => v ** 2;
const f2 = v => Math.sqrt(v);
const f3 = v => v ** 3;

const runRobot = (fns, data) => fns.reduce((pre, f) => pre.map(f), data);

// const result = arr.map(f3);
// const result = [f1, f2, f3].reduce((pre, f) => pre.map(f), arr);
// const result = [f1, f3].reduce((pre, f) => pre.map(f), arr);
const result = runRobot([f1, f2, f3], arr);

console.log(result);
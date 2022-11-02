const A = [1, 2, 3, 4, 5, 3];   
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];



const intersect = (arr1, arr2) => new Set(arr1.filter(a => arr2.includes(a)));

console.log(intersect(A, B)); // 1, 3, 5
console.log(intersect(A, C)); // 3, 4
console.log('------------------------------');
const diff = (arr1, arr2) => new Set(arr1.filter(a => !arr2.includes(a)));
console.log(diff(A, B)); // 2, 4
console.log(diff(B, A)); // 22, 44
console.log(diff(A, C)); // 1, 2, 5
console.log(diff(B, C)); // 1, 22, 44, 5
console.log('------------------------------');

const union = (arr1, arr2) => new Set([...arr1, ...arr2]);
console.log(union(A, B)); // 1, 2, 3, 4, 5, 22, 44
console.log(union(A, C)); // 1, 2, 3, 4, 5, 11, 222, 555
console.log('------------------------------');

const intersect2 = (set1, set2) => {
  const tmpSet = new Set(set2);
  return new Set(set1.filter(e => tmpSet.has(e)));
};
console.log(intersect2(A, B)); // 1, 3, 5
console.log(intersect2(A, C)); // 3, 4



// const union =(a,b) => new Set ([...a,...b]);
// console.log(union(A, B));

// const diff =(a,b) => new Set ([...a].filter)
// console.log(diff(A,B))

// intersect(A, B); // 1, 3, 5
// intersect(A, C); // 3, 4
// diff(A, B); // 2, 4
// diff(B, A); // 22, 44
// diff(A, C); // 1, 2, 5
// diff(B, C); // 1, 22, 44, 5
// union(A, B); // 1, 2, 3, 4, 5, 22, 44
// union(A, C); // 1, 2, 3, 4, 5, 11, 222, 555
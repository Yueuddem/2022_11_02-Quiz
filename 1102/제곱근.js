const arr = [1, 2, 3, 4, 5];

const arr_sqared= arr.map(number => number*number)
console.log(arr_sqared)
const arr_root= arr.map(Math.sqrt)
console.log(arr_root)
const arr_cubed= arr.map(number => number*number*number)
console.log(arr_cubed)

            // [1, 4, 9, 16, 25]
            // [1, 2, 3, 4, 5]
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
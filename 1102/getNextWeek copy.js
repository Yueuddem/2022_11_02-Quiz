
const weeks = ['일', '월', '화', '수', '목', '금', '토'];



console.log(typeof widx == 'undefined' )

const getNextWeek = () => {
  if (typeof widx == 'undefined'){
  let widx = -1;
  console.log(typeof widx)
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0

  return `${weeks[widx]}요일`;
  }
  else {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  
  return `${weeks[widx]}요일`;
  }
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 100);

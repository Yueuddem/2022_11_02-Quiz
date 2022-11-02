function copyobject(obj) {
  return 1;
}

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};

console.table(kim);

function copyobject(obj) {
  const copyObj = {};
  for (let k in obj) {
     console.log(k, obj[k]);
    copyObj[k] = obj[k];
  }

  return copyObj;
}
const newKim = copyobject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr);
console.log(newKim.addr);

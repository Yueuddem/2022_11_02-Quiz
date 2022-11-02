const fn =name => console.log(`Your name is ${name}`)

const fn = hong;


const obj = {
  name: 'ObjName',
  bark1() {
    console.log('1=', this.name);
    const self = this;
    setTimeout( function() {
      console.log('11=', self.name);
    }, 1000);
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
};

obj.bark1();
obj.bark2();


const rets = [];
for (let t of a) {
  if (Array.isArray(t)) rets.push(copyArray(t));
  else if (typeof t === 'object') rets.push(deepCopyObject(t));
  else rets.push(t);
}

return rets;
};


function deepCopyObject(obj) {
const copyObj = {};
for (let k in obj) {
  const tmpObj = obj[k];
  console.log(k, tmpObj, typeof tmpObj);
  // if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
  if (Array.isArray(tmpObj))
    copyObj[k] = copyArray(tmpObj);
  else if (typeof tmpObj === 'object')
    copyObj[k] = deepCopyObject(tmpObj);
  else
    copyObj[k] = obj[k];
}

return copyObj;
}

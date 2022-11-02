// try this 49페이지
const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', 
        addr: { city: 'Seoul' } },
};

function deepCopyObject(obj) {
  const copyobj={};

  for (let k in obj) {
    // console.log(k, obj[k]);
   const tmpobj = obj[k];
   console.log(k, tmpobj, typeof tmpobj);
   console.log(typeof tmpobj == "object");
   if (typeof tmpobj == "object") {
    arrobj = [];
    for (let i in tmpobj) {
     arrobj.push(i);
     console.log("오브젝트",arrobj);
    }
   
  }
  else {
    copyobj[k] = obj[k];
    console.log("그냥",copyobj);
   }
 
  };
  return copyobj;
};


const newKim = deepCopyObject(kim);
// console.log(kim, newKim)

// newKim.addr = 'Daegu';
// newKim.oo.name = 'Kim';
// newKim.arr[0] = 100;
// newKim.arr[3].aid = 200;
// newKim.arr[4][1] = 300;
// newKim.oo.addr.city = 'Daejeon';
// console.log(kim, newKim); // oo와 arr이 다르면 통과!

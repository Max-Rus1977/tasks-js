
const dirtyArr = [1, 2, 3, [4, 5, [6, 7, [9]]], 10];

function clearArr(dirtyArr) {
  for (let key of dirtyArr) {

    if (Array.isArray(key)) {

      let indexArrKey = dirtyArr.indexOf(key);
      let cutAndString = dirtyArr.splice(indexArrKey, 1).toString();

      for (let item of cutAndString) {

        if (item !== ',') {
          let i = +item;
          dirtyArr.splice(indexArrKey, 0, i);
        }

      }

    }
  }
  //console.log(dirtyArr);
}

clearArr(dirtyArr);

/* ------- */

const stringComparArr = ['adgb', 'agiob', 'dhjf', 'GghC', 'GdgC']

function duble(verifiableArr) {

  const croppingStr = verifiableArr.map(item => `${item[0]}${item[item.length - 1]}`)

  const splitPairs = croppingStr.map((item, index, arr) => {

    return [item, arr[index + 1]]
  })
  //console.log(splitPairs);
  splitPairs.pop();

  const result = splitPairs.map(item => {
    if (item[0] === item[1]) {
      return true;
    }

    return false;
  })

  //return console.log(result);
}

duble(stringComparArr);

/* -------------------------- */

const num = 505;

function numberWord(num) {

  const word = {
    num1: 'один',
    num2: 'два',
    num3: 'три',
    num4: 'четыре',
    num5: 'пять',
    num6: 'шесть',
    num7: 'семь',
    num8: 'восемь',
    num9: 'девять',
    num10: 'десять',
    num11: 'одинадцать',
    num12: 'двинадцать',
    num13: 'тринадцать',
    num14: 'четырнадцать',
    num15: 'пятнадцать',
    num16: 'шестнадцать',
    num17: 'семнадцать',
    num18: 'восемнадцать',
    num19: 'девятнадцать',
    num20: 'двадцать',
  }

  const wordDozens = {
    num20: 'двадцать',
    num30: 'тридцать',
    num40: 'сорок',
    num50: 'пятьдесят',
    num60: 'шестьдесят',
    num70: 'семдесят',
    num80: 'восемдесят',
    num90: 'девяносто',
  }

  const wordHundreds = {
    num100: 'сто',
    num200: 'двесте',
    num300: 'триста',
    num40: 'четыреста',
    num500: 'пятьсот',
    num600: 'шестьсот',
    num700: 'семьсот',
    num800: 'восемьсот',
    num90: 'девятьсот',
  }

  if (num <= 20) {
    return console.log(word[`num${num}`]);
  }
  if (num > 20 && num <= 99) {
    const pruning = Math.trunc(num / 10);
    const dozens = wordDozens[`num${pruning}0`];

    const naturalNumber = num - (pruning * 10);
    if (naturalNumber === 0) {
      return console.log(dozens);
    }
    else {
      const dozensNumber = word[`num${naturalNumber}`];
      return console.log(dozens, dozensNumber);
    }
  }
  if (num > 100 && num < 999) {
    return console.log('пока рано');
  }
}

//numberWord(num)

//const arrNumbers = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

// function verifiableArr(arrey) {

//   let intermediateArr = [];
//   let resultArr = [];
//   let caunter = 1;
//   let caunterTuo = 0;

//   arrey.forEach((item, index, arr) => {

//     intermediateArr.push(item);
//     if (item + 1 === arr[index + 1]) {
//       caunter++;
//       intermediateArr.push(arr[index + 1]);

//       if (caunter > 2) {
//         caunterTuo++;
//       }
//     }
//     else {
//       resultArr.push(item);

//       if (caunter == 2) {
//         resultArr.pop();
//         resultArr.push(intermediateArr[0], intermediateArr[1])
//       }

//       if (caunterTuo >= 1) {
//         resultArr.pop();

//         const insertSeparator = [intermediateArr[0], intermediateArr[intermediateArr.length - 1]].join('-');
//         resultArr.push(insertSeparator);

//       }

//       caunter = 1;
//       caunterTuo = 0;
//       intermediateArr = [];

//     }


//   })
//   return console.log(resultArr.join(','));

// }

//verifiableArr(arrNumbers);

/* ======================== */


const arrNumbers = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

function verifiableArr(array) {

  let intermediateArr = [];
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 === array[i + 1]) {
      if (intermediateArr.length > 2) {
        intermediateArr.push(array[i + 1]);
        continue;
      }
      intermediateArr.push(array[i], array[i + 1]);
      continue
    }
    if (intermediateArr.length < 3 && intermediateArr.length !== 0) {
      intermediateArr.map(item => {
        resultArr.push(item)
      });
      intermediateArr = [];
      continue;
    }
    if (intermediateArr.length > 3) {
      resultArr.push(`${intermediateArr[0]}-${intermediateArr[intermediateArr.length - 1]}`)
      intermediateArr = [];
      continue;
    }
    console.log(`${i}`, array[i]);
    resultArr.push(array[i]);
  }
  console.log('result', resultArr);

}

verifiableArr(arrNumbers);





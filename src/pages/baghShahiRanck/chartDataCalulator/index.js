export const averageAllWords = (data, count = 7) => {
  // debugger
  const values = Object.values(data).slice(-count);

  return values.map((item, indx) => {
    const sum = item.reduce((acc, item2) => acc + item2.position, 0);
    const avg = Number((sum / item.length).toFixed(2));

    return {
      name: Object.keys(data)[indx],
      positionAverage: 10 - avg,
    };
  });
};
export const distributionCurrentAndPrevWords = (data, count = 2) => {
  const values = Object.values(data).slice(-count);
  // debugger;

  debugger
  const arr = values.map((words) => {
    const counterCurrnet = {
      "1-3": 0,
      "4-7": 0,
      "8-10": 0,
    };
    
    words.forEach((word) => {
      if (word.position <= 3) counterCurrnet["1-3"]++;
      else if (word.position <= 7) counterCurrnet["4-7"]++;
      else if (word.position <= 10) counterCurrnet["8-10"]++;
      console.log({ counterCurrnet });
    });

    return counterCurrnet;
  });

  // values[0].forEach((word) => {
  //   if (word.position <= 3) counterPrev["1-3"]++;
  //   else if (word.position <= 7) counterPrev["4-7"]++;
  //   else if (word.position <= 10) counterPrev["8-10"]++;
  // });

  // values[1].forEach((word) => {
  //   if (word.position <= 3) counterCurrnet["1-3"]++;
  //   else if (word.position <= 7) counterCurrnet["4-7"]++;
  //   else if (word.position <= 10) counterCurrnet["8-10"]++;
  // });

  const x = arr[arr.length - 1];
  const mainChart = Object.keys(x).map((item, indx) => {
    return {
      uv: Object.values(x)[indx],
      name: item,
    };
  });

  return {
    arr,
    mainChart,
  };
};
export const decreaseFromPrevWordsAvg = (data, count = 7) => {
  const values = Object.values(data).slice(-count - 1);
  const keys = Object.keys(data).slice(-count - 1);

  let allCounter = 0;

  const arr = values
    .map((item, indx) => {
      console.log(!indx, "hi");
      if (!indx) return null;

      let counter = 0;

      item.forEach((word) => {
        if (typeof values?.[indx - 1] === "undefined") return undefined;
        // if (
        //   word.position <
        //   values?.[indx - 1].find((x) => x.keyword_uuid === word.keyword_uuid)
        //     .position
        // ) {

        counter++;
        allCounter++;

        counter =
          word.position -
          values?.[indx - 1].find((x) => x.keyword_uuid === word.keyword_uuid)
            .position;

        // }
      });
      return {
        uv: Number(((counter > 0 ? counter : 0) / item.length).toFixed(2)),
        name: keys[indx],
      };
    })
    .filter((item) => item?.uv >= 0);

  const totalAvg = Number(
    (arr.reduce((acc, item) => acc + item.uv, 0) / arr.length).toFixed(2)
  );
  // console.log({ totalAvg, arr });

  return { arr, total: allCounter, totalAvg };
};
export const increaseFromPrevWordsAvg = (data, count = 7) => {
  const values = Object.values(data).slice(-count - 1);
  const keys = Object.keys(data).slice(-count - 1);

  let allCounter = 0;

  const arr = values
    .map((item, indx) => {
      if (!indx) return null;

      let counter = 0;

      item.forEach((word) => {
        if (typeof values?.[indx - 1] === "undefined") return undefined;

        counter++;
        allCounter++;

        counter =
          values?.[indx - 1].find((x) => x.keyword_uuid === word.keyword_uuid)
            .position - word.position;
      });
      return {
        uv: Number(((counter > 0 ? counter : 0) / item.length).toFixed(2)),
        name: keys[indx],
      };
    })
    // .filter((item) => item !== null)
    // .filter(Boolean)
    .filter((item) => item?.uv >= 0);
  // console.log(arr);

  const totalAvg = Number(
    (arr.reduce((acc, item) => acc + item.uv, 0) / arr.length).toFixed(2)
  );
  // console.log({ totalAvg, arr }, "ooooooooooooo");

  return { arr, total: allCounter, totalAvg };
};
export const decreaseFromPrevWordsCount = (data, count = 7) => {
  const values = Object.values(data).slice(-count - 1);
  const keys = Object.keys(data).slice(-count - 1);

  let allCounter = 0;

  const arr = values
    .map((item, indx) => {
      if (!indx) return null;

      let counter = 0;

      item.forEach((word) => {
        if (typeof values?.[indx - 1] === "undefined") return undefined;
        if (
          word.position >
          values?.[indx - 1].find((x) => x.keyword_uuid === word.keyword_uuid)
            .position
        ) {
          counter++;
          allCounter++;
        }
      });
      return { uv: counter, name: keys[indx] };
    })
    .filter(Boolean);

  return { arr, total: allCounter };
};
export const increaseFromPrevWordsCount = (data, count = 7) => {
  const values = Object.values(data).slice(-count - 1);
  const keys = Object.keys(data).slice(-count - 1);

  let allCounter = 0;
  let everyThing = 0;

  const arr = values
    .map((item, indx) => {
      if (!indx) return null;
      let counter = 0;

      item.forEach((word) => {
        everyThing++;
        if (typeof values?.[indx - 1] === "undefined") return undefined;
        if (
          word.position <
          values?.[indx - 1].find((x) => x.keyword_uuid === word.keyword_uuid)
            .position
        ) {
          counter++;
          allCounter++;
        }
      });
      return { uv: counter, name: keys[indx] };
    })
    .filter(Boolean);
  // console.log({ arr, total: allCounter, everyThing }, "wwwwww");

  return { arr, total: allCounter, everyThing };
};
export const allWordsCount = (data, count = 7) => {
  const values = Object.values(data).slice(-count);

  return new Set(values.flat().map((item) => item.keyword_uuid)).size;
};

// footer charts
export const sortPositionWord = (data) => {
  const positions = {
    "1-3": 0,
    "4-7": 0,
    "8-10": 0,
  };

  data.forEach((item, indx) => {
    if (item.position <= 3) positions["1-3"]++;
    else if (item.position <= 7) positions["4-7"]++;
    else if (item.position <= 10) positions["8-10"]++;
  });

  return Object.keys(positions).map((item, indx) => ({
    name: item,
    value: Object.values(positions)[indx],
  }));
};
export const sortPositionIncreaseWord = (data, pastData) => {
  let total = 0;

  const pastPoses = sortPositionWord(pastData);

  const arr = sortPositionWord(data).map((word) => {
    const pasWord = pastPoses.find((item) => item.name === word.name);
    let increase = 0;

    if (word.value - pasWord.value > 0) {
      increase = word.value - pasWord.value;
      total += increase;
    }
    return {
      name: word.name,
      value: increase,
    };
  });

  // console.log("uuuuuu", arr, total);

  return { arr, total };
};
export const distributionCurrentAndPrevWordsIncrease = (data, count = 2) => {
  const values = Object.values(data).slice(-count, -count + 2 || undefined);
  // debugger;

  const arr = values.map((words) => {
    const counterCurrnet = {
      "1-3": [],
      "4-7": [],
      "8-10": [],
    };

    words.forEach((word) => {
      if (word.position <= 3) counterCurrnet["1-3"].push(word.keyword_uuid);
      else if (word.position <= 7)
        counterCurrnet["4-7"].push(word.keyword_uuid);
      else if (word.position <= 10)
        counterCurrnet["8-10"].push(word.keyword_uuid);
      // console.log({ counterCurrnet });
    });

    return counterCurrnet;
  });
  console.log("yyyyyyy", arr);

  const counterCurrnet = {
    "1-3": 0,
    "4-7": 0,
    "8-10": 0,
  };

  arr[arr.length - 1]["1-3"].forEach((item) => {
    const exist = arr[arr.length - 2]["1-3"].find((x) => x === item);
    if (!exist) counterCurrnet["1-3"]++;
  });
  arr[arr.length - 1]["4-7"].forEach((item) => {
    const exist = arr[arr.length - 2]["4-7"].find((x) => x === item);
    if (!exist) counterCurrnet["4-7"]++;
  });
  arr[arr.length - 1]["8-10"].forEach((item) => {
    const exist = arr[arr.length - 2]["8-10"].find((x) => x === item);
    if (!exist) counterCurrnet["8-10"]++;
  });
  // console.log("pppppp", counterCurrnet);

  const xx = Object.keys(counterCurrnet).map((item, indx) => ({
    name: item,
    value: Object.values(counterCurrnet)?.[indx],
  }));

  const total = xx.reduce((acc, item) => acc + item.value, 0);
  // console.log(total, "oi");

  // values[0].forEach((word) => {
  //   if (word.position <= 3) counterPrev["1-3"]++;
  //   else if (word.position <= 7) counterPrev["4-7"]++;
  //   else if (word.position <= 10) counterPrev["8-10"]++;
  // });

  // values[1].forEach((word) => {
  //   if (word.position <= 3) counterCurrnet["1-3"]++;
  //   else if (word.position <= 7) counterCurrnet["4-7"]++;
  //   else if (word.position <= 10) counterCurrnet["8-10"]++;
  // });

  // const x = arr[arr.length - 1];

  // const mainChart = Object.keys(x).map((item, indx) => {
  //   return {
  //     uv: Object.values(x)[indx],
  //     name: item,
  //   };
  // });

  return {
    arr: xx,
    total,
    // mainChart,
  };
};
export const distributionCurrentAndPrevWordsDecrease = (data, count = 2) => {
  const values = Object.values(data).slice(-count, -count + 2 || undefined);
  // debugger;

  const arr = values.map((words) => {
    const counterCurrnet = {
      "1-3": [],
      "4-7": [],
      "8-10": [],
    };

    words.forEach((word) => {
      if (word.position <= 3) counterCurrnet["1-3"].push(word.keyword_uuid);
      else if (word.position <= 7)
        counterCurrnet["4-7"].push(word.keyword_uuid);
      else if (word.position <= 10)
        counterCurrnet["8-10"].push(word.keyword_uuid);
      // console.log({ counterCurrnet });
    });

    return counterCurrnet;
  });
  // console.log("yyyyyyy", arr);

  const counterCurrnet = {
    "1-3": 0,
    "4-7": 0,
    "8-10": 0,
  };

  arr[arr.length - 2]["1-3"].forEach((item) => {
    const exist = arr[arr.length - 1]["1-3"].find((x) => x === item);
    if (!exist) counterCurrnet["1-3"]++;
  });
  arr[arr.length - 2]["4-7"].forEach((item) => {
    const exist = arr[arr.length - 1]["4-7"].find((x) => x === item);
    if (!exist) counterCurrnet["4-7"]++;
  });
  arr[arr.length - 2]["8-10"].forEach((item) => {
    const exist = arr[arr.length - 1]["8-10"].find((x) => x === item);
    if (!exist) counterCurrnet["8-10"]++;
  });
  // console.log("pppppp", counterCurrnet);

  const xx = Object.keys(counterCurrnet).map((item, indx) => ({
    name: item,
    value: Object.values(counterCurrnet)?.[indx],
  }));

  const total = xx.reduce((acc, item) => acc + item.value, 0);
  // console.log(total, "oi");

  // values[0].forEach((word) => {
  //   if (word.position <= 3) counterPrev["1-3"]++;
  //   else if (word.position <= 7) counterPrev["4-7"]++;
  //   else if (word.position <= 10) counterPrev["8-10"]++;
  // });

  // values[1].forEach((word) => {
  //   if (word.position <= 3) counterCurrnet["1-3"]++;
  //   else if (word.position <= 7) counterCurrnet["4-7"]++;
  //   else if (word.position <= 10) counterCurrnet["8-10"]++;
  // });

  // const x = arr[arr.length - 1];

  // const mainChart = Object.keys(x).map((item, indx) => {
  //   return {
  //     uv: Object.values(x)[indx],
  //     name: item,
  //   };
  // });

  return {
    arr: xx,
    total,
    // mainChart,
  };
};
// export const sortPositionDecreaseWord = (data, pastData) => {
//   return null;
// };

export const sortPositionIncreaseAvgWord = (data, pastData) => {
  let total = 0;
  let increase = 0;

  // const pastPoses = sortPositionWord(pastData);

  const arr = data.map((word) => {
    const pasWord = pastData.find(
      (item) => item.keyword_uuid === word.keyword_uuid
    );

    if (word.position - pasWord.position > 0) {
      increase = word.position - pasWord.position;
      total++;
      // debugger;
    }
    return {
      name: word.keyword_uuid,
      // value: increase,
      value: Number((increase / total).toFixed(2)),
    };
  });
  // console.log(increase, total, "tttttt", (increase / total).toFixed(2) || 0);
  return { avg: Number((increase / total).toFixed(2)) || 0, increase, total };
};

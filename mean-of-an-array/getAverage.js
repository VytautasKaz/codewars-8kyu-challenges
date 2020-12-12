function getAverage(marks){
    let marksSum = marks.reduce(function (a, b) {
      return a + b;
    }, 0);
    let marksAvg = marksSum / marks.length;
    return Math.floor(marksAvg);
  }
function maxINmin(array){
    const ordernedArray = array.sort((a,b) => a -b)
    let maxSum = 0;
    let minSum = 0;
    let sum = 0;
    let min = ordernedArray[0];
    let max = ordernedArray[ordernedArray.length - 1];
    
    for(let i = 0; i < ordernedArray.length; i++){
      sum += ordernedArray[i]
    }
    maxSum = sum - min;
    minSum = sum - max;
    return console.log(minSum,maxSum)
  }
  
  maxINmin([1, 2, 3, 4, 5])
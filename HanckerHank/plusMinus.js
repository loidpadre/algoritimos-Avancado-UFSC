
function plusMinus(arr) {
    // Write your code here
    let arrayLength = arr.length;
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        positive++;
      }else if(arr[i] < 0){
        negative++
      }else{
        zeros++
      }
        
    }
    let fracPositive = (positive / arrayLength).toFixed(6)
    let fraNegative =  (negative / arrayLength).toFixed(6)
    let fracZeros = (zeros / arrayLength).toFixed(6)
    console.log(fracPositive)
    console.log(fraNegative)
    console.log(fracZeros)
}


const array = [1,2,3,45,6,7]
plusMinus(array)
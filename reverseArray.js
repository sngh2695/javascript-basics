
function reverseArray(inputArray){
    let outputArray=[];
  inputArray.map((ele,index)=>{
    //   console.log(ele);
    //   console.log(index);
      outputArray[inputArray.length-index-1]=ele;
  })
  return outputArray;
}


console.log(reverseArray([3,2,1,4,6]));

console.log([3,2,1,4,6].reverse())
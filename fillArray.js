function fillArray(arraySize,value){
let newArray=new Array(arraySize);
newArray.fill(value);
return newArray;
}

let answer=fillArray(5,"123");
console.log(answer);


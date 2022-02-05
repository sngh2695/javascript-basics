function arrayWithOutListedValues(arr,...excluded){
   let outputArray= arr.filter((e)=>{
        return excluded.indexOf(e)==-1
    });
    return outputArray;
}

console.log(arrayWithOutListedValues([1,2,3,4,5],1,2));
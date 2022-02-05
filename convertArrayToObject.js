// function convertArrayToObject(){


// }

// const data = [['a', 1], ['b', 2]];
// let outputObject={};
// for(let i=0;i<data.length;i++){
   
//     let key,value;
//     for(let j=0;j<data[i].length;j++){  
//         j==0?key=data[i][j]:value=data[i][j];
//         // console.log(" ",data[i][j]);
//     }
//     console.log(`value of key ${key} and value is ${value}`);


//     //assigning key with string not possible
//     // outputObject.key=value;
//     outputObject[key]=value;

    
// }
// console.log(outputObject);

// let keys ="1";
// let obj={};
// obj.keys="one";
// console.log(obj);


const fromPairs = (array) => array.reduce((acc, value) => {
    console.log(`acc : ${acc} and value : ${value}`);
    if (Array.isArray(value)) {
        
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});


  console.log(fromPairs([['a', 1], ['b', 2],{'c':3}]));
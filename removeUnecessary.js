function removeUnecessary(arr){
return arr.filter(check);
}

console.log(removeUnecessary([null,undefined,"",false,true,1,"2"]))
function check(e){
    if(e){
    return e;
}
}

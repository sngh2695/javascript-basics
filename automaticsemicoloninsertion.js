/*
In javascript,as a developer,we are not bind to add semicolon at the end of every line 
There is automatic semicolon insertion that the javascript does for us.
It is a good practice to add semicolon explicitly by avoiding error in some situations.
*/

//EXAMPLE 1

function getObject(){
    return
    {
        myname:"shubham" //unreachable code and return will have ASI 
    }
}

console.log(getObject());

//EXAMPLE 2s

function getObject2(){
    return{
        myname:"shubham"
    }
}

console.log(getObject2());
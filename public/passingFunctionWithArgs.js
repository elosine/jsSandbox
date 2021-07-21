function a(args){
    b.apply(this, arguments);
}

function b(args){
   alert(arguments[0]);
}

a(1,2,3);

//have to use reserved word arguments
//notice that 'arguments' become an array of args

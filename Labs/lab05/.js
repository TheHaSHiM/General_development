function seq(...args){
    if (arg.length > 0 &&   typeof arg[0] === 'number'){
        return arg[0];
    }
    
    const func = [...args];

   function inner(...in_args){
    if (typeof in_args[0] === 'function'){
        func.push(...in_args);
   }else if (typeof in_args[0] === 'number'){
        return 
   }


   }
}
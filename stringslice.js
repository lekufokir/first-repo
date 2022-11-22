let newString = 'I Lovedvasdvsdfsd Bangladesh';
let newString2 = '';

    if(newString.length>=10){
        for (let i=0 ; i<newString.length ;i++) {
            if(i<3 || i>(newString.length-4)){
                newString2 += newString[i];
            }
            else{
                newString2 += '.';
            }
        }
    }
    else{
        console.log('The string length is less than 10!');
        console.log(1);
    }
    console.log(newString2);
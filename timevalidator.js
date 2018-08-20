function checkFormat(input) {
    if((input===undefined)||(input === null)){
        return false 
    } 

    const regExp = /^\d{4}\-([0-1]*[0-9])\-([0-3]*[0-9])\T([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?\Z?$/
    
    return regExp.test(input);
}


/** Test the function for a couple of strings */
let strArray = ['2015-4-22T16:18:32.123Z',
                '2015-1-12T01:02:45.786Z',
                '2015-1-12T01:222:45.786Z', 
                '1994-11-05T13:15:30Z',
                '1999-789-12T16:13:55.44Z',
                null]

for(let i=0;i<strArray.length;i++){
    console.log(`${strArray[i]} is : ${checkFormat(strArray[i])}`)
}

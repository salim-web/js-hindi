const coding = ['js', 'py', 'rb', 'cpp', 'java']

coding.forEach( function ( item ) {
    // console.log(item);
    
})

coding.forEach( ( item ) => {
    // console.log(item);
    
})

function print(params) {
    console.log(params);
}

// coding.forEach( print )  // only the reference of the function shall be given not to be executed i.e,  not paranthesis

coding.forEach( (item, index, arr) => {
    // console.log(item,index,arr);
    // print(`The values in the array are: ${item}`)
} )

// for each fetches values, index an the whole array in this order

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName, ' file name is', item.languageFileName);
    
});

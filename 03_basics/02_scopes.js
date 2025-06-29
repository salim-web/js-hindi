const a = 2
let b = 3
var c = 4

if(true) {
    const a = 20
    let b = 30
    var c = 40
    // console.log('Inner A: ', a);
    
}
// console.log('Outer A:', a);
// console.log(b);
// console.log(c);


function one() {
    const userName = 'Salim'

    function two() {
        const website = 'youtube'
        console.log(userName);
    }
    // console.log(website);

    two()

}  

// one()

if (true) {
    const userName = 'Salim'
    if (userName === 'Salim') {
        const website = 'youtube'
        // console.log(userName + website);
    }
    // console.log(website);
        
}

// console.log(userName);

// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(num) {          // we can call the function before
    return num + 1
}

addTwo(4)
const addTwo =  function(num) {            // expression => we can't call the function before the variable
    return num + 2
}


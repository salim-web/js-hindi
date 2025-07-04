// for of

// ["", "",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const element of arr) {
    // console.log(element);
    
}

const greetings = "Hello World!"

for (const element of greetings) {   // or for(const greet of greetings)
    // if (element == ' ') {
    //     continue             // it will stop the space from getting printed
    // }

    // if (element == ' ') {
    //     break                // it will breal out of the loop once it detects space
    // }

    // console.log(element);
    
}

const map = new Map()

map.set('In', 'India')
map.set('Uk', 'United Kingdom')
map.set('Fr', 'France')
map.set('In', 'India')
map.set('In', 'India') //  it will not get entered in the map as it's a duplicate field
// in map the key value pairs will be unique and the entered order of the key value pairs retains

// console.log(map);

for (const [key, value] of map) {   // destructioring of array
    // console.log(key, ' : ', value);
    
}

const myObj = {
    game1 : 'Indiana Jones',
    game2 : 'Forza Horizon 5',
    game3 : 'NFS'
}

for (const [key, value] of myObj) {
    // console.log(key, ' : ' ,value); // myObj is not iterable in forof loop
}


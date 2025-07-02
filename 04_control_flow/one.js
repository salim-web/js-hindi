// if

const isUserLoggedIn = true

if (isUserLoggedIn){
    const power = 'fly'
    // console.log(`User power: ${power}`);
}

const balance = 400

// if (balance > 500) console.log(`Wealth status: rich`), console.log('Dont write like this');

// if (balance < 500) {
//     console.log('less than 500');
// }

// else if (balance < 750) {
//     console.log('less than 750');
// }

// else if (balance < 900) {
//     console.log('less than 900');
// }

// else {
//     console.log('less than 1200');
// }

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {        // && => and
    // console.log("You can buy courses");
}

const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false

if (userLoggedInFromGoogle || userLoggedInFromEmail) {   // || => or
    // console.log("You're now logged in");  
}


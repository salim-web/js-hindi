// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (used to manage the pollution caused by global scope variable pollutions)

(function salim(){        // named IIFE
    console.log('DB CONNECTED');
}) ();    // en error will occur in the next IIFE declaration if ; is not added here

(() => {
    console.log('DB CONNECTED TWO');
}) ()
function fsmw(){
alert ("fsmw here");	
}


const copyFile = require('fs-copy-file');
 
// destination.txt will be created or overwritten by default.
copyFile('source.txt', 'destination.txt', (err) => {
    if (err)
        throw err;
    
    console.log('source.txt was copied to destination.txt');
});
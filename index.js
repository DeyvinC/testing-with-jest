const sum = (a,b) => {

    if(!(a && b)){
        return 'Invalid Input'
    }

    return a + b;
}

const square = (a) => {
    if(!a){
        return 'Invalid input'
    }
    return a * a
} 

const cube = (a) => {
    if(!a){
        return 'Invaild Input'
    }
    return a * a * a
}
    
 



module.exports = {sum, square, cube};
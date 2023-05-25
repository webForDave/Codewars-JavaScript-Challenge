let validatePin = pin => {
    let numberAsString = pin.toString();
    
    if (numberAsString.length === 4 || numberAsString.length === 6) {
        return true;

    }   else if (numberAsString.length === 5) {
        return false;

    }   else if (numberAsString.length < 4 || numberAsString.length > 6) {
        return false;

     }

}
console.log(validatePin('123456'));
let validatePin = pin => {
  
//     Simply check if the length is 4 or 6, and it has to be divisible a number. (strings with letters will not be divisible) 
//     if it is not divisible (it returns NaN which is a falsey value) the condition will not be met and return false
    if ((pin.length === 4 || pin.length === 6) && (pin/1)) return true;
    else return false
}
console.log(validatePin('123456'));

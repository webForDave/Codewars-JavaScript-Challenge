const abbrevator = (word1, word2) => {
    return(`${word1[0]}.${word2[0]}`);
}
console.log(abbrevator('David', 'Akinola'))




//////////////SECOND/////////////
let greeting = (name, owner) => {
    if (name === owner) {
        return('Hello boss');

    } else if (name != owner) {
        return('Hello guest');
    }
}
console.log(greeting('David', 'John'));
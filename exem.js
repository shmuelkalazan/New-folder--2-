function Mission1(numbers){
    return numbers.filter(n => n%2 == 0)}
const num = [,6,45,48,1,2,5,4,1,]
//console.log(Mission1(num));

function Mission2(theString){
    let words = theString.split(" ")
    console.log(words);   
    let sum = words.filter(w => w.length == 4)
    return sum.length
}
const str = "hello how ar you frnd iam love you"
//console.log(Mission2(str));

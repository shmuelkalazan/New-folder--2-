function Mission1(numbers){
    return numbers.filter(n => n%2 == 0)}
//const num = [,6,45,48,1,2,5,4,1,]
//console.log(Mission1(num));

function Mission2(theString){
    let words = theString.split(" ")
    let sum = words.filter(w => w.length == 4)
    return sum.length
}
//const str = "hello how ar you frnd iam love you"
//console.log(Mission2(str));


function Mission3(arr){
    return arr.flat()
}
//const arr = [[1,2],[3,4]]
//console.log(Mission3(arr));

function Mission4(arr){
    let up = true
    let down = true
    for (let index = 0; index < arr.length -1; index++) {
        if (arr[index] > arr[index+1]){
            up = false}
        if (arr[index] < arr[index+1]){
            down = false}} 
    if (up)
        return 1
    if (down)
        return 2
    else
        return 0
}

// const arr2 = [1,2,5,8,8,9,12,15]
// const arr3 = [15,12,11,9,8,8,6,5,4,1]
// const arr4 = [5,3,6,7,1,3,5,41]
// console.log(Mission4(arr3));

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}


//Objective is to find the number of trailing zeroes in the factorial of a number

let n = 30


//O(logn) solution where n is the given value
//We use a mathematical approach to find the number of trailing zeroes

let zeroCount = 0
    
while (n > 0) {
    n = Math.floor(n / 5)
    zeroCount += n
}

return zeroCount
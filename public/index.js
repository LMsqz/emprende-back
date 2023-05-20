


//Named function definition 
function suma(param1, param2) {
    console.log({param1, param2});
    let total = param1 + param2;
    return total
}

const arg1 = 3
const arg2 = 5

// invoke call or "execute a function"
console.table({
    constants: suma(arg1, arg2),
    values: suma(10, 20),
    expresions: suma(2 + 2,5 * 8),
    error1: suma(3),
    error2: suma(2, "2"),
    error3: suma("Martin", "Luis")
})
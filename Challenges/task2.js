function calc(a, b, op) {
    switch (op) {
        case '+':
            return a + b
            break;

        case '-':
            return a - b
            break

        case '/':
            if (b == 0) return Infinity
            else return a / b
            break

        case '*':
            return a * b
            break

        case '%':
            if (a < b) return "Invalid operation"
            else if (b == 0) return Infinity

        default:
            return "Input is not valid"
    }
}

console.log(calc(9, 0, '*'))
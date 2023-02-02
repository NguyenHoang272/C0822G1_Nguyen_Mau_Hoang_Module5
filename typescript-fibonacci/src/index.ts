let fibonaci = (num: number): number => {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
}

let sum: number = 0;
let num: number = 10;
console.log("Dãy 10 số fibonacci: ")
for (let i = 0; i < num; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i);
}

console.log("Tổng: "+sum);
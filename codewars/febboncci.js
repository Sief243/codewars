let arr = [0, 1];
function fib(num) {
    if (num < 0) {
        //fib(num-1) + fib(num - 2);
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return BigInt(-arr[num-1])
    } else {
        fib(num-1) + fib(num - 2);
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return BigInt(arr[num-1]);
    }
    }

console.log(fib(1))
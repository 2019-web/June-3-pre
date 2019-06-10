/**
 * Created by qiyusi on 5/26/19.
 */


onmessage = function (event) {
    var first = event.data.first;
    var second = event.data.second;
    calculate(first, second);
};


function calculate(first, second) {
    var common_divisor = divisor(first, second);
    var common_multiple = multiple(first, second);
    postMessage("任务完成! " +
        "最大公约数为" + common_divisor +
        " 最小公倍数为" + common_multiple);

}


function divisor(a, b) {
    if (a % b == 0) {
        return b;
    } else {
        return divisor(b, a % b);
    }
}

function multiple(a, b) {
    var multiple = 0;
    multiple = a * b / divisor(a, b);
    return multiple;
}
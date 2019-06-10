/**
 * Created by qiyusi on 5/26/19.
 */
var start;
onmessage = getStart;
function getStart(event) {
    start = event.data;
    onmessage = getEnd;
}

var end;
function getEnd(event) {
    end = event.data;
    onmessage = null;
    work();
}

function work() {
    var result = 0;
    for (var i = start; i < end; i += 1) {
        result+= handle(i);
    }
    postMessage(result);
    close();
}

function handle(i){
    return i*(i+1);
}


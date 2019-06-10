/**
 * Created by qiyusi on 5/26/19.
 */
var num_workers = 10;
var items_per_worker = 100;

var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i += 1) {
    var worker = new Worker('core.js');
    worker.postMessage(i * items_per_worker);
    worker.postMessage((i + 1) * items_per_worker);
    worker.onmessage = storeResult;
}

function storeResult(event) {
    result += event.data;
    pending_workers -= 1;
    if (pending_workers <= 0)
        postMessage(result);
}


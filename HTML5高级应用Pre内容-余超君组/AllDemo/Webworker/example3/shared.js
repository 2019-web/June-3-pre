const ids = [];
const ports = [];

const broadcast = function (data) {
    for (let port of ports) {
        port.postMessage(data);
    }
};

onconnect = function(e) {
    const port = e.ports[0];
    ports.push(port);

    port.addEventListener('message', (ev) => {
        const { type, id } = ev.data;
        switch(type) {
            case 'start':
                ids.push(id);
                broadcast({
                    id,
                    type: 'created',
                    data: ids,
                });
                break;
        }
    });

    port.start();
};

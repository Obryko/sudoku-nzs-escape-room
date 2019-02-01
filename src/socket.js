import io from 'socket.io-client';

const socket = io('/');

export const onPop = (handler) => {
    socket.on('showPop', (data) => {
        handler(data.pop);
    });
};

export const onRefreshPage = (handler) => {
    socket.on('refreshPageEvent', () => {
        handler();
    });
}

export const refrashPage = () => {
    socket.emit('refreshPage');
}

export const changePop = (val) => {
    socket.emit('changePop', val);
}



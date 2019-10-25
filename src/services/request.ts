import axios from 'axios';

class Request {
    _fetch(url: string, method: 'POST' | 'GET', data: Object) {
        axios({
            url,
            method,
            data
        });
    }
}

export default new Request();

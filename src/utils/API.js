import axios from 'axios';

const API = {
    search: function() {
        return axios.get('https://randomuser.me/api/?results=16');
    }
};

export default API;
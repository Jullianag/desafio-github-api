import axios from 'axios';



export function findProduct(id: number) {

    return axios.get(`https://api.github.com/users/${id}`);
}
import axios from "axios";

export default function findByName(name: string) {
    return axios.get(`https://api.github.com/users/${name}`)
}
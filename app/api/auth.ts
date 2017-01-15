import * as axios from 'axios'
import store from '../store'


export function login (requester: any) {
    return axios.post('http://localhost:8000/authenticate', {
        email: requester.email,
        password: requester.password
    })
}

export function signup (requester: any) {
    return axios.post('http://localhost:8000/users/', {
        email: requester.email,
        password: requester.password
    })
}
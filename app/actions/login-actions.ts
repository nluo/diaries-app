import * as auth from '../api/auth'

export function login (requester: any) {
    return auth.login(requester).then((response: any) => {
        let session = response.data.session
        console.log('session is ', session)
    }).catch((error) => {
        console.log('the error is ', error)
    })
}

export function signup (requester: any) {
    return auth.signup(requester).then((response: any) => {
        let session = response.data.session
        console.log('sign up response is ', session)
    }).catch((error) => {
        console.log('the error is ', error)
    }) 
}
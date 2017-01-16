import * as React from 'react'
const cookie = require('react-cookie')
import * as constants from '../../constants'

export function isAuthenticated(Component: any) {
    return function (props: any) {
        // check cookies
        let authenticated = cookie.load(constants.AUTHENTICATION_COOKIE)
        if (authenticated) {
            let email: string = cookie.load(constants.COOKIE_USER_EMAIL)
            const newProps: any = {
                userEmail: email
            }
            return (<Component {...props} {...newProps} />)
        }
        return null
    }
}
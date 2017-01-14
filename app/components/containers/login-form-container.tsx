import * as React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../views/login-form'
import { login } from '../../actions/login-actions'

export class LoginFormContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            identifier: '',
            password: '',
            errors: {
                email: '',
                password: '',
                summary: ''
            },
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    isValid() {
        // const { errors, isValid } = validateInput(this.state)

        // if (!isValid) {
        //     this.setState({ errors })
        // }

        // return isValid
        return true
    }

    onSubmit (e: any) {
        e.preventDefault()
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.login(this.state).then(
                () => this.context.router.push('/'),
                (err: any) => this.setState({ errors: err.response.data.errors, isLoading: false })
            )
        }
    }

    onChange(e: any) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <LoginForm 
                errors={this.state.errors}
                onChange = {this.onChange}
                onSubmit = {this.onSubmit}
                identifier = {this.state.identifier}
                password = {this.state.password}
            />
        )
    }
}

export default connect(null, { login })(LoginFormContainer)
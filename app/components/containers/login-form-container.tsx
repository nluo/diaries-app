import * as React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../views/login-form'
import { login } from '../../actions/login-actions'
import * as _ from 'lodash'

export class LoginFormContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
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

    validateForm() {
        let isValid = true
        let errors: any = {}
        const copyState = _.assign({}, this.state)

        const email = copyState.email
        const password = copyState.password

        if (!email || email.trim() === '') {
            errors.email = 'Email cannot be blank'
            isValid = false
        } 
        if (!password || password.trim() === '') {
            errors.password = 'Password cannot be blank'
            isValid = false
        }
        // return isValid
        return { isValid, errors }
    }

    onSubmit (e: any) {
        e.preventDefault()
        let validationResult = this.validateForm()
        this.setState({errors: validationResult.errors})
        if (validationResult.isValid) {
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
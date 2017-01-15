import * as React from 'react'
import { Link } from 'react-router'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export function SignupForm (props: any) {
    return (
        <div>
            <Card className="container">
                <form action="/" onSubmit={props.onSubmit}>
                    <h2 className="card-heading">Sign Up</h2>
                    {props.errors.summary && <p className="error-message">{props.errors.summary}</p>}
                    
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Email"
                            name="email"
                            errorText={props.errors.email}
                            onChange={props.onChange}
                            value={props.email}
                            />
                    </div>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                            onChange={props.onChange}
                            errorText={props.errors.password}
                            value={props.password}
                            />
                    </div>

                    <div className="button-line">
                        <RaisedButton type="submit" label="Create New Account" primary />
                    </div>

                    <CardText>Already have an account? <Link to={'/login'}>Login</Link>.</CardText>
                </form>
            </Card>
        </div>
    )

}

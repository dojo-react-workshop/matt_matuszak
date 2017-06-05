import React, {Component} from 'react'

class Form extends Component {

    state = {
        name: '',
        nameError: false,
        email: '',
        emailError: false
    }

    handleFormDataChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateName = (event) => {
        return (this.state.name.length >= 8)
        // console.log('blur invoked')
        // if (this.state.name.length < 8) {
        //     console.log('attempt to prevent this')
        //     this.setState({nameError: true})
        // } else {
        //     this.setState({nameError: false})
        // }
    }

    validateEmail = (event) => {
        return (this.state.email.length >= 1 && this.state.email.indexOf('@bar.com') > 0)
        // if (this.state.email.indexOf('@bar.com') < 0)
        //     this.setState({emailError: true})
        // else
        //     this.setState({emailError: false})
    }

    submit = (event) => {
        event.preventDefault();

        let validationError = false;
        if (!this.validateName()) {
            this.setState({nameError: true})
            validationError = true;
        } else {
            this.setState({nameError: false})
        }
        if (!this.validateEmail()) {
            this.setState({emailError: true})
            validationError = true;
        } else {
            this.setState({emailError: false})
        }

        if (!validationError)
            this.setState({formSubmissionComplete: true})

    }

    render() {

        const nameError = (this.state.nameError)
            ? <p style={{
                    display: 'inline'
                }}>Name Must be 8 Characters</p>
            : '';
        const emailError = (this.state.emailError)
            ? <p style={{
                    display: 'inline'
                }}>Email must be @bar.com</p>
            : '';
        const content = (
            <div>
                <h1>This is my form</h1>
                <form onSubmit={this.submit}>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleFormDataChange}></input>
                    <span>{nameError}</span>
                    <br/>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="foo@bar.com" value={this.state.email} onChange={this.handleFormDataChange}></input>
                    <span>{emailError}</span>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )

        return ({content})
    }
}

export default Form

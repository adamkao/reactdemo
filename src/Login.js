import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: 0,
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		fetch('http://ideogram.com/nimmt/api.php?action=login&user=' + this.state.value)
			.then( response => response.json() )
			.then( responseData => {
				this.setState({uid: responseData[0]});
			});
		event.preventDefault();
	}

	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Login: <input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
				</form>
				uid: {this.state.uid}
			</div>
		);
	}
}

export default Login;